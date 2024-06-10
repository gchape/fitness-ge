import { useState } from "react";

import Header from "../static/Header";
import Menu from "../menu/Menu";
import Aside from "../static/Aside";
import Logo from "../static/Logo";
import MenuBar from "../static/MenuBar";
import AuthBar from "../static/AuthBar";

function Index() {
  const [menuMode, setMenuMode] = useState(false);

  return (
    <>
      <Header>
        <MenuBar setMenuMode={setMenuMode} />
        <Logo />
        <AuthBar />
      </Header>
      {menuMode && <Menu setMenuMode={setMenuMode} />}
      <Aside />
    </>
  );
}

export default Index;
