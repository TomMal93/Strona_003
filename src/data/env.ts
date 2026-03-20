const env = import.meta.env as Record<string, string | undefined>;

export const readEnv = (key: string, fallback: string) => {
  const value = env[key]?.trim();
  return value ? value : fallback;
};
