import { IoEyeOutline, IoThumbsUpOutline } from "react-icons/io5";

interface PhotoCard {
  id: number;
  imageUrl: string;
  photoStyle: string;
  accountName: string;
}

const PhotoProjects = () => {
  // Mock data for photo cards with real image URLs
  const photos: PhotoCard[] = [
    {
      id: 1,
      imageUrl:
        "https://d1hjkbq40fs2x4.cloudfront.net/2016-12-19/files/lookattheworldifferently_image8.jpg",
      photoStyle: "Nature Photography",
      accountName: "John Doe",
    },
    {
      id: 2,
      imageUrl:
        "https://media.wired.com/photos/5933101ad80dd005b42b0f7f/master/pass/reupload.jpg",
      photoStyle: "Architecture Shots",
      accountName: "Jane Smith",
    },
    {
      id: 3,
      imageUrl:
        "https://insider.kelbyone.com/wp-content/uploads/2018/06/architectural_hero-1280x720.jpg",
      photoStyle: "Portrait Photography",
      accountName: "Michael Lee",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0310/3571/9739/files/Abstract_Architecture_Photography_Tips_and_Tricks_-_Building_Classical_2048x2048.jpg?v=1623212347",
      photoStyle: "Street Photography",
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
                alt={photo.photoStyle}
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {photo.photoStyle}
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

export default PhotoProjects;
