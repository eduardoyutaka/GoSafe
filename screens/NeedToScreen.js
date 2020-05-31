import React from 'react';
import * as colors from '../theme/colors';
import { Content, Text } from 'native-base';

const NeedToScreen = () => {
  return (
    <Content style={{ backgroundColor: colors.secondary }} padder>
      <Text>NeedToScreen</Text>
    </Content>
  );
};

export default NeedToScreen;
