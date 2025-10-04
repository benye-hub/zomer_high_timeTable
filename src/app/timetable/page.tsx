
"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Filter, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Home as HomeIcon } from 'lucide-react';

import { timetableData } from '@/app/lib/timetable-data';
import Timetable from '@/components/timetable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

export default function TimetablePage() {
  const [selectedClass, setSelectedClass] = useState<string>('א1');

  const classes = useMemo(() => {
    const allClasses = timetableData.map(item => item.class);
    const uniqueClasses = Array.from(new Set(allClasses));
    return uniqueClasses.sort((a, b) => {
      const gradeA = a.split(' ')[0];
      const gradeB = b.split(' ')[0];
      const hebrewGrades: { [key: string]: number } = {
        'א': 1, 'ב': 2, 'ג': 3, 'ד': 4, 'ה': 5, 'ו': 6, 'ז': 7, 'ח': 8
      };
      const numA = hebrewGrades[gradeA.charAt(0)];
      const numB = hebrewGrades[gradeB.charAt(0)];

      if(numA !== numB) return numA - numB;
      return a.localeCompare(b);
    });
  }, []);

  const filteredData = useMemo(() => {
    if (selectedClass === 'הכל') {
      return timetableData;
    }
    return timetableData.filter(item => item.class === selectedClass);
  }, [selectedClass]);

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
            <h1 className="text-2xl font-bold tracking-tight">מערכת שעות זומר תשפ"ו</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8 flex-grow">
        <Card className="overflow-hidden shadow-lg h-full flex flex-col">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-3 bg-card border-b">
            <div>
              <CardTitle className="text-xl font-semibold">מערכת שעות</CardTitle>
              {selectedClass && selectedClass !== 'הכל' && (
                <p className="text-lg text-muted-foreground mt-1">כיתה: {selectedClass}</p>
              )}
            </div>
            <div className="flex items-center space-x-2" dir="rtl">
               <Filter className="h-5 w-5 text-muted-foreground ml-2" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-[180px] md:w-[240px] justify-between">
                      <span>{selectedClass === 'הכל' ? 'סנן לפי כיתה...' : selectedClass}</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[180px] md:w-[240px] max-h-60 overflow-y-auto">
                    {classes.map(item => (
                      <DropdownMenuItem key={item} onSelect={() => setSelectedClass(item)}>
                        {item}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-0 flex-grow">
             <Timetable classes={filteredData} />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
