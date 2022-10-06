import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function Aboutcard(){
    return (
        <Card className="quote-card-view">
            <Card.Body>
            <blockquote className="blockquote mb-0">
                <p style={{textAlign: "Justify"}}>
                    Hi Everyone, I am <span className="purple">Patrick Shaquille Rom</span>
                    From <span className="purple"> Naga City</span>
                    <br/> I am a Junior Developer in MetroBank.
                    <br/>
                    <br/>
                    Apart from coding, i collect gundam and watch anime that i love to do!
                </p>
                <ul>
                    <li className="about-activiy">
                        <ImPointRight /> Toy Collecting
                    </li>
                    < li  className="about-activity">
                        <ImPointRight /> Eating
                    </li>
                    < li className="about-activity">
                        <ImPointRight /> Travelling
                    </li>
                </ul>
                <p style={{color: "rbg(155, 126, 172)"}}>
                    "Strive to learn and to make a difference!"{""}
                </p>
                <footer className="blockquote-footer">Patrick Shaquille</footer>
            </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Aboutcard;