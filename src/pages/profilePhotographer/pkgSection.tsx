import { useEffect, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { getPackageById } from "../../api/package";
import { PackageModel } from "../../types";
import PackageItem from "./pkgItem";
import PackageModal from "./pkgModal";

interface PackageSectionProps {
  photographerId: number;
}

export default function PackageSection({
  photographerId,
}: PackageSectionProps) {
  const [packages, setPackages] = useState<PackageModel[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPackages = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await getPackageById(photographerId);
      if (result.success) {
        setPackages(result.data || []);
      } else {
        setError(result.message || "Không thể tải dữ liệu");
      }
    } catch (err) {
      setError("Lỗi khi tải dữ liệu");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, [photographerId]);

  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-black uppercase">
          Gói chụp ảnh
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-md bg-[#93DDD4] px-4 py-2 font-medium text-black"
        >
          <IoAddCircleOutline className="size-5" />
          Thêm gói
        </button>
      </div>

      {loading ? (
        <div className="py-8 text-center">
          <p>Đang tải...</p>
        </div>
      ) : error ? (
        <div className="mb-4 rounded-md bg-red-100 p-4 text-red-700">
          {error}
        </div>
      ) : packages.length === 0 ? (
        <div className="rounded-md bg-gray-50 py-8 text-center">
          <p className="text-gray-500">
            Chưa có gói chụp ảnh nào. Hãy tạo gói mới!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {packages.map((pkg) => (
            <PackageItem key={pkg.id} pkg={pkg} />
          ))}
        </div>
      )}

      <PackageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={fetchPackages}
        photographerId={photographerId}
      />
    </div>
  );
}
