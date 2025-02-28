# Student Component

The `Student` component is a simple React component that displays student information using props. It demonstrates the use of PropTypes for type checking and defaultProps for default values.

## Installation

To use the `Student` component, you need to have React installed in your project. If you haven't already, you can install it using npm:

```bash
npm install react
npm install prop-types
Usage
Import PropTypes:

javascript
import PropTypes from 'prop-types';
Create the Student Component:

javascript
function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Define PropTypes: PropTypes ensure that the passed values are of the correct datatype.

javascript
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};
Define DefaultProps: Default values for props in case they are not passed from the parent component.

javascript
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};
Export the Component:

javascript
export default Student;
Example
Here's an example of how to use the Student component in a parent component:

javascript
import React from 'react';
import Student from './Student';

function App() {
    return (
        <div>
            <Student name="John" age={20} isStudent={true} />
            <Student age={18} isStudent={false} />
        </div>
    );
}

export default App;
In the example above:

The first Student component receives all props (name, age, and isStudent) from the parent component.

The second Student component does not receive the name prop, so it defaults to "Guest".

License
This project is licensed under the MIT License - see the LICENSE.md file for details.
