export interface School {
  id: string;
  code: string;
  name: string;
  address: string;
}

export interface LoginFormData {
  mobileNo: string;
  password: string;
  keepLoggedIn: boolean;
}