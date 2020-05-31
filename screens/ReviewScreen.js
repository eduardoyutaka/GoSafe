import React from 'react';
import * as colors from '../theme/colors';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, Footer, Form, Text, Textarea, Thumbnail } from 'native-base';

const ReviewScreen = () => {
  return (
    <React.Fragment>
      <Content style={{ backgroundColor: colors.primary }}>
        <Text style={{ fontFamily: 'museo', fontSize: 24, textAlign: 'center', paddingTop: 30 }}>Rate the location:</Text>
        <Grid style={{ backgroundColor: colors.primary }}>
          <Row>
            <Col>
              <Thumbnail source={require('../assets/five-stars.png')} style={{ width: 300, marginLeft: -40 }} />
            </Col>
            <Col>
              <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 12, marginTop: 18, marginLeft: 10, marginRight: 40 }}>Was everyone wearing a mask?</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Thumbnail source={require('../assets/five-stars.png')} style={{ width: 300, marginLeft: -40 }} />
            </Col>
            <Col>
              <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 12, marginTop: 18, marginLeft: 10, marginRight: 40 }}>Hand Sanitizer available?</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Thumbnail source={require('../assets/five-stars.png')} style={{ width: 300, marginLeft: -40 }} />
            </Col>
            <Col>
              <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 12, marginTop: 18, marginLeft: 10, marginRight: 40 }}>Were people respecting social distance?</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Thumbnail source={require('../assets/five-stars.png')} style={{ width: 300, marginLeft: -40 }} />
            </Col>
            <Col>
              <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 12, marginTop: 10, marginLeft: 10, marginRight: 40 }}>When you were there did you feel protected from Covid-19?</Text>
            </Col>
          </Row>
          <Text style={{ color: 'white', fontFamily: 'museo', fontSize: 14, textAlign: 'center', marginTop: 30 }}>COMMENT BELOW:</Text>
          <Form>
            <Textarea rowSpan={5} bordered placeholder="Type here" style={{ backgroundColor: 'white', margin: 30 }} />
          </Form>
        </Grid>
      </Content>
      <Footer style={{ backgroundColor: colors.secondary }}>
        <Thumbnail source={require('../assets/hashtag.png')} style={{ width: 300 }} />
      </Footer>
    </React.Fragment>
  );
};

export default ReviewScreen;
