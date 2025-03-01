import _ from "lodash"
import { IoAddCircleOutline, IoFolderOutline, IoLogoFacebook, IoLogoTwitter, IoReorderTwo, IoSearch, IoSettingsOutline, IoShareSocialOutline } from "react-icons/io5"
import { Link } from "react-router"

const tabs = [
  {
    name: 'Hình cưới',
    key: 'wedding',
  },
  {
    name: 'Gia đình',
    key: 'family',
  },
  {
    name: 'Sự kiện',
    key: 'event',
  },
  {
    name: 'Khác',
    key: 'other',
  }
]

export default function PhotographerProfile() {
  return (
    <div className="flex items-start gap-4 pb-20">
      <div className="flex flex-col items-center gap-6 w-1/3">
        <div
          style={{
            backgroundImage: "url('/images/landscape/landscape-1.png')",
          }}
          className="relative bg-cover bg-center w-auto aspect-[501/369] flex flex-col items-center justify-end mb-16"
        >
          <img src="/images/sample/avatar.png" alt="avatar" className="w-1/3 border-8 rounded-full" />
          <div className="absolute bottom-0 translate-y-1/2 bg-white w-1/2 flex items-center justify-center rounded-4xl py-6 z-10">
            <span className="text-black text-base font-medium">
              Name
            </span>
          </div>
        </div>
        {_.map(tabs, (tab, index) => (
          <div key={index} className="bg-[#93ddd4] rounded-full w-52 text-center py-8 cursor-pointer">
            <span className="text-black text-lg font-medium uppercase">
              {tab.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col flex-1 w-2/3 px-4 gap-6 h-full pt-12">
        <div className="mb-14">
          <span className="text-black font-bold text-2xl uppercase">
            Giới thiệu
          </span>
          <div className="bg-[#93DDD4] text-center py-20 relative">
            <span className="text-black">
              Xin chào tôi là ...!
            </span>
            <div className="absolute bottom-0 translate-y-1/2 flex items-center gap-4">
              <div className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C]">
                Nam
              </div>
              <div className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C]">
                1968
              </div>
              <div className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C]">
                Hồ Chí Minh
              </div>
            </div>
            <div className="absolute right-0 bottom-0 translate-y-1/2 flex items-center gap-4">
              <Link to={'#'} className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C]">
                <IoLogoFacebook className="size-8" />
              </Link>
              <Link to={'#'} className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C]">
                <IoLogoTwitter className="size-8" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4">
          <div className="relative w-full">
            <IoSearch className="text-black absolute top-1/2 -translate-y-1/2 ml-3 size-5" />
            <input type="text" name="search" id="search" className="bg-[#93DDD4] w-96 rounded-md pl-10 pr-4 py-4 text-black focus:outline-0" />
          </div>
          <div className="flex items-center gap-4">
            <IoAddCircleOutline className="text-black size-10 cursor-pointer" />
            <IoSettingsOutline className="text-black size-10 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {_.map([0, 1, 2, 3], (item, index) => (
            <div key={index} className="flex items-center bg-[#93DDD4] p-5">
              <IoReorderTwo className="text-black rotate-90 size-10 cursor-pointer" />
              <div className="flex flex-col items-center">
                <img src="/images/landscape/landscape-1.png" alt="picture" className="w-1/2" />
                <span className="text-black font-semibold">
                  Photo style
                </span>
                <span className="text-black font-semibold">
                  Name account
                </span>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img src="/images/landscape/landscape-1.png" alt="picture" className="w-1/5" />
                <img src="/images/landscape/landscape-1.png" alt="picture" className="w-1/5" />
                <img src="/images/landscape/landscape-1.png" alt="picture" className="w-1/5" />
              </div>
              <div className="flex flex-col gap-4">
                <IoFolderOutline className="text-black size-8 cursor-pointer" />
                <IoShareSocialOutline className="text-black size-8 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}