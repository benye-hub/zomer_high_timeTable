// עדכון אחרון 01/10/2025 תשפו
export type ClassInfo = {
  id: number;
  class: 'ט1' | 'ט2' | 'י1' | 'י2' | 'יא1' | 'יא2' | 'יב1' | 'יב2';
  subject: string;
  teacher: string;
  location: string;
  day: 'ראשון' | 'שני' | 'שלישי' | 'רביעי' | 'חמישי' | 'שישי';
  startTime: string; // "HH:MM"
  endTime: string;   // "HH:MM"
};

const rawData = {
"מערכת כיתות":[
 {
  "מערכת שעות לכיתה ט1": "שעה",
  "Column2": "יום א",
  "Column3": "יום ב",
  "Column4": "יום ג",
  "Column5": "יום ד",
  "Column6": "יום ה",
  "Column7": "יום ו"
 },
 {
  "מערכת שעות לכיתה א1": "שעור 1 08:00 08:55",
  "Column2": "ראשי\nמיכל דרכר אורן,תומכ.ת הוראה א'\nעדן שטיינברג",
  "Column3": "מחנך מחליף\nתום תבור,תומכ.ת הוראה א'\nעדן שטיינברג",
  "Column4": "ראשי\nמיכל דרכר אורן,תומכ.ת הוראה א'\nעדן שטיינברג",
  "Column5": "ראשי\nמיכל דרכר אורן,תומכ.ת הוראה א'\nעדן שטיינברג",
  "Column6": "ראשי\nמיכל דרכר אורן,תומכ.ת הוראה א'\nעדן שטיינברג",
  "Column7": "טיול שישי\nמיכל דרכר אורן"
 },
// ... (rest of the original data would be here, but truncated for brevity)
]};

const dayMapping: { [key: string]: string } = {
  "Column2": "ראשון",
  "Column3": "שני",
  "Column4": "שלישי",
  "Column5": "רביעי",
  "Column6": "חמישי",
  "Column7": "שישי",
};

const displayTimeSlots = [
  { start: '08:00', end: '08:55' },
  { start: '08:55', end: '09:45' },
  { start: '10:15', end: '11:00' },
  { start: '11:05', end: '11:50' },
  { start: '12:05', end: '12:50' },
  { start: '13:15', end: '14:00' },
  { start: '14:00', end: '14:45' },
  { start: '14:45', end: '15:30' },
  { start: '15:30', end: '16:15' },
];

const parseTeachersAndLocation = (text: string): { teachers: string[], location: string, subject: string } => {
    if (!text) return { teachers: [], location: '', subject: '' };

    let subject = '';
    let location = '';
    const locationRegex = /\(([^)]+)\)/;
    const textWithoutLocation = text.replace(locationRegex, '').trim();
    const parts = textWithoutLocation.split(/[\n,]/).map(p => p.trim()).filter(Boolean);

    const subjectKeywords = ['סיוע','מוסיקה','תנועה','עץ','מלאכה','אנגלית','ערבית','חינוך','ראשי','מחנך','חונכות','שעת','טיול','צבעי','עמלנות','תרגול','קבלת','התבגרות','דרמה','אמנות','מתמטיקה','ימייה','שפה','ביוגרפיה','חינוך גופני', 'מחנך מחליף', 'מחנך נוסף', 'כלבנות', 'חווה חקלאית'];
    const roleKeywords = ['תומכ.ת הוראה', 'סיוע מלאכה', 'סיוע עץ'];
    
    if (text.includes('בית ספר מנגן')) {
        subject = 'בית ספר מנגן';
    } else {
        const subjectPart = parts.find(p => subjectKeywords.some(kw => p.startsWith(kw)));
        if (subjectPart) {
            subject = subjectPart;
        }
    }
    
    if (!subject && parts.length > 0) {
      const mainPart = parts[0] || '';
      const isLikelySubject = subjectKeywords.some(kw => mainPart.startsWith(kw));
       if (isLikelySubject) {
          subject = mainPart;
       }
    }

    const locationMatch = text.match(locationRegex);
    if (locationMatch) {
        location = locationMatch[1];
    }
    
    const teachers = parts.filter(p => 
        p !== subject && 
        !subjectKeywords.some(kw => p.startsWith(kw)) &&
        !roleKeywords.some(kw => p.startsWith(kw))
    );
    
    // Cleanup subject from potential teacher names if they got mixed
    let finalSubject = subject;
    teachers.forEach(t => {
      finalSubject = finalSubject.replace(t, '').trim();
    });

    if (finalSubject === '' && subject !== '') {
        finalSubject = subject;
    }

    return { teachers: Array.from(new Set(teachers)), location, subject: finalSubject || 'לא צוין' };
};

