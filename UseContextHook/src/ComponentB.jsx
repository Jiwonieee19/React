import ComponentC from './ComponentC.jsx'


function ComponentB(props) {

    return (<div className="box">
        <h2>COMPONENT B {props.user}</h2>
        <ComponentC />
    </div>)
}

export default ComponentB