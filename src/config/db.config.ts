interface IDatabaseConfig {
  uri: string;
}

export const DatabaseConfig: () => IDatabaseConfig = () => ({
  uri:
    process.env.MONGO_URI ||
    `mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`,
});
