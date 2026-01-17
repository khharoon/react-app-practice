import "./Layout.css";

function Layout({children}) {
  return (
    <div className="layout">
      <h1>Layout Component start</h1>
      <div className="content">
        {children}
      </div>
      <h1>Layout Component end</h1>
    </div>
  );
}

export default Layout;