import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithubSquare, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bg from '../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3 className='mt-4'>Login with</h3>
            <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with google</Button>{' '}
            <Button variant="outline-secondary"><FaGithubSquare></FaGithubSquare> Login with github</Button>
            <div className='mt-4'>
                <h3 className='mt-4'>Find us on</h3>
                <ListGroup>
      <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> Instragram</ListGroup.Item>
    </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;