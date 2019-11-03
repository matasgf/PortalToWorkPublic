import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col sm={3}>
                    <NavMenu />
                   
          </Col>
          <Col sm={9}>
            {this.props.children}
                </Col>
            </Row>

            <Row>
                <Col sm={3}>
                    

                </Col>
                <Col sm={9}>
                    <Footer />
                </Col>
            </Row>
                
      </Grid>
    );
  }
}
