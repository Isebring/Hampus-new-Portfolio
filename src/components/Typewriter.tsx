import { Box, Container, Flex, Title } from '@mantine/core';
import styled, { keyframes } from 'styled-components';

const typing = keyframes`
  0% {
    width: 0;
  }
  80% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`;

const blink = keyframes`
  from {
    border-color: transparent;
  }
  to {
    border-color: #B6C7F7;
  }
`;

const TypingTitle = styled(Title)`
  overflow: hidden;
  border-right: 0.1em solid #b6c7f7;
  white-space: nowrap;
  width: 0;
  animation: ${typing} 6s steps(30, end) both infinite, ${blink} 0.8s infinite;
`;

function Typewriter() {
  return (
    <Flex align="center" justify="center">
      <Container size="sm">
        <StopCursor>
          <TypingTitle mx="auto" order={2}>
            I am a Junior UX | UI Designer..
          </TypingTitle>
        </StopCursor>{' '}
        <StopCursor>
          <TypingTitle mx="auto" order={2}>
            and a Front End Developer Student..
          </TypingTitle>
        </StopCursor>
      </Container>
    </Flex>
  );
}

const StopCursor = styled(Box)`
  display: inline-block;
`;

export default Typewriter;
