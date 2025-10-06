
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
        "מערכת שעות לכיתה ט1": 1,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​מתמטיקה\nשיר, שלו, לביד, שריג",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר"
       },
       {
        "מערכת שעות לכיתה ט1": 2,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​מתמטיקה\nשלו, לביד, שיר, שריג",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר"
       },
       {
        "מערכת שעות לכיתה ט1": 3,
        "Column2": "​לשון\nשחר",
        "Column3": "​ספרות\nמנור",
        "Column4": "​ספורט\nרובין, גינדי",
        "Column5": "​אנגלית\nהפטל, רידי, חן",
        "Column6": "​חינוך\nקסובק, שלו"
       },
       {
        "מערכת שעות לכיתה ט1": 4,
        "Column2": "​מוזיקה\nשחר, שלו, קסובק",
        "Column3": "​הסטוריה\nפיגנבלט",
        "Column4": "​ספורט\nגינדי, רובין",
        "Column5": "​אנגלית\nרידי, הפטל, חן",
        "Column6": "​הסטוריה\nפיגנבלט"
       },
       {
        "מערכת שעות לכיתה ט1": 5,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​חינוך\nקסובק, שלו",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה ט1": 6,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​ספרות\nמנור",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה ט1": 7,
        "Column2": "​חינוך מיני\nזמיר, קסובק",
        "Column3": "​מתמטיקה\nשלו, שריג, לביד",
        "Column4": "​לשון\nשחר",
        "Column5": "​מוזיקה\nשחר",
        "Column6": "​אנגלית\nרידי, חן, הפטל"
       },
       {
        "מערכת שעות לכיתה ט1": 8,
        "Column2": "​חינוך מיני\nקסובק, זמיר",
        "Column3": "​מתמטיקה\nשריג, שלו, לביד",
        "Column4": "​מתמטיקה\nשריג, שלו",
        "Column6": "​אנגלית\nחן, הפטל, רידי"
       },
       null,
       null,
       {
        "מערכת שעות לכיתה ט2": "מערכת שעות לכיתה ט2"
       },
       {
        "מערכת שעות לכיתה ט2": "שעה",
        "Column2": "יום א",
        "Column3": "יום ב",
        "Column4": "יום ג",
        "Column5": "יום ד",
        "Column6": "יום ה",
        "Column7": "יום ו"
       },
       {
        "מערכת שעות לכיתה ט2": 1,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​מתמטיקה\nשיר, שלו, לביד, שריג",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר"
       },
       {
        "מערכת שעות לכיתה ט2": 2,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​מתמטיקה\nשלו, לביד, שיר, שריג",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר"
       },
       {
        "מערכת שעות לכיתה ט2": 3,
        "Column2": "​הסטוריה\nפיגנבלט",
        "Column3": "​חינוך\nהורביץ, ג'ספן",
        "Column4": "​לשון\nשחר",
        "Column5": "​אנגלית\nהפטל, רידי, חן",
        "Column6": "​חינוך\nג'ספן, הורביץ"
       },
       {
        "מערכת שעות לכיתה ט2": 4,
        "Column2": "​לשון\nשחר",
        "Column3": "​מוזיקה\nג'ספן, כהן",
        "Column4": "​מוזיקה\nכהן, הורביץ",
        "Column5": "​אנגלית\nרידי, הפטל, חן",
        "Column6": "​ספרות\nמנור"
       },
       {
        "מערכת שעות לכיתה ט2": 5,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​ספורט\nגינדי, רובין",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה ט2": 6,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​ספורט\nרובין, גינדי",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה ט2": 7,
        "Column2": "​חינוך מיני\nזמיר, קסובק",
        "Column3": "​מתמטיקה\nשלו, שריג, לביד",
        "Column4": "​ספרות\nמנור",
        "Column5": "​הסטוריה\nפיגנבלט",
        "Column6": "​אנגלית\nרידי, חן, הפטל"
       },
       {
        "מערכת שעות לכיתה ט2": 8,
        "Column2": "​חינוך מיני\nקסובק, זמיר",
        "Column3": "​מתמטיקה\nשריג, שלו, לביד",
        "Column4": "​מתמטיקה\nשריג, שלו",
        "Column6": "​אנגלית\nחן, הפטל, רידי"
       },
       null,
       null,
       {
         "מערכת שעות לכיתה י1": "מערכת שעות לכיתה י1"
       },
       {
        "מערכת שעות לכיתה י1": "שעה",
        "Column2": "יום א",
        "Column3": "יום ב",
        "Column4": "יום ג",
        "Column5": "יום ד",
        "Column6": "יום ה",
        "Column7": "יום ו"
       },
       {
        "מערכת שעות לכיתה י1": 1,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​אנגלית\nרידי, חן, הפטל",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה י1": 2,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​אנגלית\nהפטל, רידי, חן",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה י1": 3,
        "Column2": "​מוזיקה\nליזוריק, לביא",
        "Column3": "​מתמטיקה\nשלו, לביד, שריג, הלבני",
        "Column4": "​מתמטיקה\nשריג, לביד, שלו, הלבני",
        "Column5": "​מוזיקה\nליזוריק, לביא",
        "Column6": "​אנגלית\nרידי, חן, הפטל",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה י1": 4,
        "Column2": "​אקטואליה\nנאור",
        "Column3": "​מתמטיקה\nשלו, הלבני, לביד, שריג",
        "Column4": "​מתמטיקה\nלביד, שריג, הלבני, שלו",
        "Column5": "​חינוך\nליזוריק",
        "Column6": "​אנגלית\nחן, הפטל, רידי",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה י1": 5,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​לשון\nליזוריק, שרייבר",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה י1": 6,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​לשון\nשרייבר, ליזוריק",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה י1": 7,
        "Column2": "​חינוך\nליזוריק",
        "Column3": "​ספורט\nשוורצברג, רובין",
        "Column4": "​חינוך מיני\nזמיר, ליזוריק",
        "Column5": "​מתמטיקה\nשריג, שלו, לביד, הלבני",
        "Column6": "​הצגה\nליזוריק, שחק"
       },
       {
        "מערכת שעות לכיתה י1": 8,
        "Column3": "​ספורט\nשוורצברג, רובין",
        "Column4": "​חינוך מיני\nליזוריק, זמיר",
        "Column5": "​מתמטיקה\nשריג, הלבני, שלו",
        "Column6": "​הצגה\nליזוריק, שחק"
       },
       {
        "מערכת שעות לכיתה י1": 9,
        "Column5": "​מתמטיקה\nשלו, הלבני, שריג"
       },
       {
        "מערכת שעות לכיתה י1": 10,
        "Column3": "​מדעי המחשב\nסבג"
       },
       null,
       null,
       {
         "מערכת שעות לכיתה י2": "מערכת שעות לכיתה י2"
       },
       {
        "מערכת שעות לכיתה י2": "שעה",
        "Column2": "יום א",
        "Column3": "יום ב",
        "Column4": "יום ג",
        "Column5": "יום ד",
        "Column6": "יום ה",
        "Column7": "יום ו"
       },
       {
        "מערכת שעות לכיתה י2": 1,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​אנגלית\nרידי, חן, הפטל",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה י2": 2,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​אנגלית\nהפטל, רידי, חן",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה י2": 3,
        "Column2": "​אקטואליה\nנאור",
        "Column3": "​מתמטיקה\nשלו, לביד, שריג, הלבני",
        "Column4": "​מתמטיקה\nשריג, לביד, שלו, הלבני",
        "Column5": "​חינוך\nתבורי, זמיר",
        "Column6": "​אנגלית\nרידי, חן, הפטל",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה י2": 4,
        "Column2": "​חינוך\nתבורי, זמיר",
        "Column3": "​מתמטיקה\nשלו, הלבני, לביד, שריג",
        "Column4": "​מתמטיקה\nלביד, שריג, הלבני, שלו",
        "Column5": "​מוזיקה\nתבורי, שחר, זמיר",
        "Column6": "​אנגלית\nחן, הפטל, רידי",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה י2": 5,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​לשון\nשרייבר, שחר",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה י2": 6,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​לשון\nשרייבר, שחר",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה י2": 7,
        "Column2": "​מוזיקה\nשחר, תבורי",
        "Column3": "​הצגה\nלוי, זמיר, תבורי",
        "Column4": "​חינוך מיני\nזמיר, ליזוריק",
        "Column5": "​מתמטיקה\nשריג, שלו, לביד, הלבני",
        "Column6": "​ספורט\nשוורצברג, גינדי, רובין"
       },
       {
        "מערכת שעות לכיתה י2": 8,
        "Column3": "​הצגה\nזמיר, תבורי, לוי",
        "Column4": "​חינוך מיני\nליזוריק, זמיר",
        "Column5": "​מתמטיקה\nשריג, הלבני, שלו",
        "Column6": "​ספורט\nרובין, גינדי, שוורצברג"
       },
       {
        "מערכת שעות לכיתה י2": 9,
        "Column5": "​מתמטיקה\nשלו, הלבני, שריג"
       },
       {
        "מערכת שעות לכיתה י2": 10,
        "Column3": "​מדעי המחשב\nסבג"
       },
       null,
       null,
       {
         "מערכת שעות לכיתה יא1": "מערכת שעות לכיתה יא1"
       },
       {
        "מערכת שעות לכיתה יא1": "שעה",
        "Column2": "יום א",
        "Column3": "יום ב",
        "Column4": "יום ג",
        "Column5": "יום ד",
        "Column6": "יום ה",
        "Column7": "יום ו"
       },
       {
        "מערכת שעות לכיתה יא1": 1,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​מוזיקה\nתמרי, כהן",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יא1": 2,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​חינוך\nפלר קוסקין, תמרי",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יא1": 3,
        "Column2": "​מתמטיקה\nלביד, פלדמן, הלבני",
        "Column3": "​לשון\nשרייבר, שחר",
        "Column4": "​אנגלית\nחן, רידי, הפטל",
        "Column5": "​מתמטיקה\nהלבני, לביד, פלדמן",
        "Column6": "​ספורט\nשוורצברג, גינדי, רובין",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יא1": 4,
        "Column2": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column3": "​לשון\nשרייבר, שחר",
        "Column4": "​אנגלית\nהפטל, חן, רידי",
        "Column5": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column6": "​ספורט\nגינדי, שוורצברג, רובין",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יא1": 5,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​מתמטיקה\nהלבני, לביד, פלדמן",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה יא1": 6,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
       "מערכת שעות לכיתה יא1": 7,
        "Column2": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column3": "​חינוך\nפלר קוסקין, תמרי",
        "Column4": "​אמנות\nשטרן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column5": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​לשון\nשרייבר, שחר"
       },
       {
        "מערכת שעות לכיתה יא1": 8,
        "Column2": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column3": "​מוזיקה\nכהן, פלר קוסקין, תמרי",
        "Column4": "​אמנות\nשטרן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column5": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​לשון\nשרייבר, שחר"
       },
       {
        "מערכת שעות לכיתה יא1": 9,
        "Column2": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column4": "​מתמטיקה\nהלבני",
        "Column5": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​אנגלית\nרידי, חן, הפטל"
       },
       {
        "מערכת שעות לכיתה יא1": 10,
        "Column3": "​מדעי המחשב\nסבג",
        "Column4": "​מתמטיקה\nהלבני",
        "Column6": "​אנגלית\nרידי, חן, הפטל"
       },
       null,
       null,
       {
         "מערכת שעות לכיתה יא2": "מערכת שעות לכיתה יא2"
       },
       {
        "מערכת שעות לכיתה יא2": "שעה",
        "Column2": "יום א",
        "Column3": "יום ב",
        "Column4": "יום ג",
        "Column5": "יום ד",
        "Column6": "יום ה",
        "Column7": "יום ו"
       },
       {
        "מערכת שעות לכיתה יא2": 1,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​חינוך\nאורפז, דלומי",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יא2": 2,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​מוזיקה\nדלומי, אורפז",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יא2": 3,
        "Column2": "​מתמטיקה\nלביד, פלדמן, הלבני",
        "Column3": "​ספורט\nשוורצברג, רובין",
        "Column4": "​אנגלית\nחן, רידי, הפטל",
        "Column5": "​מתמטיקה\nהלבני, לביד, פלדמן",
        "Column6": "​לשון\nשחר, שרייבר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יא2": 4,
        "Column2": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column3": "​ספורט\nשוורצברג, רובין",
        "Column4": "​אנגלית\nהפטל, חן, רידי",
        "Column5": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column6": "​לשון\nשרייבר, שחר",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יא2": 5,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​מתמטיקה\nהלבני, לביד, פלדמן",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה יא2": 6,
        "Column2": "תקופת צהריים",
        "Column3": "תקופת צהריים",
        "Column4": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column5": "תקופת צהריים",
        "Column6": "תקופת צהריים"
       },
       {
        "מערכת שעות לכיתה יא2": 7,
        "Column2": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column3": "​לשון\nשחר, שרייבר",
        "Column4": "​אמנות\nשטרן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column5": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​חינוך\nאורפז, דלומי"
       },
       {
        "מערכת שעות לכיתה יא2": 8,
        "Column2": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column3": "​לשון\nשרייבר, שחר",
        "Column4": "​אמנות\nשטרן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column5": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​מוזיקה\nאורפז, דלומי"
       },
       {
        "מערכת שעות לכיתה יא2": 9,
        "Column2": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column4": "​מתמטיקה\nהלבני",
        "Column5": "​אמנות\nמזרחי\n​גאוגרפיה\nגינדי\n​מחשבת\nג'ספן\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​אנגלית\nרידי, חן, הפטל"
       },
       {
        "מערכת שעות לכיתה יא2": 10,
        "Column3": "​מדעי המחשב\nסבג",
        "Column4": "​מתמטיקה\nהלבני",
        "Column6": "​אנגלית\nרידי, חן, הפטל"
       },
       null,
       null,
       {
         "מערכת שעות לכיתה יב1": "מערכת שעות לכיתה יב1"
       },
       {
        "מערכת שעות לכיתה יב1": "שעה",
        "Column2": "יום א",
        "Column3": "יום ב",
        "Column4": "יום ג",
        "Column5": "יום ד",
        "Column6": "יום ה",
        "Column7": "יום ו"
       },
       {
        "מערכת שעות לכיתה יב1": 1,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​תנ\"ך\nפלר קוסקין",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר"
       },
       {
        "מערכת שעות לכיתה יב1": 2,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​מוזיקה\nשטרן, יחזקאל-לוי",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר"
       },
       {
        "מערכת שעות לכיתה יב1": 3,
        "Column2": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column3": "​הצגה\nשטרן, לוי",
        "Column4": "​אזרחות\nזמיר",
        "Column5": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​ספרות\nהראל"
       },
       {
        "מערכת שעות לכיתה יב1": 4,
        "Column2": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column3": "​הצגה\nלוי, שטרן",
        "Column4": "​אזרחות\nזמיר",
        "Column5": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​ספרות\nהראל"
       },
       {
        "מערכת שעות לכיתה יב1": 5,
        "Column2": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column3": "​ספורט\nשוורצברג, רובין",
        "Column4": "​אנגלית\nחן, רידי, הפטל",
        "Column5": "​מתמטיקה\nלביד, פלדמן, הלבני",
        "Column6": "​תנ\"ך\nפלר קוסקין",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יב1": 6,
        "Column2": "​מתמטיקה\nפלדמן, הלבני, לביד",
        "Column3": "​ספורט\nרובין, שוורצברג",
        "Column4": "​אנגלית\nחן, רידי, הפטל",
        "Column5": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column6": "​מוזיקה\nיחזקאל-לוי",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יב1": 7,
        "Column2": "​חינוך\nשטרן",
        "Column3": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​תיאטרון\nלוי",
        "Column4": "​מתמטיקה\nהלבני, לביד, פלדמן",
        "Column5": "​אנגלית\nהפטל, חן, רידי",
        "Column6": "​חינוך\nשטרן",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
       "מערכת שעות לכיתה יב1": 8,
        "Column2": "​ספרות\nהראל",
        "Column3": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​תיאטרון\nלוי",
        "Column4": "​מתמטיקה\nהלבני, פלדמן, לביד",
        "Column5": "​אנגלית\nרידי, חן, הפטל",
        "Column6": "​סדנאות\nביסטרי, פלר קוסקין, מנור, מזרחי, רוזנפלד, שטרן, ניצב",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יב1": 9,
        "Column2": "​מתמטיקה\nהלבני",
        "Column4": "​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column5": "​אנגלית\nהפטל, חן, רידי",
        "Column6": "​סדנאות\nרוזנפלד, ניצב, מזרחי, שטרן, ביסטרי, מנור, פלר קוסקין"
       },
       {
        "מערכת שעות לכיתה יב1": 10,
        "Column2": "​פיזיקה\nפינק",
        "Column4": "​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column5": "​מדעי המחשב\nסבג"
       },
       null,
       null,
       {
         "מערכת שעות לכיתה יב2": "מערכת שעות לכיתה יב2"
       },
       {
        "מערכת שעות לכיתה יב2": "שעה",
        "Column2": "יום א",
        "Column3": "יום ב",
        "Column4": "יום ג",
        "Column5": "יום ד",
        "Column6": "יום ה",
        "Column7": "יום ו"
       },
       {
        "מערכת שעות לכיתה יב2": 1,
        "Column2": "תקופת בוקר",
        "Column3": "תקופת בוקר",
        "Column4": "​ספרות\nמנור",
        "Column5": "תקופת בוקר",
        "Column6": "תקופת בוקר"
       },
       {
        "מערכת שעות לכיתה יב2": 2,
        "Column4": "​ספרות\nמנור"
       },
       {
       "מערכת שעות לכיתה יב2": 3,
        "Column2": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column3": "​חינוך\nרוזנפלד, ניצב",
        "Column4": "​תנ\"ך\nהורביץ",
        "Column5": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​ספרות\nמנור"
       },
       {
        "מערכת שעות לכיתה יב2": 4,
        "Column2": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​פיזיקה\nפינק\n​תיאטרון\nגדש",
        "Column3": "​תנ\"ך\nהורביץ",
        "Column4": "​מוזיקה\nדלומי, רוזנפלד, ניצב",
        "Column5": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column6": "​מוזיקה\nדלומי"
       },
       {
        "מערכת שעות לכיתה יב2": 5,
        "Column2": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column3": "​הצגה\nאורפז, רוזנפלד, ניצב",
        "Column4": "​אנגלית\nחן, רידי, הפטל",
        "Column5": "​מתמטיקה\nלביד, פלדמן, הלבני",
        "Column6": "​ספורט\nרובין, שוורצברג",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יב2": 6,
        "Column2": "​מתמטיקה\nפלדמן, הלבני, לביד",
        "Column3": "​הצגה\nרוזנפלד, אורפז, ניצב",
        "Column4": "​אנגלית\nחן, רידי, הפטל",
        "Column5": "​מתמטיקה\nלביד, הלבני, פלדמן",
        "Column6": "​ספורט\nרובין, שוורצברג",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יב2": 7,
        "Column2": "​אזרחות\nנאור",
        "Column3": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​תיאטרון\nלוי",
        "Column4": "​מתמטיקה\nהלבני, לביד, פלדמן",
        "Column5": "​אנגלית\nהפטל, חן, רידי",
        "Column6": "​חינוך\nניצב, רוזנפלד",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יב2": 8,
        "Column2": "​אזרחות\nנאור",
        "Column3": "​אמנות\nניצב\n​גאוגרפיה\nגינדי\n​מחשבת\nהורביץ\n​תיאטרון\nלוי",
        "Column4": "​מתמטיקה\nהלבני, פלדמן, לביד",
        "Column5": "​אנגלית\nרידי, חן, הפטל",
        "Column6": "​סדנאות\nביסטרי, פלר קוסקין, מנור, מזרחי, רוזנפלד, שטרן, ניצב",
        "Column7": "​מדעי המחשב\nסבג"
       },
       {
        "מערכת שעות לכיתה יב2": 9,
        "Column2": "​מתמטיקה\nהלבני",
        "Column4": "​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column5": "​אנגלית\nהפטל, חן, רידי",
        "Column6": "​סדנאות\nרוזנפלד, ניצב, מזרחי, שטרן, ביסטרי, מנור, פלר קוסקין"
       },
       {
        "מערכת שעות לכיתה יב2": 10,
        "Column2": "​פיזיקה\nפינק",
        "Column4": "​פיזיקה\nפינק\n​תיאטרון\nלוי",
        "Column5": "​מדעי המחשב\nסבג"
 }
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

