export interface ConektaPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
