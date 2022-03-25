import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "styles/card.css"
const ProfileCard = (props) => {
  const navigate = useNavigate();
  const atHome = props.atHome 
  const buttonMessage = !atHome ? "back to main page" : `See ${props.data.name}`  
  const trust_score = !atHome ? <Card.Text>Trust score: {props.data.trust_score}</Card.Text> : null;
  const year_establish = !atHome ? <Card.Text>Year of establishment: {props.data.year_established}</Card.Text> : null;
  const link = !atHome ? <Card.Text>Social Media link: {props.data.url}</Card.Text> : null;
  const description = !atHome ? <Card.Footer> Description: {props.data.description} </Card.Footer> : null;
  const cardImgClass = !atHome ? "card-image-profile" : "card-image-home"
  const cardClss = !atHome ? "card-container-profile" : "card-container-home"
  return ( 
  <Card className={cardClss} >
    <Card.Img variant="top" src={props.data.image}  className={cardImgClass} />
    <Card.Body>
      <Card.Title>{props.data.name},  found at {props.data.country}</Card.Title> 
      {trust_score}
      <Card.Text>Trust rank: {props.data.trust_rank}</Card.Text>
      {year_establish}
      {link}
      {description}
    </Card.Body>
    <Button className="route-btn" variant="primary" onClick={()=>navigate(props.nextRoute)}>{buttonMessage}</Button> 
  </Card>
  )
}

export default ProfileCard