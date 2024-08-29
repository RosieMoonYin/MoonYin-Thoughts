// export default function StoredThoughts() {
//   return (
//     <div className="dropdown dropdown-hover">
//       <div tabIndex={0} role="button" className="btn m-1">
//         Dreams
//       </div>
//       <ul
//         tabIndex={0}
//         className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
//       >
//         <li>
//           <a>Azure Water</a>
//         </li>
//         <li>
//           <a>Cloud Atlas</a>
//         </li>
//         <li>
//           <a>The Well of Dreams</a>
//         </li>
//         <li>
//           <a>Fallen Leaves</a>
//         </li>
//         <li>
//           <a>Eternal Eclipse</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

//Categories: Dreams, Poems, Word soup,

import { useEffect, useState } from "react";
import FetchThoughts from "./Api";
import { ThoughtsType } from "../Types/ThoughtsType";

export default function StoredThoughts() {
  const [thoughts, setThoughts] = useState<ThoughtsType[]>([]);

  useEffect(() => {
    async function getThoughts() {
      try {
        const fetchedThoughts = await FetchThoughts();
        setThoughts(fetchedThoughts);
      } catch (error) {
        console.error("Error fetching thoughts:", error);
      }
    }

    getThoughts();
  }, []);

  // Filter thoughts by the "Dream" category
  const dreamThoughts = thoughts.filter(
    (thought) => thought.category === "Dreams"
  );

  const poemThoughts = thoughts.filter(
    (thought) => thought.category === "Poems"
  );

  const dailyThoughts = thoughts.filter(
    (thought) => thought.category === "Words"
  );

  return (
    <section className="flex items-center justify-center m-10">
      <div className="dropdown dropdown-hover m-5">
        <div tabIndex={0} role="button" className="btn m-1">
          Dreams
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {dreamThoughts.map((thought) => (
            <li key={thought.id}>
              <a>{thought.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-hover m-5">
        <div tabIndex={0} role="button" className="btn m-1">
          Poems
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {poemThoughts.map((thought) => (
            <li key={thought.id}>
              <a>{thought.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown dropdown-hover m-5">
        <div tabIndex={0} role="button" className="btn m-1">
          Words
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          {dailyThoughts.map((thought) => (
            <li key={thought.id}>
              <a>{thought.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
