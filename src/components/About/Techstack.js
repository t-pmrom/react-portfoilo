import React from "react";
import {Col, Row} from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiGit,
    DiJava,
    DiCss3,
    DiHtml5,
} from "react-icons/di";
import {
    SiMysql,
    SiReact,
    SiC, 
}from "react-icons/si";

function Teachstack(){
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <col xs={4} md={2} className="tech-icons">
                <CgCPlusPlus/>
            </col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJava/>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiGit/>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiHtml5/>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiCss3/>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiC/>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiReact/>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiMysql/>
                </Col>
            </Col>
        </Row>
    );
}

export default Teachstack;