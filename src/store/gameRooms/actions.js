import axios from "../../axios";

export const joinRoom = (id, history) => {
  return (dispatch, getState) => {
    const jwt = getState().session.jwt;
    axios
      .post(
        "/gameRoom/join",
        { roomId: id },
        {
          headers: { Authorization: `Bearer ${jwt}` }
        }
      )
      .then(joined => {
        dispatch(joinedRoom(id));
        history.push(`/room/${id}`);
      });
  };
};

export const createRoom = roomName => {
  console.log("Creating room!", roomName);
  return (dispatch, getState) => {
    const { jwt } = getState().session;
    axios
      .post(
        "/gameRoom",
        { name: roomName },
        { headers: { Authorization: `Bearer ${jwt}` } }
      )
      .then(response => console.log("room created", response));
  };
};

export const joinedRoom = id => {
  return {
    type: "gameroom/JOINED",
    payload: { roomId: id }
  };
};
