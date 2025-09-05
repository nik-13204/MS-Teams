import React from "react";
import { Link } from "react-router-dom";

export default function ScheduledMeetings() {
  return (
    <div
      className="meet-box"
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ fontSize: "1rem" }}>Scheduled meetings</h3>
        <Link to="http://localhost:5173/calendar"><p style={{color:"#d6d6d6",fontSize:".9rem"}}>
          <i class="fa-solid fa-calendar-days">&nbsp;</i>View in calender</p>
        </Link>
      </div>
      <div className="meet-card">
        <p>You don't have any scheduled meeting</p>
      </div>
    </div>
  );
}
