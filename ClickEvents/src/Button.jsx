function Button() {

    //onClick attributes
    const handleClick = () => console.log("OUCH!")

    //onClick with parameters
    const handleClickParameter = (name) => console.log(`HEY! ${name}, Stop ouching me`)

    //onClick with conditions
    let count = 0;
    const handleClickCondition = () => { //works fine if you need a parameter
        if (count < 3) {
            count++;
            console.log(`${count}`)
        } else {
            console.log("reached limit")
        }
    }

    // return (<button onClick={handleClick}>CLick Me</button>)
    // return (<button onClick={handleClickParameter("Bro")}>CLick Me</button>) //if without arrow function, it will directly invoke the onclick since it has a ()
    // return (<button onClick={() => handleClickParameter("Bro")}>Click Me</button>)
    return (<button onClick={handleClickCondition}>Click Me</button>) // onClick w/ conditions

}

export default Button