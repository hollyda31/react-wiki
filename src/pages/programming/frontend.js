import React from "react";

function FrontEnd() {
  return (
    <div>
      <div class="homelink">
        <a href="index.html">Return to Homepage</a>
      </div>
      <h1>Coding Wiki Front End Dev Page</h1>
      <h2>Accessibility Standards</h2>
      <p>
        I firmly believe that mobile responsiveness and web accessibility are no
        longer optional features for ANY website as we move into the 2020s and
        beyond. These are absolutely mandatory for any website and any business.
      </p>
      <p>Here are a few of my accessibility bookmarks:</p>
      <ul>
        <li>
          <a href="https://www.w3.org/TR/WCAG20/">
            Web Content Accessibility Guidelines (WCAG) 2.0:
          </a>{" "}
          These are the "official" guidelines - well, as official as anything on
          the Internet. They're dense and kinda hard to read, but it's a good
          resource for official documentation.
        </li>
        <li>
          <a href="https://www.section508.gov/develop/universal-design/">
            Section 508 Universal Design Standards:
          </a>{" "}
          If you're building sites for the government (or even if you're not,
          but you want to be super, super careful), here's the Section 508
          standards. Even if you're a civilian, the Section 508 takes a lot of
          the accessibility guidelines and puts them into a format that's a bit
          easier to read and understand.
        </li>
        <li>
          <a href="https://www.ssa.gov/accessibility/files/SSA_Alternative_Text_Guide.pdf">
            Social Security Administration Guide to Alternative Text:
          </a>{" "}
          This is an easy-to-read guide to writing alt text within the SSA, so
          it provides some concrete guidance on how to create meaningful alt
          text for screenreaders.
        </li>
      </ul>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h3>THAT STUPID ALIGN/JUSTIFY CONUNDRUM!</h3>
      <p>
        I swear, I HATE this stupid thing!!! When do you align? When do you
        justify? When do you align self, items, content? GRRRR!!!!! I can never
        keep the stupid rules straight!
      </p>
      <p>
        All HTML elements are positioned static by default. Once you change
        that, it changes what works.
      </p>
      <h4>Inside a Flexbox</h4>
      <p>
        Your Flexbox has a main axis and a cross axis. The main axis is the
        direction your blocks flow on a desktop with plenty of space to spread
        out. By default, this is "row". If you change the axis to "column", that
        changes it.
      </p>
      <p>
        So all Flexbox stuff is based on whether you're talking about a MAIN
        axis or a CROSS axis.
      </p>
      <p>
        The second question for Flexbox alignment is whether you're dealing with
        content, items, or self. If you're setting an alignment for the entire
        Flexbox, you'd use content. This would control the alignment of the
        entire container or block. If you're only controlling the alignment
        within the block, you'll use items.
      </p>
      <p>
        Self won't be used a lot, but it's mainly used for controlling a section
        of items within the block.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Axis</th>
            <th>Piece</th>
            <th>Command</th>
          </tr>
          <tr>
            <td>Main</td>
            <td>Block Position</td>
            <td>justify-content</td>
          </tr>
          <tr>
            <td>Main</td>
            <td>Content Inside Blocks</td>
            <td>justify-items</td>
          </tr>
          <tr>
            <td>Main</td>
            <td>Content Inside a Block (overrides justify-items)</td>
            <td>justify-self</td>
          </tr>
          <tr>
            <td>Cross</td>
            <td>Block Position</td>
            <td>align-content</td>
          </tr>
          <tr>
            <td>Cross</td>
            <td>Content Inside Blocks</td>
            <td>align-items</td>
          </tr>
          <tr>
            <td>Cross</td>
            <td>Content Inside a Block (overrides align-items)</td>
            <td>align-self</td>
          </tr>
        </tbody>
      </table>
      <h4>Most Other Places</h4>
      <ul>
        <li>
          <strong>text-align:</strong> Horizontal alignment of text outside of a
          grid or flexbox
        </li>
        <li>
          <strong>vertical-align:</strong> Vertical alignment of text that's not
          in a grid or flexbox
        </li>
      </ul>
      <h4>Centering Images</h4>
      <p>
        <strong>Margin Hack:</strong> This works for centering images.
      </p>
      <p>
        Display as a block, then set left and right margins to "auto". Make sure
        the image width is set to something less than 100% of the max-width.
        Example:
      </p>
      <div class="block">
        <code>img &#10101;</code>
        <code>display: block;</code>
        <code>margin-left: auto;</code>
        <code>margin-right: auto;</code>
        <code>width: 40%;</code>
        <code>}</code>
      </div>
    </div>
  );
}

export default FrontEnd;
