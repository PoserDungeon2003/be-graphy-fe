import _ from "lodash";
import {
  IoAddCircleOutline,
  IoFolderOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoReorderTwo,
  IoSearch,
  IoSettingsOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { Link } from "react-router";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";

const tabs = [
  {
    name: "Hình cưới",
    key: "wedding",
  },
  {
    name: "Gia đình",
    key: "family",
  },
  {
    name: "Sự kiện",
    key: "event",
  },
  {
    name: "Khác",
    key: "other",
  },
];

type Album = {
  id: string;
  style: string;
  author: string;
  mainImage: string;
  images: string[];
};

function SortableAlbum({ album }: { album: Album }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: album.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="mb-2 flex items-center rounded-lg bg-[#93DDD4] p-5"
    >
      <div className="mr-3 cursor-grab" {...attributes} {...listeners}>
        <IoReorderTwo className="size-10 rotate-90 text-black" />
      </div>
      <div className="flex w-1/4 flex-col items-center px-4">
        <img
          src={album.mainImage}
          alt="picture"
          className="mb-2 w-full rounded-md shadow-sm"
        />
        <span className="font-semibold text-black">{album.style}</span>
        <span className="font-semibold text-black">{album.author}</span>
      </div>
      <div className="flex flex-1 items-center gap-4 px-4">
        {_.map(album.images, (img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`picture-${idx}`}
            className="w-1/4 rounded-md shadow-sm"
          />
        ))}
      </div>
      <div className="ml-4 flex flex-col gap-4">
        <IoFolderOutline className="size-8 cursor-pointer text-black hover:text-gray-700" />
        <IoShareSocialOutline className="size-8 cursor-pointer text-black hover:text-gray-700" />
      </div>
    </div>
  );
}

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
    {
      id: "3",
      style: "Portrait",
      author: "Mike Johnson",
      mainImage: "/images/landscape/landscape-1.png",
      images: [
        "/images/landscape/landscape-1.png",
        "/images/landscape/landscape-1.png",
        "/images/landscape/landscape-1.png",
      ],
    },
    {
      id: "4",
      style: "Wedding",
      author: "Sarah Lee",
      mainImage: "/images/landscape/landscape-1.png",
      images: [
        "/images/landscape/landscape-1.png",
        "/images/landscape/landscape-1.png",
        "/images/landscape/landscape-1.png",
      ],
    },
  ]);

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
      <div className="flex w-1/3 flex-col items-center gap-6">
        <div
          style={{
            backgroundImage: "url('/images/landscape/landscape-1.png')",
          }}
          className="relative mb-16 flex aspect-[501/369] w-auto flex-col items-center justify-end bg-cover bg-center"
        >
          <img
            src="/images/sample/avatar.png"
            alt="avatar"
            className="w-1/3 rounded-full border-8"
          />
          <div className="absolute bottom-0 z-10 flex w-1/2 translate-y-1/2 items-center justify-center rounded-4xl bg-white py-6">
            <span className="text-base font-medium text-black">Name</span>
          </div>
        </div>
        {_.map(tabs, (tab, index) => (
          <div
            key={index}
            className="w-52 cursor-pointer rounded-full bg-[#93ddd4] py-8 text-center"
          >
            <span className="text-lg font-medium text-black uppercase">
              {tab.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex h-full w-2/3 flex-1 flex-col gap-6 px-4 pt-12">
        <div className="mb-14">
          <span className="text-2xl font-bold text-black uppercase">
            Giới thiệu
          </span>
          <div className="relative bg-[#93DDD4] py-20 text-center">
            <span className="text-black">Xin chào tôi là ...!</span>
            <div className="absolute bottom-0 flex translate-y-1/2 items-center gap-4">
              <div className="rounded-md border border-[#2C2C2C] bg-[#F5F5F5] px-8 py-4 text-base font-medium text-[#2C2C2C]">
                Nam
              </div>
              <div className="rounded-md border border-[#2C2C2C] bg-[#F5F5F5] px-8 py-4 text-base font-medium text-[#2C2C2C]">
                1968
              </div>
              <div className="rounded-md border border-[#2C2C2C] bg-[#F5F5F5] px-8 py-4 text-base font-medium text-[#2C2C2C]">
                Hồ Chí Minh
              </div>
            </div>
            <div className="absolute right-0 bottom-0 flex translate-y-1/2 items-center gap-4">
              <Link
                to={"#"}
                target="_blank"
                className="rounded-md border border-[#2C2C2C] bg-[#F5F5F5] px-8 py-4 text-base font-medium text-[#2C2C2C]"
              >
                <IoLogoFacebook className="size-8" />
              </Link>
              <Link
                to={"#"}
                target="_blank"
                className="rounded-md border border-[#2C2C2C] bg-[#F5F5F5] px-8 py-4 text-base font-medium text-[#2C2C2C]"
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
              type="text"
              name="search"
              id="search"
              className="w-96 rounded-md bg-[#93DDD4] py-4 pr-4 pl-10 text-black focus:outline-0"
            />
          </div>
          <div className="flex items-center gap-4">
            <IoAddCircleOutline className="size-10 cursor-pointer text-black" />
            <IoSettingsOutline className="size-10 cursor-pointer text-black" />
          </div>
        </div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={albums.map((album) => album.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {albums.map((album) => (
                <SortableAlbum key={album.id} album={album} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}
