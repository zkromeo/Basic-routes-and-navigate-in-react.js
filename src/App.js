import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import Back from "./component/back";
import Frontpage from "./component/frontpage";
import Main from "./component/Main";
<source />;
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/back" element={<Back />} />
        <Route path="/front" element={<Frontpage />} />
        {/* <Route path="/front" element={<Main/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
