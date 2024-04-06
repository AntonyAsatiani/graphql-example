export const productSchema = `
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
