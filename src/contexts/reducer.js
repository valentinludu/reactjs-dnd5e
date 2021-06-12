export const initialState = {
    user: undefined,
    screen: "config"
};

export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_USER_CONFIG":
        return {
          ...state,
          user: {
              ...action.payload
          }
        };
      case "CHANGE_SCREEN":
        return {
          ...state,
          screen: action.payload
        };
      case "RESET_USER":
        return initialState;
      default:
        return state;
    }
  };