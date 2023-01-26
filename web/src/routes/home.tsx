import { trpc } from "../utils/api";

export function Home() {
  const hello = trpc.userById.useQuery("1");
  if (!hello.data) return <div>Loading...</div>;

  return (
    <div>
      <p className="text-3xl font-bold underline text-red-400">
        {hello.data.name}
      </p>
    </div>
  );
}

export default Home;
