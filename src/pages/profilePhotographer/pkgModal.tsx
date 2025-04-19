import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { createPackage } from "../../api/package";
import { PackageModel } from "../../types";

interface PackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  photographerId: number;
}

export default function PackageModal({
  isOpen,
  onClose,
  onSave,
}: PackageModalProps) {
  const [packageData, setPackageData] = useState<
    Omit<PackageModel, "packageId" | "createdAt">
  >({
    photographerId: 0,
    packageName: "",
    description: "",
    price: 0,
    duration: 1,
  });

  const [error, setError] = useState("");
  const userProfile = JSON.parse(
    localStorage.getItem("userProfile") || "{}"
  )
  const photographerId = userProfile.photographer.photographerId;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setPackageData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "duration" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!packageData.packageName || !packageData.description) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }

    packageData.photographerId = photographerId;

    const result = await createPackage(packageData as PackageModel);

    if (result.success) {
      onSave();
      onClose();
    } else {
      setError(result.message || "Không thể tạo gói");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-blue-300">
      <div className="w-full max-w-lg rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">
            Tạo gói chụp ảnh mới
          </h2>
          <button
            type="button"
            title="Close"
            onClick={onClose}
            className="text-gray-500"
          >
            <IoClose className="size-6" />
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block font-medium text-black">Tên gói</label>
            <input
              type="text"
              name="packageName"
              value={packageData.packageName}
              onChange={handleChange}
              className="w-full rounded-md border bg-gray-50 p-3"
              placeholder="Ex: Wedding Basic"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-medium text-black">Mô tả</label>
            <textarea
              name="description"
              value={packageData.description}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-md border bg-gray-50 p-3"
              placeholder="Mô tả chi tiết về gói chụp ảnh"
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block font-medium text-black">
                Giá (VND)
              </label>
              <input
                placeholder="Ex: 300000"
                type="number"
                name="price"
                value={packageData.price}
                onChange={handleChange}
                min="0"
                className="w-full rounded-md border bg-gray-50 p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-black">
                Thời lượng (phút)
              </label>
              <input
                placeholder="Ex: 120"
                type="number"
                name="duration"
                value={packageData.duration}
                onChange={handleChange}
                min="1"
                className="w-full rounded-md border bg-gray-50 p-3"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 rounded-md border px-4 py-2 text-gray-700"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#93DDD4] px-4 py-2 font-medium text-black"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
