// this is the user redicer code where we van put all the user reducer codes in order to gave grouping to them

const INTIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currenrUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
