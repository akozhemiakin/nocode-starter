export const envFile = (): string =>
  `DATABASE_URL="mongodb+srv://<user>:<password>@<db_url>?retryWrites=true&w=majority"
AUTH_SECRET="some-secret"
`;
