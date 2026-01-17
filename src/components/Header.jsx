function Header({a,b, data}) {
  // Aceesing props

  console.log("Header props a:", a);
  console.log("Header props b:", b);

  console.log("Header props data:", data);

  return (
    <header className="header">
    <h1>My Website </h1>

      {
        a && <p>a is {a}</p>
        // trueValue && show something
      }

      <p>b is {b}</p>

      <p>Learning React Basics</p>
    </header>
  );
}

export default Header;