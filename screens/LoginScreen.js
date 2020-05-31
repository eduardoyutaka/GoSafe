import React from 'react';
import { Container, Content, Form, Item, Input, Label, Header, Left, Body, Right, Title } from 'native-base';

const LoginScreen = () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Login</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input secureTextEntry />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default LoginScreen;
