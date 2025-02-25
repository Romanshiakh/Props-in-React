
import Student from "./student.jsx"

function App()
{

  return (
    <>

      {/*    props =  read-only properties that are shared between components.
              A parent component can send data to a child component.
              key=value
 */}
      <Student name="Roman" age={21} isStudent={true}></Student>

      <Student name="Anna" age="34" isStudent={false}></Student>

      <Student name="Alex" age="20" isStudent={true}></Student>

      {/* FOR Default props */}
      <Student></Student>
      

      {/* FOR PROPTYPES : Here is example */}
      {/* <Student name="" age={} isStudent={true}></Student>  */}
        {/* So if i dont pass name and the age there or if i pass 
          [ name = 44 ] it will show error in [CONSOLE] */}
    </>
  )
}

export default App
