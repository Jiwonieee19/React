function Button4() {
    const imgUrl = './src/assets/trex.png';

    //try to disappear the pic on click
    const handleClick = (e) => e.target.style.display = "none"; //can be changed to another pic too, a lot of possibilities

    return (<img onClick={(e) => handleClick(e)} src={imgUrl}></img>)
}

export default Button4