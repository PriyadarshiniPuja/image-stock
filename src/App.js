import "./App.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import CreatePost from "./components/create-post.component";
import { useRoutes, Routes, Route } from "react-router-dom";
import Posts from "./components/posts.component";
import PostDetail from "./components/post-detail.component";
import AppHeader from "./components/app-header.component";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  let routes = (
    <>
      <AppHeader user={user} />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/posts" exact element={<Posts />} />
        <Route path="/post/:id" exact element={<PostDetail />} />
        <Route path="/create-post" exact element={<CreatePost />} />
      </Routes>
    </>
  );

  return routes;
}

export default App;
