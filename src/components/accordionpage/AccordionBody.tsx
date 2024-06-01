export const AccordionBody = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="w-96">
      <div className="pl-14 mx-auto my-2 py-2">{children}</div>
    </div>
  );
};
