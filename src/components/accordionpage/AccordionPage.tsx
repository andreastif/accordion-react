import { Accordion } from "./Accordion";
import { facts } from "./Facts";

export const AccordionPage = () => {
  return (
    <div className="flex flex-col bg-slate-50">
      <div className="my-10">
        <h1 className="text-center text-2xl">Welcome to the accordion page</h1>
      </div>
      <div className="flex flex-col items-center gap-2">
        {facts.map((fact, key) => (
          <Accordion key={"Accordion " + key} num={key} fact={fact} />
        ))}
      </div>
    </div>
  );
};
