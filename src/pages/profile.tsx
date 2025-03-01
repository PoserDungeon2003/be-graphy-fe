import _ from "lodash"
import {
  IoAddCircleOutline,
  IoFolderOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoReorderTwo,
  IoSearch,
  IoSettingsOutline,
  IoShareSocialOutline
} from "react-icons/io5"
import { Link } from "react-router"
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from "react"

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

type Album = {
  id: string;
  style: string;
  author: string;
  mainImage: string;
  images: string[];
}

function SortableAlbum({ album }: { album: Album }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: album.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="flex items-center bg-[#93DDD4] p-5 rounded-lg mb-2">
      <div className="mr-3 cursor-grab" {...attributes} {...listeners}>
        <IoReorderTwo className="text-black rotate-90 size-10" />
      </div>
      <div className="flex flex-col items-center w-1/4 px-4">
        <img src={album.mainImage} alt="picture" className="w-full rounded-md shadow-sm mb-2" />
        <span className="text-black font-semibold">
          {album.style}
        </span>
        <span className="text-black font-semibold">
          {album.author}
        </span>
      </div>
      <div className="flex items-center gap-4 flex-1 px-4">
        {_.map(album.images, (img, idx) => (
          <img key={idx} src={img} alt={`picture-${idx}`} className="w-1/4 rounded-md shadow-sm" />
        ))}
      </div>
      <div className="flex flex-col gap-4 ml-4">
        <IoFolderOutline className="text-black size-8 cursor-pointer hover:text-gray-700" />
        <IoShareSocialOutline className="text-black size-8 cursor-pointer hover:text-gray-700" />
      </div>
    </div>
  );
}

export default function PhotographerProfile() {
  const [albums, setAlbums] = useState<Album[]>([
    {
      id: '1',
      style: 'Studio',
      author: 'John Doe',
      mainImage: '/images/landscape/landscape-1.png',
      images: [
        '/images/landscape/landscape-1.png',
        '/images/landscape/landscape-1.png',
        '/images/landscape/landscape-1.png',
      ]
    },
    {
      id: '2',
      style: 'Outdoor',
      author: 'Jane Smith',
      mainImage: '/images/landscape/landscape-1.png',
      images: [
        '/images/landscape/landscape-1.png',
        '/images/landscape/landscape-1.png',
        '/images/landscape/landscape-1.png',
      ]
    },
    {
      id: '3',
      style: 'Portrait',
      author: 'Mike Johnson',
      mainImage: '/images/landscape/landscape-1.png',
      images: [
        '/images/landscape/landscape-1.png',
        '/images/landscape/landscape-1.png',
        '/images/landscape/landscape-1.png',
      ]
    },
    {
      id: '4',
      style: 'Wedding',
      author: 'Sarah Lee',
      mainImage: '/images/landscape/landscape-1.png',
      images: [
        '/images/landscape/landscape-1.png',
        '/images/landscape/landscape-1.png',
        '/images/landscape/landscape-1.png',
      ]
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setAlbums((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

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
              <Link to={'#'} target="_blank" className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C]">
                <IoLogoFacebook className="size-8" />
              </Link>
              <Link to={'#'} target="_blank" className="bg-[#F5F5F5] text-[#2C2C2C] text-base font-medium px-8 py-4 rounded-md border border-[#2C2C2C]">
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
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={albums.map(album => album.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4">
              {albums.map(album => (
                <SortableAlbum key={album.id} album={album} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}