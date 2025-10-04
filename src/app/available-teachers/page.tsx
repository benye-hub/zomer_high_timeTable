
'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, Search as SearchIcon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { availableTeachersData, days, timeSlots } from '@/app/lib/available-teachers-loader';
import { type TeacherAvailability } from '@/app/lib/available-teachers-data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AvailableTeachersPage() {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const teachersForSelectedDay = useMemo(() => {
    return availableTeachersData[selectedDay] || [];
  }, [selectedDay]);

  const filteredTeachers = useMemo(() => {
    if (!searchQuery.trim()) {
      return teachersForSelectedDay;
    }
    
    return teachersForSelectedDay.filter(teacher =>
      teacher.teacherName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [teachersForSelectedDay, searchQuery]);
  
  const gridTemplateColumns = `50px repeat(${timeSlots.length}, 70px)`;
  const minWidth = 50 + timeSlots.length * 70;


  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" dir="rtl">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <Link href="/" passHref>
              <Button variant="ghost" size="icon" className="hover:bg-primary/80">
                <HomeIcon className="h-6 w-6" />
              </Button>
            </Link>
            <h1 className="text-xl font-bold tracking-tight">רשימת מורים פנויים לפי יום</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="pr-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-[180px] justify-between">
                      <span>יום {selectedDay}</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full sm:w-[180px]">
                    {days.map(day => (
                      <DropdownMenuItem key={day} onSelect={() => {
                          setSelectedDay(day);
                          setSearchQuery('');
                      }}>
                        יום {day}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="relative flex-grow">
                  <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="חיפוש לפי שם מורה..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pr-10 text-right"
                  />
                </div>
              </div>
              
              {searchQuery && (
                <p className="text-sm text-muted-foreground mb-4">
                  נמצאו {filteredTeachers.length} מורים מתוך {teachersForSelectedDay.length}
                </p>
              )}
              
              <div className="border rounded-lg h-[60vh] overflow-auto relative">
                  <div 
                      className="grid sticky top-0 z-20 bg-background shadow-sm" 
                      style={{ gridTemplateColumns, minWidth: `${minWidth}px`}}
                  >
                      <div className="sticky right-0 bg-background text-right font-bold border-l border-b p-2 z-30 flex items-center text-xs">שם המורה</div>
                      {timeSlots.map((slot, index) => (
                        <div key={`${slot.start}-${slot.end}`} className="text-center bg-background border-l border-b p-2" style={{ gridColumn: index + 2 }}>
                          <div className="flex flex-col items-center">
                            <span className="text-sm">שיעור {index + 1}</span>
                            <span className="text-[10px] text-muted-foreground whitespace-normal">{slot.start}-{slot.end}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="grid" style={{ gridTemplateColumns, minWidth: `${minWidth}px`}}>
                      {filteredTeachers.length === 0 ? (
                          <div className="text-center py-8 text-muted-foreground" style={{ gridColumn: `1 / span ${timeSlots.length + 1}` }}>
                              {searchQuery ? `לא נמצאו מורים עם השם "${searchQuery}"` : `אין מורים פנויים ביום ${selectedDay}`}
                          </div>
                      ) : (
                          filteredTeachers.map((teacher: TeacherAvailability) => (
                              <React.Fragment key={teacher.teacherName}>
                                <div className="sticky right-0 bg-background border-b border-l p-2 font-medium z-10 whitespace-normal break-words flex items-center text-xs">{teacher.teacherName}</div>
                                {teacher.schedule.map((lesson, index) => (
                                  <div key={index} className="p-1 align-top h-16 border-l border-b" style={{ gridColumn: index + 2 }}>
                                      {lesson ? (
                                      <div className="bg-primary/10 p-2 rounded-md text-xs h-full">
                                          <div className="font-semibold text-primary">{lesson.subject}</div>
                                          <div className="text-muted-foreground">{lesson.class}</div>
                                      </div>
                                    ) : (
                                      <div className="w-full h-full"></div>
                                    )}
                                  </div>
                                ))}
                              </React.Fragment>
                          ))
                      )}
                  </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
