import _ from "lodash";
import { IoAddCircleOutline, IoCloseOutline, IoSearch, IoSettingsOutline } from "react-icons/io5";

export default function Album() {
  return (
    <div className="flex flex-col gap-10 p-20">
      <div className="flex justify-between">
        <div className="relative w-full">
          <IoSearch className="absolute top-1/2 ml-3 size-5 -translate-y-1/2 text-black" />
          <input
            type="text"
            name="search"
            id="search"
            className="w-1/2 rounded-md bg-[#93DDD4] py-4 pr-4 pl-10 text-black focus:outline-0"
          />
        </div>
        <div className="flex items-center gap-4">
          <IoAddCircleOutline className="size-10 cursor-pointer text-black" />
          <IoSettingsOutline className="size-10 cursor-pointer text-black" />
        </div>
      </div>
      <div className="bg-[#93DDD4] rounded-xl p-6 flex items-center justify-center gap-10">
        <div className="w-1/4 relative">
          <IoSettingsOutline className="text-white absolute bottom-0 right-0 -translate-x-2/3 -translate-y-2/3 mr-4 mb-4 size-6 cursor-pointer" />
          <img src="/images/landscape/landscape-1.png" alt="picture" className="w-full" />
        </div>
        <div className="bg-white w-3/4 p-6 rounded-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-black uppercase text-2xl font-medium">
              Tên Album
            </span>
            <span className="text-black uppercase text-2xl font-medium bg-[#93DDD4] px-20 py-4 rounded-md">
              Chủ đề
            </span>
          </div>
          <span className="w-full text-black uppercase text-2xl font-medium bg-[#93DDD4] px-20 py-4 rounded-md">
            ĐÂY LÀ DESCRIPTION
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {_.map([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], (item, index) => (
          <div key={index} className="space-y-2 relative">
            <IoCloseOutline className="text-black absolute font-bold size-8 right-0 translate-x-2/3 -translate-y-1/2 cursor-pointer" />
            <img src="/images/landscape/landscape-1.png" alt="picture" />
            <div>
              <div className="text-black flex flex-col font-bold">
                <span>
                  Photo style
                </span>
                <span>
                  Name account
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}