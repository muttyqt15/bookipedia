import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
  PORT: port({ default: 5000 }),
  DATABASE_URL: str(),
});
