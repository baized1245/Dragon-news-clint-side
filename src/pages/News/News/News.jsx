import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Category from './../../Home/Category/Category';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    const {_id, title, details, image_url, Category_id } = news; 
    return (
       <div>
         <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
        <Link to={`/category/${Category_id}`}><Button variant="danger">All news in this category</Button></Link>
      </Card.Body>
    </Card>
    <EditorsInsights></EditorsInsights>
       </div>
    );
};

export default News;