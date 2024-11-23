import Admin from "./Admin";
// import Form from "./Form";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./View";
import Check from "./Check";
import Thank from "./Thank";
import { Maintience } from "./Maintience";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Maintience />} />
          <Route exact path="/Admin-login" element={<Admin />} />
          <Route exact path="/Admin-view" element={<View />} />
          <Route exact path="/check" element={<Check />} />
          <Route exact path="/main/Thanks" element={<Thank />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
