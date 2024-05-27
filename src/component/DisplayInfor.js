import React, { useState, useEffect } from "react";
import './DisplayInfor.scss';
// class DislayInfor extends React.Component {
//   state = {
//     isShowListUser: true,
//   };
//   handleShowhide = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };
//   render() {
//     const { listUsers } = this.props;
//     // console.log(listUsers);
  
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <div>
//             {listUsers.map((user, index) => {
//               console.log(user)
//               return (
//                 <div key={user.id} clasName={+user.name > 18 ? "green" : "red"}>
//                   <div>name is {user.name}</div>
//                   <div>age is {user.age}</div>
//                   <div>
//                     <button onClick ={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                   </div>
//                   <hr />
//                 </div>
          
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
const DislayInfor = (props) => {
  const { listUsers } = props;
  const[isShowHideListUser, setShowHideListUser] =   useState(true);
 const handleShowhideListUser = () => {
      setShowHideListUser(!isShowHideListUser);
 }
 console.log("call me")
 useEffect(()=>{})
    return (
      <div className="display-infor-container">
        <div>
          <span onClick={() => handleShowhideListUser()}>
          {isShowHideListUser === true ? "Hide list user" : "Show list user"}
          </span>
        </div>
        {isShowHideListUser && (
          <div>
            {listUsers.map((user, index) => {
              console.log(user)
              return (
                <div key={user.id} clasName={+user.name > 18 ? "green" : "red"}>
                  <div>name is {user.name}</div>
                  <div>age is {user.age}</div>
                  <div>
                    <button onClick ={() => props.handleDeleteUser(user.id)}>Delete</button>
                  </div>
                  <hr />
                </div>
          
              );
            })}
          </div>
        )}
      </div>
    );
  }

export default DislayInfor;
