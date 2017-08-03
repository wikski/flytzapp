import React from 'react'
import styled from 'styled-components'
import { 
    Col, 
    Grid,    
    Nav, 
    NavItem,
    Row } from 'react-bootstrap'

const StyledHeader = styled.header`    
    border-bottom: 1px solid #ddd;
    height: 90px;
    padding: 15px 0;

    .logo {
        color: #999;
        display: block;
        float: left;
        margin-right: 15px;
        width: 100px;
    }

    h1 {
        color: #ccc;
        font-size: 20px;
        line-height: 30px;
        margin: 0;
    }
`

const Header = props => {
    
    return (
        <StyledHeader>
            <Grid fluid>
                <Row>
                    <Col xs={4}>
                        <a className="logo"><img alt="logo" src={`http://via.placeholder.com/100x60&text=logo`}/></a>
                        <h1>Go somewhere<br/> one weekend</h1>
                    </Col>
                    <Col xs={4}>
                        <Nav bsStyle="pills" activeKey={1} justified>
                            <NavItem eventKey={1} href="/home">Home</NavItem>
                            <NavItem eventKey={2} title="Item">How it works</NavItem>                                
                        </Nav>
                    </Col>
                </Row>
            </Grid>
        </StyledHeader>
    )  
}

export default Header