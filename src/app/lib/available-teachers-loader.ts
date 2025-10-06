
import { TeacherAvailability, DailySchedule } from './available-teachers-data';

// Import your JSON files
import sundayData from './available-teachers/sunday.json';
import mondayData from './available-teachers/monday.json';
import tuesdayData from './available-teachers/tuesday.json';
import wednesdayData from './available-teachers/wednesday.json';
import thursdayData from './available-teachers/thursday.json';

const dayMapping = {
  'ראשון': sundayData,
  'שני': mondayData,
  'שלישי': tuesdayData,
  'רביעי': wednesdayData,
  'חמישי': thursdayData,
};

const parseSchedule = (data: any[]): TeacherAvailability[] => {
  if (!data) return [];
  const teachers: { [key: string]: TeacherAvailability } = {};
  
  data.forEach(row => {
    if (!row || typeof row !== 'object') return;

    // Find the teacher name key (it will be different for each day)
    const teacherKey = Object.keys(row).find(key => 
      (key.includes('מורים פנויים') || key.includes('מורים פנוים')) && row[key] !== 'מורה'
    );
    
    if (!teacherKey) return;
    
    const teacherName = row[teacherKey].trim();
    if (teacherName === 'מורה') return;
    
    if (!teachers[teacherName]) {
      teachers[teacherName] = {
        teacherName,
        schedule: Array(10).fill(null), // 10 time slots (Column2-Column11)
      };
    }

    // Parse the schedule (Column2 to Column11)
    for (let i = 2; i <= 11; i++) {
      const lessonKey = `Column${i}`;
      if (row[lessonKey]) {
        const value = row[lessonKey];
        if (typeof value === 'string') {
          const trimmedValue = value.trim();
          if (trimmedValue && trimmedValue !== '---' && trimmedValue !== ' ---') {
            // If the value contains a comma, split it as "subject, class"
            if (trimmedValue.includes(',')) {
              const parts = trimmedValue.split(',').map((s: string) => s.trim());
              const subject = parts[0] || '';
              const className = parts.slice(1).join(', ').trim();
              teachers[teacherName].schedule[i - 2] = { subject, class: className };
            } else {
              // If it's just a class name, treat it as the class
              teachers[teacherName].schedule[i - 2] = { subject: 'שיעור', class: trimmedValue };
            }
          }
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

export const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי'];
export const timeSlots = [
  { start: '1', end: '1' },
  { start: '2', end: '2' },
  { start: '3', end: '3' },
  { start: '4', end: '4' },
  { start: '5', end: '5' },
  { start: '6', end: '6' },
  { start: '7', end: '7' },
  { start: '8', end: '8' },
  { start: '9', end: '9' },
  { start: '10', end: '10' },
];

    