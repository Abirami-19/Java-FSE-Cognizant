export interface Course {
  id: number;
  title: string;
  instructor: string;
  credits: number | null;
  enrolled: boolean;
  gradeStatus: 'passed' | 'failed' | 'pending';
}