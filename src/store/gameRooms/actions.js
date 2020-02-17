import axios from "../../axios";

export const joinRoom = async id => {
  console.log(id);
  return async (dispatch, getState) => {
    console.log(getState);
    const jwt = getState().session.jwt;
    const joined = await axios.post(
      "/gameRoom/join",
      { roomId: id },
      {
        headers: { Authorization: `Bearer ${jwt}` }
      }
    );
    console.log(joined);
  };
};
