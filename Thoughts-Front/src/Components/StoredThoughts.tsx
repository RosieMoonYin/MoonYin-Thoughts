export default function StoredThoughts() {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        Dreams
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Azure Water</a>
        </li>
        <li>
          <a>Cloud Atlas</a>
        </li>
        <li>
          <a>The Well of Dreams</a>
        </li>
        <li>
          <a>Fallen Leaves</a>
        </li>
        <li>
          <a>Eternal Eclipse</a>
        </li>
      </ul>
    </div>
  );
}

//Categories: Dreams, Poems, Word soup,
