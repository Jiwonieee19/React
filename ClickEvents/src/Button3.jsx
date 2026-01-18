function Button3() {

    const handleDoubleClick = (e) => e.target.textContent = "Clicked Doubled"

    return (<button onDoubleClick={(e) => handleDoubleClick(e)}>Double Click Me Daddy</button>)
}

export default Button3