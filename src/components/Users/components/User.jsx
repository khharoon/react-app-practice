const User = ({key,user,setSelectedUser,setUsers,handleDeleteUser}) => {

  function handleEdit(user){
    console.log("edit user:",user?.name);

    setSelectedUser(user);
  } 
  
  const handleDelete = (user)=>{
    console.log("delete user:",user?.name);
    // add delete logic here
setUsers((prev)=> prev.filter((u)=> u.id !== user.id));
  }

  return (
    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", gap: "10px"}} key={key}>
      <h3>{user?.name}</h3>
      <p>{user?.email}</p>
       <button onClick={()=>handleEdit(user)} style={{padding:"1px 8px",margin:"5px"}}>Edit</button>
      <button onClick={()=>handleDelete(user)} style={{padding:"1px 8px",margin:"5px"}}>delete</button>
      <button onClick={()=>handleDeleteUser(user?.id)}>delete with yt style</button>
    </div>
  )
}

export default User