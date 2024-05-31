export const AccordionBody = ({ factText }: { factText: string }) => {
  return (
    <div className="w-96">
      <div className="pl-14 mx-auto my-2 py-2">{factText}</div>
    </div>
  );
};
