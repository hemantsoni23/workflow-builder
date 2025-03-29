const initialState = {
  userId: localStorage.getItem('userId') || null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_ID":
      localStorage.setItem('userId', action.payload);
      return { ...state, userId: action.payload };

    case "LOGOUT":
      localStorage.removeItem('userIwd');
      return { ...state, userId: null };

    default:
      return state;
  }
}
  