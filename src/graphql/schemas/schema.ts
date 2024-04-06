export const schema = `
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
    getUserByEmail(email: String!): User
  }

  type Mutation {
    updateUser(
      id: ID!
      firstName: String
      lastName: String
      email: String
    ): User
    deleteUser(id: ID!): String
    createUser(
      firstName: String!
      lastName: String
      email: String!
    ): User
  }

  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
  }

  type Query {
    getAllProducts: [Product]
    getProductById(id: ID!): Product
    getProductsByName(name: String!): [Product]
  }

  type Mutation {
    updateProduct(
      id: ID!
      name: String
      description: String
      price: Float
    ): Product
    deleteProduct(id: ID!): String
    createProduct(name: String!, description: String, price: Float!): Product
  }

  type Subscription {
    productUpdated: Product
  }
`;


