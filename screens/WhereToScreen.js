import React from 'react';
import * as colors from '../theme/colors';
import { Content, Form, Input, Item, Text } from 'native-base';

const WhereToScreen = () => {
  return (
    <Content style={{ backgroundColor: colors.secondary }} padder>
      <Form>
        <Text style={{ fontFamily: 'museo', textAlign: 'center', paddingTop: 20, paddingBottom: 20, fontSize: 24 }}>Where do you NEED to go?</Text>
        <Item regular style={{ backgroundColor: 'white', borderRadius: 10 }}>
          <Input />
        </Item>
      </Form>
    </Content>
  );
};

export default WhereToScreen;
