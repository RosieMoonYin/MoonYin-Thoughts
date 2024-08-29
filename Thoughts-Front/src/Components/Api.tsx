import { ThoughtsType } from "../Types/ThoughtsType"; // Import the ThoughtsType from the appropriate file

export default async function FetchThoughts(): Promise<ThoughtsType[]> {
  const response = await fetch("http://localhost:5185/api/Thoughts");
  if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
  return response.json();
}
