# GraphQL Code Generator
**GraphQL Code Generator 설정**

Back단에서 설계된 데이터 모델링을 GraphQL 스키마를 기반으로 TypeScript로 가져 오기 위함. 

## GraphQL Code Generator 셋업
1. Installing Codegen
```
npm install graphql @graphql-codegen/cli @graphql-codegen/typescript
```
or
```
yarn add graphql @graphql-codegen/cli @graphql-codegen/typescript
```

2. codegen.yml 작성
wizard을 이용하여 간편하게 생성 가능.

```
npx graphql-codegen init
```
or
```
yarn graphql-codegen init
```

만약 wizard을 사용하지 않을 경우는 추가로 필요한 라이브러리를 설치하고 codegen.yml을 생성하여 작성.

3. Generate
package.json의 scripts에 generate 추가(recommended).

```
{
  "scripts": {
    "generate": "graphql-codegen"
  }
}
```
:warning: GraphQL Code Generator 구버전에서는 gql-gen 현재는 graphql-codegen으로 migration.

Command run
```
npm run generate
```
or
```
yarn generate
```