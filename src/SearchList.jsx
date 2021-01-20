import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
} from "reactstrap";
const SearchList = (props) => {

    return (
        <>
            <Row>
                <Col md={3}>
                    <Card
                        style={{
                            color: "#C38D9E",
                            borderRadius: "15px",
                            justifyContent: "center",
                        }}
                    >

                        <CardBody
                            style={{
                                color: "white",
                                backgroundColor: "#41B3A3",
                                textAlign: "center",
                            }}
                        >
                            <CardTitle tag="h5"> {props.hospitalName} </CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                City: {props.hospitalCity} <br></br>
                Email: {props.hospitalEmail}
                            </CardSubtitle>
                            <CardText style={{ color: "white" }}>
                                Cell: {props.hospitalCell}
                                <br></br>

                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};
export default SearchList;