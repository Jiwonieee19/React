import Trex from './assets/trex.png'

function Card() {
    //in jsx, class is a reserve keyword, we instead use className to call the variable of css style
    return (
        <div className="card">
            <img className="card-image" src={Trex} alt="T-Rex pic" />
            <h2 className="card-title">T-REX</h2>
            <p className="card-text">This is a dino cards and have effects during relapsing of ryan</p>
        </div>
    );
}

export default Card