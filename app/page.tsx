import Members from "@/components/Members";
import Playground from "@/components/Playground";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      {/* logo */}
      <img
        src="/FishoThenx-logo.png"
        alt="FishoThenx Logo"
        className="mx-auto mt-6 md:h-56 max-w-[90%]"
      />

      {/* <header className="h-[40vh] lg:h-screen w-screen bg-[url('/hero.jpeg')] bg-no-repeat bg-cover bg-center"></header> */}

      <main className="pl-3">
        <Playground />

        <Members />
      </main>
    </main>
  );
}
