import User from './User'

const Users = ({users,setSelectedUser,setUsers,handleDeleteUser}) => {
  console.log("users : ",users);
  return (
    <div style={{display: "flex",flexDirection: "column"}}>
      <h3>users component</h3>
        
      <div className="">
        {
        users.map((user)=> <User key={user.id}  user={user} setSelectedUser={setSelectedUser} setUsers={setUsers} handleDeleteUser={handleDeleteUser}/>)
      }
      </div>
     
    </div>
  )
}

export default Users;