export interface Course {
  id: string;
  title: string;
  description: string;
  keywords: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: string;
  imageUrl: string;
  enrolledCount: number;
} 