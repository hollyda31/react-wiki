import React from "react";

function Javascript() {
  return (
    <div class="main">
      <div class="homelink">
        <a href="index.html">Return to Homepage</a>
      </div>
      <h1>Coding Wiki JavaScript Page</h1>
      <div class="contents">
        <ul>
          <li>
            <a href="#controllingFlow">Loops & Conditionals & Stuff</a>
          </li>
          <ul>
            <li>
              <a href="#conditionals">Conditionals</a>
            </li>
            <ul>
              <li>
                <a href="#ifConditionals">"If" Conditionals"</a>
              </li>
              <li>
                <a href="#yesNo">Yes/No (?) Conditionals</a>
              </li>
            </ul>
            <li>
              <a href="#loopsIterators">Loops & Iterators</a>
            </li>
            <ul>
              <li>
                <a href="#whileLoops">"While" Loops"</a>
              </li>
              <li>
                <a href="#iterators">Iterators</a>
              </li>
              <li>
                <a href="#forLoops">"For" Loops</a>
              </li>
              <li>
                <a href="#switchStatement">Switch Statements</a>
              </li>
            </ul>
          </ul>
        </ul>
      </div>
      <h2 id="controllingFlow">Conditionals & Loops & Stuff</h2>
      <h3 id="conditionals">Conditionals</h3>
      <h4 id="ifConditionals">"If" Conditionals</h4>
      <p>
        Formatting for the "if" conditional in JS says, "If ______, do ______.
        Else if ________, do _________. Else do ________." In this example, the
        "do" is implied rather than stated.
      </p>
      <p>
        One of my more experienced coworkers points out that you should ALWAYS
        have an "else" statement end the set. This helps to prevent errors.
      </p>
      <p>The standard format here is:</p>
      <div class="block">
        <code>if (condition) &#10100;</code>
        <code>&nbsp; &nbsp; &nbsp;action</code>
        <code>&#10101; else if (condition) &#10100;</code>
        <code>&nbsp; &nbsp; &nbsp;action</code>
        <code>&#10101; else &#10100;</code>
        <code>&nbsp; &nbsp; &nbsp;action</code>
        <code>&#10101;</code>
      </div>
      <p>
        For example, if I want to use this conditional to return a person's age
        range based on their date of birth, I might write:
      </p>
      <div class="block">
        <code>if (dateOfBirth &#60;&#61; "2004-11-07T00:00:00.01Z")</code>
        <code>&nbsp; &nbsp; &nbsp;return "Child"</code>
        <code>
          &#10101; else if (dateOfBirth &#60;&#61; "1957-11-07T00:00:00.01Z")
        </code>
        <code>&nbsp; &nbsp; &nbsp;return "Adult"</code>
        <code>&#10101; else &#10100;</code>
        <code>&nbsp; &nbsp; &nbsp;return "Senior"</code>
        <code>&#10101;</code>
      </div>
      <h4 id="yesNo">Yes/No</h4>
      <p>
        The question mark (?) is used as a way to quickly ask yes/no questions
        and create a yes/no conditional in JavaScript. This can be used singly
        or in multiples. See examples below:
      </p>
      <p>
        <strong>Example 1:</strong>
        <emphasis>Date of Birth Determines Message to an Adult Site</emphasis>
      </p>
      <p>The if/else way to write this:</p>
      <div class="block">
        <code>if (dateOfBirth &#60;&#61; "2004-11-07T00:00:00.01Z")</code>
        <code>&nbsp; &nbsp; &nbsp;accessAllowed = true</code>
        <code>&#10101; else &#10100;</code>
        <code>&nbsp; &nbsp; &nbsp;accessAllowed = false</code>
        <code>&#10101;</code>
      </div>
      <p>The yes/no (?) way to write this:</p>
      <div class="block">
        <code>
          let accessAllowed = (dateOfBirth &#60;&#61; "2004-11-07T00:00:00.01Z")
          ? true : false;
        </code>
      </div>
      <p>
        <strong>Example 2:</strong>
        <emphasis>
          Date of Birth Determines Access to a Movie (This demonstrates multiple
          ? statements)
        </emphasis>
      </p>
      <p>The if/else way to write this:</p>
      <div class="block">
        <code>if (dateOfBirth >= "2004-11-07T00:00:00.01Z")</code>
        <code>&nbsp; &nbsp; &nbsp;accessAllowed = "All Movies"</code>
        <code>
          &#10101; else if (dateOfBirth >= "2009-11-07T00:00:00.01Z") &#10100;
        </code>
        <code>&nbsp; &nbsp; &nbsp;accessAllowed = "PG-13 Movies"</code>
        <code>&#10101; else &#10100;</code>
        <code>&nbsp; &nbsp; &nbsp;accessAllowed = "Kids Movies Only""</code>
        <code>&#10101;</code>
      </div>
      <p>The yes/no (?) way to write this:</p>
      <div class="block">
        <code>
          let accessAllowed = (dateOfBirth >= "2004-11-07T00:00:00.01Z") ? "All
          Movies" :
        </code>
        <code>
          &nbsp; &nbsp; &nbsp; (dateOfBirth >= "2009-11-07T00:00:00.01Z") ?
          "PG-13 Movies" :
        </code>
        <code>&nbsp; &nbsp; &nbsp; "Kids Movies Only" :</code>
      </div>
      <h3 id="loopsIterators">Loops & Iterators</h3>
      <h4 id="whileLoops">While Loops</h4>
      <p>
        There are two different ways to do this. The first is to put "while" at
        the top of the loop, writing it this way:
      </p>
      <div class="block">
        <code>while (condition) &#10100;</code>
        <code> &nbsp; &nbsp; &nbsp; // code to be run</code>
        <code>&#10101;</code>
      </div>
      <p>
        The second way is a "Do...While" loop, where you put the "while" at the
        bottom of the loop. It looks like this:
      </p>
      <div class="block">
        <code>do &#10100;</code>
        <code> &nbsp; &nbsp; &nbsp; // code to be run</code>
        <code>&#10101; while (condition)</code>
      </div>
      <p>
        Because of the difference in how these loops are written, and because JS
        reads our script from the top to the bottom, the main difference is that
        the Do...While version will run a single version of the loop before
        making it to the "while" conditional.
      </p>
      <p>
        For example, let's say that you write your loop to say that if x is less
        than 3, the code should run. If x is 4 and you run a "while" loop, the
        code will run 0 times. If x is 4 and you run a "do...while" loop, the
        code will run 1 time. It will run through a single time before it hits
        the "while" part of the script and evaluates the condition.
      </p>
      <h4 id="iterators">Iterators</h4>
      <p>
        These "while" loops are frequently used with iterators. If you want the
        loop to repeat a certain number of times, you would use an iterator
        statement.
      </p>
      <p>
        For example, let's say that I want my code to print, "Beware the Ides of
        March" a total of 7 times. Doing this manually (copying and pasting the
        code) would be tedious. In a lengthy program, or in a program where I
        don't know the number of iterations, it could suck up a lot of
        processing power. So I can use this iterator to make it go the right
        number of times.
      </p>
      <p>The iterator code looks like this:</p>
      <div class="block">
        <code>let i = 0;</code>
        <code>while (i &#60; 7) &#10100;</code>
        <code> &nbsp; &nbsp; &nbsp; return "Beware the Ides of March";</code>
        <code> &nbsp; &nbsp; &nbsp; i++;</code>
        <code> &#10101; </code>
      </div>
      <p>
        In the above example, setting the variable with "let" (to make it a
        variable that can be changed) and then passing that variable into the
        function creates the iterator, and convention dictates that iterators
        are normally denoted by "i" unless that's already been used. The
        condition in the second line ("i &#60; 7") shows you how many iterations
        you plan to have of this particular loop. The number here can be
        replaced by a variable if you don't know the number.
      </p>
      <p>
        Inside the loop body, the first part (which can take multiple lines if
        needed) is the action you want the code to take, but it's important to
        always end the loop body with the "i++;" code. This iterates the "i"
        variable, which raises it by one number before returning the entire loop
        back up to the start of the "while" loop. At this point, it's
        re-evaluated.
      </p>
      <h4 id="forLoops">For Loops</h4>
      <p>
        The "for" loop is used more often than "while", but it's a little harder
        to parse. The loop body is the same, but here's the basic format:
      </p>
      <div class="block">
        <code>for (begin; condition; step)</code>
        <code> &nbsp; &nbsp; &nbsp; // loop body </code>
        <code> &#10101; </code>
      </div>
      <p>
        Remember the Ides of March example from up above? The "for" loop allows
        us to shrink that down.
      </p>
      <p>In that example, the "begin" piece was "let i = 0".</p>
      <p>The condition was "i &#60; 7".</p>
      <p>
        The step was that bit at the bottom of the loop, where we said, "i++".
      </p>
      <p>So, plug those in:</p>
      <div class="block">
        <code>for (let i = 0; i &#60; 7; i++)</code>
        <code> &nbsp; &nbsp; &nbsp; return "Beware the Ides of March" </code>
        <code> &#10101; </code>
      </div>
      <p>
        Here we can compress that longer bit of code into a shorter section by
        using a "for" loop.
      </p>
      <p>
        It's important to note that a "for" loop matches the "while" loop, NOT
        the "do...while" loop.
      </p>
      <p>
        Also of note: You can omit any of these criteria if you don't want them
        there. Leaving out the "begin" part would simply presume that we're
        beginning at 0. If you leave out the beginning and the step, it makes it
        equivalent to a "while" statement. You can also leave out everything and
        make it into an infinite loop. You have to leave the semicolons in
        whenever you're omitting something.
      </p>
      <h4 id="switchStatement">Switch Statement</h4>
      <p>
        I actually really love Switch statements! They take up more lines, but
        they're SOOOOO easy to write! And they're just a super clean way to
        direct statements to go where you want them to go based on different
        variables.
      </p>
      <p>
        Think of a switch statement like a switchboard operator. Given a
        different variable, she directs traffic to a different line.
      </p>
      <p>
        There are two ways to do a switch statement, and you need to know
        whether to use breaks or not. Normally, I would say to use breaks
        because, although it does add some extra lines of code, it allows the
        processor to exit the switch statement earlier, saving speed and
        processing time later.
      </p>
      <p>
        Technically, you don't NEED a break statement in your switch if there's
        no reason to have one. That is, if your variables cannot possibly hit on
        more than one case in your switch, you wouldn't really need a break
        statement. But I think it's just good practice to leave them in.
        (Personal opinion, though)
      </p>
      <p>
        Let's look first at a case where you would DEFINITELY need a switch
        statement, though. Let's go back to the earlier example of doing an age
        range based on birthdate. Our previous if/then statement works okay for
        only three categories, but what if we had more?
      </p>
      <div class="block">
        <code> switch (true) &#10100; </code>
        <code>
          &nbsp; &nbsp; &nbsp; case (dateOfBirth &#60;&#61;
          "19221107T00:00.00Z")
        </code>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Revered Elder"
        </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break; </code>
        <code>
          &nbsp; &nbsp; &nbsp; case (dateOfBirth &#60;&#61;
          "19421107T00:00.00Z")
        </code>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Senior Citizen"
        </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</code>
        <code>
          &nbsp; &nbsp; &nbsp; case (dateOfBirth &#60;&#61;
          "19571107T00:00.00Z")
        </code>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Older Adult"
        </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</code>
        <code>
          &nbsp; &nbsp; &nbsp; case (dateOfBirth &#60;&#61;
          "19721107T00:00.00Z")
        </code>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Mature Adult"
        </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</code>
        <code>
          &nbsp; &nbsp; &nbsp; case (dateOfBirth &#60;&#61;
          "19871107T00:00.00Z")
        </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Adult" </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</code>
        <code>
          &nbsp; &nbsp; &nbsp; case (dateOfBirth &#60;&#61;
          "19991107T00:00.00Z")
        </code>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Young Adult"
        </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</code>
        <code>
          &nbsp; &nbsp; &nbsp; case (dateOfBirth &#60;&#61;
          "20041107T00:00.00Z")
        </code>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Adolescent"
        </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</code>
        <code>
          &nbsp; &nbsp; &nbsp; case (dateOfBirth &#60;&#61;
          "20101107T00:00.00Z")
        </code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Child"</code>
        <code> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; break;</code>
        <code> &nbsp; &nbsp; &nbsp; default</code>
        <code>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return "Small Child"
        </code>
        <code> &#10101; </code>
      </div>
      <p>
        In the example above, if my date of birth was, for example, in 1980,
        this statement (without the break) might return the following:
      </p>
      <ul>
        <li>Older Adult</li>
        <li>Adult</li>
        <li>Young Adult</li>
        <li>Adolescent</li>
        <li>Child</li>
        <li>Small Child</li>
      </ul>
      <p>
        Because the switch statement would have evaluated each and every
        statement on the way down, it would've found several statements to be
        true. By including the "break" line, I forced the switch to end as soon
        as it found a single correct answer.
      </p>
      <p>
        It should also be noted that the expression listed in the very top line
        of the switch statement (in the parentheses) doesn't HAVE to read
        "true". You can include any statement you wish, and the switch statement
        will evaluate whether each of the cases provides a match to the
        expression in parentheses. I could easily have made that "false" or
        something else.
      </p>
    </div>
  );
}

export default Javascript;
