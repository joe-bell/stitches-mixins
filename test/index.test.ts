import { createStitches } from "@stitches/core";
import { mixins } from "stitches-mixins";

const theme = { colors: { orchid: "orchid" }, space: { md: "1rem" } };

const customMixins = {
  orchidShadow: {
    boxShadow: "0 25px 50px -12px $orchid",
  },
};

describe("mixins", () => {
  test("individual mixins can be included and overridden", () => {
    const stitches = createStitches({
      theme,
      utils: {
        include: mixins(),
      },
    });

    const component = stitches.css({
      include: "box",
      margin: "$md",
    });

    // CSS should contain theme etc…
    expect(stitches.toString()).toMatchSnapshot();
    // Create component CSS
    component.toString();
    // CSS should now contain component CSS
    expect(stitches.toString()).toMatchSnapshot();
  });

  test("multiple mixins can be included and overridden", () => {
    const stitches = createStitches({
      theme,
      utils: {
        include: mixins(),
      },
    });

    const component = stitches.css({
      include: ["box", "minHeightScreen"],
      margin: "$md",
    });

    // CSS should contain theme etc…
    expect(stitches.toString()).toMatchSnapshot();
    // Create component CSS
    component.toString();
    // CSS should now contain component CSS
    expect(stitches.toString()).toMatchSnapshot();
  });

  test("custom mixins can be included", () => {
    const stitches = createStitches({
      theme,
      utils: {
        include: mixins(customMixins),
      },
    });

    const component = stitches.css({
      include: ["box", "orchidShadow"],
    });

    // CSS should contain theme etc…
    expect(stitches.toString()).toMatchSnapshot();
    // Create component CSS
    component.toString();
    // CSS should now contain component CSS
    expect(stitches.toString()).toMatchSnapshot();
  });

  test("mixins can be nested", () => {
    const stitches = createStitches({
      theme,
      utils: {
        include: mixins(customMixins),
        someShorthandUtil: (value: boolean) =>
          value && {
            boxShadow: "0 25px 50px -12px orchid",
          },
      },
    });

    const component = stitches.css({
      include: ["box", "orchidShadow", "screenReaderOnly"],
      "&:focus": {
        include: "notScreenReaderOnly",
      },
    });

    // CSS should contain theme etc…
    expect(stitches.toString()).toMatchSnapshot();
    // Create component CSS
    component.toString();
    // CSS should now contain component CSS
    expect(stitches.toString()).toMatchSnapshot();
  });
});
