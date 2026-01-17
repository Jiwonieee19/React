function Button3() {
    //INLINE CSS STYLING IS CONVENIENT AND EASY TO UNDERSTAND
    //IT PREVENTS GLOBAL STYLE CONFLICT COZ ITS NOT WORKING WITH CLASS NAME
    //GREAT FOR ISOLATED COMPONENTS WITH MINIMAL STYLING
    //CONS, LESS MAINTAINABLE IN LARGER SCALE PROJECT AND REDUCE THE READABILITY OF THE CODE

    const styles = {
        backgroundColor: "blue",
        fontFamily: "Arial",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return (
        <button style={styles}>IM INLINE</button>
    );
}

export default Button3