import TimeDisplay from "./components/TimeDisplay"
import Notes from "./components/Notes"
import Reminders from "./components/Reminders"
import { Row, Col } from 'react-bootstrap';


import './App.css';

function App() {
  return (
    <div className="App">
      <TimeDisplay />
      <Row>
        <Col>
          <Notes />
        </Col>
        <Col>
          <Reminders />
        </Col>
      </Row>
    </div>
  );
}

export default App;
