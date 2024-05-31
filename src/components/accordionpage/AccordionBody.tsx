export const AccordionBody = ({ factText }: { factText: string }) => {
  return (
    <div className="w-96">
      <div className="max-w-8/10 mx-auto my-2 py-4">{factText}</div>
    </div>
  );
};
