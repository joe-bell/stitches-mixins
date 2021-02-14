import { InternalCSS } from "@stitches/core";

export interface IStitchesMixins {
  [key: string]: InternalCSS;
}

export type TDefaultStitchesMixin =
  | "box"
  | "screenReaderOnly"
  | "notScreenReaderOnly";

export interface IDefaultStitchesMixins
  extends Record<TDefaultStitchesMixin, InternalCSS> {}

const defaultMixins: IDefaultStitchesMixins = {
  box: {
    margin: 0,
    minWidth: 0,
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "inherit",
    },
  },
  screenReaderOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0",
  },
  notScreenReaderOnly: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0",
  },
};

export const mixins = <T extends IStitchesMixins>(customMixins?: T) => () => (
  key:
    | keyof T
    | keyof IDefaultStitchesMixins
    | (keyof T | keyof IDefaultStitchesMixins)[]
) => {
  const mixins = { ...customMixins, ...defaultMixins };

  return Array.isArray(key)
    ? key.reduce((acc, cv) => ({ ...acc, ...mixins[cv] }), {})
    : mixins[key];
};
