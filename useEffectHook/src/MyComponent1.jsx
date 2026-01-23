// useEffect with return method, further explaination on MOUNT

import React, { useEffect, useState } from 'react'

function MyComponent1() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("EVENT ADDED COUNTS")

        return () => {
            window.removeEventListener("resize", handleResize); // removes after using means it will save a lot of space/data 
            console.log("EVENT REMOVED COUNTS")
        }
    }, []) //with mount, this only run only onces and doesnt need to add event listener every changes


    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [height]) // the useeffect will only work if the height is changed
    // putting only empty array will result to render this only once, thus give only 1 value for height and widht
    // if no array, it will run every renders that happens in this code
    // if array with values that indicates for you that if that value is changed, this useEffect will work

    // the problem with this is that we added a lot of event listener since every "resize" called and its normal but we can useEffect to only add it once, twice if we uses strictMode
    // window.addEventListener("resize", handleResize)
    // console.log("EVENT ADDED COUNTS")

    function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return (<div>
        <p>Height: {height}</p>
        <p>Width: {width}</p>
    </div>)
}

export default MyComponent1