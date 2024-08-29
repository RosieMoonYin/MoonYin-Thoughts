// import React, { useState } from "react";
// import { useMutation } from "@tanstack/react-query";

// export type ThoughtsType = {
//   id: number;
//   title: string;
//   content: string;
//   category: string;
//   isComplete: boolean;
// };

// export default function CreateInput() {
//   const [formData, setFormData] = useState<Partial<ThoughtsType>>({
//     title: "",
//     content: "",
//     category: "",
//     isComplete: false,
//   });

//   const mutation = useMutation({
//     mutationFn: async (newThought: Partial<ThoughtsType>) => {
//       const response = await fetch("http://localhost:5185/api/Thoughts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newThought),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save the thought");
//       }

//       return response.json();
//     },
//     onSuccess: (data) => {
//       console.log("Success:", data);
//     },
//     onError: (error) => {
//       console.error("Error:", error);
//     },
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     try {
//       await mutation.mutateAsync(formData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section className="flex flex-col m-10">
//       <div>
//         <p></p>
//       </div>
//       <div className="p-2">
//         <textarea
//           name="content"
//           placeholder="Add your inspirations here"
//           className="textarea textarea-bordered textarea-lg w-full max-w-xl"
//           value={formData.content}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="p-2">
//         <select
//           name="category"
//           className="select select-primary w-full max-w-xs"
//           value={formData.category || ""}
//           onChange={handleChange}
//         >
//           <option value="" disabled>
//             Choose a category
//           </option>
//           <option value="Dreams">Dreams</option>
//           <option value="Poems">Poems</option>
//           <option value="Words">Words</option>
//         </select>
//       </div>
//       <div className="p-2">
//         <input
//           name="title"
//           type="text"
//           placeholder="Title"
//           className="input input-primary w-full max-w-xs"
//           value={formData.title}
//           onChange={handleChange}
//         />
//       </div>
//       <div className="p-2">
//         <button className="btn-primary btn" onClick={handleSubmit}>
//           Save
//         </button>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export type ThoughtsType = {
  id: number;
  title: string;
  content: string;
  category: string;
  isComplete: boolean;
};

type CreateThoughtType = Omit<ThoughtsType, "id">;

const createThought = async (newThought: CreateThoughtType) => {
  const response = await fetch("http://localhost:5185/api/Thoughts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newThought),
  });

  if (!response.ok) {
    throw new Error("Failed to save the thought");
  }

  return response.json();
};

export default function CreateInput() {
  const [formData, setFormData] = useState<CreateThoughtType>({
    title: "",
    content: "",
    category: "",
    isComplete: false,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createThought,
    onSuccess: (data) => {
      console.log("Success:", data);
      queryClient.invalidateQueries({ queryKey: ["thoughts"] });
      setFormData({ title: "", content: "", category: "", isComplete: false });
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col m-10">
      <div className="p-2">
        <textarea
          name="content"
          aria-label="Content"
          placeholder="Add your inspirations here"
          className="textarea textarea-bordered w-full max-w-xl"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <div className="p-2">
        <select
          name="category"
          aria-label="Category"
          className="select select-primary w-full max-w-xs"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="" disabled>
            Choose a category
          </option>
          <option value="Dreams">Dream</option>
          <option value="Poems">Poem</option>
          <option value="Words">Thought</option>
        </select>
      </div>
      <div className="p-2">
        <input
          name="title"
          type="text"
          aria-label="Title"
          placeholder="Title"
          className="input input-primary w-full max-w-xs"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="p-2">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </section>
  );
}
