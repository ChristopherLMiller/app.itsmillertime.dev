import { Maybe, Scalars } from '.';
import {
  CreateArticlePayload,
  UpdateArticlePayload,
  DeleteArticlePayload,
  CreateArticleInput,
  UpdateArticleInput,
  DeleteArticleInput,
} from './Article';
import {
  CreateArticleCategoryPayload,
  UpdateArticleCategoryPayload,
  DeleteArticleCategoryPayload,
  CreateArticleCategoryInput,
  UpdateArticleCategoryInput,
  DeleteArticleCategoryInput,
} from './ArticleCategory';
import {
  CreateArticleTagPayload,
  UpdateArticleTagPayload,
  DeleteArticleTagPayload,
  CreateArticleTagInput,
  UpdateArticleTagInput,
  DeleteArticleTagInput,
} from './ArticleTags';
import {
  CreateGalleryPayload,
  UpdateGalleryPayload,
  DeleteGalleryPayload,
  CreateGalleryInput,
  UpdateGalleryInput,
  DeleteGalleryInput,
} from './Gallery';
import {
  CreateGalleryCategoryPayload,
  UpdateGalleryCategoryPayload,
  DeleteGalleryCategoryPayload,
  CreateGalleryCategoryInput,
  UpdateGalleryCategoryInput,
  DeleteGalleryCategoryInput,
} from './GalleryCategory';
import {
  CreateGalleryImagePayload,
  UpdateGalleryImagePayload,
  DeleteGalleryImagePayload,
  CreateGalleryImageInput,
  UpdateGalleryImageInput,
  DeleteGalleryImageInput,
} from './GalleryImage';
import {
  CreateGalleryTagPayload,
  UpdateGalleryTagPayload,
  DeleteGalleryTagPayload,
  CreateGalleryTagInput,
  UpdateGalleryTagInput,
  DeleteGalleryTagInput,
} from './GalleryTag';
import {
  CreateGardenPayload,
  UpdateGardenPayload,
  DeleteGardenPayload,
  CreateGardenInput,
  UpdateGardenInput,
  DeleteGardenInput,
} from './Garden';
import {
  DeleteFilePayload,
  UploadFile,
  DeleteFileInput,
  FileInfoInput,
} from './UploadFile';
import {
  CreateRolePayload,
  UpdateRolePayload,
  DeleteRolePayload,
  CreateUserPayload,
  UpdateUserPayload,
  DeleteUserPayload,
  UsersPermissionsLoginPayload,
  UserPermissionsPasswordPayload,
  CreateRoleInput,
  UpdateRoleInput,
  DeleteRoleInput,
  CreateUserInput,
  UpdateUserInput,
  DeleteUserInput,
  UsersPermissionsLoginInput,
  UsersPermissionsRegisterInput,
} from './UsersPermissions';

