import Card from 'react-bootstrap/Card';

function ContactCard({contact}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{contact.userName}</Card.Title>
        <Card.Title>description</Card.Title>
        <Card.Text>
          {contact.description}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="./profile">Go to profile</Card.Link>
        
      </Card.Body>
    </Card>
  );
}

export default ContactCard;