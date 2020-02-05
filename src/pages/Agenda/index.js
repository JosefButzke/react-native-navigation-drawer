import React, { useState, useEffect } from 'react';

import { Container, Title, Search } from './styles';

export default function Agenda() {

  const [wordSearch, setWordSeach] = useState('');

  return (
    <Container>
        <Title>Agenda</Title>
        <Search 
          value={wordSearch}
          onChangeText={(text) => {setWordSeach(text)}}
          placeholder='Buscar'
        />
    </Container>
  );
}