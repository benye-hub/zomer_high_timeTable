export interface RoomAvailability {
  roomName: string;
  schedule: (LessonInfo | null)[];
}

export interface LessonInfo {
  subject: string;
  class: string;
  teacher?: string;
}

export interface DailyRoomSchedule {
  [day: string]: RoomAvailability[];
}

export interface RoomFilter {
  day: string;
  timeSlot: number;
  searchQuery: string;
}
