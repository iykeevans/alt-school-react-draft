// const HelloWorld = (props) => {
//   const { title, description, handleAddStudent, handleReset, style } = props;

//   return (
//     <div>
//       <h1 style={style}>{title}</h1>
//       <p>{description}</p>
//       <button onClick={handleAddStudent}>Add Student</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

import { Component } from "react";

class HelloWorld extends Component {
  render() {
    const { title, description, handleAddStudent, handleReset, style } =
      this.props;

    return (
      <div>
        <h1 style={style}>{title}</h1>
        <p>{description}</p>
        <button onClick={handleAddStudent}>Add Student</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    );
  }
}

export default HelloWorld;
