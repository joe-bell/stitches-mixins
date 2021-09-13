import type { CSS } from "@stitches/core";
import { defaultMixins, TDefaultMixin } from "./private";

export interface IMixins {
  [key: string]: CSS;
}

export const mixins =
  <T extends IMixins = {}>(customMixins?: T) =>
  (key: keyof T | TDefaultMixin | (keyof T | TDefaultMixin)[]) => {
    const mixins = { ...defaultMixins, ...customMixins };

    return Array.isArray(key)
      ? key.reduce((acc, cv) => ({ ...acc, ...mixins[cv] }), {})
      : mixins[key];
  };
