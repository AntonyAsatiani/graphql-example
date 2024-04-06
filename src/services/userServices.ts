import {
    getUserByEmailArgs,
    getUserByIdArgs,
    deleteUserArgs,
    updateUserArgs,
    createUserArgs,
  } from '../types/';

export const getUserById = ({ id }: getUserByIdArgs) => {

};

export const deleteUser = ({ id }: deleteUserArgs) => {

};

export const getUserByEmail = ({ email }: getUserByEmailArgs) => {

};

export const updateUser = ({ id, firstName, lastName, email }: updateUserArgs) => {

};

export const createUser = ({ firstName, lastName, email }: createUserArgs) => {

};

export const getUsers = async () => {
    const query = {
        text: 'SELECT firstName',
        values: ['Brian', 'Carlson'],
      }
}
