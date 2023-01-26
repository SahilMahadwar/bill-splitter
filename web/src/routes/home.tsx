import { trpc } from "../utils/api";

export function Home() {
  const hello = trpc.example.hello.useQuery({ name: "This is name" });
  if (!hello.data) return <div>Loading...</div>;

  return (
    <div>
      <p className="text-3xl font-bold underline text-red-400">
        {hello.data.greeting}
      </p>
    </div>
  );
}

export default Home;
