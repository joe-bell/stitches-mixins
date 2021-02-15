import { InternalCSS } from "@stitches/core";

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
  // https://github.com/rebassjs/rebass/tree/master/packages/reflexbox
  box: {
    margin: 0,
    minWidth: 0,
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "inherit",
    },
  },
  //https://codepen.io/maddesigns/pen/rOMgpQ/
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
  // https://tailwindcss.com/docs/screen-readers#class-reference
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
