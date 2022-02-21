import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Button,
  FormControl,
  TextareaAutosize,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getPostDetail,
  sendCommentAction,
  deleteComment,
} from "../../actions/posts";

export default function PostDetail() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState();
  const { id } = useParams();
  const { postData, loading, user } = useSelector((state) => {
    return {
      postData: state.posts.postData || {},
      loading: state.posts.loading || false,
      user: state.auth.user,
    };
  });
  useEffect(() => {
    dispatch(getPostDetail(id));
  }, [dispatch]);
  console.log("in post details", postData);
  const handleSubmit = (comment) => {
    console.log(comment);
    const body = {
      description: comment,
      postId: id,
      author: user.id,
    };
    // postData.comments = [...postData.comments, body];
    dispatch(sendCommentAction(body));
  };
  const handleDelete = (commentId) => {
    console.log("comment id", postData.author, commentId);
    dispatch(deleteComment(id, commentId));
  };
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
    <div
      style={{
        marginTop: 20,
        padding: "0 50px",
      }}
    >
      <Grid container>
        <h3> Post Detail ...</h3>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        // spacing={10}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {postData !== undefined ? (
          <>
            <Grid md={5}>
              <Card key={postData._id}>
                {/* <div className="detail-image"> */}
                <img
                  height="350"
                  width="100%"
                  src={
                    postData.image ??
                    "https://th.bing.com/th/id/R.4d467149132aea6da9aacf5421ddf82c?rik=SKlOkssKa92Y6A&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image-1680x1050.jpg&ehk=iqDwR9dQl7ICwHnf43mg5gcBP%2boZTFX8gnEkw5fBdRI%3d&risl=&pid=ImgRaw&r=0"
                  }
                  alt="profile-img"
                  className="profile-img-card"
                />
                {/* </div> */}
              </Card>
            </Grid>
            <Grid md={7}>
              <div className="right-panel">
                <p className="info-text">{postData.title}</p>
                <p
                  style={{
                    fontSize: 16 + "px",
                  }}
                >
                  {postData.description}
                </p>

                <p>
                  <span className="info-text">Posted By:</span>
                  {postData.createdBy}
                </p>
                <p>
                  <span className="info-text">Created On:</span>{" "}
                  {Date(postData.createdAt)}
                </p>
              </div>
            </Grid>
          </>
        ) : (
          <>
            <div>No post Found</div>
          </>
        )}
      </Grid>

      <Grid>
        <p>
          <span className="info-text">Comments:</span>
        </p>
        <FormControl margin="normal" fullWidth>
          <TextareaAutosize
            minRows={4}
            placeholder="Add Comment"
            id="comment"
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </FormControl>
        <Grid container justifyContent="flex-end">
          <Button
            color="primary"
            variant="contained"
            primary="true"
            type="submit"
            onClick={() => {
              handleSubmit(comment);
            }}
            // disabled={loading}
          >
            {/* {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )} */}
            <span>Send</span>
          </Button>
        </Grid>
        <Grid container>
          {Object.keys(postData).length !== 0 &&
            postData.comments.length > 0 &&
            postData.comments.map((comment) => {
              return (
                <Grid
                  container
                  key={comment._id}
                  className=""
                  style={{
                    border: "1px solid grey",
                    padding: "15px",
                    borderRadius: 4,
                    margin: "8px 0",
                    display: "flex",
                  }}
                >
                  <Grid container justifyContent="space-between">
                    <Grid>
                      <Grid container direction="row">
                        <img
                          style={{ borderRadius: "50%" }}
                          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                          height="40"
                        />
                        <p style={{ margin: "10px 0 0 10px" }}>
                          {comment.createdBy}
                        </p>
                      </Grid>
                    </Grid>

                    <Button
                      style={{
                        height: "30px",
                      }}
                      variant="outlined"
                      color="default"
                      onClick={() => {
                        handleDelete(comment._id);
                      }}
                    >
                      Delete
                    </Button>
                  </Grid>

                  <Grid container>
                    <p>{comment.description}</p>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
}
