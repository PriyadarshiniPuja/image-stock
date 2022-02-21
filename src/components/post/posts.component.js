import React, { useEffect, useState } from "react";
import { Grid, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";

const Posts = () => {
  const dispatch = useDispatch();
  // const [loading, setLoading] = useState(false);

  const { posts, loading } = useSelector((state) => {
    console.log("sa", state);
    return {
      loading: state.posts.loading || false,
      posts: state.posts.posts || [],
    };
  });
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log("loading", loading);

  if (loading) {
    return (
      <Grid container justifyContent="center">
        <img
          height="200"
          src="https://flevix.com/wp-content/uploads/2019/07/Spin-Preloader-1.gif"
        />
      </Grid>
    );
  }
  return (
    <div>
      <Grid
        container
        style={
          {
            // padding: "0 110px",
          }
        }
      >
        {posts.length > 0 ? (
          posts.map((data) => {
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
                      width="320"
                      src={
                        data.image
                          ? data.image
                          : "//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                      }
                      alt="profile-img"
                      className="profile-img-card"
                    />
                    <h3 className="title"> {data.title}</h3>
                    <p>
                      {" "}
                      {data.description.trim().length > 40
                        ? data.description.trim().substring(0, 35) + "..."
                        : data.description.trim()}
                    </p>
                  </Card>
                </Grid>
              </Link>
            );
          })
        ) : (
          <Grid container justifyContent="center" alignItems="center">
            <p>No Post Found!</p>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Posts;
