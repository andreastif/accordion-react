import { AccordionHeader } from "./AccordionHeader";
import { AccordionBody } from "./AccordionBody";

export const Accordion = ({
  title,
  id,
  isOpen,
  onHandleOpen,
  children,
}: {
  title: string;
  id: number;
  isOpen: boolean;
  onHandleOpen: (id: number) => void;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`${isOpen ? "border-solid border-t-2 border-green-600" : ""} bg-zinc-100/30 shadow-md rounded-sm my-4`}
    >
      <AccordionHeader onHandleOpen={onHandleOpen} id={id} title={title} isOpen={isOpen} />
      {isOpen ? <AccordionBody>{children}</AccordionBody> : null}
    </div>
  );
};