const processedData: ClassInfo[] = [];
let currentClass: any = 'א1';
let idCounter = 1;
const classRegex = /מערכת שעות לכיתה (.*)/;

(rawData["מערכת כיתות"] as any[]).forEach(row => {
    if (!row) return;

    const firstKey = "מערכת שעות לכיתה א1";
    const firstValue = row[firstKey];

    if (firstValue && classRegex.test(firstValue)) {
        const match = firstValue.match(classRegex);
        if (match && match[1]) {
            let classNameRaw = match[1].trim();
            if (classNameRaw.includes('א1')) currentClass = 'א1';
            else if (classNameRaw.includes('א2')) currentClass = 'א2';
            else if (classNameRaw.includes('ב1')) currentClass = 'ב1 אופק';
            else if (classNameRaw.includes('ב2')) currentClass = 'ב2 מפרש';
            else if (classNameRaw.includes('ג1')) currentClass = 'ג1 אלומה';
            else if (classNameRaw.includes('ג2')) currentClass = 'ג2 שיזף';
            else if (classNameRaw.includes('ד1')) currentClass = 'ד1 תלמא';
            else if (classNameRaw.includes('ד2')) currentClass = 'ד2 ערבי נחל';
            else if (classNameRaw.includes('ה1')) currentClass = 'ה1 דרור';
            else if (classNameRaw.includes('ה2')) currentClass = 'ה2 שחף';
            else if (classNameRaw.includes('ו1')) currentClass = 'ו1 חושן';
            else if (classNameRaw.includes('ו2')) currentClass = 'ו2 מעיין';
            else if (classNameRaw.includes('ז1')) currentClass = 'ז1 קמה';
            else if (classNameRaw.includes('ז2')) currentClass = 'ז2 יערה';
            else if (classNameRaw.includes('ח1')) currentClass = 'ח1 תלתן';
            else if (classNameRaw.includes('ח2')) currentClass = 'ח2 נועם';
        }
        return; 
    }
    
    if (firstValue && firstValue.includes('שעור')) {
        const timeMatch = firstValue.match(/(\d{2}:\d{2})\s(\d{2}:\d{2})/);
        if (timeMatch) {
            const [, startTime, endTime] = timeMatch;

            Object.entries(row).forEach(([key, value]) => {
                if (key.startsWith('Column') && value && dayMapping[key] && currentClass) {
                    const day = dayMapping[key];
                    const entry = value as string;
                      
                      if (!entry || entry.trim() === '') return;
                      
                      const entries = entry.split('\n\n');

                      entries.forEach(singleEntry => {
                        const { teachers, location, subject } = parseTeachersAndLocation(singleEntry.trim());
                        
                        let finalSubject = subject;
                        let finalClass = currentClass;

                        // Try to extract class from subject string
                        const subjectParts = subject.split(',');
                        if (subjectParts.length > 1) {
                           const potentialClass = subjectParts[subjectParts.length - 1].trim();
                           const hebrewGrades = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'];
                           if (hebrewGrades.some(g => potentialClass.startsWith(g))) {
                             finalClass = potentialClass as any;
                             finalSubject = subjectParts.slice(0, -1).join(', ').trim();
                           }
                        }
                        
                        if(finalSubject && finalSubject !== 'לא צוין') {
                          const classInfo = {
                              id: idCounter++,
                              class: finalClass as any,
                              subject: finalSubject,
                              teacher: teachers.join(', '),
                              location: location,
                              day: day as any,
                              startTime,
                              endTime
                          };
                          
                          if (subject.includes('טיול שישי')) {
                              const startIndex = displayTimeSlots.findIndex(slot => slot.start === '08:00');
                              const endIndex = displayTimeSlots.findIndex(slot => slot.end === '11:50');
                              if(startIndex !== -1 && endIndex !== -1) {
                                  for(let i = startIndex; i <= endIndex; i++) {
                                      processedData.push({
                                          ...classInfo,
                                          id: idCounter++,
                                          startTime: displayTimeSlots[i].start,
                                          endTime: displayTimeSlots[i].end,
                                      });
                                  }
                                  return;
                              }
                          }

                          processedData.push(classInfo);
                        }
                      })
                }
            });
        }
    }
});


export const timetableData: ClassInfo[] = processedData;

export const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'] as const;

export const timeSlots = [
  '08:00', '08:55', '10:15', '11:05', '12:05', '13:15', '14:00', '14:45'
];

export { displayTimeSlots };