const parseTeachersAndLocation = (text: string): { teachers: string[], location: string, subject: string } => {
    if (!text) return { teachers: [], location: '', subject: '' };

    let subject = '';
    let location = '';
    const locationRegex = /\(([^)]+)\)/;
    const textWithoutLocation = text.replace(locationRegex, '').trim();
    
    // Split by newlines first to handle the new format
    const lines = textWithoutLocation.split('\n').map(line => line.trim()).filter(Boolean);
    
    if (lines.length >= 1) {
        // First line is the subject
        subject = lines[0];
        
        // Add emojis for time periods
        if (subject === 'תקופת בוקר') {
            subject = '☀️ תקופת בוקר';
        } else if (subject === 'תקופת צהריים') {
            subject = '🥗 תקופת צהריים';
        }
        
        // Remaining lines contain teachers (comma-separated)
        const teacherLines = lines.slice(1);
        const teachers = teacherLines.flatMap(line => 
            line.split(',').map(t => t.trim()).filter(Boolean)
        );
        
        const locationMatch = text.match(locationRegex);
        if (locationMatch) {
            location = locationMatch[1];
        }
        
        return { teachers: Array.from(new Set(teachers)), location, subject: subject || 'לא צוין' };
    }
    
    // Fallback to old parsing logic for backward compatibility
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
    
    // Add emojis for time periods
    if (subject === 'תקופת בוקר') {
        subject = '☀️ תקופת בוקר';
    } else if (subject === 'תקופת צהריים') {
        subject = '🥗 תקופת צהריים';
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
let idCounter = 1;

(rawData["מערכת כיתות"] as any[]).forEach(row => {
    if (!row) return;

    // Find the class key in this row
    const classKey = Object.keys(row).find(key => key.includes("מערכת שעות לכיתה"));
    
    if (!classKey) return; // Skip rows without class keys
    
    // Extract class name from the key
    const classMatch = classKey.match(/מערכת שעות לכיתה (.*)/);
    if (!classMatch || !classMatch[1]) return;
    
    const currentClass = classMatch[1].trim();
    const firstValue = row[classKey];
    
    // Skip header rows
    if (firstValue === 'שעה') {
        return; 
    }
    
    // Process hour rows (where firstValue is a number)
    if (firstValue && typeof firstValue === 'number') {
        const hourNumber = firstValue.toString();

            Object.entries(row).forEach(([key, value]) => {
            if (key.startsWith('Column') && value && dayMapping[key]) {
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
                       const hebrewGrades = ['ט', 'י', 'יא', 'יב'];
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
                          startTime: hourNumber,
                          endTime: hourNumber
                          };
                          
                          if (subject.includes('טיול שישי')) {
                          const startIndex = displayTimeSlots.findIndex(slot => slot.start === '1');
                          const endIndex = displayTimeSlots.findIndex(slot => slot.end === '5');
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
                });
            }
        });
    }
});


console.log('Processed data count:', processedData.length);
console.log('Sample data:', processedData.slice(0, 3));
console.log('Available classes:', [...new Set(processedData.map(item => item.class))]);
console.log('Available days:', [...new Set(processedData.map(item => item.day))]);

export const timetableData: ClassInfo[] = processedData;

export const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'] as const;

export const timeSlots = [
  '08:00', '08:55', '10:15', '11:05', '12:05', '13:15', '14:00', '14:45'
];

export { displayTimeSlots };
    

    