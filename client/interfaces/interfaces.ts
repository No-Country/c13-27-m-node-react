export interface UserRegister {
  id?: string;
  userRol: 'student' | 'teacher';
  firstname: string;
  lastname: string;
  dni: string;
  email: string;
  password: string;
  passwordConfirm: string;
  termsandconditions: boolean;
  carreer: string | null;
  assignments: string[] | null;
}

export interface UserState {
  loggedIn: boolean;
  user: UserLogin | UserRegister | null;
}

export interface UserLogin {
  dni: string;
  password: string;
  userRol: 'student' | 'teacher';
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
