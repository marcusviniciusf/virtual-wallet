import React from 'react';
import { Container, Heading1 } from '~/components';
import styled from 'styled-components';

const Box = styled.div`
  border-radius: 1rem;
  background-color: var(--color-white);
  width: 100%;
  box-shadow: var(--box-shadow);
`;

const App = () => (
  <Container>
    <Box>
      <Heading1>Virtual Wallet</Heading1>
    </Box>
  </Container>
);

export default App;
