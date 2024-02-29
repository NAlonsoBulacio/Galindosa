const { parse } = require("pg-connection-string");
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => {
  // const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        ssl: { rejectUnauthorized: false },
      },
      debug: false,
    },
  }
};
