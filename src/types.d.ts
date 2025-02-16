export type LoginRQ = {
  email: string;
  password: string;
};

export type SignupRQ = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
