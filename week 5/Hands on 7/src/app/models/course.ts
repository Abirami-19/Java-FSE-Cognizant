export type GradeStatus = 'pending' | 'passed' | 'failed';

export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: GradeStatus;
}
