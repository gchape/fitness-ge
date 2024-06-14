import { useState } from "react";

import MenuBar from "../static/MenuBar";
import AuthBar from "../static/AuthBar";
import Header from "../static/Header";
import Logo from "../static/Logo";
import Menu from "../menu/Menu";

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
    </>
  );
}

export default Index;
