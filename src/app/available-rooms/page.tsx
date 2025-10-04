'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, ChevronDown, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { availableRoomsData, days, timeSlots } from '@/app/lib/available-rooms-loader';
import { type RoomAvailability } from '@/app/lib/available-rooms-data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AvailableRoomsPage() {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedRoom, setSelectedRoom] = useState<string>('כל החדרים');

  const roomsForSelectedDay = useMemo(() => {
    return availableRoomsData[selectedDay] || [];
  }, [selectedDay]);

  // Get all unique room names across all days
  const allRoomNames = useMemo(() => {
    const roomNames = new Set<string>();
    Object.values(availableRoomsData).forEach(dayRooms => {
      dayRooms.forEach(room => roomNames.add(room.roomName));
    });
    return Array.from(roomNames).sort();
  }, []);

  const filteredRooms = useMemo(() => {
    let filtered = roomsForSelectedDay;
    
    // Filter by selected room
    if (selectedRoom !== 'כל החדרים') {
      filtered = filtered.filter(room => room.roomName === selectedRoom);
    }
    
    return filtered;
  }, [roomsForSelectedDay, selectedRoom]);

  // Find available rooms (rooms with empty slots)
  const availableRooms = useMemo(() => {
    return filteredRooms.filter(room => 
      room.schedule.some(slot => slot === null)
    );
  }, [filteredRooms]);
  
  const gridTemplateColumns = `75px repeat(${timeSlots.length}, 70px)`;
  const minWidth = 75 + timeSlots.length * 70;

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
            <h1 className="text-xl font-bold tracking-tight">רשימת חדרים פנויים לפי יום</h1>
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
                          setSelectedRoom('כל החדרים');
                      }}>
                        יום {day}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full sm:w-[200px] justify-between">
                      <span>{selectedRoom}</span>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full sm:w-[200px]">
                    <DropdownMenuItem onSelect={() => setSelectedRoom('כל החדרים')}>
                      כל החדרים
                    </DropdownMenuItem>
                    {allRoomNames.map(roomName => (
                      <DropdownMenuItem key={roomName} onSelect={() => {
                          setSelectedRoom(roomName);
                      }}>
                        {roomName}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                
              </div>
              
              {selectedRoom !== 'כל החדרים' && (
                <p className="text-sm text-muted-foreground mb-4">
                  נמצאו {filteredRooms.length} חדרים מתוך {roomsForSelectedDay.length} (סוננו לפי: {selectedRoom})
                </p>
              )}

              <div className="border rounded-lg h-[60vh] overflow-auto relative">
                  <div 
                      className="grid sticky top-0 z-20 bg-background shadow-sm" 
                      style={{ gridTemplateColumns, minWidth: `${minWidth}px`}}
                  >
                      <div className="sticky right-0 bg-background text-right font-bold border-l border-b p-5 z-30 flex items-center text-xs">שם החדר</div>
                      {timeSlots.map((slot, index) => (
                        <div key={`${slot.start}-${slot.end}`} className="text-center bg-background border-l border-b p-5" style={{ gridColumn: index + 2 }}>
                          <div className="flex flex-col items-center">
                            <span className="text-sm">שיעור {index + 1}</span>
                            <span className="text-[10px] text-muted-foreground whitespace-normal">{slot.start}-{slot.end}</span>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="grid" style={{ gridTemplateColumns, minWidth: `${minWidth}px`}}>
                      {filteredRooms.length === 0 ? (
                          <div className="text-center py-8 text-muted-foreground" style={{ gridColumn: `1 / span ${timeSlots.length + 1}` }}>
                              {searchQuery ? `לא נמצאו חדרים עם השם "${searchQuery}"` : `אין חדרים ביום ${selectedDay}`}
                          </div>
                      ) : (
                          filteredRooms.map((room: RoomAvailability) => (
                              <React.Fragment key={room.roomName}>
                                <div className="sticky right-0 bg-background border-b border-l p-5 font-medium z-10 whitespace-normal break-words flex items-center text-xs">
                                  {room.roomName}
                                </div>
                                {room.schedule.map((lesson, index) => (
                                  <div key={index} className={`align-top border-l border-b ${lesson ? 'bg-primary/10' : 'bg-green-50'}`} style={{ gridColumn: index + 2 }}>
                                      {lesson ? (
                                      <div className="p-5 text-xs h-full">
                                          <div className="font-semibold text-primary">{lesson.subject}</div>
                                          <div className="text-muted-foreground">{lesson.class}</div>
                                          {lesson.teacher && (
                                            <div className="text-[10px] text-muted-foreground">{lesson.teacher}</div>
                                          )}
                                      </div>
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center p-5">
                                        <span className="text-green-600 text-[10px] font-medium">פנוי</span>
                                      </div>
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
