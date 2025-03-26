const initialState = {
  userId: localStorage.getItem('user_id') || null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_ID":
      localStorage.setItem('user_id', action.payload);
      return { ...state, userId: action.payload };

    case "LOGOUT":
      localStorage.removeItem('user_id');
      return { ...state, userId: null };

    default:
      return state;
  }
}
  