import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllPackages } from "../api/package"; // hoặc tạo getPackageById nếu có
import { PackageModel } from "../types";

const PhotographyPackagesDetails = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState<PackageModel | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPackages(); // hoặc getPackageById(id)
        if (response.success) {
          const selectedPkg = response.data.find((p: PackageModel) => p.id === id);
          setPkg(selectedPkg || null);
        }
      } catch (error) {
        console.error("Lỗi khi tải chi tiết gói chụp");
      }
    };

    fetchData();
  }, [id]);

  const handlePayment = () => {
    navigate(`/paymentflight?package_id=${pkg?.id}`);
  };

  if (!pkg) {
    return <div className="p-4 text-center text-gray-600">Đang tải chi tiết...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center text-[#9681FA] font-semibold"
      >
        ← Quay lại
      </button>

      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <img
          src="https://cdn.5280.com/2024/10/WEB_analogheroimage-960x720.jpg"
          alt={pkg.packageName}
          className="mb-4 w-full rounded-lg object-cover"
        />

        <h2 className="text-2xl font-bold text-gray-800">{pkg.packageName}</h2>
        <p className="mt-2 text-gray-600">{pkg.description || "Đang cập nhật..."}</p>

        <div className="mt-4 space-y-2">
          <p>
            <strong>Giá:</strong> {pkg.price?.toLocaleString() || "Đang cập nhật..."} VND
          </p>
          <p>
            <strong>Thời lượng:</strong> {pkg.duration ? `${pkg.duration} phút` : "Đang cập nhật..."}
          </p>
          <p>
            <strong>Photographer ID:</strong> {pkg.photographerId || "Đang cập nhật..."}
          </p>
          <p>
            <strong>Ngày tạo:</strong>{" "}
            {pkg.createdAt ? new Date(pkg.createdAt).toLocaleDateString("vi-VN") : "Đang cập nhật..."}
          </p>
        </div>

        <button
          onClick={handlePayment}
          className="mt-6 w-full rounded-lg bg-green-500 px-6 py-3 text-lg font-bold text-white hover:bg-green-600 transition"
        >
          Đặt lịch thanh toán (VNPay)
        </button>
      </div>
    </div>
  );
};

export default PhotographyPackagesDetails;
