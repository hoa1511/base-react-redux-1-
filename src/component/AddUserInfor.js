import React, {useState} from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "hhh",
//     address: "111",
//     age: "222",
//   };
//   handleClick = (event) => {
//     // console.log(">> hhhh");
//     console.log(">>Click me my button");
//     console.log("My nam is", this.state.name);
//     this.setState({
//       name: "mmm",
//     });
//   };
//   handleOnMouseOver(event) {
//     console.log(event.target);
//   }
//   handeOnChangeInput = (event) => {
//     this.setState({ name: event.target.value });
//   };
//   handeOnChangeAge = (event) => {
//     this.setState({ age: event.target.value });
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor((Math.random() *100) + 1) + 'random',
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         {" "}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>yn</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handeOnChangeInput(event)}
//           />
//           <label>ya</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handeOnChangeAge(event)}
//           />
//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor =(props) => {
  // state = {
  //   name: '',
  //   address: "111",
  //   age: '',
  // };
  const [name, setName] = useState('')
  const [address, setAddress] = useState('111')
  const [age, setAge] = useState('')
  // handleClick = (event) => {
  //   // console.log(">> hhhh");
  //   console.log(">>Click me my button");
  //   console.log("My nam is", this.state.name);
  //   this.setState({
  //     name: "mmm",
  //   });
  // };
  // handleOnMouseOver(event) {
  //   console.log(event.target);
  // }
  const handeOnChangeInput = (event) => {
    // this.setState({ name: event.target.value });
    setName(event.target.value)
  };
  const handeOnChangeAge = (event) => {
   setAddress(event.target.value)
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor((Math.random() *100) + 1) + 'random',
      name: name,
      age: age,
    });
  };
    return (
   
        <div>
          My name is {name} and I'm {age}
          <form onSubmit={(event) => handleOnSubmit(event)}>
            <label>yn</label>
            <input
              value={name}
              type="text"
              onChange={(event) => handeOnChangeInput(event)}
            />
            <label>ya</label>
            <input
              value={age}
              type="text"
              onChange={(event) => handeOnChangeAge(event)}
            />
            <button>submit</button>
          </form>
        </div>
      );
}
export default AddUserInfor;
