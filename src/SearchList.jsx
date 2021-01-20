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
import { useHistory } from "react-router-dom";


const SearchList = (props) => {
console.log(props)
const history = useHistory();


function Redirect(event){
    history.push("/Bookings");
    window.location.reload();
}

    return (
        <>
            <Row>
                <Col md={3}>
                    <Card onClick={(event)=> Redirect(event)}
                        style={{
                            color: "#f92672",
                            borderRadius: "15px",
                            justifyContent: "center",
                        }}
                    >

                        <CardBody
                            style={{
                                borderRadius: "15px",
                                color: "white",
                                backgroundColor: "#f92672",
                                textAlign: "center",
                            }}
                        >
                            <CardTitle tag="h5" style={{ color: "white" }}> {props.hospitalName}  </CardTitle>
                            <CardSubtitle tag="h6" style={{ color: "white" }}>
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