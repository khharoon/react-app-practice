import "./About.css";
import FirstPara from "./FirstPara";

function About() {
  return (
    <section className="about">
      <h2>About Us</h2>

      <div className="about-container">
        <FirstPara/>

        <SecondPara/>
      </div>
    </section>
  );
}

export default About;

function SecondPara() {
  return (
    <p>
      This is the second paragraph component. It provides additional
      information about our website and its purpose. We aim to deliver quality
      content to our users.
    </p>
  );
}