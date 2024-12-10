import {
  ComponentType,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
interface CardProps {
  title: string;
  imageUri: string;
  description: string;
  controlCount: number;
  onClick?: () => void;
}

const Card: FunctionComponent<CardProps> = ({
  title,
  imageUri,
  description,
  controlCount,
  onClick,
}) => {
  const truncate = (text: string | undefined, number: number) => {
    if (text) {
      return text.length > number ? text.substring(0, number) + "..." : text;
    }
  };

  return (
    <>
      <div
        onClick={onClick}
        className={`flex flex-row items-center sm:items-start justify-start w-full sm:h-full p-4  border-transparent rounded-lg shadow-none gap-2  group  px-0 text-base     text-gray-900 dark:text-gray-50 hover:bg-slate-300 dark:hover:bg-[#19222F] disabled:bg-gray-100 disabled:text-gray-400 disabled:dark:bg-gray-800 disabled:dark:text-gray-600 ${controlCount == -1 ? "bg-slate-400   dark:bg-gray-500" : " bg-slate-100 dark:bg-gray-900"}`}
      >
        <div className=" rounded-sm flex  sm:items-start items-center justify-center sm:justify-start   px-1 sm:px-7 h-full">
          <img
            src={imageUri}
            alt={title}
            className="w-14 h-12 bg-gray-300 p-2 rounded-xl"
          />
        </div>
        <div className="flex flex-row gap-3 w-full justify-between pr-7">
          <div className="flex flex-col gap-1 w-full">
            <div className=" text-black dark:text-white font-bold  text-xl flex flex-row mb-1 justify-between w-full ">
              <span className="  ">{truncate(title, 50)}</span>
              <span
                className={`text-black dark:text-white text-sm bg-slate-400  dark:bg-gray-500 p-1 rounded-md min-w-max h-fit  ${controlCount == -1 && "bg-slate-500"}`}
              >
                {controlCount != -1 && controlCount} Controls
              </span>
            </div>
            <span
              className={` text-slate-500 dark:text-gray-300 w-full text-wrap overflow-hidden text-ellipsis whitespace-nowrap  ${controlCount == -1 && "text-slate-200"}`}
            >
              {window.innerWidth > 768
                ? truncate(description, 200)
                : truncate(description, 50)}
            </span>
            {/* <span className=" text-black dark:text-white w-full">{description}</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
