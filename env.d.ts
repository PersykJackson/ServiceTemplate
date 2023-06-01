declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      NODE_ENV: string;
      DB_PASSWORD: string;
      DB_USER: string;
      DB_NAME: string;
      JWT_SECRET_KEY: string;
    }
  }
}

export {};
