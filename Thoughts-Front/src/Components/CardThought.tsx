import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ThoughtsType } from "../Types/ThoughtsType";
import FetchThoughts from "./Api";
import DeleteThought from "./Delete";

export default function CardThoughts() {
  const {
    data: thoughts,
    error,
    isLoading,
  } = useQuery<ThoughtsType[], Error>({
    queryKey: ["thoughts"],
    queryFn: FetchThoughts,
  });

  const queryClient = useQueryClient(); // Add this line to initialize the queryClient

  const deleteMutation = useMutation({
    // mutationKey: ["thoughts"],
    mutationFn: (id: number) => DeleteThought(id), // Pass the thought ID to the delete function
    onSuccess: () => {
      // Invalidate and refetch the thoughts query to reflect the changes
      queryClient.invalidateQueries({ queryKey: ["thoughts"] });
    },
    onError: (error) => {
      console.error("Error deleting thought:", error);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{`Error: ${error.message}`}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {thoughts?.map((thought) => (
        <div key={thought.id} className="card bg-base-100 w-96 shadow-xl m-10">
          <div className="card-body">
            <h2 className="card-title">
              {thought.title}
              <div className="badge badge-secondary ml-2">
                {thought.category}
              </div>
            </h2>
            <p>{thought.content}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {thought.isComplete ? "Completed" : "Incomplete"}
              </div>
              <button className="btn btn-primary">Edit</button>
              <button
                className="btn btn-secondary"
                onClick={() => deleteMutation.mutate(thought.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
