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
}

export interface Assignment {
  _id: string;
  name: string;
  schedule: string;
  classroom: string;
}

export interface Career {
  _id: string;
  name: string;
}

export interface Assignments {
  _id: string;
  name: string;
  days: string[];
  schedule: string;
}

export interface Assignment {
  _id: string;
  nombre: string;
  events: string[];
  type: string;
}

export interface Exam {
  _id: string;
  date: string;
  type: string;
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