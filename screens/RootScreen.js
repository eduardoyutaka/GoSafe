import React from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import NeedTo from './NeedToScreen';
import WhereTo from './WhereToScreen';
import BackHome from './BackHomeScreen';

const RootScreen = () => {
  return (
    <Container>
      <Header hasTabs />
      <Tabs>
        <Tab heading={ <TabHeading><Icon name="medkit" /><Text>NEED TO</Text></TabHeading> }>
          <NeedTo />
        </Tab>
        <Tab heading={ <TabHeading><Icon name="navigate" /><Text>WHERE TO</Text></TabHeading> }>
          <WhereTo />
        </Tab>
        <Tab heading={ <TabHeading><Icon name="home" /><Text>BACK HOME</Text></TabHeading> }>
          <BackHome />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default RootScreen;
