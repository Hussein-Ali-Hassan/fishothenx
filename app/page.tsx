import Playground from "@/components/Playground";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen min-w-screen">
      <header className="h-[68vh] md:h-[80vh] xl:h-screen w-screen bg-[url('/hero.jpg')] bg-no-repeat bg-cover bg-center"></header>

      <main className="pl-3">
        <Playground />
      </main>
    </main>
  );
}
