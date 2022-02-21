import "./App.scss";
import Login from "./components/auth/login.component";
import Register from "./components/auth/register.component";
import CreatePost from "./components/post/create-post.component";
import { useRoutes, Routes, Route } from "react-router-dom";
import Posts from "./components/post/posts.component";
import PostDetail from "./components/post/post-detail.component";
import AppHeader from "./components/header/app-header.component";
import Profile from "./components/auth/profile.component";
import PrivateRoutes from "./components/auth/private-routes.component";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(`user`, user);
  let routes = (
    <>
      {user != undefined || user != null ? <AppHeader user={user} /> : ""}
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route
          path="/profile"
          exact
          element={<PrivateRoutes component={Profile} />}
        />
        <Route
          path="/posts"
          exact
          element={<PrivateRoutes component={Posts} />}
        />
        <Route
          path="/post/:id"
          exact
          element={<PrivateRoutes component={PostDetail} />}
        />
        <Route
          path="/create-post"
          exact
          element={<PrivateRoutes component={CreatePost} />}
        />
      </Routes>
    </>
  );

  return routes;
}

export default App;
