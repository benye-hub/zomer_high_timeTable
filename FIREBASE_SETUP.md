# Firebase Setup Guide

This guide will help you connect your project to a new Firebase project.

## Prerequisites

1. **Firebase CLI installed** (already done)
2. **New Firebase project created** in the [Firebase Console](https://console.firebase.google.com/)

## Step-by-Step Setup

### 1. Get Firebase Configuration

1. Go to your new Firebase project in the [Firebase Console](https://console.firebase.google.com/)
2. Click on the gear icon ⚙️ and select "Project settings"
3. Scroll down to "Your apps" section
4. If you don't have a web app, click "Add app" and select the web icon `</>`
5. Register your app with a nickname (e.g., "zomer-high-timetable")
6. Copy the Firebase configuration object

### 2. Update Project Configuration

1. **Update `.firebaserc`**: Replace `YOUR_NEW_FIREBASE_PROJECT_ID` with your actual project ID
2. **Create `.env.local`** file in the root directory with your Firebase config:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_actual_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

### 3. Authenticate with Firebase CLI

Run the following command in your terminal:

```bash
firebase login
```

This will open a browser window for authentication.

### 4. Initialize Firebase Services (Optional)

If you plan to use Firebase services like Firestore, Authentication, or Storage:

1. **Firestore Database**: Go to Firebase Console → Firestore Database → Create database
2. **Authentication**: Go to Firebase Console → Authentication → Get started
3. **Storage**: Go to Firebase Console → Storage → Get started

### 5. Deploy Your Project

```bash
# Build the project
npm run build

# Deploy to Firebase Hosting
npm run deploy
```

Or use Firebase CLI directly:

```bash
firebase deploy
```

## Usage in Your App

The Firebase configuration is now available throughout your app:

```typescript
// Import Firebase services
import { auth, db, storage } from '@/lib/firebase';

// Use authentication
import { useAuth } from '@/hooks/use-firebase';

// Example component
function MyComponent() {
  const user = useAuth();
  
  if (user) {
    return <div>Welcome, {user.email}!</div>;
  }
  
  return <div>Please sign in</div>;
}
```

## Security Rules

Don't forget to configure security rules for your Firebase services:

- **Firestore**: Set up rules in Firebase Console → Firestore Database → Rules
- **Storage**: Set up rules in Firebase Console → Storage → Rules
- **Authentication**: Configure providers in Firebase Console → Authentication → Sign-in method

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

Optional:
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` (for Analytics)

## Troubleshooting

### Common Issues

1. **"Missing required environment variables" error**: Make sure your `.env.local` file exists and contains all required variables
2. **Firebase not initialized**: Ensure you're importing from the correct path: `@/lib/firebase`
3. **Authentication issues**: Check that Authentication is enabled in your Firebase project
4. **Deployment issues**: Make sure you're logged in with `firebase login` and your project ID is correct in `.firebaserc`

### Getting Help

- [Firebase Documentation](https://firebase.google.com/docs)
- [Next.js Firebase Integration](https://firebase.google.com/docs/web/setup#nextjs)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)
