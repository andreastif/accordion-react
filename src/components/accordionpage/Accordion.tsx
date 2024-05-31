import { useState } from "react";
import { AccordionHeader } from "./AccordionHeader";
import { Ifact } from "./Facts";
import { AccordionBody } from "./AccordionBody";

export const Accordion = ({ fact, num }: { fact: Ifact; num: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${isOpen ? "border-solid border-t-2 border-green-600" : ""} bg-zinc-100/30 shadow-md rounded-sm my-4`}
    >
      <AccordionHeader onHandleOpen={handleOpen} num={num} title={fact.title} isOpen={isOpen} />
      {isOpen ? <AccordionBody factText={fact.text} /> : null}
    </div>
  );
};
