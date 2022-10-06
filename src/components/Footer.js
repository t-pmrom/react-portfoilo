import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywrigth">
                    <h3> Designed and Developed by Shaq</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>CopyRight © {year}</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                           
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;