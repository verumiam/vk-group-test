export interface initialStateType {
  colors: Colors;
  friends: boolean;
  filtersCount: number;
  isModalOpen: boolean;
}

export type Colors = {
  [key: string]: {
    checked: boolean;
    apply: boolean;
  };
};
