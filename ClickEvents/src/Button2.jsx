// events on onClick

function Button2() {

    const handleClick = (e) => console.log(e)
    // e or event is fine whatever you like, go to console, click the dropdown arrow, go to target dropdown, find whatever you like to use

    //sample changing text of the button
    const changeText = (e) => e.target.textContent = "CLICKED"

    // return (<button onClick={(e) => handleClick(e)}>Click Me, I'm Button 2</button>)
    return (<button onClick={(e) => changeText(e)}>Click Me, I'm Button 2</button>)

}

export default Button2