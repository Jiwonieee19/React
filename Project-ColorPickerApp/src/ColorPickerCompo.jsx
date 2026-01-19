import React, { useState } from 'react';

function ColorPickerCompo() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1 style={{ color: color }}>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                {/* with any css property inside js, we need to enclose them with an object (another set of {}) */}
                <p>Current Color: {color}</p>
            </div>
            <label>Select a Color: </label>
            <input type="color" value={color} onChange={handleColorChange}></input>
            {/* naa an daay type color */}
        </div>
    )
}

export default ColorPickerCompo