
import Link from 'next/link';
import { CalendarDays, Users, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" dir="rtl">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">מערכת זומר</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/timetable" className="block">
            <Card className="h-full hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-semibold">מערכת שעות תשפ"ו</CardTitle>
                <CalendarDays className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  צפייה וסינון מערכת השעות לפי כיתות.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/available-teachers" className="block">
            <Card className="h-full hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-semibold">רשימת מורים פנויים</CardTitle>
                <Users className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  איתור מורים פנויים לפי יום ושעה.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/available-rooms" className="block">
            <Card className="h-full hover:shadow-xl hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-semibold">רשימת חדרים פנויים</CardTitle>
                <Building2 className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  איתור חדרים פנויים לפי יום ושעה.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-2 text-left text-muted-foreground text-sm">
        <div className="flex justify-between items-center">
          <span>v5.1</span>
          <span>עדכון נתונים: 15/9/2025</span>
        </div>
      </footer>
    </div>
  );
}
