import App from "../App";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link, useHistory, useParams } from "react-router-dom";
import Background from "./BloodOcean.png";
import Scheduler from "./Scheduler";
import moment, { parseZone } from 'moment'
import axios from "axios";
import './Bookings.css'

function Bookings(props){
const [scheduledHrs, setScheduledHrs] = useState([[], [], [], [], [], [], []]);

const hospitalId = props.location.state.params.hospitalId;

useEffect(
 
     async  () => {
      console.log(hospitalId, 'before')
            const response = await axios.get(
              `http://localhost:5000/appointment?hospitalId=${hospitalId}`, {
                headers: {
                  "authorization": localStorage.getItem('token')
                }
              } //change
            );
      //    setScheduledHrs(response.data)
          }
  )
return (
    <div className="Bookings">
    <NavBar />
    <Scheduler 
      startHour={moment().hours(9).minutes(0).seconds(0)}
      endHour={moment().hours(17).minutes(0).seconds(0)}
      scheduledHours={scheduledHrs}
      hospitalId={hospitalId}
      />

  </div>)
}

export default Bookings;