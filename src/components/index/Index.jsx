import { useState } from "react";

import MenuBar from "../static/MenuBar";
import AuthBar from "../static/AuthBar";
import Header from "../static/Header";
import Logo from "../static/Logo";
import Menu from "../menu/Menu";
import Cart from "../static/Cart";

function Index() {
  const [menuMode, setMenuMode] = useState(false);

  return (
    <>
      <Header>
        <MenuBar setMenuMode={setMenuMode} />
        <Logo />
        <div style={{ display: "flex", columnGap: "20px" }}>
          <AuthBar />
          <Cart />
        </div>
      </Header>
      {menuMode && <Menu setMenuMode={setMenuMode} />}
    </>
  );
}

export default Index;
