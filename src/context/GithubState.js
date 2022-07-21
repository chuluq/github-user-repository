import { useReducer } from "react";
import { GithubContext } from "./GithubContext";
import { GithubReducer } from "./GithubReducer";
import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  SET_SUGGESTIONS,
  SET_USER,
} from "./types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    suggestions: [],
    page: 30,
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();

    const res = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const data = await res.json();

    dispatch({
      type: SEARCH_USERS,
      payload: data,
    });

    setSuggestions(data, text);
  };

  const setUser = (user) => {
    setLoading();

    dispatch({ type: SET_USER, payload: user });
  };

  // Get Repos
  const getUserRepos = async (username, page) => {
    setLoading();

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${
        page ?? 30
      }&sort=created&direction=asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    const data = await res.json();

    dispatch({
      type: GET_REPOS,
      payload: data,
    });
  };

  // Set suggestions
  const setSuggestions = (users, text) => {
    const newFilteredSuggestions = users?.items?.filter(
      (suggestion) =>
        suggestion?.login.toLowerCase().indexOf(text.toLowerCase()) > -1
    );

    dispatch({ type: SET_SUGGESTIONS, payload: newFilteredSuggestions });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        suggestions: state.suggestions,
        loading: state.loading,
        searchUsers,
        setUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
