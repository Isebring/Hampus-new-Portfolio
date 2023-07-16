import { Box, Text } from '@mantine/core';
import React, { useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

function Texteffect() {
  const welcomeMessage = ['Hello World 🌍', 'Welcome to..', 'my portfolio👋'];

  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Text fw={300} ta="center" mb="sm" size={23}>
        <TextTransition springConfig={presets.slow}>
          {welcomeMessage[index % welcomeMessage.length]}
        </TextTransition>
      </Text>
    </Box>
  );
}

export default Texteffect;
