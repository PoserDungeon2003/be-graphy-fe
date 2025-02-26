import _ from "lodash";
import { IoAdd, IoStar, IoThumbsUp } from "react-icons/io5";

const projects = [
  {
    imgUrl: "/images/landscape/landscape-2.png",
    title: "Project 1",
  },
  {
    imgUrl: "/images/landscape/landscape-2.png",
    title: "Project 1",
  },
  {
    imgUrl: "/images/landscape/landscape-2.png",
    title: "Project 1",
  },
]

export default function Profile() {
  return (
    <div className="mb-8 w-full flex items-center justify-between gap-2 h-screen">
      {/* <img src="/images/landscape/landscape-1.png" alt="background" className=" absolute w-full h-1/3 top-10 aspect-[820/468] -z-10" /> */}
      {/* <img src="/images/home/img-1.png" alt="background" className="rotate-y-180" /> */}
      <div className="w-1/3 flex flex-col items-center justify-center gap-4 px-4">
        <img src="/images/sample/profile-1.png" alt="profile" className="w-full" />
        <div className="space-y-6 w-full">
          <div className="w-full text-center text-2xl font-bold text-black uppercase bg-[#9681fa] rounded-full px-4 py-2">
            Name
          </div>
          <div className="w-full text-center text-2xl font-bold text-black uppercase bg-[#9681fa] rounded-full px-4 py-2">
            Date
          </div>
          <div className="w-full text-center text-2xl font-bold text-black uppercase bg-[#9681fa] rounded-full px-4 py-2">
            Email
          </div>
        </div>
        <div className="flex items-center gap-4">
          <IoThumbsUp className="text-black size-6" />
          <div className="flex items-center gap-1">
            {_.map([0, 1, 2, 3, 4], (index) => (
              <IoStar key={index} className="text-[#5ce1e6] size-6" />
            ))}
          </div>
        </div>
        <button className="text-2xl uppercase font-bold text-black bg-gradient-to-r from-[#fff2b3] to-[#ffb1f2] rounded-2xl px-8 py-4 w-full">
          Booking now
        </button>
        <button className="text-2xl font-bold text-black bg-gradient-to-r from-[#fff2b3] to-[#ffb1f2] rounded-2xl px-8 py-4 w-full">
          Chat now
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {_.map(projects, (project, index) => (
          <div key={index}>
            <img src={project.imgUrl} alt={project.title} />
          </div>
        ))}
        <div className="flex items-center justify-center bg-gradient-to-r from-[#fff1b2] to-[#ffadf6] rounded-3xl">
          <div className="flex flex-col items-center justify-center">
            <button className="bg-gradient-to-r from-[#cce5df] to-[#b5c4f4] rounded-3xl py-4 px-10">
              <IoAdd className="text-white size-8" />
            </button>
            <span className="text-md uppercase font-bold text-[#9681FA]">
              New Picture
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}