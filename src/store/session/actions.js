import axios from "../../axios";

export const login = (email, password, history) => {
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
        history.push("/lobby");
      })
      .catch(error => console.error(error));
  };
};
