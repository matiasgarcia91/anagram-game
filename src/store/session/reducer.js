const initialState = {
  user: null,
  jwt: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "session/LOGIN": {
      const { nickname, email, jwt } = action.payload;
      return {
        user: { nickname, email },
        jwt
      };
    }
    default: {
      return state;
    }
  }
}
