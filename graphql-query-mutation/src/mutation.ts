/*
 * GraphQL Mutation (REST API => POST, PUT, DELETE)
 * Mutation Example
​ */

import * as Types from "./types";

const upsertMemberMutation = 'MemberModelSave';
const deleteMemberMutation = 'MemberModelDelete';

// Mutation Upsert Example
// Operation name은 알아서...
const upsertMutation = `
  mutation mut($MemberModel: MemberModelInput!) {
    ${upsertMemberMutation}(MemberModel: $MemberModel) {
      memberId
    }
  }
`;

const upsertVariables: Types.MutationMemberModelSaveArgs = {
  MemberModel: {
    memberId    : 'memberId',
    memberName  : 'memberName',
    memberDesc  : 'memberDesc',
    memberEnable: true,
  }
}

// Mutation Delete Example
const deleteMutation = `
  mutation mut($memberId: String!) {
    ${deleteMemberMutation}(memberId: $memberId)
  }
`;

const deleteVariables: Types.MutationMemberModelDeleteArgs = {
  memberId: 'memberId'
}

// Fragment Mutation Example
const fragment = `
  fragment memberFragment on MemberModel {
    memberId,
    memberName,
    memberDesc,
    memberEnable
  }
`;

const fragmentMutation = `
  mutation mut($MemberModel: MemberModelInput!) {
    ${upsertMemberMutation}(MemberModel: $MemberModel) {
      ...memberFragment
    }
  }
  ${fragment}
`;

// Mutation도 Query처럼 여러 필드를 포함할 수 있지만 차례대로 실행.
// => 한번에 호출로 여러 Mutation을 보내면 첫번째 Mutation의 동작이 완료된 후에 두번째 Mutation이 동작.