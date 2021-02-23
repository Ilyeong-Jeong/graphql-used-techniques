/*
 * GraphQL Query (REST API => GET)
 * Query Example
​ */

import * as Types from "./types";

const memberQuery  = 'memberModelQuery';
const projectQuery = 'projectModelQuery';

const basicQuery = `
  {
    ${memberQuery} {
      memberId,
      memberName,
      memberDesc,
      memberEnable
    }
  }
`;

// Arguments Query Example
const argumentsQuery = `
  {
    ${memberQuery}(memberid: memberid) {
      memberId,
      memberName,
      memberDesc,
      memberEnable
    }
  }
`;

// Multiple Query Example
const multipleQuery = `
  {
    ${memberQuery} {
      memberId,
      memberName,
      memberDesc,
      memberEnable
    }
    ${projectQuery} {
      projectId,
      projectName,
      projectDesc,
      projectEnable,    
    }
  }
`;

// Fragment Query Example
const fragment = `
  fragment memberFragment on MemberModel {
    memberId,
    memberName,
    memberDesc,
    memberEnable
  }
`;

const fragmentQuery = `
  {
    ${memberQuery} {
      ...memberFragment
    }
  }
  ${fragment}
`;
// Fragment Query Example End

// Variables Query Example
// Operation name은 알아서...
const variablesQuery = `
  query qur($memberId: String!) { 
    ${memberQuery}(memberid: $memberid) {
      memberId,
      memberName,
      memberDesc,
      memberEnable
    }    
  } 
`;

// API를 요청 할 때 query와 같이 담아서 전송
const variables: Types.QueryMemberModelQueryArgs = {
  memberId: 'memberId'
}
// Variables Query Example end