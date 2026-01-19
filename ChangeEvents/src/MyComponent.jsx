import React, { useState } from 'react';

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [ship, setShip] = useState("");

    //onChange input text
    function handleOnChangeText(event) {
        setName(event.target.value);
    }

    //onChange input number
    function handleOnChangeNumber(event) {
        setQuantity(event.target.value)
    }

    //onChange textarea
    function handleOnChangeTextarea(event) {
        setComment(event.target.value);
    }

    //onChange select/dropdown
    function handleOnChangeSelect(event) {
        setPayment(event.target.value);
    }

    function handleOnChangeRadio(event) {
        setShip(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleOnChangeText} type="text" placeholder='Type Here' />
            <p>Name: {name}</p>
            <input value={quantity} onChange={handleOnChangeNumber} type="number" placeholder='Quantity' />
            <p>Quantity: {quantity}</p>
            <input value={comment} onChange={handleOnChangeTextarea} placeholder="Provide Instruction" />
            <p>Comment: {comment}</p>
            <select value={payment} onChange={handleOnChangeSelect}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Gcash">Gcash</option>
            </select>
            <p>Payment Method: {payment}</p>
            <label>
                <input type="radio" value="PickUp"
                    checked={ship === "PickUp"} onChange={handleOnChangeRadio} />
                {/* checked means ma fill in lang ang radio if ang value ky siya mismo, if wla ni, pede makapili ug duha*/}
                Pick Up
            </label>
            <br></br>
            <label>
                <input type="radio" value="Delivery"
                    checked={ship === "Delivery"} onChange={handleOnChangeRadio} />
                Delivery
            </label>
            <p>Shipping Method: {ship}</p>
        </div>
    )
}

export default MyComponent