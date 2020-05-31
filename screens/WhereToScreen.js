import React from 'react';
import { Content, Form, Input, Item, Text } from 'native-base';

const WhereToScreen = () => {
  return (
    <Content padder>
      <Form>
        <Text style={{ textAlign: 'center', paddingTop: 20, paddingBottom: 20, fontSize: 24 }}>Where do you NEED to go?</Text>
        <Item rounded>
          <Input />
        </Item>
      </Form>
    </Content>
  );
};

export default WhereToScreen;
