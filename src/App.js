import TimeDisplay from "./components/TimeDisplay"
import Notes from "./components/Notes"
import List from "./components/List"
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
          <List />
        </Col>
      </Row>
    </div>
  );
}

export default App;
