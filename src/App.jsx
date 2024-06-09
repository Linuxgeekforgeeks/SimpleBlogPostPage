import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostMain from "./pages/postsPage";
import SingleBlog from "./pages/singleBlog";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostMain />} />
        <Route path="/singlePost" element={<SingleBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
