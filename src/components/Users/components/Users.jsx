import User from './User'

const Users = ({users}) => {
  console.log("users : ",users);
  return (
    <div style={{display: "flex",flexDirection: "column"}}>
      <h3>users component</h3>
        
      <div className="">
        {
        users.map((user)=> <User key={user.id} name={user.name} email={user.email} />)
      }
      </div>

    </div>
  )
}

export default Users;