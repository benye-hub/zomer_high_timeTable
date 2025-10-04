import { RoomAvailability, DailyRoomSchedule } from './available-rooms-data';

// Import your JSON files for room schedules
import roomsData from './available-rooms/rooms.json';

const parseRoomsData = (data: any[]): DailyRoomSchedule => {
  const result: DailyRoomSchedule = {
    'ראשון': [],
    'שני': [],
    'שלישי': [],
    'רביעי': [],
    'חמישי': [],
    'שישי': []
  };

  let currentRoom = '';
  let currentRoomData: any = {};

  data.forEach((row, index) => {
    // Skip null or undefined rows
    if (!row) return;
    
    // Check if this is a room header
    if (row['מערכת שעות לחדר חדר אומנות'] && 
        typeof row['מערכת שעות לחדר חדר אומנות'] === 'string' && 
        row['מערכת שעות לחדר חדר אומנות'].includes('מערכת שעות לחדר')) {
      
      // Save previous room if exists
      if (currentRoom && Object.keys(currentRoomData).length > 0) {
        const roomAvailability = parseRoomSchedule(currentRoom, currentRoomData);
        Object.keys(roomAvailability).forEach(day => {
          result[day as keyof DailyRoomSchedule].push(...roomAvailability[day as keyof DailyRoomSchedule]);
        });
      }
      
      // Start new room
      currentRoom = row['מערכת שעות לחדר חדר אומנות'].replace('מערכת שעות לחדר ', '');
      currentRoomData = {};
    }
    // Check if this is a time slot row
    else if (row['מערכת שעות לחדר חדר אומנות'] && 
             typeof row['מערכת שעות לחדר חדר אומנות'] === 'number') {
      const timeSlot = row['מערכת שעות לחדר חדר אומנות'];
      currentRoomData[timeSlot] = row;
    }
  });

  // Save last room
  if (currentRoom && Object.keys(currentRoomData).length > 0) {
    const roomAvailability = parseRoomSchedule(currentRoom, currentRoomData);
    Object.keys(roomAvailability).forEach(day => {
      result[day as keyof DailyRoomSchedule].push(...roomAvailability[day as keyof DailyRoomSchedule]);
    });
  }

  return result;
};

const parseRoomSchedule = (roomName: string, timeSlotData: any): DailyRoomSchedule => {
  const result: DailyRoomSchedule = {
    'ראשון': [],
    'שני': [],
    'שלישי': [],
    'רביעי': [],
    'חמישי': [],
    'שישי': []
  };

  // Initialize room for each day
  const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
  days.forEach(day => {
    result[day as keyof DailyRoomSchedule].push({
      roomName,
      schedule: Array(8).fill(null)
    });
  });

  // Parse each time slot
  Object.keys(timeSlotData).forEach(timeSlot => {
    const slotNumber = parseInt(timeSlot) - 1; // Convert to 0-based index
    if (slotNumber >= 0 && slotNumber < 8) {
      const dayData = timeSlotData[timeSlot];
      
      // Check each day column
      ['Column2', 'Column3', 'Column4', 'Column5', 'Column6', 'Column7'].forEach((column, dayIndex) => {
        if (dayData[column]) {
          const lessonInfo = parseLessonInfo(dayData[column]);
          if (lessonInfo) {
            const dayName = getDayName(dayIndex);
            result[dayName][0].schedule[slotNumber] = lessonInfo;
          }
        }
      });
    }
  });

  return result;
};

const parseLessonInfo = (lessonText: string): { subject: string; class: string; teacher?: string } | null => {
  if (!lessonText || lessonText.trim() === '') return null;
  
  const lines = lessonText.split('\n').map(line => line.trim()).filter(line => line);
  if (lines.length === 0) return null;
  
  const subject = lines[0];
  const teacher = lines[1] || '';
  const className = lines[2] || '';
  
  return { subject, class: className, teacher };
};

const getDayName = (dayIndex: number): string => {
  const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
  return days[dayIndex] || 'ראשון';
};


export const availableRoomsData: DailyRoomSchedule = parseRoomsData(roomsData);

export const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
export const timeSlots = [
  { start: '08:00', end: '08:55' },
  { start: '08:55', end: '09:45' },
  { start: '10:15', end: '11:00' },
  { start: '11:05', end: '11:50' },
  { start: '12:05', end: '12:50' },
  { start: '13:15', end: '14:00' },
  { start: '14:00', end: '14:45' },
  { start: '14:45', end: '15:30' },
];
