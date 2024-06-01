import { useState } from "react";
import { Accordion } from "./Accordion";
import { IAccordion } from "./Types";

const accordionList: IAccordion[] = [
  {
    id: 0,
    isOpen: false,
    fact: {
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
  },
  {
    id: 1,
    isOpen: false,
    fact: {
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
  },
  {
    id: 2,
    isOpen: false,
    fact: {
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  },

  {
    id: 3,
    isOpen: false,
    fact: {
      title: "Where do I apply my discount code?",
      text: "Cras tincidunt in magna ut faucibus. In in tempor nisl. Donec venenatis aliquet nulla, cursus blandit nisi mollis a.",
    },
  },
];

export const AccordionPage = () => {
  const [accordions, setAccordions] = useState(accordionList);

  const handleOpenAccordion = (id: number) => {
    setAccordions((prev) => {
      return prev.map((item) => {
        return item.id === id ? { ...item, isOpen: !item.isOpen } : { ...item, isOpen: false };
      });
    });
  };

  return (
    <div className="flex flex-col bg-slate-50">
      <div className="my-10">
        <h1 className="text-center text-2xl">Welcome to the accordion page</h1>
      </div>
      <div className="flex flex-col items-center gap-2">
        {accordions.map((item) => (
          <Accordion
            key={"Accordion " + item.id}
            id={item.id}
            title={item.fact.title}
            isOpen={item.isOpen}
            onHandleOpen={handleOpenAccordion}
          >
            {item.fact.text}
          </Accordion>
        ))}
      </div>
    </div>
  );
};
