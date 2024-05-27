import React, {useState} from "react";
import AddUserInfor from "./AddUserInfor";
import DislayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "mmmm", age: "16" },
//       { id: 1, name: "mm", age: "25" },
//       { id: 1, name: "mmm", age: "70" },
//     ],
//   };
//   handleAddNewUser = (userObj) => {
//     console.log("check data:",userObj)
//     this.setState({
//       listUsers: [userObj,...this.state.listUsers],
//     });
//   };
//   handleDeleteUser = (userId) => {
//       let listUsersClone = this.state.listUsers.filter(item => item.id !== userId);
//       this.setState({
//         listUsers:listUsersClone
//   })
// }
//   render() {
//     state = {
//       listUsers: [
//         { id: 1, name: "mmmm", age: "16" },
//         { id: 1, name: "mm", age: "25" },
//         { id: 1, name: "mmm", age: "70" },
//       ],
//     };
//     handleAddNewUser = (userObj) => {
//       console.log("check data:",userObj)
//       this.setState({
//         listUsers: [userObj,...this.state.listUsers],
//       });
//     };
//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers.filter(item => item.id !== userId);
//         this.setState({
//           listUsers:listUsersClone
//     })
//   }
//     return (
//       <>
//       <div className="a">
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser}> </AddUserInfor>
//         <br />
//         <br />
//         <DislayInfor listUsers={this.state.listUsers}
//         handleDeleteUser = {this.handleDeleteUser}
//         ></DislayInfor>
//       </div>
//       <div className="b">
//       </div>
//       </>
//     );
//   }
// }
const MyComponent = (props) => {
  const [listUsers, setListUser] = useState([
       { id: 1, name: "mmmm", age: "16" },
       { id: 1, name: "mm", age: "25" },
       { id: 1, name: "mmm", age: "70" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUser([userObj, ...listUsers])
  };
  const handleDeleteUser = (userId) => {
      let listUsersClone = listUsers;
      listUsersClone = listUsersClone.filter(item => item.id !== userId);
      setListUser(listUsersClone)

}
    return(
      <>
      <div className="a">
        <AddUserInfor handleAddNewUser={handleAddNewUser}> </AddUserInfor>
        <br />
        <br />
        <DislayInfor listUsers={listUsers}
        handleDeleteUser = {handleDeleteUser}
        ></DislayInfor>
      </div>
      <div className="b">
      </div>
      </>
    )
}
export default MyComponent;
