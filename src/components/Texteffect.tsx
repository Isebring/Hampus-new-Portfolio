import { Box, Flex, Text } from '@mantine/core';
import React, { useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

function Texteffect() {
  const welcomeMessage = [
    'Hello World',
    'I hope you are well',
    'It is just me',
    'Wait, who?',
  ];

  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Flex justify="center">
      <Box>
        <Text fw={500} ta="center" mb="sm" size="xl">
          <TextTransition springConfig={presets.wobbly}>
            {welcomeMessage[index % welcomeMessage.length]}
          </TextTransition>
        </Text>
      </Box>
    </Flex>
  );
}

export default Texteffect;
