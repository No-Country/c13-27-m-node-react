export interface UserRegister {
  userRol: 'student' | 'teacher';
  firstname: string;
  lastname: string;
  dni: string;
  email: string;
  password: string;
  passwordConfirm: string;
  termsandconditions: boolean;
}
