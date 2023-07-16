node.js 백엔드 구현

jwt를 이용한 회원가입, 로그인 인증 기능을 사용한 게시판/게시글 좋아요/댓글 기능 구현

sequelize라이브러리를 이용한 mysql 데이터 관리

23.07.13~ 계층형 아키텍처로 리팩토링 중

23.07.15 user, post, comment까지 리팩토링 완료 추후 에러핸들링 예정

-------------------------유저-------------------------

회원가입 method: post api:'/signup'

로그인 method: post api:'/login'

-------------------------게시글-------------------------

게시글 조회 method: get api: '/'

게시글 상세조회 method: post api: '/:postId'

게시글 생성 method: post api: '/:postId'

게시글 수정 method: put api: '/:postId'

게시글 삭제 method: delete api: '/:postId'

-------------------------댓글-------------------------

댓글 조회 method: get api: '/:postId/comment'

댓글 생성 method: post api: '/:postId/comment'

댓글 수정 method: put api: '/:postId/comment/:commentId'

댓글 삭제 method: delete api: '/:postId/comment/:commentId'

ERD설계

![Lv4_ERD 설계](https://github.com/lec2528/Lv5_Layered-Architecture-Pattern/assets/132907542/9a98cb6d-b0b1-49c3-81b1-c3cec9796fbb)

```
📦
├─ .gitignore
├─ .prettierrc.js
├─ Middleware
│  └─ loginmiddleware.js
├─ README.md
├─ app.js
├─ controllers
│  ├─ comments.controller.js
│  ├─ posts.controller.js
│  └─ users.controller.js
├─ models
│  ├─ comments.js
│  ├─ index.js
│  ├─ likes.js
│  ├─ posts.js
│  └─ users.js
├─ package-lock.json
├─ package.json
├─ repositories
│  ├─ comments.repository.js
│  ├─ posts.repository.js
│  └─ users.repository.js
├─ routes
│  ├─ comments.routes.js
│  ├─ index.js
│  ├─ likes.js
│  ├─ posts.routes.js
│  └─ users.routes.js
└─ services
   ├─ comments.services.js
   ├─ posts.services.js
   └─ users.services.js
```
