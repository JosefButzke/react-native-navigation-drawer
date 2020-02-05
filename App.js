import React from 'react';

import Routes from './src/routes';

import { Container } from './src/globalStyles/styles';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" translucent={true} backgroundColor="#0499d9"/>
    <Container>
      <Routes />
    </Container>
  </>
  );
}

