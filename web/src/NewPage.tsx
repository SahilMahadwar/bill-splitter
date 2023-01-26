import { trpc } from "./utils/api";

export default function NewPage() {
  const hello = trpc.userById.useQuery("1");
  if (!hello.data) return <div>Loading...</div>;

  console.log(import.meta.env.VITE_API_URL);

  return <div>{<p>{hello.data.name}</p>}</div>;
}
