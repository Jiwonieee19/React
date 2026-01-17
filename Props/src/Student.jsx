// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
// age: propTypes.number
// this is important for debugging purposes
// its a good practice to include propTypes everytime u use props


// defaultProps = default values for props in case they are not passed from the parent component
// name: Guest

import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            {/* BOOLEAN DONT DISPLAY DIRECTLY TO THE DOM, THATS WHY WE NEED TERNARY */}
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool,
}
//the imported vname/var will be used during usage of function

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
// this are the default values, 
// but this only works on react 17 and below, using parameters are the recoms now, like arrow functions, remove props and put default parameters
// like this one
// function Student({ name = "Guest", age = 0, isStudent = false }) {
//     return (
//         <div className="student">
//             <p>Name: {name}</p>

export default Student