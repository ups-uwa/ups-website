import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Sponsors, Contact, Events, Documents, Clubroom } from "./pages"
import ScrollToTop from "./setup/ScrollToTop";


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/Our-Sponsors" element={<Sponsors />}/>
              <Route exact path="/Events" element={<Events />}/>
              <Route exact path="/Contact-Us" element={<Contact />}/>
              <Route exact path="/Clubroom" element={<Clubroom />}/>
              <Route exact path="/Documents" element={<Documents />}/>
            </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
    