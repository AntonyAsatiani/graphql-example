import {
  getUserByEmailArgs,
  getUserByIdArgs,
  deleteUserArgs,
  updateUserArgs,
  createUserArgs,
} from '../../types/'

import {
  createUser,
  getUserByEmail,
  getUserById,
  deleteUser,
  updateUser,
  getUsers
} from '../../services/userServices';

export const userResolver = {
  Query: {
    getAllUsers: async () => await getUsers(),
    getProductById: (_ :any, { id  }: getProductByIdArgs) =>
      products.find((product) => product.id === id),
    getProductsByName: (_ :any, { name }: getProductsByNameArgs) =>
      products.filter((product) => product.name.includes(name)),
  },
  Mutation: {
    updateProduct: (_ :any, { id, name, description, price }: updateProductArgs) => {
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex === -1) {
        throw new Error("Product not found");
      }
      products[productIndex] = {
        ...products[productIndex],
        name,
        description,
        price,
      };
      return products[productIndex];
    },
    deleteProduct: (_ :any, { id } :deleteProductArgs) => {
      const productIndex = products.findIndex((product) => product.id === id);
      if (productIndex === -1) {
        throw new Error("Product not found");
      }
      products.splice(productIndex, 1);
      return "Product deleted successfully";
    },
    createProduct: (_ :any, { name, description, price }: createProductArgs) => {
      const newProduct = {
        id: String(products.length + 1),
        name,
        description,
        price,
      };
      products.push(newProduct);
      return newProduct;
    },
  },
};
  