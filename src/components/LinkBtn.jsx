import { Link, useRouterState } from '@tanstack/react-router'

const LinkBtn = ({ to, text, path }) => {
  const currPath = useRouterState().location.pathname;
  return (
    <Link
      to={to}
      className={`px-3 p-2 font-bold border-2  rounded-md  text-eerie-black shadow-[2px_2px_0_0_#000] transition-all active:translate-1 active:shadow ${currPath === path ? "bg-pink-600" : "bg-white"}`}>
      {text}
    </Link>
  )
}

export default LinkBtn
