import React, { useReducer } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {

  switch (action.type) {

    case "LOGIN":

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();

      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
      }

    default:
      return state;

  }

}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Header />
      <div className="App">{!state.isAuthenticated ? <Login /> : <Home />}  </div>
    </AuthContext.Provider>
  );
}

export default App;
