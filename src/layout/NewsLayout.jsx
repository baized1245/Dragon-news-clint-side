import React from 'react';
import Header from '../Shered/Header/Header';
import Footer from '../Shered/Footer/Footer';
import { Container, Row, Col  } from 'react-bootstrap';
import LeftNav from '../Shered/LeftNav/LeftNav';
import RightNav from '../Shered/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>

<Container>
    <Row>
        
        <Col lg={9}>
           <Outlet></Outlet>               
        </Col>
        <Col lg={3}>
          <RightNav></RightNav>
        </Col>
    </Row>
</Container>

<Footer></Footer>
        </div>
    );
};

export default NewsLayout;