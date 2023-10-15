import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Nav from "./components/Nav";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, Projects, Contact } from "./components/Main";

import F1 from "./components/F1";

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
      <hr></hr>
      <F1></F1>
    </div>
  );
}

export default App;
