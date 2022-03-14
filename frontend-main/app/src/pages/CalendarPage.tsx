import { useState } from 'react';
import {
  Row, Col, Button, Container, Table, Form,
} from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import Navbar from '../components/navigation/Navbar';
import CustomCalendar from '../components/custom-calendar';
import PopUpWindow from '../components/popup-window';
import '../assets/css/calendarPage.css';

const demoData = {
  groups: ['(izberi skupino)', 'Nogomet', 'Košarka', 'Čajanka'],
  events: ['opravilo1', 'opravilo2', 'opravilo3'],
};

function CalendarPage() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const togglePopup = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <>
      <Navbar />

      <Container className="mw-100">
        <Row className="vh-100">
          <Col className="d-flex bg-primary align-middle align-items-center justify-content-center sidebar" xs="auto">
            <Table className="text-light table-borderless">
              <thead>
                <tr>
                  <td>
                    <Form.Select>
                      {
                        demoData.groups.map((group: string) => <option>{group}</option>)
                      }
                    </Form.Select>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h2>OPRAVILA:</h2>
                  </th>
                  <th>
                    <Button onClick={togglePopup} variant="link" className="text-light pt-0 pb-0">
                      <h3>
                        <PlusCircle className="p-0" />
                      </h3>
                    </Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  demoData.events.map((event: string) => <tr><td>{event}</td></tr>)
                }
              </tbody>
            </Table>
          </Col>
          <Col className="d-flex align-middle align-items-center justify-content-center">
            <CustomCalendar date={selectedDate} setDate={setSelectedDate} />
            {showPopUp && <PopUpWindow close={togglePopup} date={selectedDate} />}
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default CalendarPage;
