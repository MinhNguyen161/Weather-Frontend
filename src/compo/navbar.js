import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'

const Navbarr = ({ handleSubmit, setKeyWord }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline onSubmit={(e) => handleSubmit(e)}>
                    <FormControl type="text" placeholder="Search" name="city" className="mr-sm-2" onChange={(event) => setKeyWord(event.target.value)} />
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbarr