import React from 'react';
import * as colors from '../theme/colors';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button, Content, Footer, Form, Text, Textarea, Thumbnail } from 'native-base';
import { TouchableHighlight } from 'react-native';

export default class ReviewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maskReviewed: false,
      sanitizeReviewed: false,
      distancingReviewed: false,
      safetyReviewed: false,
    };
  }

  reviewMask = () => {
    this.setState({
      ...this.state,
      maskReviewed: true,
    })
  }

  reviewSanitizer = () => {
    this.setState({
      ...this.state,
      sanitizerReviewed: true,
    })
  }

  reviewDistancing = () => {
    this.setState({
      ...this.state,
      distancingReviewed: true,
    })
  }

  reviewSafety = () => {
    this.setState({
      ...this.state,
      safetyReviewed: true,
    })
  }

  render() {
    const fiveStarsUrl = require('../assets/five-stars.png');
    const fiveFilledStarsUrl = require('../assets/five-filled-stars.png');
    const fourFilledStarsUrl = require('../assets/four-filled-stars.png');
    const threeFilledStarsUrl = require('../assets/three-filled-stars.png');

    return (
      <React.Fragment>
        <Content style={{ backgroundColor: colors.primary }}>
          <Text style={{ fontFamily: 'museo', fontSize: 24, textAlign: 'center', paddingTop: 30 }}>Rate the location:</Text>
          <Grid style={{ backgroundColor: colors.primary }}>
            <Row>
              <Col>
                {this.state && !this.state.maskReviewed &&
                  <TouchableHighlight onPress={() => this.reviewMask()}>
                    <Thumbnail source={fiveStarsUrl} style={{ width: 300, marginLeft: -40 }} />
                  </TouchableHighlight>
                }
                {this.state && this.state.maskReviewed &&
                  <TouchableHighlight>
                    <Thumbnail source={fiveFilledStarsUrl} style={{ width: 300 }} />
                  </TouchableHighlight>
                }
              </Col>
              <Col>
                <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 12, marginTop: 18, marginLeft: 10, marginRight: 40 }}>Was everyone wearing a mask?</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.state && !this.state.sanitizerReviewed &&
                  <TouchableHighlight onPress={() => this.reviewSanitizer()}>
                    <Thumbnail source={fiveStarsUrl} style={{ width: 300, marginLeft: -40 }} />
                  </TouchableHighlight>
                }
                {this.state && this.state.sanitizerReviewed &&
                  <TouchableHighlight>
                    <Thumbnail source={threeFilledStarsUrl} style={{ width: 300, marginLeft: -30 }} />
                  </TouchableHighlight>
                }
              </Col>
              <Col>
                <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 12, marginTop: 18, marginLeft: 10, marginRight: 40 }}>Hand Sanitizer available?</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.state && !this.state.distancingReviewed &&
                  <TouchableHighlight onPress={() => this.reviewDistancing()}>
                    <Thumbnail source={fiveStarsUrl} style={{ width: 300, marginLeft: -40 }} />
                  </TouchableHighlight>
                }
                {this.state && this.state.distancingReviewed &&
                  <TouchableHighlight>
                    <Thumbnail source={fourFilledStarsUrl} style={{ width: 300, marginLeft: 7 }} />
                  </TouchableHighlight>
                }
              </Col>
              <Col>
                <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 12, marginTop: 18, marginLeft: 10, marginRight: 40 }}>Were people respecting social distance?</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                {this.state && !this.state.safetyReviewed &&
                  <TouchableHighlight onPress={() => this.reviewSafety()}>
                    <Thumbnail source={fiveStarsUrl} style={{ width: 300, marginLeft: -40 }} />
                  </TouchableHighlight>
                }
                {this.state && this.state.safetyReviewed &&
                  <TouchableHighlight>
                    <Thumbnail source={fourFilledStarsUrl} style={{ width: 300, marginLeft: 7 }} />
                  </TouchableHighlight>
                }
              </Col>
              <Col>
                <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 12, marginTop: 10, marginLeft: 10, marginRight: 40 }}>When you were there did you feel protected from Covid-19?</Text>
              </Col>
            </Row>
            <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 14, textAlign: 'center', marginTop: 30 }}>COMMENT BELOW:</Text>
            <Form>
              <Textarea rowSpan={5} bordered placeholder="Type here" style={{ backgroundColor: 'white', margin: 30 }} />
              <Button style={{ backgroundColor: colors.secondary, borderRadius: 10, justifyContent: 'center', marginLeft: 30, marginRight: 30 }} onPress={() => this.props.navigate('WhereTo')}><Text style={{ color: 'white', fontFamily: 'museo' }}>Submit</Text></Button>
            </Form>
          </Grid>
        </Content>
        <Footer style={{ backgroundColor: colors.secondary }}>
          <Thumbnail source={require('../assets/hashtag.png')} style={{ width: 300 }} />
        </Footer>
      </React.Fragment>
    );
  };
}
