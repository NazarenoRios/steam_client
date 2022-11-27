export interface GetUserResults {
  info: Info;
  results: Users[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Users {
  id: string;
  email: string;
  password: string;
  salt: string;
  name: string;
  lastname: string;
  country: string;
  state: string;
  city: string;
  zip: number;
  phone: number;
  admin: boolean;
}
