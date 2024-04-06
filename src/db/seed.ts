import { faker } from '@faker-js/faker';
import { client } from './config';


const createUserTable = async () => {
    const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      createdAt timestamp NOT NULL default CURRENT_TIMESTAMP
    )
    `;
    try {
      await client.query(query);
      console.log('Users table created');
    } catch (error) {
      console.log('error', error);
    }
};

const formUserDummyData = async () => {
  for (let i = 0; i < 100; i++) {
    const firstName: string = faker.person.firstName();
    const lastName: string = faker.person.lastName();
    const email: string = faker.internet.email();

    await createUserTable();

    const createUserQuery = {
        text: 'INSERT INTO users(firstName, lastName, email) VALUES($1, $2, $3)',
        values: [firstName, lastName, email],
    };
    await client.query(createUserQuery);
  }

}

( async () => {
    await formUserDummyData();
    process.exit(0);
})();
