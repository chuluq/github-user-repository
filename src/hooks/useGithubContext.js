import { GithubContext } from "../context/GithubContext";
import { useContext } from "react";

export const useGithubContext = () => {
  const context = useContext(GithubContext);

  if (!context) {
    throw Error(
      "useGithubContext must be used inside an GithubContextProvider"
    );
  }

  return context;
};
