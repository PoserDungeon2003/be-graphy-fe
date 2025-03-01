import { IoEyeOutline, IoThumbsUpOutline } from "react-icons/io5";

interface PhotoCard {
  id: number;
  imageUrl: string;
  price: string;
  accountName: string;
}

const Photographers = () => {
  // Mock data with real image URLs
  const photos: PhotoCard[] = [
    {
      id: 1,
      imageUrl:
        "https://cdn.thecollector.com/wp-content/uploads/2023/05/tips-to-become-a-great-photographer.jpg",
      price: "$150/session",
      accountName: "John Doe",
    },
    {
      id: 2,
      imageUrl:
        "https://www.training.com.au/wp-content/uploads/Photographer.jpeg",
      price: "$200/session",
      accountName: "Jane Smith",
    },
    {
      id: 3,
      imageUrl:
        "https://px-web-images8.pixpa.com/xCpAipCkpmtuA2hJX7FBAAEDfsfqcHwxhJZ6znRKLvQ/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTE1MTM1NjcyLXNodXR0ZXJzdG9ja18yODQ1ODE2NDkuanBn",
      price: "$180/session",
      accountName: "Michael Lee",
    },
    {
      id: 4,
      imageUrl:
        "https://d3c0aoh0dus5lw.cloudfront.net/WP/wp-content/uploads/2017/11/cjasonbradley_170902_26266-864x577.jpg",
      price: "$220/session",
      accountName: "Emily Johnson",
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-green-50 to-blue-100 p-8">
      <div className="grid grid-cols-2 gap-8">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="overflow-hidden rounded-lg bg-white shadow-lg"
          >
            <div className="relative">
              <img
                src={photo.imageUrl}
                alt={photo.accountName}
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {photo.price}
                </h3>
                <p className="text-gray-600">{photo.accountName}</p>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center text-purple-500">
                  <IoThumbsUpOutline size={24} />
                </button>
                <button className="flex items-center text-purple-500">
                  <IoEyeOutline size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <div className="flex space-x-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white">
            &lt;
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photographers;
