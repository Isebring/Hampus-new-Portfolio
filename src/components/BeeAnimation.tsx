import { Box } from "@mantine/core";
import "./BeeAnimation.css";

const BeeAnimation = () => {
  return (
    <Box className="container">
      <Box className="wings"></Box>
      <Box className="bee">
        <Box className="shine"></Box>
      </Box>
    </Box>
  );
};

export default BeeAnimation;
