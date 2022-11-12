import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/site/home";
import Programming from "./pages/programming/programming";
import Aws from "./pages/programming/aws";
import Frontend from "./pages/programming/frontend";
import CodingLang from "./pages/codinglang/codinglang";
import Bash from "./pages/codinglang/bash";
import Javascript from "./pages/codinglang/javascript";
import Misc from "./pages/misc/misc";
import Neurodivergence from "./pages/misc/neurodivergence";
import ThisWiki from "./pages/site/thiswiki";
import NoPage from "./pages/site/nopage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Programming" element={<Programming />} />
          <Route path="Aws" element={<Aws />} />
          <Route path="Frontend" element={<Frontend />} />
          <Route path="CodingLang" element={<CodingLang />} />
          <Route path="Bash" element={<Bash />} />
          <Route path="Javascript" element={<Javascript />} />
          <Route path="Misc" element={<Misc />} />
          <Route path="Neurodivergence" element={<Neurodivergence />} />
          <Route path="ThisWiki" element={<ThisWiki />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
