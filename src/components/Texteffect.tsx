import { Box, MediaQuery, Text } from '@mantine/core';
import React, { useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

function Texteffect() {
  const welcomeMessage = ['Hello World 🌍', 'This is my journey', 'Welcome👋'];

  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <MediaQuery query="(max-width: 815px)" styles={{ fontSize: '35px' }}>
        <Text fw={300} ta="center" mb="sm" size={45}>
          <TextTransition springConfig={presets.slow}>
            {welcomeMessage[index % welcomeMessage.length]}
          </TextTransition>
        </Text>
      </MediaQuery>
    </Box>
  );
}

export default Texteffect;
