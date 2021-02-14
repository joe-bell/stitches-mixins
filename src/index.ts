export interface StitchesMixins {
  [key: string]: {};
}

export const mixins = <T extends StitchesMixins | StitchesMixins[]>(
  mixins: T
) => () => (key: keyof T | (keyof T)[]) =>
  Array.isArray(key)
    ? key.reduce((acc, cv) => ({ ...acc, ...mixins[cv] }), {})
    : mixins[key];