export type Mutation = {
  __typename?: `Mutation`;
  createArticleCategory?: Maybe<CreateArticleCategoryPayload>;
  updateArticleCategory?: Maybe<UpdateArticleCategoryPayload>;
  deleteArticleCategory?: Maybe<DeleteArticleCategoryPayload>;
  createArticleTag?: Maybe<CreateArticleTagPayload>;
  updateArticleTag?: Maybe<UpdateArticleTagPayload>;
  deleteArticleTag?: Maybe<DeleteArticleTagPayload>;
  createArticle?: Maybe<CreateArticlePayload>;
  updateArticle?: Maybe<UpdateArticlePayload>;
  deleteArticle?: Maybe<DeleteArticlePayload>;
  createGalleryCategory?: Maybe<CreateGalleryCategoryPayload>;
  updateGalleryCategory?: Maybe<UpdateGalleryCategoryPayload>;
  deleteGalleryCategory?: Maybe<DeleteGalleryCategoryPayload>;
  createGalleryImage?: Maybe<CreateGalleryImagePayload>;
  updateGalleryImage?: Maybe<UpdateGalleryImagePayload>;
  deleteGalleryImage?: Maybe<DeleteGalleryImagePayload>;
  createGalleryTag?: Maybe<CreateGalleryTagPayload>;
  updateGalleryTag?: Maybe<UpdateGalleryTagPayload>;
  deleteGalleryTag?: Maybe<DeleteGalleryTagPayload>;
  createGallery?: Maybe<CreateGalleryPayload>;
  updateGallery?: Maybe<UpdateGalleryPayload>;
  deleteGallery?: Maybe<DeleteGalleryPayload>;
  createGarden?: Maybe<CreateGardenPayload>;
  updateGarden?: Maybe<UpdateGardenPayload>;
  deleteGarden?: Maybe<DeleteGardenPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationCreateArticleCategoryArgs = {
  input?: Maybe<CreateArticleCategoryInput>;
};

export type MutationUpdateArticleCategoryArgs = {
  input?: Maybe<UpdateArticleCategoryInput>;
};

export type MutationDeleteArticleCategoryArgs = {
  input?: Maybe<DeleteArticleCategoryInput>;
};

export type MutationCreateArticleTagArgs = {
  input?: Maybe<CreateArticleTagInput>;
};

export type MutationUpdateArticleTagArgs = {
  input?: Maybe<UpdateArticleTagInput>;
};

export type MutationDeleteArticleTagArgs = {
  input?: Maybe<DeleteArticleTagInput>;
};

export type MutationCreateArticleArgs = {
  input?: Maybe<CreateArticleInput>;
};

export type MutationUpdateArticleArgs = {
  input?: Maybe<UpdateArticleInput>;
};

export type MutationDeleteArticleArgs = {
  input?: Maybe<DeleteArticleInput>;
};

export type MutationCreateGalleryCategoryArgs = {
  input?: Maybe<CreateGalleryCategoryInput>;
};

export type MutationUpdateGalleryCategoryArgs = {
  input?: Maybe<UpdateGalleryCategoryInput>;
};

export type MutationDeleteGalleryCategoryArgs = {
  input?: Maybe<DeleteGalleryCategoryInput>;
};

export type MutationCreateGalleryImageArgs = {
  input?: Maybe<CreateGalleryImageInput>;
};

export type MutationUpdateGalleryImageArgs = {
  input?: Maybe<UpdateGalleryImageInput>;
};

export type MutationDeleteGalleryImageArgs = {
  input?: Maybe<DeleteGalleryImageInput>;
};

export type MutationCreateGalleryTagArgs = {
  input?: Maybe<CreateGalleryTagInput>;
};

export type MutationUpdateGalleryTagArgs = {
  input?: Maybe<UpdateGalleryTagInput>;
};

export type MutationDeleteGalleryTagArgs = {
  input?: Maybe<DeleteGalleryTagInput>;
};

export type MutationCreateGalleryArgs = {
  input?: Maybe<CreateGalleryInput>;
};

export type MutationUpdateGalleryArgs = {
  input?: Maybe<UpdateGalleryInput>;
};

export type MutationDeleteGalleryArgs = {
  input?: Maybe<DeleteGalleryInput>;
};

export type MutationCreateGardenArgs = {
  input?: Maybe<CreateGardenInput>;
};

export type MutationUpdateGardenArgs = {
  input?: Maybe<UpdateGardenInput>;
};

export type MutationDeleteGardenArgs = {
  input?: Maybe<DeleteGardenInput>;
};

export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};

export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};

export type MutationUploadArgs = {
  refId?: Maybe<Scalars[`ID`]>;
  ref?: Maybe<Scalars[`String`]>;
  field?: Maybe<Scalars[`String`]>;
  source?: Maybe<Scalars[`String`]>;
  info?: Maybe<FileInfoInput>;
  file: Scalars[`Upload`];
};

export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars[`ID`]>;
  ref?: Maybe<Scalars[`String`]>;
  field?: Maybe<Scalars[`String`]>;
  source?: Maybe<Scalars[`String`]>;
  files: Array<Maybe<Scalars[`Upload`]>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars[`ID`];
  info: FileInfoInput;
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars[`String`];
};

export type MutationResetPasswordArgs = {
  password: Scalars[`String`];
  passwordConfirmation: Scalars[`String`];
  code: Scalars[`String`];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars[`String`];
};
