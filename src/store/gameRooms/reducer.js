const initialState = {
  allRooms: [],
  activeRoom: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "gameroom/ALL_ROOMS": {
      return {
        ...state,
        allRooms: [...action.payload]
      };
    }
    case "gameroom/ONE_ROOM": {
      return {
        ...state,
        allRooms: [...state.allRooms, action.payload]
      };
    }
    case "gameroom/JOINED": {
      return {
        ...state,
        activeRoom: action.payload.roomId
      };
    }
    default: {
      return state;
    }
  }
}
