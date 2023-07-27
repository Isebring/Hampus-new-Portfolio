import { Box, MediaQuery, Paper, Title } from '@mantine/core';
import React, { useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

function Texteffect() {
  const welcomeMessage = ['Hello World 🌍', 'Welcome to👋', 'My Journey 🚀'];

  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2500);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Paper p="xs" sx={{ backgroundColor: '#B6C6F7' }} shadow="md">
        <MediaQuery query="(max-width: 815px)" styles={{ fontSize: '35px' }}>
          <Title fw={200} ta="center" color="black" size={45}>
            <TextTransition springConfig={presets.slow}>
              {welcomeMessage[index % welcomeMessage.length]}
            </TextTransition>
          </Title>
        </MediaQuery>
      </Paper>
    </Box>
  );
}

export default Texteffect;
