import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type FilesQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type FilesQuery = { files?: Array<{ name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null> | null };


export const FilesDocument = `
    query files($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  files(
    sort: $sort
    limit: $limit
    start: $start
    where: $where
    publicationState: $publicationState
  ) {
    name
    alternativeText
    caption
    width
    height
    formats
    ext
    mime
    size
    url
    previewUrl
    provider
    provider_metadata
  }
}
    `;
export const useFilesQuery = <
      TData = FilesQuery,
      TError = unknown
    >(
      variables?: FilesQueryVariables,
      options?: UseQueryOptions<FilesQuery, TError, TData>
    ) =>
    useQuery<FilesQuery, TError, TData>(
      variables === undefined ? ['files'] : ['files', variables],
      fetcher<FilesQuery, FilesQueryVariables>(FilesDocument, variables),
      options
    );
export const useInfiniteFilesQuery = <
      TData = FilesQuery,
      TError = unknown
    >(
      variables?: FilesQueryVariables,
      options?: UseInfiniteQueryOptions<FilesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<FilesQuery, TError, TData>(
      variables === undefined ? ['files.infinite'] : ['files.infinite', variables],
      (metaData) => fetcher<FilesQuery, FilesQueryVariables>(FilesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
