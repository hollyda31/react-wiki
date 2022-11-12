import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div id="mainMenu">
      <nav class="navbar">
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to={"./CodingLang"}>Coding Languages</Link>
          </li>
          <li>
            <Link to={"./Programming"}>Programming</Link>
          </li>
          <li>
            <Link to={"./Misc"}>Miscellaneous</Link>
          </li>
          <li>
            <Link to={"./ThisWiki"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
