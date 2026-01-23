const User = ({key,name,email}) => {
  return (
    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", gap: "10px"}} key={key}>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

export default User