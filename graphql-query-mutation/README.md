# GraphQL Query & Mutation
**GraphQL API 호출 Query & Mutation**

GraphQL은 다른 쿼리 언어와 다르게 클라이언트단에서 작성 및 호출.

### Query
Query는 데이터 Read (REST API에서 GET)

### Mutation
Mutation은 데이터 변조 (REST API에서 POST, PUT, DELETE)


:heavy_check_mark: Fragment는 반복되는 쿼리를 재사용 가능한 단위로 나눈 것. 

=> 쿼리 내부에서 필드들을 반복적으로 사용할 때, Recursive Query를 사용 해야 할 때 사용.


:heavy_check_mark: Variables는 쿼리 문자열에 동적인 arguments를 쿼리에서 없애고, 이를 별도로 전달하는 방법.


:warning: 따로 package를 구성하지 않았음.