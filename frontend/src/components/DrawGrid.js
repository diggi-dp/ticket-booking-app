import React from 'react'


const DrawGrid = (props) => {

    // destructure the props 
    const { handleSubmited, seat, selected, reserved, checktrue, onClickData } = props;

    return (
        <>
            {/* button for book the seat  */}
            <button className='button' onClick={() => handleSubmited()} >
                💺Book Seat💺
            </button>


            <div style={{ marginTop: '-25px' }}>
                {/* map the row of seats  */}
                {seat.map((item, idx) => (
                    <ul
                        key={idx}
                        style={{ display: 'flex', justifyContent: 'center', padding: '0px', margin: '0px' }}
                    >
                        {/* map the seats in perticular row */}
                        {item.map(((nesItem, i) => (
                            <li
                                key={i}
                                className={` li ${selected.indexOf(nesItem) > -1
                                    ? "reserved"
                                    : reserved.indexOf(nesItem) > -1
                                        ? "selected"
                                        : "available"}`}
                                onClick={checktrue(nesItem) ? () => onClickData(nesItem) : null}
                            >
                                {nesItem}{" "}
                            </li>
                        )))}
                    </ul>
                ))}
            </div>

        </>
    );


}
export default DrawGrid;