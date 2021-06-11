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

export type ComponentGlobalSeo = {
  __typename?: `ComponentGlobalSeo`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  title?: Maybe<Scalars[`String`]>;
  description?: Maybe<Scalars[`String`]>;
  Sharing?: Maybe<ComponentGlobalShare>;
};

export type ComponentGlobalSeoInput = {
  title?: Maybe<Scalars[`String`]>;
  description?: Maybe<Scalars[`String`]>;
  Sharing?: Maybe<ComponentGlobalShareInput>;
};

export type EditComponentGlobalSeoInput = {
  id?: Maybe<Scalars[`ID`]>;
  title?: Maybe<Scalars[`String`]>;
  description?: Maybe<Scalars[`String`]>;
  Sharing?: Maybe<EditComponentGlobalShareInput>;
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
