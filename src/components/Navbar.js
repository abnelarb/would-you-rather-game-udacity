import React from 'react'
import Nav from 'react-bootstrap/Nav'

const Navbar = () =>{
    return (
        <Nav fill variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/" >Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/new">New Poll</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/leaderborad">Leader Board</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/user" >
            Mohammed
          </Nav.Link>
          <Nav.Link href="/logout" >
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
}
export default Navbar