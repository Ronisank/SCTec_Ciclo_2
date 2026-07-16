import { Sequelize } from "sequelize";

const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPass = process.env.DB_PASSWORD!;
const dbHost = process.env.DB_HOST!;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  dialect: "mysql",
  host: dbHost,
});

export default sequelize;