import React, { useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import Header from "./Header";
import Topblock from "./topblock";
import Bottomblock from "./bottomblock";

function App(props) {
  const [block, setBlock] = useState(0);
  const [key, setKey] = useState(0);
  const [clicked, setClicked] = useState(0);
  const Changeblock = (block) => {
    setBlock(block);
  };
  const Changebutton = (key) => {
    setKey(key);
  };
  const Allfunkadd = (key) => {
    props.Getchaeck(true);
    props.Addseat(key);
    setClicked(1);
  };
  const Allfunkdel = (key) => {
    props.Getchaeck(false);
    props.Deletseat(key);
    Changebutton(0);
    setClicked(0);
  };
  return (
    <div>
      <Topblock
        hall={props.hall}
        Changeblock={Changeblock}
        block={block}
        param={{
          clicked: clicked,
          key: key,
        }}
        user={props.user}
      />
      <Bottomblock
        clicked={clicked}
        chosen={key}
        block={block}
        hall={props.hall}
        check={props.check}
        Allfunkadd={Allfunkadd}
        Allfunkdel={Allfunkdel}
        Changebutton={Changebutton}
        user={props.user}
      />
    </div>
  );
}

export default App;