const initialState = {
  userId: sessionStorage.getItem('userId') || null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_ID":
      sessionStorage.setItem('userId', action.payload);
      return { ...state, userId: action.payload };

    case "LOGOUT":
      sessionStorage.removeItem('userIwd');
      return { ...state, userId: null };

    default:
      return state;
  }
}
  