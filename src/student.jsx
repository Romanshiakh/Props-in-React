import PropTypes from 'Prop-types'

function Student(props)
{
    return (
        <div className="student">
            <p>Name:{props.name}</p>
            <p>Age :{props.age}</p>
            <p>IsStudent :{props.isStudent ? "Yes" : "NO"}</p>
        </div>
    );
}

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number

Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}

// defaultProps = default values for props in case they are not
//                            passed from the parent component
//                            name: "Guest"

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}


export default Student