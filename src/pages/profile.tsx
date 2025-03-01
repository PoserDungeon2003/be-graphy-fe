import _ from "lodash"
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io5"

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
    <div className="flex items-center gap-4">
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
        {/* <div className="flex flex-col gap-4 pt-20 pl-20">

        </div> */}
      </div>
      <div className="flex-1">
        <div>
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
              <div className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C] cursor-pointer">
                <IoLogoFacebook className="size-8" />
              </div>
              <div className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C] cursor-pointer">
                <IoLogoTwitter className="size-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}