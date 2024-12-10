export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Thoughts</a>
      </div>
      <div className="flex-none">
        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button> */}
        <ul className="menu menu-horizontal px-1">
      <li><a>Create post</a></li>
      <li><a href='/dreamInterpretor'>Dream interpretor</a></li>
      <li><a href='/poetryCreator'>Haiku maker</a></li>
      {/* <li>
        <details>
          <summary>Menu</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Dream interpretor</a></li>
            <li><a>Haiku maker</a></li>
          </ul>
        </details>
      </li> */}
    </ul>
      </div>
    </div>
  );
}
