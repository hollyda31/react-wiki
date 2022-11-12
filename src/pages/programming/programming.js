import React from "react";

function Programming() {
  return (
    <div>
      <h1>Programming Category Page</h1>
      <p>This is the Programming Category Page.</p>
      <div class="contents">
        <ul>
          <li>
            <a href="./aws">Amazon Web Services (AWS)</a>
          </li>
          <li>
            <a href="./frontend">Front End Development</a>
          </li>
          <ul>
            <li>This section includes HTML & CSS</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default Programming;
