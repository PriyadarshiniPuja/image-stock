import React, { useEffect } from "react";
import { Grid, Card } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../actions/posts";

export default function PostDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { postData } = useSelector((state) => {
    console.log("state", state);

    return { postData: state.posts.postData || {} };
  });
  useEffect(() => {
    dispatch(getPostDetail(id));
  }, [dispatch]);
  console.log("in post details", postData);
  return (
    <div
      style={{
        marginTop: 20,
        padding: 30,
      }}
    >
      <Grid container>
        <h3> Post Detail ...</h3>
      </Grid>

      <Grid container>
        {postData !== undefined ? (
          <>
            <Grid columns={6}>
              <Card key={postData._id}>
                <img
                  height="350"
                  src={
                    postData.image ??
                    "https://th.bing.com/th/id/R.4d467149132aea6da9aacf5421ddf82c?rik=SKlOkssKa92Y6A&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image-1680x1050.jpg&ehk=iqDwR9dQl7ICwHnf43mg5gcBP%2boZTFX8gnEkw5fBdRI%3d&risl=&pid=ImgRaw&r=0"
                  }
                  alt="profile-img"
                  className="profile-img-card"
                />
              </Card>
            </Grid>
            <Grid
              columns={6}
              style={{
                marginBottom: 10 + "px",

                marginLeft: 10 + "px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                {postData.title}
              </p>
              <p
                style={{
                  fontSize: 16 + "px",
                }}
              >
                {postData.description}
              </p>

              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Posted By:
                </span>{" "}
                {postData.createdBy}
              </p>
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Created On:
                </span>{" "}
                {Date(postData.createdAt)}
              </p>
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Comments:
                </span>
                {/* {postData.comments} */}
              </p>
            </Grid>
          </>
        ) : (
          <>
            <div>No post Found</div>
          </>
        )}
      </Grid>
    </div>
  );
}
