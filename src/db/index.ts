import { Client } from "pg";

const connectionString: string = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`;
const client = new Client({
  connectionString: connectionString,
});

client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

module.exports = {
  query: (text: string, params?: any) => client.query(text, params),
};
