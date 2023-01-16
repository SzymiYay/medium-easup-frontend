import React from 'react';

import Today from "../components/Today/Today";
import Navbar from "../components/Navbar/Navbar";


function TodayPage() {
    return (
        <div>
            <Navbar/>
            <Today />
        </div>
    )
}

export default TodayPage;