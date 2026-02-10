

// defaultProps = default values for props in case they are not passed from the parent component
//                 name: "Guest"


// propTypes = a mechanism that ensures that the passed value is of the correct datatype.
//              age: propTypes.number

import PropTypes from "prop-types"

function Student(props) {

    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: { props.isStudent ? "Student" : "Not Student"}</p>
        </div>
        
    );
}

// propTypes

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

// defaultProps

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student