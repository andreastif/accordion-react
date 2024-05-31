export const AccordionHeader = ({
  num,
  title,
  isOpen,
  onHandleOpen,
}: {
  num: number;
  title: string;
  isOpen: boolean;
  onHandleOpen: (isOpen: boolean) => void;
}) => {
  const str = "" + (num + 1);
  const pad = "00";

  return (
    <div className="flex flex-row" onClick={() => onHandleOpen(isOpen)}>
      <div className={`${isOpen ? "text-green-700" : ""} cursor-pointer flex flex-row w-96 sm:w-104 px-2 py-2`}>
        <div className={`${isOpen ? "" : "text-gray-600/70"} min-w-1/10 mx-1 font-semibold`}>
          {pad.substring(0, pad.length - str.length) + str}
        </div>
        <div className={`${isOpen ? "" : "text-gray-600"} min-w-8/10 font-semibold`}>{title}</div>
        <div className={`${isOpen ? "" : "text-gray-600"} min-w-1/10 text-xl text-center font-semibold `}>
          {isOpen ? "-" : "+"}
        </div>
      </div>
    </div>
  );
};
