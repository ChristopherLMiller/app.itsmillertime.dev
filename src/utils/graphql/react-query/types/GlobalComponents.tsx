import { Maybe, Scalars } from '.';

export type ComponentGlobalSell = {
  __typename?: `ComponentGlobalSell`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  price: Scalars[`Int`];
};

export type ComponentGlobalSellInput = {
  price: Scalars[`Int`];
};

export type EditComponentGlobalSellInput = {
  id?: Maybe<Scalars[`ID`]>;
  price?: Maybe<Scalars[`Int`]>;
};

export type ComponentGlobalShare = {
  __typename?: `ComponentGlobalShare`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  facebook?: Maybe<Scalars[`Boolean`]>;
  twitter?: Maybe<Scalars[`Boolean`]>;
  instagram?: Maybe<Scalars[`Boolean`]>;
};

export type ComponentGlobalShareInput = {
  facebook?: Maybe<Scalars[`Boolean`]>;
  twitter?: Maybe<Scalars[`Boolean`]>;
  instagram?: Maybe<Scalars[`Boolean`]>;
};

export type EditComponentGlobalShareInput = {
  id?: Maybe<Scalars[`ID`]>;
  facebook?: Maybe<Scalars[`Boolean`]>;
  twitter?: Maybe<Scalars[`Boolean`]>;
  instagram?: Maybe<Scalars[`Boolean`]>;
};
