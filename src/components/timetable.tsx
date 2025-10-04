
"use client";

import { FC, useState } from 'react';
import { User, MapPin, MoreHorizontal } from 'lucide-react';
import { days, ClassInfo, displayTimeSlots } from '@/app/lib/timetable-data';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TimetableProps {
  classes: ClassInfo[];
}

type GridCell = {
  classInfo: ClassInfo | null;
  isPlaceholder: boolean;
};

const ClassCell = ({ classInfo }: { classInfo: ClassInfo }) => {
  const [open, setOpen] = useState(false);
  
  const hasTeacher = !!classInfo.teacher;
  const hasLocation = !!classInfo.location;

  const CardContentCell = () => (
    <div className="h-full w-full bg-accent/30 hover:bg-accent/60 transition-colors duration-200 shadow-sm p-2 flex flex-col relative overflow-hidden min-w-0">
      <div className="h-full w-full overflow-hidden">
          <h3 className="font-bold text-xs text-primary">{classInfo.subject}</h3>
          <div className="text-xs text-muted-foreground mt-1.5 space-y-1">
            {hasTeacher && (
              <div className="flex items-center gap-1.5">
                <User className="h-3 w-3 flex-shrink-0" />
                <span>{classInfo.teacher}</span>
              </div>
            )}
            {hasLocation && (
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3 flex-shrink-0" />
                <span>{classInfo.location}</span>
              </div>
            )}
          </div>
      </div>
      <div className="absolute bottom-1 right-1 text-primary">
        <MoreHorizontal className="h-4 w-4" />
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="p-1 animate-in fade-in-0 zoom-in-95 duration-300 border-b border-l cursor-pointer min-w-0 h-28"
        >
          <Card className="h-full w-full">
            <CardContentCell />
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" dir="rtl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{classInfo.subject}</DialogTitle>
          <DialogDescription>
            {classInfo.day}, {classInfo.startTime} - {classInfo.endTime}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {classInfo.teacher && (
            <div className="flex items-start gap-4">
              <User className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">מורה</h4>
                <p className="text-muted-foreground">{classInfo.teacher}</p>
              </div>
            </div>
          )}
           {classInfo.class && (
            <div className="flex items-start gap-4">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary mt-1"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              <div>
                <h4 className="font-semibold">כיתה</h4>
                <p className="text-muted-foreground">{classInfo.class}</p>
              </div>
            </div>
          )}
          {classInfo.location && (
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h4 className="font-semibold">מיקום</h4>
                <p className="text-muted-foreground">{classInfo.location}</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};


const Timetable: FC<TimetableProps> = ({ classes }) => {

  const grid: GridCell[][] = displayTimeSlots.map(() =>
    days.map(() => ({ classInfo: null, isPlaceholder: true }))
  );
  
  const processedEntries = new Set<string>();

  const isKnownDay = (d: ClassInfo['day']): d is typeof days[number] => {
    return (days as readonly string[]).includes(d as unknown as string);
  };

  classes.forEach(classItem => {
    if (!isKnownDay(classItem.day)) {
      return;
    }
    const dayIndex = days.indexOf(classItem.day);
    const startTimeIndex = displayTimeSlots.findIndex(slot => slot.start === classItem.startTime);

    if (dayIndex === -1 || startTimeIndex === -1) {
      return;
    }
    
    const classKey = `${classItem.id}-${classItem.day}-${classItem.startTime}`;
    if (processedEntries.has(classKey)) {
        return;
    }
      
    if (grid[startTimeIndex][dayIndex].isPlaceholder) {
      grid[startTimeIndex][dayIndex] = {
        classInfo: classItem,
        isPlaceholder: false,
      };
      processedEntries.add(classKey);
    }
  });

  return (
    <div className="overflow-auto relative h-full">
      <div className="grid min-w-[700px] md:w-full" style={{direction: 'rtl', gridTemplateColumns: '60px repeat(6, 1fr)'}}>
        <div className="sticky top-0 z-30 p-2 border-b border-l bg-card font-semibold text-muted-foreground text-center right-0">שעה</div>
        {days.map(day => (
          <div key={day} className="sticky top-0 z-20 p-1 sm:p-3 border-b text-center font-bold bg-primary/90 text-primary-foreground min-w-0" style={{wordBreak: 'keep-all'}}>
             <span>{day}</span>
          </div>
        ))}
        
        {displayTimeSlots.map((time, timeIndex) => (
          <div key={time.start} className="contents">
            <div className="sticky right-0 z-20 p-1 border-b border-l bg-card h-28 flex items-center justify-center text-[10px] font-mono text-muted-foreground">{`${time.start}-${time.end}`}</div>

            {days.map((day, dayIndex) => {
              const cellData = grid[timeIndex]?.[dayIndex];
              
              if (cellData?.classInfo) {
                return (
                  <ClassCell key={`${cellData.classInfo.id}`} classInfo={cellData.classInfo} />
                );
              }
              
              return <div key={`${day}-${time.start}`} className="border-l border-b h-28"></div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
