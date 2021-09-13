import * as React from "react";
import { styled, globalCss } from "./stitches.config";

const globalStyles = globalCss({
  body: {
    margin: 0,
  },
});

const Box = styled("div", {
  include: "box",
});

const Card = styled("div", {
  include: ["box", "orchidShadow"],
  padding: "$4",
  borderRadius: "$space$2",
});

const Text = styled("p", {
  include: "box",
  fontFamily: "$system",
});

const Link = styled("a", {
  include: "box",
  fontFamily: "$system",
  textDecoration: "none",
  color: "$purple600",
});

const Container = styled("div", {
  include: "box",
  marginX: "auto",
  paddingX: "$3",
  variants: {
    size: {
      "1": {
        maxWidth: "400px",
      },
      "2": {
        maxWidth: "585px",
      },
      "3": {
        maxWidth: "865px",
      },
    },
  },
});

export default function App() {
  globalStyles();
  return (
    <Box
      css={{
        include: ["minHeightScreen"],
        display: "grid",
        placeItems: "center stretch",
      }}
    >
      <Container size={{ initial: "1", sm: "2" }}>
        <Card>
          <Text as="h1">Hello, from Stitches Mixins.</Text>
          <Text css={{ marginTop: "$2" }}>
            For full documentation, visit{" "}
            <Link href="https://github.com/joe-bell/stitches-mixins">
              GitHub
            </Link>
          </Text>
        </Card>
      </Container>
    </Box>
  );
}
