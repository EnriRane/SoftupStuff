import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<p>auth</p>}>
          <Route path="login" element={<p>login</p>}></Route>
          <Route path="logout" element={<p>logout</p>}></Route>
        </Route>
        <Route path="/app" element={<p>Enri</p>}>
          <Route path="books" element={<p />}>
            <Route path=":id" element={<p>id of book</p>}></Route>
          </Route>
          <Route path="settings" element={<p>settings</p>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/app/books" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
