const { env } = process;

export const configSchema = (): any => {
  return {
    NODE_ENV: env.NODE_ENV,
    STRING_CONNECTION: env.STRING_CONNECTION,
    URL:env.URL
  };
};
