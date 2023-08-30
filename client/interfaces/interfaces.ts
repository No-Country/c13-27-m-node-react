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
  carreer: string;
  assignments: string[];
}
