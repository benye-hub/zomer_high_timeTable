import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

/**
 * Hook to get the current Firebase user
 * @returns The current user or null if not authenticated
 */
export function useAuth(): User | null {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return loading ? null : user;
}

/**
 * Hook to check if user is authenticated
 * @returns boolean indicating authentication status
 */
export function useIsAuthenticated(): boolean {
  const user = useAuth();
  return user !== null;
}
