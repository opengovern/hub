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
  tier: string;
//   controlCount: number;
  onClick?: () => void;
}

const IntegrationCard: FunctionComponent<CardProps> = ({
  title,
  imageUri,
  description,
  onClick,
  tier,
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
              {truncate(title, 50)}
            </span>
            <span className=" text-gray-300 w-full">
              {truncate(description, 200)}
            </span>
            {/* <span className=" text-white w-full">{description}</span> */}
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 w-full min-w-max">
              {tier == "Premium" && (
                <>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 -6 34 34"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                   
                  >
                    <title>crown</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="linearGradient-1"
                      >
                        <stop stop-color="#FFC923" offset="0%"></stop>
                        <stop stop-color="#FFAD41" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                    <g
                      id="icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="ui-gambling-website-lined-icnos-casinoshunter"
                        transform="translate(-1513.000000, -2041.000000)"
                        fill="url(#linearGradient-1)"
                        fill-rule="nonzero"
                      >
                        <g id="4" transform="translate(50.000000, 1871.000000)">
                          <path
                            d="M1480.91651,170.219311 C1481.3389,170.433615 1481.67193,170.790192 1481.85257,171.227002 L1485.64818,180.405177 L1493.44429,170.905749 C1494.13844,170.059929 1495.39769,169.928221 1496.25688,170.61157 C1496.72686,170.98536 1497,171.548271 1497,172.143061 L1497,189.04671 C1497,190.677767 1495.65685,192 1494,192 L1466,192 C1464.34315,192 1463,190.677767 1463,189.04671 L1463,172.142612 C1463,171.055241 1463.89543,170.173752 1465,170.173752 C1465.60413,170.173752 1466.17588,170.442575 1466.55559,170.905145 L1474.35377,180.405143 L1478.1477,171.227264 C1478.54422,170.268054 1479.62151,169.783179 1480.60701,170.093228 L1480.75404,170.145737 L1480.91651,170.219311 Z"
                            id="crown"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="dark:text-indigo-400  ">{tier}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntegrationCard;
