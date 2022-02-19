import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Card,
} from "react-bootstrap";
import data from '../data'
import {useState} from 'react'

const Home = () => {
const [search, setSearch] = useState('')
const name = data.filter(d => d.name.toLowerCase().includes(search))
  return (
    <>
      <Container className="mt-5">
          
        <Row style={{width:'fit-content'}}>
          <Col className="col-4">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search by name"
                onChange={(e) => {
                    console.log(e.target.value)
                    setSearch(e.target.value);
                  }}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col className="col-4">
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title="Filter by status"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col className="col-4">
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title="Sort By"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
        </Row>
        <Row className='justify-content-center mt-5'>
        { name.map(d => 
            <Col className='col-3'>
              <Card>
                <Card.Body>{d.name}</Card.Body>
        {d.status === 'wip' && <Card.Body>{d.status}</Card.Body>}
              </Card>
            </Col>
        )}
        </Row>
      </Container>
    </>
  );
};

export default Home;
