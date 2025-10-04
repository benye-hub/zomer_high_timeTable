
import { TeacherAvailability, DailySchedule } from './available-teachers-data';

// Import your JSON files
import sundayData from './available-teachers/sunday.json';
import mondayData from './available-teachers/monday.json';
import tuesdayData from './available-teachers/tuesday.json';
import wednesdayData from './available-teachers/wednesday.json';
import thursdayData from './available-teachers/thursday.json';
import fridayData from './available-teachers/friday.json';

const dayMapping = {
  'ראשון': sundayData,
  'שני': mondayData,
  'שלישי': tuesdayData,
  'רביעי': wednesdayData,
  'חמישי': thursdayData,
  'שישי': fridayData,
};

const parseSchedule = (data: any[]): TeacherAvailability[] => {
  if (!data) return [];
  const teachers: { [key: string]: TeacherAvailability } = {};
  
  data.forEach(row => {
    if (!row || typeof row !== 'object') return;

    // Find the teacher name key (it will be different for each day)
    const teacherKey = Object.keys(row).find(key => 
      key.includes('מורים פנוים') && row[key] !== 'מורה'
    );
    
    if (!teacherKey) return;
    
    const teacherName = row[teacherKey].trim();
    if (teacherName === 'מורה') return;
    
    if (!teachers[teacherName]) {
      teachers[teacherName] = {
        teacherName,
        schedule: Array(8).fill(null), // 8 time slots (Column2-Column9)
      };
    }

    // Parse the schedule (Column2 to Column9)
    for (let i = 2; i <= 9; i++) {
      const lessonKey = `Column${i}`;
      if (row[lessonKey]) {
        const value = row[lessonKey];
        if (typeof value === 'string') {
          const parts = value.split(',').map((s: string) => s.trim());
          const subject = parts[0] || '';
          const className = parts.slice(1).join(', ').trim();
          teachers[teacherName].schedule[i - 2] = { subject, class: className };
        }
      }
    }
  });

  const sortedTeachers = Object.values(teachers).sort((a, b) => {
    const lastNameA = a.teacherName.split(' ')[0];
    const lastNameB = b.teacherName.split(' ')[0];
    return lastNameA.localeCompare(lastNameB, 'he');
  });

  return sortedTeachers;
};

export const availableTeachersData: DailySchedule = Object.keys(dayMapping).reduce((acc: DailySchedule, day: string) => {
  acc[day] = parseSchedule(dayMapping[day as keyof typeof dayMapping]);
  return acc;
}, {});

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

    