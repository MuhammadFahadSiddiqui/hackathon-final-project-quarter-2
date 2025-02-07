import React from "react";
import Image from "next/image";
import { AiOutlineCalendar, AiOutlineUser, AiOutlineComment } from "react-icons/ai";

interface BlogCardProps {
  image: string;
  date: string;
  day: string;
  month: string;
  title: string;
  description: string;
  author: string;
  comments: number;
  buttonText: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  date,
  day,
  month,
  title,
  description,
  author,
  comments,
  buttonText,
}) => {
  return (
    <div className="text-ododod w-[70%] h-auto mx-auto rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="relative">
        <Image
          src={image}
          alt="Blog"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        {/* Date Tag */}
        <div className="absolute top-4 left-4 bg-primarycolororg text-white text-center font-bold py-1 px-2 rounded">
          <p className="text-sm md:text-base">{day}</p>
          <p className="text-xs md:text-sm">{month}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-5">
        {/* Meta Info */}
        <div className="flex items-center text-ododod text-xs md:text-sm gap-4 mb-3">
          <div className="flex items-center gap-1">
            <AiOutlineCalendar />
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineComment />
            <p>{comments}</p>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineUser />
            <p>{author}</p>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-base md:text-lg font-bold mb-3 leading-tight">
          {title}
        </h2>

        {/* Description */}
        <p className="text-ododod text-xs md:text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Read More Button */}
        <button className="flex items-center gap-2 text-primarycolororg font-semibold hover:underline">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
