import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center p-6">
      <h1 className="text-4xl font-bold">Welcome to BumperVerse</h1>
      <p className="text-lg mt-2">Explore a collection of unique bumper stickers!</p>
      <button
        onClick={() => navigate("/stickers")}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
      >
        Explore Stickers
      </button>
    </div>
  );
};

export default LandingPage;
