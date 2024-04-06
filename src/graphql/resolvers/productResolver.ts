const products = [
  { id: "1", name: "Product A", description: "Description A", price: 19.99 },
  { id: "2", name: "Product B", description: "Description B", price: 29.99 },
  // Add more products here
];

type getProductByIdArgs = {
  id: string,
}

type deleteProductArgs = {
  id: string,
}

type getProductsByNameArgs = {
  name: string,
}

type updateProductArgs = {
  id: string,
  name: string,
  description: string,
  price: number,
}

type createProductArgs = {
  name: string,
  description: string,
  price: number,
}

export const productResolvers = {
    Query: {
      getAllProducts: () => products,
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
