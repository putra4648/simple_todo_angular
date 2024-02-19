export interface Todo {
  readonly id: string;
  readonly name: string;
  readonly updatedAt?: Date;
  readonly createdAt?: Date;
  readonly description?: string;
}
