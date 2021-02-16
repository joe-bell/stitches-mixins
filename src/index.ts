import { defaultMixins, TCSS, TDefaultStitchesMixin } from "./private";

export interface IStitchesMixins {
  [key: string]: TCSS;
}

export const mixins = <T extends IStitchesMixins = {}>(
  customMixins?: T
) => () => (
  key: keyof T | TDefaultStitchesMixin | (keyof T | TDefaultStitchesMixin)[]
) => {
  const mixins = { ...defaultMixins, ...customMixins };

  return Array.isArray(key)
    ? key.reduce((acc, cv) => ({ ...acc, ...mixins[cv] }), {})
    : mixins[key];
};
