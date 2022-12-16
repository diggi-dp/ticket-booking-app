import React, { useState, useEffect } from "react";
import axios from 'axios'
import DrawGrid from "./DrawGrid";

const SeatBooking = () => {

  // create some states 
  const [seat, setSeat] = useState([])
  const [seatAvailable, setSeatAvailabe] = useState([])
  const [seatReserved, setSeatReserved] = useState([])
  const [seatSelected, setSeatSelected] = useState([])


  const patchSeatData = async () => {
    const headers = {
      'content-type': 'application/json',
    };
    const data = {
      availableSeat: seatAvailable,
      bookedSeat: seatSelected,
      reservedSeat: seatReserved
    };
    await axios.patch('http://localhost:5000/ticket', data, { headers })
  }

  const getSeatData = async () => {
    const data = await axios.get('http://localhost:5000/ticket')
    setSeat(data.data[0].seatNumbers);
    setSeatAvailabe(data.data[0].availableSeat)
    setSeatReserved(data.data[0].reservedSeat)
    setSeatSelected(data.data[0].bookedSeat)
  }

// useEffect for fetch initial data from api
  useEffect(() => {
    getSeatData()
  }, [])

  // useEffect for update data for every state change
  useEffect(() => {
    patchSeatData()
    // eslint-disable-next-line
  }, [seatAvailable,seatReserved,seatSelected])



  const onClickData = (ele) => {
    if (seatReserved.indexOf(ele) !== -1) {
      setSeatAvailabe(seatAvailable.concat(ele))
      setSeatReserved(seatReserved.filter(res => res !== ele))
    } else {
      setSeatReserved(seatReserved.concat(ele))
      setSeatAvailabe(seatAvailable.filter(res => res !== ele))
    }
  }

  // check for seat is already selected or not 
  const checktrue = (item) => {
    if (seatSelected.indexOf(item) > -1) {
      return false;
    } else {
      return true;
    }
  }

  // handleSubmited for book the reserved seat 
  const handleSubmited = () => {
    setSeatSelected(seatSelected.concat(seatReserved))
    setSeatReserved([])
  }


  return (
    <>
      <h1>Seat Reservation System</h1>
      <DrawGrid
        seat={seat}
        setSeat={setSeat}
        available={seatAvailable}
        reserved={seatReserved}
        selected={seatSelected}
        onClickData={onClickData}
        checktrue={checktrue}
        handleSubmited={handleSubmited}
      />
    </>
  );
}


export default SeatBooking;