import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const GithubBtn = ({ text, onclick = () => { }, path }) => {

  const currPath = useRouterState().location.pathname;

  const [stars, setStar] = useState(0);

  const getRepoStars = () => {
    const endpoint = `https://api.github.com/repos/AbhayLonkar/url_shortner_frontend`;
    return fetch(endpoint)
      .then((res) => res.json())
      .then(data => setStar(data.stargazers_count))
  }

  useEffect(() => {
    getRepoStars()
      .catch(err => console.error("Failed to fetch stars:", err));
  }, [stars]);

  return (
    <button
      onClick={onclick}
      className={`flex gap-1 items-center justify-center border-2 border-black shadow-[2px_2px_0_0_#000] rounded-md px-3 p-2 font-bold text-black  transition-all active:translate-1 active:shadow ${path === currPath ? "bg-pink-600" : "bg-white"}`}
    >
      {text} {stars}
    </button>
  )

}

export default GithubBtn
