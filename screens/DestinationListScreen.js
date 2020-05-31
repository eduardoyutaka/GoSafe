import React from 'react';
import * as colors from '../theme/colors';
import { Image } from 'react-native';
import { Body, Card, CardItem, Content, Left, Right, Text, Thumbnail } from 'native-base';

const DestinationListScreen = () => {
  return (
    <Content style={{ backgroundColor: colors.secondary }}>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/muffato-logo.jpg')} />
            <Body>
              <Text>Mercado Muffato</Text>
              <Text note>Av. Ver. Toaldo Túlio nº2185 - São Braz</Text>
              <Text>OPEN!</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={require('../assets/muffato.jpg')} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/6.jpg')} style={{ width: 200 }} />
          </Left>
          <Body>
          </Body>
          <Right>
            <Text style={{ fontFamily: 'museo', fontSize: 30, backgroundColor: colors.primary, color: 'white', padding: 5 }}>4.9</Text>
            <Text note style={{ fontFamily: 'museo', fontSize: 12 }}>53 Reviews</Text>
          </Right>
        </CardItem>
      </Card>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/big-logo.jpg')} />
            <Body>
              <Text>Mercado Big</Text>
              <Text note>Av. Winston Churchill, 1734</Text>
              <Text>OPEN!</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={require('../assets/big.jpg')} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/6.jpg')} style={{ width: 200 }} />
          </Left>
          <Body>
          </Body>
          <Right>
            <Text style={{ fontFamily: 'museo', fontSize: 30, backgroundColor: colors.primary, color: 'white', padding: 5 }}>4.7</Text>
            <Text note style={{ fontFamily: 'museo', fontSize: 12 }}>19 Reviews</Text>
          </Right>
        </CardItem>
      </Card>
    </Content>
  );
};

export default DestinationListScreen;
