const members = [
  {
    name: "Ali Z. Nazar",
    imageUrl: "/members/zeyad.jpeg",
  },
  {
    name: "Hussein Hassan",
    imageUrl: "/members/husn.jpeg",
  },
  {
    name: "Abdallah Farhat",
    imageUrl: "/members/abedallah.jpeg",
  },
  {
    name: "Jawad Noureddine",
    imageUrl: "/members/jawad.jpeg",
  },
  {
    name: "Ali Nadar",
    imageUrl: "/members/ali.jpeg",
  },
];

export default function Members() {
  return (
    <div className="py-10">
      <h2 className="text-white text-3xl mb-4">Active Members</h2>

      <ul
        role="list"
        className="mx-auto pr-4 mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
      >
        {members.map((member) => (
          <li key={member.name}>
            <img
              className="aspect-[1/1] w-full rounded-2xl object-cover"
              src={member.imageUrl}
              alt=""
            />

            <p className="leading-7 text-gray-300 mt-4 text-xl">
              {member.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
