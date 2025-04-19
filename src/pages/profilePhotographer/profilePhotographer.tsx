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
  IoChevronBackOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoSearch,
  IoSettingsOutline,
} from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { Album } from "../../types";
import { getPhotographerIdFromToken } from "../../utils/getPhotographerId";
import PackageSection from "./pkgSection";
import SortableAlbum from "./sortableAlbum";

export default function PhotographerProfile() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-4 shadow-md">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-[#9681FA] font-semibold"
        >
          <IoChevronBackOutline className="mr-1 h-5 w-5" />
          Back
        </button>
        <div className="flex items-center gap-4">
          <IoSettingsOutline className="size-6 text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 pt-8">
        {/* Intro Section */}
        <section className="mb-10">
          <h1 className="text-2xl font-bold uppercase text-gray-800 mb-4">
            Giới thiệu
          </h1>
          <div className="relative rounded-lg bg-[#93DDD4] py-6 px-6 text-center shadow">
            <p className="text-lg text-gray-800 font-medium">
              Welcome Photographer!
            </p>
            <div className="absolute right-4 bottom-0 translate-y-1/2 flex gap-3">
              <Link
                to={"#"}
                target="_blank"
                className="rounded-full border border-gray-700 bg-white p-2 hover:bg-gray-100"
              >
                <IoLogoFacebook className="size-6 text-gray-700" />
              </Link>
              <Link
                to={"#"}
                target="_blank"
                className="rounded-full border border-gray-700 bg-white p-2 hover:bg-gray-100"
              >
                <IoLogoTwitter className="size-6 text-gray-700" />
              </Link>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="mb-10 flex justify-between items-center">
          <div className="relative w-full max-w-md">
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Tìm kiếm album..."
              className="w-full rounded-lg bg-white pl-10 pr-4 py-3 shadow-sm border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#93DDD4]"
            />
          </div>
        </section>

        {/* Packages */}
        <section className="mb-12">
          <PackageSection photographerId={photographerId} />
        </section>

        {/* Albums */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold uppercase text-gray-800">
              Albums
            </h2>
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
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {albums.map((album) => (
                  <SortableAlbum key={album.id} album={album} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </section>
      </div>
    </div>
  );
}
