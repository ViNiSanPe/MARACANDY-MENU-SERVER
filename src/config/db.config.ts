interface IDatabaseConfig {
  mongo: {
    uri: string;
  };
}

export const DatabaseConfig: () => IDatabaseConfig = () => ({
  mongo: {
    uri:
      process.env.MONGO_URI ||
      `mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`,
  },
});
