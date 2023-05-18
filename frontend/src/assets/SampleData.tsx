export interface elementProps {
  number: number | string;
  name: string;
  elementClassName: string;
}
export interface ElementClassesProps {
  [key: string]: string;
}
export const elementClasses: ElementClassesProps = {
  "Reactive non-metals": "#0655DE",
  "Alkali metals": "#06EADE",
  "Alkaline earth metals": "#F5A0BF",
  "Transition metals": "#9702FF",
  Lanthanides: "#97C7FF",
  "Unknown properties": "#333333",
  Metalloids: "#FFCD4A",
  "Post-transition metals": "#4ACD96",
  "Noble gases": "#F60D34",
  Actinides: "#F6520A",
  empty: "white",
};

export const FirstColumn: elementProps[] = [
  { name: "H", number: 1, elementClassName: "Reactive non-metals" },
  { name: "Li", number: 3, elementClassName: "Alkali metals" },
  { name: "Na", number: 11, elementClassName: "Alkali metals" },
  { name: "K", number: 19, elementClassName: "Alkali metals" },
  { name: "Rb", number: 37, elementClassName: "Alkali metals" },
  { name: "Cs", number: 55, elementClassName: "Alkali metals" },
  { name: "Fr", number: 87, elementClassName: "Alkali metals" },
];

export const SecondColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "Be", number: 4, elementClassName: "Alkaline earth metals" },
  { name: "Mg", number: 12, elementClassName: "Alkaline earth metals" },
  { name: "Ca", number: 20, elementClassName: "Alkaline earth metals" },
  { name: "Sr", number: 38, elementClassName: "Alkaline earth metals" },
  { name: "Ba", number: 56, elementClassName: "Alkaline earth metals" },
  { name: "Ra", number: 88, elementClassName: "Alkaline earth metals" },
];

export const ThirdColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Sc", number: 21, elementClassName: "Transition metals" },
  { name: "Y", number: 39, elementClassName: "Transition metals" },
  { name: "La", number: 57, elementClassName: "Lanthanides" },
  { name: "Ac", number: 89, elementClassName: "Actinides" },
];

export const FourthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Ti", number: 22, elementClassName: "Transition metals" },
  { name: "Zr", number: 40, elementClassName: "Transition metals" },
  { name: "Hf", number: 72, elementClassName: "Transition metals" },
  { name: "Rf", number: 104, elementClassName: "Transition metals" },
];

export const FifthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "V", number: 23, elementClassName: "Transition metals" },
  { name: "Nb", number: 41, elementClassName: "Transition metals" },
  { name: "Ta", number: 73, elementClassName: "Transition metals" },
  { name: "Db", number: 105, elementClassName: "Transition metals" },
];

export const SixthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Cr", number: 24, elementClassName: "Transition metals" },
  { name: "Mo", number: 42, elementClassName: "Transition metals" },
  { name: "W", number: 74, elementClassName: "Transition metals" },
  { name: "Sg", number: 106, elementClassName: "Transition metals" },
];

export const SeventhColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Mn", number: 25, elementClassName: "Transition metals" },
  { name: "Tc", number: 43, elementClassName: "Transition metals" },
  { name: "Re", number: 75, elementClassName: "Transition metals" },
  { name: "Bs", number: 107, elementClassName: "Transition metals" },
];

export const EighthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Fe", number: 26, elementClassName: "Transition metals" },
  { name: "Ru", number: 44, elementClassName: "Transition metals" },
  { name: "Os", number: 76, elementClassName: "Transition metals" },
  { name: "Hs", number: 108, elementClassName: "Transition metals" },
];

export const NinethColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Co", number: 27, elementClassName: "Transition metals" },
  { name: "Rh", number: 45, elementClassName: "Transition metals" },
  { name: "Ir", number: 77, elementClassName: "Transition metals" },
  { name: "Mt", number: 109, elementClassName: "Unknown properties" },
];

export const TenthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Ni", number: 28, elementClassName: "Transition metals" },
  { name: "Pd", number: 46, elementClassName: "Transition metals" },
  { name: "Pt", number: 78, elementClassName: "Transition metals" },
  { name: "Ds", number: 110, elementClassName: "Unknown properties" },
];

export const EleventhColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Cu", number: 29, elementClassName: "Transition metals" },
  { name: "Ag", number: 47, elementClassName: "Transition metals" },
  { name: "Au", number: 79, elementClassName: "Transition metals" },
  { name: "Rg", number: 111, elementClassName: "Unknown properties" },
];

export const TwelfthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "", number: "", elementClassName: "empty" },
  { name: "Zn", number: 30, elementClassName: "Transition metals" },
  { name: "Cd", number: 48, elementClassName: "Transition metals" },
  { name: "Hg", number: 80, elementClassName: "Transition metals" },
  { name: "Cn", number: 112, elementClassName: "Unknown properties" },
];

export const ThirteenthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "B", number: 5, elementClassName: "Metalloids" },
  { name: "Al", number: 13, elementClassName: "Post-transition metals" },
  { name: "Ga", number: 31, elementClassName: "Post-transition metals" },
  { name: "In", number: 49, elementClassName: "Post-transition metals" },
  { name: "Tl", number: 81, elementClassName: "Post-transition metals" },
  { name: "Nh", number: 113, elementClassName: "Unknown properties" },
];

