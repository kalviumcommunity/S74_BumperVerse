import StickerCard from "../components/StickerCard";

const dummySticker = {
  imageUrl: "https://res.cloudinary.com/difwwvg2d/image/upload/v1742739743/cctm9ggomajjmdjespdk.jpg",
  description: "Drive Safe!",
  uploadedBy: "Admin",
  likesCount: 10,
  createdAt: "2025-03-23T12:00:00.000+00:00",
};

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Bumper Stickers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(10).fill(dummySticker).map((sticker, index) => (
          <StickerCard key={index} {...sticker} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
