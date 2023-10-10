import Slider from "./Slider";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fe18549c3fe04e63378b653d81299a5a2.jpg?alt=media&token=afc38e47-41e7-4e1f-99e9-5d454b6c4888",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fe5efe9739fdcb88784c49c25e8991974.jpg?alt=media&token=611e4d04-63ec-45e5-bd41-34d9535ae44a",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fdc977691db142fe2fe6fd5d793abafe0.jpg?alt=media&token=e044fb06-2b1a-4aff-b259-8de9fa4d7b4d",
  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fa8c15ec788cf9a15b50d7ce12733d42a.jpg?alt=media&token=c9d6bb6b-9917-4ced-a999-eead316042e8",
];

export default function Playground() {
  return (
    <div className="py-10">
      <h2 className="text-white text-3xl mb-4">Building the Playground</h2>

      <Slider images={images} />
    </div>
  );
}
