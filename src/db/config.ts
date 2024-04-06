import { Client } from 'pg'

const client = new Client({
  host: '127.0.0.1',
  port: 6001,
  database: 'mydatabase',
  user: 'root',
  password: 'toor',
});

( async() => {
  try {
    await client.connect();
    console.log("connected succesfuly");
  } catch (error) {
    throw error;
  }

})();

export { client };
