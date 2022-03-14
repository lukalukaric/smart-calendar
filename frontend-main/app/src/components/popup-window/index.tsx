import React from 'react';
import {
  Button, Form,
} from 'react-bootstrap';

import './index.css';

interface Props {
  close: () => void;
  date: Date;
}

function PopUpWindow({ close, date }: Props) {
  console.log(date);
  return (
    <div className="outer-box">
      <div className="inner-box">
        <Form>
          <Form.Label>Datum:</Form.Label>
          <Form.Control type="date" placeholder={date.toISOString().split('T')[0]} />
          <Form.Label>Ura:</Form.Label>
          <Form.Control type="time" />
          <Form.Label>Opis:</Form.Label>
          <Form.Control type="text" placeholder=" " />
          <Form.Label>Skupina:</Form.Label>
          <Form.Select>
            <option>(izberi skupino)</option>
            <option>skupina1</option>
            <option>skupina2</option>
            <option>skupina3</option>
          </Form.Select>
          <Button className="float-end mt-1 ml-1" variant="danger" onClick={close}>Preklic</Button>
          <Button className="float-end mt-1" variant="success" type="submit">Dodaj</Button>
        </Form>
      </div>
    </div>
  );
}

export default PopUpWindow;
