import React from 'react';
import Room from './Room';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/room/1");
    }
    return(
        <div >
            <h1>Dashboard</h1>
        <div style={{background: 'lightblue', paddingBottom: '100%'}}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{display: "block", margin: '20px'}}>
                    <button onClick={handleClick
                }  style={{width: '200px', height: '200px', border: '1px solid black', background: 'white',  padding: '10px', cursor: "pointer"}}>
                    <Room/>
                </button>
                    <p>Room 1</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Dashboard;