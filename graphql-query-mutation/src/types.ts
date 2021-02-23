/*
 * GraphQL Code Generator TypeScript Example
​ */

export type Maybe<T> = T | null | undefined;

export interface Scalars {
  String: string,
  Boolean: boolean,
}

// Example MemberModel
export interface MemberModel {
  memberId?: Maybe<Scalars['String']>,
  memberName?: Maybe<Scalars['String']>,
  memberDesc?: Maybe<Scalars['String']>,
  memberEnable?: Maybe<Scalars['Boolean']>,
}

// Example MemberModelInput
export interface MemberModelInput {
  memberId?: Maybe<Scalars['String']>,
  memberName?: Maybe<Scalars['String']>,
  memberDesc?: Maybe<Scalars['String']>,
  memberEnable?: Maybe<Scalars['Boolean']>,
}

// Example ProjectModel
export interface ProjectModel {
  projectId?: Maybe<Scalars['String']>,
  projectName?: Maybe<Scalars['String']>,
  projectDesc?: Maybe<Scalars['String']>,
  projectEnable?: Maybe<Scalars['Boolean']>,
}

// Example Query
export interface Query {
  memberModelQuery?: Maybe<Array<Maybe<MemberModel>>>,
  projectModelQuery?: Maybe<ProjectModel>,
}

export interface QueryMemberModelQueryArgs {
  memberId: Scalars['String']
}

// Example Mutation
export interface Mutation {
  MemberModelDelete: Scalars['Boolean'],
  MemberModelSave?: Maybe<MemberModel>,
}

export interface MutationMemberModelDeleteArgs {
  memberId: Scalars['String']
}

export interface MutationMemberModelSaveArgs {
  MemberModel: MemberModelInput
}