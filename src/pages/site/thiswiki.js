import React from "react";

function ThisWiki() {
  return (
    <div>
      <div id="main">
        <h1>Notes About This Wiki</h1>
        <p>
          <h2>Contributing to This Wiki</h2>
          <p>
            If you're interested in contributing to this wiki, well... I hate to
            break it to you, but I don't yet have a great and simple way to do
            that. You can just email me directly at{" "}
            <a href="mailto: holly@hollyantle.com">holly@hollyantle.com</a> and
            I'll let you know as soon as I have an easy way to contribute to
            this wiki, and you can follow me on GitHub at{" "}
            <a href="https://github.com/hollyda31">
              https://github.com/hollyda31
            </a>
            . I don't yet have a repo up for this, as it's been difficult to
            stage it onto my existing host, but you can check out my other repos
            and just follow me, I guess. IDK. Whatever.
          </p>
          <h2>Special Characters</h2>
          Sometimes (but not all the time) - and I don't understand why or when
          it happens, but sometimes, the coding on this thing decides that I
          need to use HTML to type unique characters instead of just typing
          them. I don't know why this happens sometimes and not all the time.
          But to save myself time and energy, I'm going to give a link to the
          website I use here, and copy down the ones I use most often.
        </p>
        <p>
          The site I use most often is{" "}
          <a href="https://www.toptal.com/designers/htmlarrows/">
            this site by Toptal
          </a>
          . I use the codes listed as "HTML code" and it seems to work.
        </p>
        <p>
          Here's a list of the characters I use often enough that they get their
          own entries. These will be listed with spaces between the letters so
          they'll show up properly:
        </p>
        <table>
          <tr>
            <th>Symbol</th>
            <th>HTML Code</th>
          </tr>
          <tr>
            <td>Space</td>
            <td>& n b s p ;</td>
          </tr>
          <tr>
            <td>=</td>
            <td>& # 6 1 ;</td>
          </tr>
          <tr>
            <td>&#60;</td>
            <td>& # 6 0 ;</td>
          </tr>
          <tr>
            <td>&#62;</td>
            <td>& # 6 2 ;</td>
          </tr>
          <tr>
            <td>&#x7b;</td>
            <td>& # x 7 b ;</td>
          </tr>
          <tr>
            <td>&#x7d;</td>
            <td>& # x 7 d ;</td>
          </tr>
          <tr>
            <td>&#91;</td>
            <td>& # 9 1 ;</td>
          </tr>
          <tr>
            <td>&#93;</td>
            <td>& # 9 3 ;</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ThisWiki;
