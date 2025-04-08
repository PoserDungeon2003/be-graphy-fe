import { IoSettingsOutline } from "react-icons/io5";
import { PackageModel } from "../../types";

interface PackageItemProps {
  pkg: PackageModel;
}

export default function PackageItem({ pkg }: PackageItemProps) {
  return (
    <div className="mb-2 flex items-center rounded-lg bg-[#93DDD4] p-5">
      <div className="flex w-1/3 flex-col px-4">
        <h3 className="text-xl font-bold text-black">{pkg.packageName}</h3>
        <p className="text-sm text-gray-700 mt-1">{pkg.description}</p>
      </div>
      <div className="flex flex-1 items-center gap-4 px-4">
        <div className="bg-white rounded-md px-4 py-2 text-center">
          <span className="block text-lg font-bold text-black">{pkg.price.toLocaleString()} VND</span>
          <span className="text-sm text-gray-700">Giá</span>
        </div>
        <div className="bg-white rounded-md px-4 py-2 text-center">
          <span className="block text-lg font-bold text-black">{pkg.duration} giờ</span>
          <span className="text-sm text-gray-700">Thời lượng</span>
        </div>
      </div>
      <div className="ml-4 flex flex-col gap-4">
        <IoSettingsOutline className="size-8 cursor-pointer text-black hover:text-gray-700" />
      </div>
    </div>
  );
}