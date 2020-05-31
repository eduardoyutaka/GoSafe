import 'react-native-gesture-handler';
import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Root from './screens/RootScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      museo: require('./assets/fonts/museo-700.otf'),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root />
    );
  }
}
