import { InternalCSS } from "@stitches/core";

// @peduarte - "you probably shouldn't use the InternalCSS type"
// me - https://i.gifer.com/NMHI.gif
export type TCSS = InternalCSS;

export type TDefaultStitchesMixin =
  | "box"
  | "breakout"
  | "minHeightScreen"
  | "screenReaderOnly"
  | "notScreenReaderOnly";

export interface IDefaultStitchesMixins
  extends Record<TDefaultStitchesMixin, TCSS> {}

export const defaultMixins: IDefaultStitchesMixins = {
  box: {
    minWidth: 0,
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "inherit",
    },
  },
  breakout: {
    width: "100vw",
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
  },
  minHeightScreen: {
    minHeight: "100vh",
    "@supports (-webkit-touch-callout: none)": {
      minHeight: "-webkit-fill-available",
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
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    clip: "auto",
    whiteSpace: "normal",
  },
};
