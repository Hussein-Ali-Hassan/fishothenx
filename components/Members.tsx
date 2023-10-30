const members = [
  {
    name: "Ali Z. Nazar",
    imageUrl: "/members/zeyad.jpeg",
    active: true,
  },
  {
    name: "Hussein Hassan",
    imageUrl: "/members/husn.jpeg",
    active: true,
  },
  {
    name: "Abdallah Farhat",
    imageUrl: "/members/abedallah.jpeg",
    active: true,
  },
  {
    name: "Jawad Noureddine",
    imageUrl: "/members/jawad.jpeg",
    active: true,
  },
  {
    name: "Ali Nadar",
    imageUrl: "/members/ali.jpeg",
    active: true,
  },

  {
    name: "Hussein Noureddine",
    imageUrl: "/members/sayed.jpg",
    active: false,
  },
  {
    name: "Zakaria Hasan",
    imageUrl: "/members/zack.jpeg",
    active: false,
  },
  {
    name: "Amjad Farhat",
    imageUrl: "/members/amjad.jpg",
    active: false,
  },
  {
    name: "Ali Khatoun",
    imageUrl: "/members/khatoun.jpeg",
    active: false,
  },
];

export default function Members() {
  return (
    <div className="py-10">
      <h2 className="text-white text-3xl mb-4">Active Members 🤩</h2>

      <List list={members.filter((a) => a.active)} />

      <h2 className="text-white text-3xl mb-4 mt-24">Past Members 😢</h2>

      <List list={members.filter((a) => !a.active)} />
    </div>
  );
}

function List({ list }: { list: typeof members }) {
  return (
    <ul
      role="list"
      className="mx-auto pr-4 mt-4 grid max-w-2xl gap-x-5 gap-y-8 grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-5"
    >
      {list.map((member) => (
        <li key={member.name}>
          <img
            className="aspect-[1/1] w-full rounded-2xl object-cover"
            src={member.imageUrl}
            alt=""
          />

          <p className="leading-7 text-gray-300 mt-3 text-xl">{member.name}</p>
        </li>
      ))}
    </ul>
  );
}