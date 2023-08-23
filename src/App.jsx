import HelloWorld from "./components/HelloWorld";
import { Component, useState } from "react";

// function App() {
//   const [students, setStudents] = useState(0);
//   const title = "Hi Chiamaka";

//   const handleAddStudent = () => {
//     setStudents(students + 1);
//   };

//   const handleReset = () => {
//     setStudents(0);
//   };

//   return (
//     <>
//       <HelloWorld
//         style={{ color: "blue" }}
//         title={title}
//         description="An AltSchool Student"
//         handleAddStudent={handleAddStudent}
//         handleReset={handleReset}
//       />
//       <div>{students}</div>
//       {/* <button onClick={handleAddStudent}>Add Student 2</button> */}
//     </>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: 0,
    };

    // this.handleAddStudent = this.handleAddStudent.bind(this);
  }

  handleAddStudent() {
    this.setState((state) => ({ students: state.students + 1 }));
  }

  handleReset = () => {
    this.setState({ students: 0 });
  };

  render() {
    const title = "Hi Sylvester";

    return (
      <>
        <HelloWorld
          style={{ color: "blue" }}
          title={title}
          description="An AltSchool Student"
          handleAddStudent={this.handleAddStudent.bind(this)}
          handleReset={this.handleReset}
        />
        <div>{this.state.students}</div>
        {/* <button onClick={handleAddStudent}>Add Student 2</button> */}
      </>
    );
  }
}

export default App;
