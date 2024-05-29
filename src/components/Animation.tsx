import { Box } from "@mantine/core";
import Lottie from "lottie-react";
import animationData from "../data/Animation - 1717013797072.json";

function Animation() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  const animationStyle = {
    width: "80%",
    height: "80%",
  };
  return (
    <Box style={containerStyle}>
      <Lottie
        animationData={animationData}
        loop={true}
        style={animationStyle}
      />
    </Box>
  );
}

export default Animation;
