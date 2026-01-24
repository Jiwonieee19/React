import React, { useContext } from 'react';
import { userContext } from './ComponentA.jsx'
//you can have multiple child here as long as it belongs to the heirarchy

function ComponentD() {

    const user = useContext(userContext);

    return (<div className="box">
        <h2>COMPONENT D</h2>
        <h3>Bye {user}</h3>
    </div>)
}

export default ComponentD