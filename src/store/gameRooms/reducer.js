const initialState = {
  allRooms: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "gameroom/ALL_ROOMS": {
      return {
        allRooms: [...action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
