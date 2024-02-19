export interface Todo {
  id: string;
  name: string;
  updatedAt?: Date;
  createdAt?: Date;
  description?: string;
  isSelected: boolean;
}
