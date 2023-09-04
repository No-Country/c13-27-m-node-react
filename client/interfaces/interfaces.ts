export interface UserRegister {
  id?: string;
  userRol: 'student' | 'teacher';
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  passwordConfirm: string;
  termsandconditions: boolean;
  career: string | null;
  assignments: string[] | null;
}

export interface Assignment {
  _id: string;
  name: string;
  schedule: string;
  classroom: string;
}

export interface Carreer {
  _id: string;
  name: string;
}

export interface Assignments {
  _id: string;
  name: string;
  days: string[];
  schedule: string;
}
