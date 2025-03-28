import { useEffect, useState } from "react";
import {
    IoChevronBackOutline,
    IoEye,
    IoFilter,
    IoSearch,
    IoThumbsUp,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { getAllPackages, useGetAllPackages } from "../api/package";
import { PackageModel } from "../types";

const PhotographyPackages = () => {
  const packages = useGetAllPackages();
  const navigate = useNavigate();
  // const [packages, setPackages] = useState<PackageModel[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchPackages = async () => {
  //     try {
  //       const response = await getAllPackages();
  //       if (response.success) {
  //         setPackages(response.data);
  //       } else {
  //         setError(response.message || "Không thể tải dữ liệu gói chụp ảnh");
  //       }
  //     } catch (err) {
  //       setError("Đã xảy ra lỗi khi tải dữ liệu");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPackages();
  // }, []);

  const formatPackageForDisplay = (pkg: PackageModel) => {
    return {
      id: pkg.packageId,
      image: "https://cdn.5280.com/2024/10/WEB_analogheroimage-960x720.jpg",
      price: `${pkg.price.toLocaleString()} VND`,
      name: pkg.packageName,
      description: pkg.description,
      // Các trường không có trong API sẽ được giả định
      discount: pkg.price > 300 ? "SALE OFF" : "",
      bestPrice: pkg.price <= 300,
      duration: `${pkg.duration} phút`,
      photographerId: pkg.photographerId,
      createdAt: new Date(pkg.createdAt).toLocaleDateString("vi-VN"),
    };
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100">
      <div className="border-b bg-white px-6 py-4">
        <Link
          to="/user/home"
          className="inline-flex items-center font-semibold text-[#9681FA]"
        >
          <IoChevronBackOutline className="h-5 w-5" />
          Back
        </Link>
      </div>
      {/* Action buttons */}
      <div className="flex justify-between px-4 py-2">
        <div className="flex w-1/4 items-center rounded-full bg-blue-100 px-6 py-2 text-blue-800">
          <IoFilter className="mr-2" />
          <span className="font-bold">Filter</span>
        </div>

        <div className="flex w-1/2 items-center justify-center rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-blue-200 px-6 py-2 text-blue-500">
          <IoSearch className="mr-2" />
          <span className="font-bold">Search</span>
        </div>

        <div className="flex w-1/4 items-center justify-center rounded-full bg-green-100 px-6 py-2 text-green-800">
          <span className="font-bold">Recommend</span>
        </div>
      </div>

      {/* Loading state */}
      {packages.isLoading && (
        <div className="flex flex-grow items-center justify-center">
          <div className="text-xl text-gray-600">Đang tải dữ liệu...</div>
        </div>
      )}

      {/* Error state */}
      {!packages.isLoading && packages.error && (
        <div className="flex flex-grow items-center justify-center">
          <div className="text-xl text-red-600">{packages.error.message}</div>
        </div>
      )}

      {/* Empty state */}
      {!packages.isLoading && !packages.error && packages.data?.data?.length === 0 && (
        <div className="flex flex-grow items-center justify-center">
          <div className="text-xl text-gray-600">Đang cập nhật dữ liệu...</div>
        </div>
      )}

      {/* Grid of photography packages */}
      {!packages.isLoading && !packages.error && packages.data?.data?.length! > 0 && (
        <div className="grid grid-cols-3 gap-4 overflow-y-auto p-4">
          {packages.data?.data?.map((pkg) => {
            const displayPkg = formatPackageForDisplay(pkg);
            return (
              <div
                key={displayPkg.id}
                className="relative overflow-hidden rounded-lg bg-white shadow-md"
                onClick={() => navigate(`/booking/${displayPkg.id}`)}
              >
                <img
                  src="https://cdn.5280.com/2024/10/WEB_analogheroimage-960x720.jpg"
                  alt={displayPkg.name}
                  className="h-64 w-full object-cover"
                />

                {/* Discount tag */}
                {displayPkg.discount && (
                  <div className="absolute top-2 right-2 rounded bg-red-500 p-1 font-bold text-white">
                    {displayPkg.discount}
                  </div>
                )}

                {/* Best Price tag */}
                {displayPkg.bestPrice && (
                  <div className="absolute top-2 right-2">
                    <div className="rounded-full bg-red-500 p-1 text-xs text-white">
                      BEST PRICE
                    </div>
                  </div>
                )}

                {/* Package info */}
                <div className="flex flex-col p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold">{displayPkg.name}</p>
                      <p className="font-semibold text-blue-600">
                        {displayPkg.price}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <button className="mr-2 text-blue-500">
                        <IoThumbsUp />
                      </button>
                      <button className="text-gray-500">
                        <IoEye />
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {displayPkg.description}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Thời lượng: {displayPkg.duration}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PhotographyPackages;
