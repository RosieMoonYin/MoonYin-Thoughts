import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ImageUpload from "./ImageUpload";

export type ThoughtsType = {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
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
    imageUrl: "",
    isComplete: false,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createThought,
    onSuccess: (data) => {
      console.log("Success:", data);
      queryClient.invalidateQueries({ queryKey: ["thoughts"] });
      setFormData({ title: "", content: "", category: "", imageUrl: "", isComplete: false });
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const handleImageUrlChange = (url: string) => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl: url, // Update the imageUrl in the parent state
    }));
  };

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
      alert(formData.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col flex-center w-2/4">

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

      <ImageUpload setImageUrl={handleImageUrlChange}/>
      
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
