import { useRouterState } from "@tanstack/react-router";

const Button = ({ text, onclick = () => { }, path }) => {
  const currPath = useRouterState().location.pathname;
  return (
    <button
      onClick={onclick}
      className={`flex gap-1 items-center justify-center border-2 border-black shadow-[2px_2px_0_0_#000] rounded-md px-3 p-2 font-bold text-black  transition-all active:translate-1 active:shadow ${path === currPath ? "bg-pink-600" : "bg-white"}`}
    >
      {text}
    </button>
  )

}

export default Button
