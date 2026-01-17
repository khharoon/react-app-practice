import "./App.css";
import About from "./components/About";
import ChildrenComponent from "./components/ChildrenComponent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Menu from "./components/Menu";

function App() {

  console.log("above the return");

  let i = 10;

  let j = i === 10 ? "ten" : "not ten";

  let z = i === 10 && "ten";
  console.log("z value is ", z);

  // let j = condition  ? trueValue : falseValue ;


  console.log("j value is ", j);

  function sayHi(name){
    console.log(`Hello, ${name}`);
  }

  let data = {
    name: "Aizaz",
    age: 22,
    city: "Mumbai"
  }

  return (

    <div className="container">
      {/* header  */}
      <Header a={10} b="b" data={data}/> 
      {/* passing props */}

      {/* Menu */}

      {
        i === 10 && <Menu />
      }

      {/* About  */}
      <About />

      {
        i === 10 ? sayHi("Aizaz") : console.log("i is not ten")
      }


      {/* Children */}
      {/* <ChildrenComponent children={1}/> */}
      <ChildrenComponent name="aizaz">

        <h6>children component</h6>

      </ChildrenComponent>


     <Layout>

      <Header/>

     </Layout>


      {/* Footer */}
      <Footer/>
    </div>

  );
}

export default App;
