import axios from "../../axios";

export const login = (email, password) => {
  return (dispatch, getState) => {
    axios
      .post("/login", {
        email,
        password
      })
      .then(({ data: { nickname, jwt, email } }) => {
        dispatch({
          type: "session/LOGIN",
          payload: {
            nickname,
            jwt,
            email
          }
        });
      });
  };
};
