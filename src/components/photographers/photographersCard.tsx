import React from 'react';
import { IoCameraOutline } from 'react-icons/io5';

export interface PhotographerProps {
  photographerId: number;
  userId: number;
  bio: string;
  portfolioUrl: string;
  rating?: number;  // Đánh dấu là có thể undefined
  location?: string;  // Đánh dấu là có thể undefined
}

const PhotographerCard: React.FC<PhotographerProps> = ({
  photographerId,
  userId,
  bio,
  portfolioUrl,
  rating,
  location,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <img
        src={portfolioUrl}
        alt={`Photographer #${photographerId}`}
        className="w-24 h-24 rounded-full object-cover border-4 border-[#cafbda]"
      />
      <h3 className="text-lg font-semibold mt-3 flex items-center gap-1">
        <IoCameraOutline className="text-blue-500" /> {`Photographer #${photographerId}`}
      </h3>
      <p className="text-gray-600 mt-2 text-sm">Bio: {bio || "Đang cập nhật..."}</p>
      <p className="text-gray-500 text-sm">
        Location: {location || "Đang cập nhật..."} {/* Hiển thị nếu không có location */}
      </p>
      <p className="text-yellow-500 text-sm">
        Rating: {rating ? `${rating} ⭐` : "0 ⭐"} {/* Hiển thị nếu không có rating */}
      </p>
    </div>
  );
};

export default PhotographerCard;
