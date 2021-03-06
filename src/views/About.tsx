import * as React from "react";
import { Link } from "react-router-dom";

interface IAboutProps {}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>{`That feels like an existential question, don't you think?`}</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default About;
