/*
 * Query & Mutation Example
 * 예시로 GQL Code Generator로 가져온 두개의 데이터 모델을 사용.
​ */

// GQL Code Generator Example Model Start
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

// Example ProjectModel
export interface ProjectModel {
  projectId?: Maybe<Scalars['String']>,
  projectName?: Maybe<Scalars['String']>,
  projectDesc?: Maybe<Scalars['String']>,
  projectEnable?: Maybe<Scalars['Boolean']>,
}
// GQL Code Generator Example Model End

/*
 * Query (REST API => GET)
​ */
const query = ``;

/*
 * Mutation (REST API => POST, PUT, DELETE)
​ */
const mutation = ``;

// Incomplete