import React, { useEffect } from "react";
import { Grid, Card } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../actions/posts";

export default function Profile() {
  const dispatch = useDispatch();
  const { userDetail, loading } = useSelector((state) => {
    return {
      userDetail: state.posts.userDetail || {},
      loading: state.posts.loading || false,
    };
  });
  useEffect(() => {
    dispatch(getUserDetail());
  }, [dispatch]);

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
  const onFileChange = (event) => {
    // Update the state
    // this.setState({ selectedFile: event.target.files[0] });
  };
  // On file upload (click the upload button)
  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    // formData.append(
    //   "myFile",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );
  };
  return (
    <div
      style={{
        marginTop: 20,
        padding: "0 50px",
      }}
    >
      <Grid container>
        <h3> My Profile ...</h3>
      </Grid>

      <Grid container>
        {userDetail !== undefined ? (
          <>
            <Grid columns={6}>
              <Card key={userDetail._id}>
                <img
                  height="250"
                  src={
                    userDetail.image ??
                    "//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  }
                  alt="profile-img"
                  className="profile-img-card"
                />
                <div>
                  <input type="file" onChange={onFileChange} />
                  <button onClick={onFileUpload}>Upload!</button>
                </div>
              </Card>
            </Grid>
            <Grid
              columns={6}
              style={{
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                }}
              >
                {userDetail.firstName} {userDetail.lastName}
              </p>
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  DOB :
                </span>{" "}
                {Date(userDetail.dob)}
              </p>
              <p
                style={{
                  fontSize: 16 + "px",
                  marginTop: 24,
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Email :
                </span>{" "}
                {userDetail.email}
              </p>
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Mobile No :
                </span>{" "}
                {userDetail.mobile}
              </p>
              <p>
                <span
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Address :
                </span>{" "}
                ---
              </p>
            </Grid>
          </>
        ) : (
          <>
            <div>No Details Found</div>
          </>
        )}
      </Grid>
    </div>
  );
}
