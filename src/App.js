import React from 'react';
import styled from 'styled-components'

const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
`

const TextArea = styled.textarea`
  width: 100%;
  height: 75vh;
`

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.col ? 'column' : 'row'};
  flex: ${props => props.n || 'initial'};
  padding: 1rem;
`

const Title = styled.p`
  font-weight: bold;
  text-align: center;
`

function App() {
  return (
    <AppWrapper>
      <Flex>
        <Flex n="1" col>
          <Title>JSON</Title>
          <TextArea>Hello</TextArea>
        </Flex>
        <Flex n="1" col>
          <Title>CSV</Title>
          <TextArea>Hello2</TextArea>
        </Flex>
      </Flex>
    </AppWrapper>
  )
}

export default App;
