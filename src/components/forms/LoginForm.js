import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = () => {
  return (
    <Form className="login-form mt-4">
      <FormGroup>
        <Label for="exampleEmail">Email Address</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email address" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
      </FormGroup>
      <div className="d-flex align-items-center">
        <Button className="mr-4">Submit</Button>
        <a href="/">Create Account</a>
      </div>
    </Form>
  )
}

export default LoginForm;