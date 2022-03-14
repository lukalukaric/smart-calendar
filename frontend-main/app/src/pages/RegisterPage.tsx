import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
// import countries from 'react-select-country-list';
import sideImage from '../assets/img/calendarWithPerson.png';
import '../assets/css/auth.css';

const genders = [
  { value: '', label: '' },
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

export default function LoginPage() {
  const [username, setUsername] = useState<string>('');
  const [usernameInvalid, setUsernameInvalid] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordInvalid, setPasswordInvalid] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const [gender, setGender] = useState<string>('');
  const [genderInvalid, setGenderInvalid] = useState<boolean>(false);
  const [genderError, setGenderError] = useState<string>('');

  const [country, setCountry] = useState<string>('');
  const [countryInvalid, setCountryInvalid] = useState<boolean>(false);
  const [countryError, setCountryError] = useState<string>('');

  const [date, setDate] = useState<Date>();
  const [dateInvalid, setDateInvalid] = useState<boolean>(false);
  const [dateError, setDateError] = useState<string>();

  // const countryOptions = useMemo(() => countries().getData(), []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    /* Checking for valid form */
    if (username === '') {
      setNameError('Cannot be blank');
      setUsernameInvalid(true);
    } else if (username.length < 8) {
      setNameError('Must be longer');
      setUsernameInvalid(true);
    } else {
      setUsernameInvalid(false);
    }

    /* Missing regex and from database if the mail is used or not */
    if (email === '') {
      setEmailError('Cannot be blank');
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }

    if (password === '') {
      setPasswordError('Cannot be blank');
      setPasswordInvalid(true);
    } else if (password !== passwordConfirm) {
      setPasswordError('Passwords must match');
      setPasswordInvalid(true);
    } else {
      setPasswordInvalid(false);
    }

    if (country === '') {
      setCountryError('Choose country');
      setCountryInvalid(true);
    } else {
      setCountryInvalid(false);
    }

    if (date === undefined) {
      setDateError('Choose birth date');
      setDateInvalid(true);
    } else {
      setDateInvalid(false);
    }

    if (gender === '') {
      setGenderError('Please select a gender');
      setGenderInvalid(true);
    } else {
      setGenderInvalid(false);
    }
  };

  return (
    <div className="block">
      <div className="first_half">
        <Form id="loginForm" className="box">
          <div className="head"><h2>Register</h2></div>
          <Form.Group>
            <div className="controls">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={username} size="sm" className="inputs" isInvalid={usernameInvalid} onChange={(e) => { setUsername(e.target.value); }} />
              <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
            </div>

            <div className="controls">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} name="email" size="sm" className="inputs" isInvalid={emailInvalid} onChange={(e) => { setEmail(e.target.value); }} />
              <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
            </div>

            <div className="controls">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={password} size="sm" className="inputs" isInvalid={passwordInvalid} onChange={(e) => { setPassword(e.target.value); }} />
              <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
            </div>

            <div className="controls">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" value={passwordConfirm} size="sm" className="inputs" onChange={(e) => { setPasswordConfirm(e.target.value); }} />
            </div>

            <div className="gender_select">
              <Form.Label className="gender_name">Gender</Form.Label>
              <Form.Control required as="select" className="gender_options" onChange={(e) => { setGender(e.target.value); }} isInvalid={genderInvalid}>
                {
                  genders.map((val: any) => <option key={val.value} value={val.value}>{val.label}</option>)
                }
              </Form.Control>
              <Form.Control.Feedback type="invalid">{genderError}</Form.Control.Feedback>
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Control required as="select" className="select_country" onChange={(e) => { setCountry(e.target.value); }} isInvalid={countryInvalid}>
              <option key="empty" value="">Select country</option>
              <option key="1" value="america">America</option>
              <option key="2" value="united_kingdom">United kingdom</option>
              <option key="3" value="france">France</option>
              <option key="4" value="italy">Italy</option>
              <option key="5" value="slovenia">Slovenia</option>
              <option key="6" value="slovakia">Slovakia</option>
              <option key="7" value="german">German</option>
              <option key="8" value="poland">Poland</option>
              <option key="9" value="spain">Spain</option>
              <option key="10" value="china">China</option>
              <option key="11" value="india">India</option>
              <option key="12" value="japan">Japan</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">{countryError}</Form.Control.Feedback>
          </Form.Group>

          <div className="birth_div">
            <Form.Label className="birth_conf">Birth: </Form.Label>
            <Form.Control type="date" className="conf_date" onChange={(e) => setDate(new Date(e.target.value))} isInvalid={dateInvalid} />
            <Form.Control.Feedback type="invalid">{dateError}</Form.Control.Feedback>
          </div>
        </Form>
        <div className="fixed_button">
          <button type="button" onClick={(e: any) => onSubmit(e)} className="submit_button">Registriraj se</button>
        </div>
      </div>

      <div className="second_half">
        <img src={sideImage} alt="A calendar" />
      </div>
    </div>
  );
}
