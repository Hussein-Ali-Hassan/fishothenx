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

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F52ba4405781b76aa8a7facdb516d295c.jpg?alt=media&token=8d0d3559-5594-4d4d-833a-fac2390c3439",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F288cbf9a1f436987bfec3525496ee170.jpg?alt=media&token=d4bd29b1-701a-491f-bce6-319e8cf0e2d0",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F6f8c93e4acf36258eb6c750d1f9239a6.jpg?alt=media&token=15ff1bfd-d814-42d0-89ea-5127568bd171",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F5d5fc550c29b4bb5f7fcfafd94686472.jpg?alt=media&token=f288cda9-785b-4bbc-b365-5cc333950e40",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F86923a4c544de3d7bc3a79afcff10476.jpg?alt=media&token=f3ace68a-8801-48e5-a126-b87c5905b92f",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fee09b0640a069bc859ac855720432130.jpg?alt=media&token=b7220a54-d562-4060-b5cf-4745eebbf985",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F23d83b2d75e5bb17ba9018008ff65eb3.jpg?alt=media&token=e84dba4e-2350-4ff9-ad3a-2914b5eb6760",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F4cb9056cedd2a48afc43fb4307c056b3.jpg?alt=media&token=23aed576-5564-4f58-8aef-e89672fc368c",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F5b11303f1bf87ff1601f44e6b1047409.jpg?alt=media&token=bef837c4-bb1f-4756-bd84-bcc026431899",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F702b2be382ece2a7b69a710f31307f93.jpg?alt=media&token=ccdcbf6a-a583-49b4-a242-c7fa4a6a0751",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F0f783d5c4c090af474cecb80a72f2a6a.jpg?alt=media&token=246fe321-3af8-4141-b8dd-6042460561b1",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F7112ecceb9b8996cbc60ed3a32d3e0f4.jpg?alt=media&token=99671873-845c-4e44-b25c-685a1b2ff238",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F90089498a7f871ed3a008d7e6e49ba7e.jpg?alt=media&token=6a325a52-a2f1-4fb6-8dfb-e9350aa2e807",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fc59fcfbd1afaadcf168aa9799214dac3.jpg?alt=media&token=b14bfe1a-2c45-47ae-9f7d-ba5589e2600e",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fc29d8b1eecd9d494a8bd2ca247e8e948.jpg?alt=media&token=25565e40-8714-45ad-ae1a-544393e43dd5",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F2cdda5bc55f4aeba9793588a44742351.jpg?alt=media&token=37394f25-1c47-48d0-a43a-7ebfb86d1d3d",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F21264d8ea2287d831f7728f2f5f54172.jpg?alt=media&token=a95aecfe-bc67-4edb-9bcb-c9f5c1a6bee9",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F943d77bbb11a4cde6d2a0b4a82ade9a4.jpg?alt=media&token=19134376-81d5-44b5-8eb6-1fca68907a44",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fcfa9dd9b326459d4af31eb38be97e14b.jpg?alt=media&token=a2911e93-3cf2-482a-a51e-4e5a3b35fc45",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F5571b72f89660445505a54a46c3b61bd.jpg?alt=media&token=f72ff983-171c-45cd-ac76-51cb0adc5e12",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fb4689ca419525ec6ed928f3af2d3b116.jpg?alt=media&token=be7413d7-8369-492b-9e2a-404af98d74b3",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F4f48d9dd820a704301c3b714a47bae4a.jpg?alt=media&token=a6c148ee-07c6-475c-84f9-54db11a94840",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F62f9b6b9041daac33887e250cf20f023.jpg?alt=media&token=2441455d-179b-4716-b5c7-6feb2290884f",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F258a91c886a5995c98c8920d07b24323.jpg?alt=media&token=1a074390-d093-4a3c-b130-0a87c6f7b4c4",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fd508cd048fea0aeb7ce864359b059193.jpg?alt=media&token=dddbc599-a707-490b-8a5a-7b3b963d68ec",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F210d52a09768de7865ae43ea88760ea9.jpg?alt=media&token=23378b6b-ea27-4218-ae65-c2cdc070e812",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F5bb44a99dc3cbf21329eb366c41e9310.jpg?alt=media&token=fb5eb4e5-86fc-4c5d-9e90-e836b5f854ad",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fb55ddb5441be19be440656f0748347ba.jpg?alt=media&token=c1521fdb-780a-4416-8563-17b396ce1747",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F23834a15c41e88f342a1ad84b4732372.jpg?alt=media&token=eaf8990e-e3a1-4cc5-b78a-836828bb0403",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2Fe9c091c25d3168b20c42e4b62906107a.jpg?alt=media&token=299acfb4-c04a-4201-93e9-671dfa42fc7c",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2F20258b9036b8cda6bf06957761d9c223.jpg?alt=media&token=af1d28a0-a58c-4914-8cdc-5517390661f8",

  "/hero.jpg",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2FIMG_8669%20Medium.jpeg?alt=media&token=0ee56955-c8f4-417e-bcb9-1c03df38fff9",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2FIMG_8690%20Medium.jpeg?alt=media&token=a37fa7f6-2cb4-4e23-9aef-6fe4461f4bc8",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2FIMG_8672%20Medium.jpeg?alt=media&token=0f4467f1-d2ae-40fe-8f59-5508c58a00ec",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2FIMG_8674%20Medium.jpeg?alt=media&token=7a6ad51d-e9f0-4eee-9b20-3cf1d5fe21b9",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2FIMG_8675%20Medium.jpeg?alt=media&token=cf4041b8-48c4-4068-87be-c3a12c71510e",

  "https://firebasestorage.googleapis.com/v0/b/fishothenx.appspot.com/o/playground%2FIMG_8692%20Medium.jpeg?alt=media&token=e31d3e84-b66c-4ad2-808b-0688bd516fc9",

  "/hero.jpeg",
];

export default function Playground() {
  return (
    <div className="py-10">
      <h2 className="text-white text-3xl mb-4">Building the Playground</h2>

      <Slider images={images} />
    </div>
  );
}
