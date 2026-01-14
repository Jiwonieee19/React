function Hero() {

    const freya = "Freya" // outside the return braces, you can write code like js, no curlybraces wrap around it

    return (
        <div>
            <li>Ling</li>
            <li>Lucas</li>
            <li>This name from js variable: {freya}</li>
        </div>
    );
}

export default Hero