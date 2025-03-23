const StickerCard = ({ imageUrl, description, uploadedBy, likesCount, createdAt }) => {
    return (
      <div className="max-w-sm bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <img src={imageUrl} alt="Bumper Sticker" className="w-full h-40 object-cover rounded-lg" />
        <div className="mt-4">
          <p className="text-lg font-semibold">{description}</p>
          <p className="text-sm text-gray-400">Uploaded by: {uploadedBy}</p>
          <p className="text-sm text-gray-400">Likes: {likesCount}</p>
          <p className="text-xs text-gray-500">Created At: {new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    );
  };
  
  export default StickerCard;
  