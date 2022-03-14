import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import sideImage from '../assets/img/calendarWithPerson.png';
import '../assets/css/auth.css';

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  const [pass, setPass] = useState<string>('');
  const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false);
  const [passError, setPassError] = useState<string>('');

  const [checked, setChecked] = useState(false);

  const onSubmit = (e: any): void => {
    e.preventDefault();

    if (email === '') {
      setEmailError('Cannot be blank!');
      setEmailInvalid(false);
    }

    if (pass === '') {
      setPassError('Cannot be blank!');
      setPasswordInvalid(false);
    }
  };

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="block">
      <div className="first_half">
        <Form id="loginForm" className="box" onSubmit={(e) => onSubmit(e)}>
          <div className="head"><h2>Login</h2></div>
          <Form.Group>
            <div className="controls1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" size="sm" className="inputs" value={email} onChange={(e) => { setEmail(e.target.value); }} isInvalid={emailInvalid} />
              <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
            </div>

            <div className="controls2">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" size="sm" className="inputs" value={pass} onChange={(e) => { setPass(e.target.value); }} isInvalid={passwordInvalid} />
              <Form.Control.Feedback type="invalid">{passError}</Form.Control.Feedback>
            </div>
            <div className="checkbox">
              <Form.Check type="checkbox" checked={checked} onChange={handleChecked} label="zapomni se me" />
            </div>
          </Form.Group>
        </Form>
        <div className="button_login">
          <button type="button" onClick={(e) => onSubmit(e)} className="submit_button">Login</button>
        </div>
        <div className="afterSign">
          <p>Not a member yet?</p>
          <a href="/register">Register</a>
        </div>

        <div className="breakPoint" />
        <button type="button" className="log_face">Login with Facebook</button>
        <button type="button" className="log_insta">Login with Instagram</button>
        <button type="button" className="log_google">Login with Google</button>
      </div>

      <div className="second_half">
        <img src={sideImage} alt="slika" />
      </div>
    </div>
  );
}
