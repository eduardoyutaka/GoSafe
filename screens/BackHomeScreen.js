import React from 'react';
import * as colors from '../theme/colors';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, Text, Thumbnail } from 'native-base';

const BackHomeScreen = () => {
  return (
    <Content style={{ backgroundColor: colors.secondary }} padder>
      <Text style={{ fontFamily: 'museo', fontSize: 24, textAlign: 'center', marginTop: 20 }}>When you get home, don't forget to ...</Text>
      <Grid style={{ backgroundColor: colors.primary, alignItems: 'center', marginTop: 25, marginLeft: -10, marginRight: -10 }}>
        <Col style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Thumbnail source={require('../assets/shoe.png')} style={{ width: 325, marginTop: 10 }} />
          <Text style={{ color: 'white', fontFamily: 'museo', textAlign: 'center' }}>Take off your shoes</Text>
          <Thumbnail source={require('../assets/washing-machine.png')} style={{ width: 370, height: 100, marginTop: 30 }} />
          <Text style={{ color: 'white', fontFamily: 'museo', textAlign: 'center' }}>Wash your clothes, mask</Text>
          <Thumbnail source={require('../assets/washing-hands.png')} style={{ width: 360, height: 120, marginTop: 10 }} />
          <Text style={{ color: 'white', fontFamily: 'museo', textAlign: 'center' }}>And your hands</Text>
        </Col>
      </Grid>
    </Content>
  );
};

export default BackHomeScreen;
