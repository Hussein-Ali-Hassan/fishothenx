import Slider from "./Slider";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fe18549c3fe04e63378b653d81299a5a2.jpg?alt=media&token=afc38e47-41e7-4e1f-99e9-5d454b6c4888",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fe5efe9739fdcb88784c49c25e8991974.jpg?alt=media&token=611e4d04-63ec-45e5-bd41-34d9535ae44a",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fdc977691db142fe2fe6fd5d793abafe0.jpg?alt=media&token=e044fb06-2b1a-4aff-b259-8de9fa4d7b4d",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fa8c15ec788cf9a15b50d7ce12733d42a.jpg?alt=media&token=c9d6bb6b-9917-4ced-a999-eead316042e8",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fda94e31997f6d6af9d39ea1fe491c67e.jpg?alt=media&token=02be6446-892f-4a96-852d-a59053e88c1d",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F92d8d3af1135f2e032d6b2b48f39f03b.jpg?alt=media&token=1c270a58-1207-45f6-a4ec-80e3b6ffeeec",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F7061fec8fb602e26acf0bebd9f28d369.jpg?alt=media&token=7515c58d-2c94-432b-a8f9-9371c782b682",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F51d589305592a0d0fe4c1bf48077bf7d.jpg?alt=media&token=91685fd0-763e-471c-a96c-f6500cc40d4e",
];

export default function Playground() {
  return (
    <div className="py-10">
      <h2 className="text-white text-3xl mb-4">Building the Playground</h2>

      <Slider images={images} />
    </div>
  );
}
