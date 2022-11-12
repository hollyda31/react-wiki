import React from "react";

function Home() {
  return (
    <div class="main">
      <h1>Coding Wiki</h1>
      <h2>All the Stuff I Use a Lot</h2>
      <div>
        This wiki contains all the stuff I use a lot. I consider it a sort of
        extended bookmark file, as well as a place for me to stick notes and
        other information I glean from random conversations, articles, videos,
        and other learning opportunities I encounter.
        <div class="contents">
          <ul>
            <li>
              <a href="#generalCSStuff">General Computer Science Stuff</a>
            </li>
            <ul>
              <li>
                <a href="#favoriteCSSites">Favorite CS Sites</a>
              </li>
              <li>
                <a href="#subredditsILike">Subreddits I Like</a>
              </li>
            </ul>
            <li>
              <a href="#cloudStuff">Cloud Stuff</a>
            </li>
            <ul>
              <li>
                <a href="#aws">AWS</a>
              </li>
            </ul>
            <li>
              <a href="#codingResources">Coding Resources</a>
            </li>
            <ul>
              <li>
                <a href="#BASH">BASH</a>
              </li>
              <li>
                <a href="#python">Python</a>
              </li>
              <li>
                <a href="#javascript">JavaScript</a>
              </li>
              <li>
                <a href="#frontEndWebStuff">Front End Web Stuff</a>
              </li>
            </ul>
          </ul>
        </div>
        <h3 id="generalCSStuff">General Computer Science Stuff</h3>
        <h4 id="favoriteCSSites">Favorite CS Sites</h4>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/">Geeks for Geeks:</a> This
            is just a great CS site - tons of resources about almost anything.
            Parts can get a little advanced, but it's a great place to start.
          </li>
          <li>
            <a href="https://stackoverflow.com/">StackOverflow:</a> The
            granddaddy of CS sites. Ask a question, get an answer. Honestly, I'm
            not as big a fan of this site as I probably should be? Stuff in here
            can get extremely granular, so it can sometimes be hard to find the
            answer for your question. IDK, maybe I just need to really dig in
            and get better acquainted with it.
          </li>
          <li>
            <a href="https://www.theodinproject.com/">The Odin Project:</a>
            Primarily a CS "course" based around free resources, but it really
            requires a high degree of self-sufficiency. A lot of the resources
            really require you to do your own work, and not all of them include
            solutions. Great for tutorials and how-to guides, and really good if
            you want a step-by-step way to walk through learning CS.
          </li>
          <li>
            <a href="https://github.com/hollyda31">My Own Personal GitHub:</a>
            Like what I'm doing? Have suggestions for immprovement? Come say hi!
          </li>
        </ul>
        <h4 id="subredditsILike">Subreddits I Like</h4>
        <ul>
          <li>
            <a href="https://www.reddit.com/r/cscareerquestions/">
              CS Career Questions Subreddit
            </a>
            - I go to this one often, as it's a great resource for questions and
            answers about anything related to Computer Science careers.
          </li>
          <li>
            <a href="https://www.reddit.com/r/ProgrammerHumor/">
              Programmer Humor Subreddit
            </a>
            - If you want to understand an industry, find out what they're
            laughing about! This subreddit is really good for that.
          </li>
          <li>
            <a href="https://www.reddit.com/r/programminghorror/">
              Programming Horror Subreddit
            </a>
            - Helping me learn what NOT to do
          </li>
          <li>
            <a href="https://www.reddit.com/r/shittyprogramming/">
              Shitty Programming Subreddit
            </a>
            - Another like the above
          </li>
          <li>
            <a href="https://www.reddit.com/r/learnprogramming/">
              Learn Programming Subreddit
            </a>
            - A good place to ask "stupid" questions - anything where you feel
            like you ought to know this already. They're a great bunch for
            helping you understand stuff without judging you.
          </li>
        </ul>
        <h3 id="cloudStuff">Cloud Stuff</h3>
        <h4 id="aws">AWS</h4>
        <ul>
          <li>
            <a href="aws.html">My AWS Page</a> - Work in Progress
          </li>
        </ul>
        <h3 id="codingResources">Coding Resources</h3>
        <h4 id="BASH">BASH</h4>
        <ul>
          <li>
            <a href="bash.html">My Bash Page</a> - Work in Progress
          </li>
          <li>
            <a href="https://ostechnix.com/list-useful-bash-keyboard-shortcuts/">
              List of Useful Bash Keyboard Shortcuts
            </a>
          </li>
          <li>
            <a href="https://tldp.org/LDP/Bash-Beginners-Guide/html/">
              Bash Guide for Beginners
            </a>
            - Very Thorough!
          </li>
          <li>
            <a href="https://devhints.io/bash">Bash Scripting CheatSheet</a> -
            Minimal info, but good for a reminder
          </li>
          <li>
            <a href="https://www.gnu.org/software/bash/manual/bash.html">
              The Bash Manual
            </a>
            - source documentation
          </li>
          <li>
            <a href="http://mywiki.wooledge.org/BashGuide">Greg's Bash Wiki</a>{" "}
            - A pretty good wiki version of Bash stuff, aimed at beginners
          </li>
          <li>
            <a href="https://wiki.bash-hackers.org">The Bash Hackers Wiki</a> -
            A good human-readable wiki, very detailed with lots and lots of
            great info but still written in a pretty human-readable way
          </li>
          <li>
            <a href="https://www.shellcheck.net">ShellCheck</a> - This is a tool
            designed for testing out and finding bugs in your Shell script.
          </li>
        </ul>
        <h4 id="python">Python</h4>
        <ul>
          <li>
            <a href="python.html">My Python Page</a> - Work in Progress
          </li>
          <li>
            <a href="https://www.pythoncheatsheet.org/">Python Cheatsheet</a> -
            Tons of info, very detailed, great resource
          </li>
          <li>
            <a href="https://github.com/gto76/python-cheatsheet">
              Comprehensive Python Cheatsheet on GitHub
            </a>
            - constantly evolving, but very good
          </li>
          <li>
            <a href="https://ehmatthes.github.io/pcc_2e/cheat_sheets/cheat_sheets/">
              Python Crash Course
            </a>
            - These resources go to a book, but there's a ton of free
            cheatsheets and other info on this site.
          </li>
        </ul>
        <h4 id="javascript">JavaScript</h4>
        <ul>
          <li>
            <a href="javascript.html">My JavaScript Page</a> - Work in Progress
          </li>
          <li>
            <a href="https://javascript.info/">
              The Modern JavaScript Tutorial
            </a>{" "}
            - This is one of my favorite JS resources, because it explains
            everything in a way that's really easy to understand. Sometimes the
            MDN and W3 Schools docs can get a little difficult to make sense of,
            especially if you're a n00b.
          </li>
        </ul>
        <h4 id="frontEndWebStuff">Front End Web Stuff</h4>
        <ul>
          <li>
            <a href="frontend.html">My Front End Dev Page</a> - Work in Progress
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/">Mozilla Web Docs</a>
          </li>
          <li>
            <a href="https://css-tricks.com/">CSS Tricks</a>
          </li>
          <li>
            <a href="https://reactjs.org/">React Docs</a>
          </li>
          <li>
            <a href="https://redux.js.org/">Redux Docs</a>
          </li>
          <li>
            <a href="https://learn.wordpress.org/">WordPress Learning Center</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
