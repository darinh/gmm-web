export type UserRole = 'anonymous' | 'authenticated';

export type User = {
  id: string;
  email: string;
  roles: UserRole[];
}