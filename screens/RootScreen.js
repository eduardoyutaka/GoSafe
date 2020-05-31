import React from 'react';
import * as colors from '../theme/colors';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import NeedTo from './NeedToScreen';
import WhereTo from './WhereToScreen';
import BackHome from './BackHomeScreen';

const RootScreen = () => {
  return (
    <Container>
      <Header style={{ backgroundColor: colors.secondary }} hasTabs />
      <Tabs tabBarUnderlineStyle={{ borderBottomWidth: '5px' }}>
        <Tab heading={
          <TabHeading style={{ backgroundColor: colors.secondary }}>
            <Grid>
              <Row>
                <Col>
                  <Icon name="medkit" style={{ color: 'black', textAlign: 'center' }} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={{ color: 'black', fontFamily: 'museo', fontSize: 12, textAlign: 'center' }}>NEED TO</Text>
                </Col>
              </Row>
            </Grid>
          </TabHeading>
        }>
          <NeedTo />
        </Tab>
        <Tab heading={
          <TabHeading style={{ backgroundColor: colors.secondary }}>
            <Grid>
              <Row>
                <Col>
                  <Icon name="navigate" style={{ color: 'black', textAlign: 'center' }} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={{ color: 'black', fontFamily: 'museo', fontSize: 12, textAlign: 'center' }}>WHERE TO</Text>
                </Col>
              </Row>
            </Grid>
          </TabHeading>
        }>
          <WhereTo />
        </Tab>
        <Tab heading={
          <TabHeading style={{ backgroundColor: colors.secondary }}>
            <Grid>
              <Row>
                <Col>
                  <Icon name="navigate" style={{ color: 'black', textAlign: 'center' }} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Text style={{ color: 'black', fontFamily: 'museo', fontSize: 12, textAlign: 'center' }}>BACK HOME</Text>
                </Col>
              </Row>
            </Grid>
          </TabHeading>
        }>
          <BackHome />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default RootScreen;
