export interface IFact {
  title: string;
  text: string;
}

export interface IAccordion {
  id: number;
  isOpen: boolean;
  fact: IFact;
}
