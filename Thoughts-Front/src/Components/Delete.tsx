export default async function DeleteThought(id: number): Promise<void> {
  const response = await fetch(`http://localhost:5185/api/thoughts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete the thought");
  }
}
