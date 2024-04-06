
export type getUserByIdArgs = {
  id: number,
}

export type deleteUserArgs = {
  id: number,
}

export type getUserByEmailArgs = {
  email: string,
}

export type updateUserArgs = {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
}

export type createUserArgs = {
  firstName: string,
  lastName: string,
  email: string,
}