// @ts-nocheck
import { useMemo } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "@remixicon/react";
import './style.css'
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { Pagination } from "@cloudscape-design/components";

// This example requires @tanstack/react-table

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}





const TextButton = ({ onClick, disabled, children }) => {
  return (
    <button
      type="button"
      className="group rounded-md bg-tremor-background p-2 text-tremor-default shadow-tremor-input ring-1 ring-inset ring-tremor-ring hover:bg-tremor-background-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-tremor-background dark:bg-indigo-400 dark:shadow-dark-tremor-input dark:ring-dark-tremor-ring hover:dark:bg-dark-tremor-background-muted disabled:hover:dark:bg-dark-tremor-background"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const NumberButton = ({ active, onClick, children, position }) => {
  return (
    <button
      type="button"
      className={classNames(
        "min-w-[36px] rounded-md p-2 text-tremor-default text-tremor-content-strong disabled:opacity-50 dark:text-white dark:bg-indigo-400",
        active
          ? "bg-tremor-brand font-semibold text-white dark:bg-indigo-700 dark:text-dark-tremor-brand-inverted"
          : "hover:bg-tremor-background-muted hover:dark:bg-dark-tremor-background",
        position === "left"
          ? "rounded-l-tremor-small"
          : position === "right"
            ? "rounded-r-tremor-small"
            : ""
      )}
      onClick={onClick}
      aria-current={classNames(active ? "Page" : "")}
    >
      {children}
    </button>
  );
};

const MobileButton = ({ onClick, disabled, children, position }) => {
  return (
    <button
      type="button"
      className={classNames(
        "group p-2 text-tremor-default ring-1 ring-inset ring-tremor-ring hover:bg-tremor-background-muted disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-tremor-background dark:ring-dark-tremor-ring hover:dark:bg-dark-tremor-background disabled:hover:dark:bg-dark-tremor-background",
        position === "left"
          ? "rounded-l-tremor-small"
          : position === "right"
            ? "-ml-px rounded-r-tremor-small"
            : ""
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const CustomPagination: FunctionComponent<any> = ({
  page_size,
  paginationCount,
  setPage,
  page,
  isZeroBased = false,
}) => {
  return (
    <>
      <div className="mt-3 flex items-center justify-between sm:justify-center custom-pagination">
        <Pagination
          className="pb-2 text-black dark:text-white"
          currentPageIndex={isZeroBased ? page + 1 : page}
          pagesCount={paginationCount}
          onChange={({ detail }) => {
            if(isZeroBased) {
                setPage(detail.currentPageIndex - 1);
                }
                else {
            setPage(detail.currentPageIndex);
                }

          }}
        />
      </div>
    </>
  );
};

export default CustomPagination;