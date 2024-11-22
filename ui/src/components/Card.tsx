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
    onClick


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
        className={`flex flex-row items-start justify-start w-full h-full p-4  border-transparent rounded-lg shadow-none gap-2  group  px-0 text-base hover:bg-transparent    "text-gray-900 dark:text-gray-50",
        bg-gray-200 dark:bg-gray-900
        hover:bg-gray-300/70 dark:hover:bg-[#19222F]
        disabled:bg-gray-100 disabled:text-gray-400
        disabled:dark:bg-gray-800 disabled:dark:text-gray-600`}
      >
        <div className=" rounded-sm flex align-top items-start justify-start  px-7">
          <img
            src={imageUri}
            alt={title}
            className="w-14 h-12 bg-gray-300 p-2 rounded-xl"
          />
        </div>
        <div className="flex flex-row gap-3 w-full justify-between pr-7">
          <div className="flex flex-col gap-1 w-full">
            <span className=" text-white font-bold w-full text-xl ">
              {truncate(title,50)}
            </span>
            <span className=" text-gray-300 w-full">{truncate(description,200)}</span>
            {/* <span className=" text-white w-full">{description}</span> */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 w-full min-w-max">
              <span className="text-white text-sm bg-gray-500 p-1 rounded-md min-w-max">
                {controlCount} Controls
              </span>
              {/* <span className="text-white text-sm bg-gray-500 p-1 rounded-md min-w-max">
                {numberOfTables} Tables
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
