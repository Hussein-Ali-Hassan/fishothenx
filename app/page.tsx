import Playground from "@/components/Playground";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <header className="h-[40vh] lg:h-[85vh] w-screen bg-[url('/hero.jpg')] bg-no-repeat bg-cover bg-center"></header>

      <main className="pl-3">
        <Playground />
      </main>
    </main>
  );
}