export const FourteenthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "C", number: 6, elementClassName: "Reactive non-metals" },
  { name: "Si", number: 14, elementClassName: "Metalloids" },
  { name: "Ge", number: 32, elementClassName: "Metalloids" },
  { name: "Sn", number: 50, elementClassName: "Post-transition metals" },
  { name: "Pb", number: 82, elementClassName: "Post-transition metals" },
  { name: "Fl", number: 114, elementClassName: "Unknown properties" },
];

export const FifteenthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "N", number: 7, elementClassName: "Reactive non-metals" },
  { name: "P", number: 15, elementClassName: "Reactive non-metals" },
  { name: "As", number: 32, elementClassName: "Metalloids" },
  { name: "Sb", number: 51, elementClassName: "Metalloids" },
  { name: "Bi", number: 83, elementClassName: "Post-transition metals" },
  { name: "Mc", number: 115, elementClassName: "Unknown properties" },
];

export const SixteenthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "O", number: 8, elementClassName: "Reactive non-metals" },
  { name: "S", number: 16, elementClassName: "Reactive non-metals" },
  { name: "Se", number: 33, elementClassName: "Reactive non-metals" },
  { name: "Te", number: 52, elementClassName: "Metalloids" },
  { name: "Po", number: 84, elementClassName: "Post-transition metals" },
  { name: "Lv", number: 116, elementClassName: "Unknown properties" },
];

export const SeventeenthColumn: elementProps[] = [
  { name: "", number: "", elementClassName: "empty" },
  { name: "F", number: 9, elementClassName: "Reactive non-metals" },
  { name: "Cl", number: 17, elementClassName: "Reactive non-metals" },
  { name: "Br", number: 34, elementClassName: "Reactive non-metals" },
  { name: "I", number: 53, elementClassName: "Reactive non-metals" },
  { name: "At", number: 85, elementClassName: "Post-transition metals" },
  { name: "Ts", number: 117, elementClassName: "Unknown properties" },
];

export const EighteenthColumn: elementProps[] = [
  { name: "He", number: 2, elementClassName: "Noble gases" },
  { name: "Ne", number: 10, elementClassName: "Noble gases" },
  { name: "Ar", number: 18, elementClassName: "Noble gases" },
  { name: "Kr", number: 35, elementClassName: "Noble gases" },
  { name: "Xe", number: 54, elementClassName: "Noble gases" },
  { name: "Rn", number: 86, elementClassName: "Noble gases" },
  { name: "Og", number: 118, elementClassName: "Unknown properties" },
];

export const elementColumns = [
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
  FifthColumn,
  SixthColumn,
  SeventhColumn,
  EighthColumn,
  NinethColumn,
  TenthColumn,
  EleventhColumn,
  TwelfthColumn,
  ThirteenthColumn,
  FourteenthColumn,
  FifteenthColumn,
  SixteenthColumn,
  SeventeenthColumn,
  EighteenthColumn,
];

export const FirstSubTable: elementProps[] = [
  { name: "Ce", number: 58, elementClassName: "Lanthanides" },
  { name: "Pr", number: 59, elementClassName: "Lanthanides" },
  { name: "Nd", number: 60, elementClassName: "Lanthanides" },
  { name: "Pm", number: 61, elementClassName: "Lanthanides" },
  { name: "Sm", number: 62, elementClassName: "Lanthanides" },
  { name: "Eu", number: 63, elementClassName: "Lanthanides" },
  { name: "Gd", number: 64, elementClassName: "Lanthanides" },
  { name: "Tb", number: 65, elementClassName: "Lanthanides" },
  { name: "Dy", number: 66, elementClassName: "Lanthanides" },
  { name: "Ho", number: 67, elementClassName: "Lanthanides" },
  { name: "Er", number: 68, elementClassName: "Lanthanides" },
  { name: "Tm", number: 69, elementClassName: "Lanthanides" },
  { name: "Yb", number: 70, elementClassName: "Lanthanides" },
  { name: "Lu", number: 71, elementClassName: "Lanthanides" },
];

export const SecondSubTable: elementProps[] = [
  { name: "Th", number: 90, elementClassName: "Actinides" },
  { name: "Pa", number: 91, elementClassName: "Actinides" },
  { name: "U", number: 92, elementClassName: "Actinides" },
  { name: "Np", number: 93, elementClassName: "Actinides" },
  { name: "Pu", number: 94, elementClassName: "Actinides" },
  { name: "Am", number: 95, elementClassName: "Actinides" },
  { name: "Cm", number: 96, elementClassName: "Actinides" },
  { name: "Bk", number: 97, elementClassName: "Actinides" },
  { name: "Cf", number: 98, elementClassName: "Actinides" },
  { name: "Es", number: 99, elementClassName: "Actinides" },
  { name: "Fm", number: 100, elementClassName: "Actinides" },
  { name: "Md", number: 101, elementClassName: "Actinides" },
  { name: "No", number: 102, elementClassName: "Actinides" },
  { name: "Lr", number: 103, elementClassName: "Actinides" },
];

export const SubElementRows = [FirstSubTable, SecondSubTable];
