import { Box } from "@mantine/core";
import Lottie from "lottie-react";
import animationData from "../data/Animation - 1717016597931.json";

function IdeaAnimation() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  //   const animationStyle = {
  //     width: "100%",
  //     height: "100%",
  //   };
  return (
    <Box style={containerStyle}>
      <Lottie
        animationData={animationData}
        loop={false}
        // style={animationStyle}
      />
    </Box>
  );
}

export default IdeaAnimation;
