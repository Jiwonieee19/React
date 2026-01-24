import ComponentB from './ComponentB.jsx'
import React, { useState, createContext } from 'react'

export const userContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Ryy")

    return (<div className="box">
        <h2>COMPONENT A</h2>
        <h3>{`Hello ${user}`}</h3>
        {/* <ComponentB user={user} /> */}

        <userContext.Provider value={user}>
            <ComponentB user={user} />
        </userContext.Provider>

    </div>)
    //if we want to pass the user to component d using a props,
    //we will pass it in every level to reach it, like pass props to b, then c, then d, 
    //also know as prop drilling, now useContext makes this easier

}

export default ComponentA