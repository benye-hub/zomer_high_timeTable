'use client';

import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

const LOCAL_STORAGE_KEY = 'installHintSeen';

export default function InstallHint(): JSX.Element | null {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState<string>(
    'מומלץ להתקין את האפליקציה על ידי בחירה באפשרות "הוספה לדף הבית".'
  );

  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      const isStandalone =
        (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
        (window as unknown as { navigator: { standalone?: boolean } }).navigator.standalone === true;

      // Set platform-specific guidance
      const ua = navigator.userAgent || (navigator as unknown as { vendor?: string }).vendor || '';
      // Only iPhone (exclude iPad/iPod per request)
      const isIPhone = /iPhone/.test(ua);
      const isAndroid = /Android/i.test(ua);
      const isChrome = /Chrome|CriOS/i.test(ua);

      if (isIPhone) {
        setMessage('ב־iPhone: הקש על כפתור השיתוף ואז "הוסף למסך הבית".');
      } else if (isAndroid && isChrome) {
        setMessage('באנדרואיד: הקש על ⋮ ואז "הוסף למסך הבית" או "התקן אפליקציה".');
      } else {
        setMessage('ניתן להתקין את האפליקציה בדפדפנים תומכים באמצעות Install/הוסף למסך הבית.');
      }

      const alreadySeen = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!alreadySeen && !isStandalone) {
        setOpen(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleClose = (): void => {
    try {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    } catch {
      // ignore
    }
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent dir="rtl">
        <AlertDialogHeader>
          <AlertDialogTitle>התקנת האפליקציה</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleClose}>הבנתי</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}


