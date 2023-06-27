import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compoenents/Navbar";
import Array from "./pages/Array";
import ArrayOfObject from "./pages/ArrayOfObject";
import ObjectPage from "./pages/ObjectPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/array" element={<Array />} />
            <Route path="/arrayobject" element={<ArrayOfObject />} />
            <Route path="/object" element={<ObjectPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
