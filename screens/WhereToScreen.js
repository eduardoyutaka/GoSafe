import React from 'react';
import * as colors from '../theme/colors';
import MapView from 'react-native-maps';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Content, Form, Icon, Input, Item, Text } from 'native-base';

const WhereToScreen = () => {
  return (
    <Content style={{ backgroundColor: colors.secondary }} contentContainerStyle={{ alignItems: 'center' }} padder>
      <Form >
        <Text style={{ fontFamily: 'museo', textAlign: 'center', paddingTop: 20, paddingBottom: 20, fontSize: 24 }}>Where do you NEED to go?</Text>
        <Item regular style={{ backgroundColor: 'white', borderRadius: 10, marginBottom: 30 }}>
          <Input />
          <Icon name="search" />
        </Item>
        <MapView style={{ width: 310, height: 310 }} />
        <Button style={{ backgroundColor: colors.primary, justifyContent: 'center', marginTop: 30 }}>
          <Text style={{ color: 'black', fontFamily: 'museo', textAlign: 'center' }}>Going now!</Text>
        </Button>
      </Form>
    </Content>
  );
};

export default WhereToScreen;
