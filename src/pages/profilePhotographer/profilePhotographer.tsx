import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import _ from "lodash";
import { useState } from "react";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoSearch,
  IoSettingsOutline,
} from "react-icons/io5";
import { Link } from "react-router";
import { Album } from "../../types";
import { getPhotographerIdFromToken } from "../../utils/getPhotographerId";
import { tabs } from "./constants/tabs";
import PackageSection from "./pkgSection";
import Sidebar from "./sideBar";
import SortableAlbum from "./sortableAlbum";

export default function PhotographerProfile() {
  const [albums, setAlbums] = useState<Album[]>([
    {
      id: "1",
      style: "Studio",
      author: "John Doe",
      mainImage: "/images/landscape/landscape-1.png",
      images: [
        "/images/landscape/landscape-1.png",
        "/images/landscape/landscape-1.png",
        "/images/landscape/landscape-1.png",
      ],
    },
    {
      id: "2",
      style: "Outdoor",
      author: "Jane Smith",
      mainImage: "/images/landscape/landscape-1.png",
      images: [
        "/images/landscape/landscape-1.png",
        "/images/landscape/landscape-1.png",
        "/images/landscape/landscape-1.png",
      ],
    },
  ]);

  const photographerId = getPhotographerIdFromToken();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setAlbums((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="flex items-start gap-4 pb-20">
      <Sidebar tabs={tabs} />

      <div className="flex h-full w-2/3 flex-1 flex-col gap-6 px-4 pt-12">
        <div className="mt-3 mb-14">
          <span className="text-2xl font-bold text-black uppercase">
            Giới thiệu
          </span>
          <div className="relative bg-[#93DDD4] py-5 text-center">
            <span className="text-black">Welcome Photographer!</span>
            <div className="absolute right-0 bottom-0 flex translate-y-1/2 items-center gap-4">
              <Link
                to={"#"}
                target="_blank"
                className="rounded-md border border-[#2C2C2C] bg-[#F5F5F5] p-2 text-base font-medium text-[#2C2C2C]"
              >
                <IoLogoFacebook className="size-8" />
              </Link>
              <Link
                to={"#"}
                target="_blank"
                className="rounded-md border border-[#2C2C2C] bg-[#F5F5F5] p-2 text-base font-medium text-[#2C2C2C]"
              >
                <IoLogoTwitter className="size-8" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-4">
          <div className="relative w-full">
            <IoSearch className="absolute top-1/2 ml-3 size-5 -translate-y-1/2 text-black" />
            <input
              placeholder="Search"
              type="text"
              name="search"
              id="search"
              className="w-96 rounded-md bg-[#93DDD4] py-4 pr-4 pl-10 text-black focus:outline-0"
            />
          </div>
          <div className="flex items-center gap-4">
            <IoSettingsOutline className="size-10 cursor-pointer text-black" />
          </div>
        </div>

        {/* Package Management Section */}
        <PackageSection photographerId={photographerId} />

        {/* Albums Section */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black uppercase">Albums</h2>
          </div>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={_.map(albums, (album) => album.id)}
              strategy={verticalListSortingStrategy}
            >
              <div className="flex flex-col gap-4">
                {_.map(albums, (album) => (
                  <SortableAlbum key={album.id} album={album} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
