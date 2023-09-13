export interface UserRegister {
  _id?: string;
  check: 'student' | 'teacher';
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  passwordConfirm: string;
  termsandconditions: boolean;
  career: string | null;
  assignments: string[] | null;
  career_id?: string;
  assignmentDataForStudent?: string[];
}

export interface Assignment {
  _id: any;
  name: string;
  schedule: string;
  classroom: string;
  days: string[];
  students?: string[];
  links?: string[];
  filesNames?: string[];
  events?: string[];
  exams?: Exam;
}

export interface Career {
  _id: string;
  name: string;
}

export interface AssignmentEvents {
  _id: string;
  nombre: string;
  events: string[];
  type: string;
}

export interface Exam {
  _id: string;
  date: string;
  type: string;
  duration?: number;
  grades?: Grades;
}

interface Grades {
  student: string;
  grade: number;
  _id: string;
}

export interface StudentInfo {
  _id: string;
  name: string;
  events: {
    type: string;
    eventDetails: {
      grade: number;
    }[];
  }[];
}

export interface StudentExamInfo {
  _id: string;
  name: string;
  events: {
    eventType: string;
    grade: number | string;
  }[];
}
