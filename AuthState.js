import { useReducer } from "react";
import authContext from "./AuthContext";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: "true",
    error: null,
  };

  const [state, dispatch] = useReducer(authContext, initialState);

  // Actions
  const action = (data) => {
    dispatch({ type: TYPE, payload: PAYLOAD });
  };

  return (
    <authContext.Provider
      value={{
        data: state.data,
        action,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
