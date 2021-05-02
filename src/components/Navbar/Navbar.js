import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../logo.svg'

class Header extends React.Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" style={{marginBottom:'20px'}}>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            style={{marginRight:'10px'}}
                        />{' '}
                    Sara's Notes App
                </Navbar.Brand>
                </Navbar>
            </div>
        )
    }

}

export default Header