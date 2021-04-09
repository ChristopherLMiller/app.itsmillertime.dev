import { InputId, Maybe, Scalars } from '.';
import { Morph } from './Morph';

export type UploadFile = {
  __typename?: `UploadFile`;
  id: Scalars[`ID`];
  _id: Scalars[`ID`];
  createdAt: Scalars[`DateTime`];
  updatedAt: Scalars[`DateTime`];
  name: Scalars[`String`];
  alternativeText?: Maybe<Scalars[`String`]>;
  caption?: Maybe<Scalars[`String`]>;
  width?: Maybe<Scalars[`Int`]>;
  height?: Maybe<Scalars[`Int`]>;
  formats?: Maybe<Scalars[`JSON`]>;
  hash: Scalars[`String`];
  ext?: Maybe<Scalars[`String`]>;
  mime: Scalars[`String`];
  size: Scalars[`Float`];
  url: Scalars[`String`];
  previewUrl?: Maybe<Scalars[`String`]>;
  provider: Scalars[`String`];
  provider_metadata?: Maybe<Scalars[`JSON`]>;
  related?: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars[`String`]>;
  limit?: Maybe<Scalars[`Int`]>;
  start?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
};

export type UploadFileConnection = {
  __typename?: `UploadFileConnection`;
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: `UploadFileAggregator`;
  count?: Maybe<Scalars[`Int`]>;
  totalCount?: Maybe<Scalars[`Int`]>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: `UploadFileAggregatorSum`;
  width?: Maybe<Scalars[`Float`]>;
  height?: Maybe<Scalars[`Float`]>;
  size?: Maybe<Scalars[`Float`]>;
};

export type UploadFileAggregatorAvg = {
  __typename?: `UploadFileAggregatorAvg`;
  width?: Maybe<Scalars[`Float`]>;
  height?: Maybe<Scalars[`Float`]>;
  size?: Maybe<Scalars[`Float`]>;
};

export type UploadFileAggregatorMin = {
  __typename?: `UploadFileAggregatorMin`;
  width?: Maybe<Scalars[`Float`]>;
  height?: Maybe<Scalars[`Float`]>;
  size?: Maybe<Scalars[`Float`]>;
};

export type UploadFileAggregatorMax = {
  __typename?: `UploadFileAggregatorMax`;
  width?: Maybe<Scalars[`Float`]>;
  height?: Maybe<Scalars[`Float`]>;
  size?: Maybe<Scalars[`Float`]>;
};

export type UploadFileGroupBy = {
  __typename?: `UploadFileGroupBy`;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<
    Array<Maybe<UploadFileConnectionProvider_Metadata>>
  >;
};

export type UploadFileConnectionId = {
  __typename?: `UploadFileConnectionId`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: `UploadFileConnection_id`;
  key?: Maybe<Scalars[`ID`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: `UploadFileConnectionCreatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: `UploadFileConnectionUpdatedAt`;
  key?: Maybe<Scalars[`DateTime`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: `UploadFileConnectionName`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: `UploadFileConnectionAlternativeText`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: `UploadFileConnectionCaption`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: `UploadFileConnectionWidth`;
  key?: Maybe<Scalars[`Int`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: `UploadFileConnectionHeight`;
  key?: Maybe<Scalars[`Int`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: `UploadFileConnectionFormats`;
  key?: Maybe<Scalars[`JSON`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: `UploadFileConnectionHash`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: `UploadFileConnectionExt`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: `UploadFileConnectionMime`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: `UploadFileConnectionSize`;
  key?: Maybe<Scalars[`Float`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: `UploadFileConnectionUrl`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: `UploadFileConnectionPreviewUrl`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: `UploadFileConnectionProvider`;
  key?: Maybe<Scalars[`String`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: `UploadFileConnectionProvider_metadata`;
  key?: Maybe<Scalars[`JSON`]>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInfoInput = {
  name?: Maybe<Scalars[`String`]>;
  alternativeText?: Maybe<Scalars[`String`]>;
  caption?: Maybe<Scalars[`String`]>;
};

export type FileInput = {
  name: Scalars[`String`];
  alternativeText?: Maybe<Scalars[`String`]>;
  caption?: Maybe<Scalars[`String`]>;
  width?: Maybe<Scalars[`Int`]>;
  height?: Maybe<Scalars[`Int`]>;
  formats?: Maybe<Scalars[`JSON`]>;
  hash: Scalars[`String`];
  ext?: Maybe<Scalars[`String`]>;
  mime: Scalars[`String`];
  size: Scalars[`Float`];
  url: Scalars[`String`];
  previewUrl?: Maybe<Scalars[`String`]>;
  provider: Scalars[`String`];
  provider_metadata?: Maybe<Scalars[`JSON`]>;
  related?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type EditFileInput = {
  name?: Maybe<Scalars[`String`]>;
  alternativeText?: Maybe<Scalars[`String`]>;
  caption?: Maybe<Scalars[`String`]>;
  width?: Maybe<Scalars[`Int`]>;
  height?: Maybe<Scalars[`Int`]>;
  formats?: Maybe<Scalars[`JSON`]>;
  hash?: Maybe<Scalars[`String`]>;
  ext?: Maybe<Scalars[`String`]>;
  mime?: Maybe<Scalars[`String`]>;
  size?: Maybe<Scalars[`Float`]>;
  url?: Maybe<Scalars[`String`]>;
  previewUrl?: Maybe<Scalars[`String`]>;
  provider?: Maybe<Scalars[`String`]>;
  provider_metadata?: Maybe<Scalars[`JSON`]>;
  related?: Maybe<Array<Maybe<Scalars[`ID`]>>>;
  created_by?: Maybe<Scalars[`ID`]>;
  updated_by?: Maybe<Scalars[`ID`]>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: `deleteFilePayload`;
  file?: Maybe<UploadFile>;
};
