function ChildrenComponent({ children, name }) {
  return (
    <>
    <div className="children-component">{children}</div>

    <h1>{name}</h1>
    </>
  );
}

export default ChildrenComponent;