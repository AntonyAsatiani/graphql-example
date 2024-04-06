export const userSchema = `
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    getAllUsers: [User]
    getUserById(id: ID!): User
    getUserByEmail(email: String!) User
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
`

