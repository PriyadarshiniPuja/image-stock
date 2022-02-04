import React, { Component, useEffect } from "react";
import { Input, Grid, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts";
import AppHeader from "./app-header.component";

const Posts = () => {
  const dispatch = useDispatch();

  const { posts } = useSelector((state) => {
    return {
      posts: state.posts.posts || [],
    };
  });
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Grid container justifyContent="start">
        {posts.map((data) => {
          return (
            <Link
              to={`/post/${data._id}`}
              key={data._id}
              style={{ textDecoration: "none" }}
            >
              <Grid columns={4}>
                <Card
                  style={{
                    margin: 10,
                    padding: 10,
                  }}
                >
                  <img
                    height="200"
                    src={
                      data.image
                        ? data.image
                        : "https://th.bing.com/th/id/R.4d467149132aea6da9aacf5421ddf82c?rik=SKlOkssKa92Y6A&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image-1680x1050.jpg&ehk=iqDwR9dQl7ICwHnf43mg5gcBP%2boZTFX8gnEkw5fBdRI%3d&risl=&pid=ImgRaw&r=0"
                    }
                    alt="profile-img"
                    className="profile-img-card"
                  />
                  <h3> {data.title}</h3>
                  <p> {data.description}</p>
                </Card>
              </Grid>
            </Link>
          );
        })}
      </Grid>
    </div>
  );
};

export default Posts;
