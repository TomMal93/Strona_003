const env = import.meta.env as Record<string, string | undefined>;

export const readEnv = (key: string, fallback: string) => {
  const value = env[key]?.trim();
  return value ? value : fallback;
};

export const readEnvNumber = (key: string, fallback: number) => {
  const value = env[key]?.trim();

  if (!value) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};
