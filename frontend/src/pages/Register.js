import { useState } from 'react';
import { useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { userRegister } from '../redux/actions/authActions';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [data,setData]=useState({userName:"",email:"",password:"",description:"",role:"",phone:"",age:""});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  //handle change
  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  // user register
const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(userRegister(data,navigate))
}


  return (
    <Container>
    <Form  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter ur name"  name='userName'
        onChange={handleChange}
        />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'
                onChange={handleChange}

        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>age</Form.Label>
        <Form.Control type="text" placeholder="enter your age"  name='age'
                onChange={handleChange}

        />
      </Form.Group>


      <Form.Group>
      <Form.Label>Phone Number </Form.Label>
        <Form.Control type="text" placeholder="enter your phone number"  name='phone'
                onChange={handleChange}

        />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password'
                onChange={handleChange}

        />
      </Form.Group>
      

      <Form.Group className="mb-3">
        <Form.Label> select menu</Form.Label>
        <Form.Select onChange={handleChange} name="role">
        <option>select role</option>
          <option>musician</option>
          <option>band</option>
        </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="description"   name='description'
                onChange={handleChange}

        />
        
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Register;