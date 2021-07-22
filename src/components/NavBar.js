import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const LinksElement = links.map((link) => {
    return <a key={link} href={'#'.concat(link)}>{link}</a>;
  });
  return <nav>{LinksElement}</nav>;
}

export default NavBar;
