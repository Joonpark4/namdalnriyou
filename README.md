# 프로젝트명

- NextAuth를 사용해 로그인-로그아웃 api 연결, 회원 전역 상태관리 까지 구성된 프로젝트입니다.
- Next.js로 프로젝트를 시작할 때 다시 세팅할 필요 없이 바로 보일러 플레이트를 제공합니다.

# 프로젝트 정보

# 참고한 소스

```
https://youtu.be/1SjqRn_Ira4?si=-ynF-u2mMFPRPz_w
```

## 로컬

#### localhost: 3000

### env

```
 NEXTAUTH_URL=http://localhost:3000/api/auth
 NEXTAUTH_URL_INTERNAL=http://10.240.8.16
 NEXTAUTH_SECRET="Z7KQh9uhohlhaRiKrn9Lac73MGV1oE85DJhYbWNjSBc="
```

- 시크릿 키는 랜덤으로 생성된 openssl 키 이므로 추후 JWT토큰으로 변경이 필요합니다

- NEXTAUTH_URL: 이 환경 변수는 프로덕션 환경에서 배포할 때 사이트의 정규 URL을 설정하는 데 사용됩니다. 이 URL은 NextAuth.js가 콜백 URL을 생성하거나 OAuth 공급자에 리디렉션을 요청할 때 사용됩니다. 이 값은 애플리케이션의 외부 URL이어야 합니다.

- NEXTAUTH_URL_INTERNAL: 이 환경 변수는 서버 측 호출에 사용되며, 서버가 사이트의 정규 URL에 액세스할 수 없는 환경에서 유용합니다. 이 값은 애플리케이션의 내부 네트워크 URL이 될 수 있습니다. 이 값이 제공되지 않으면 NEXTAUTH_URL이 대신 사용됩니다.

- 따라서, NEXTAUTH_URL은 외부에서 애플리케이션에 액세스하는 데 사용되는 URL이고, NEXTAUTH_URL_INTERNAL은 애플리케이션 내부에서 서버 간 통신에 사용되는 URL입니다1.

### 외부 api 사용

```
# 없음
```

# Getting Started

- local

```
- 아래 명령어로 리포지토리 클론 후 사용
git clone --branch next-template https://github.com/nidevelop/project-templet.git
- 클론 후 yarn 명령어 입력
yarn dev (개발자모드)
yarn build (프로젝트 빌드)
yarn start (빌드된 프로젝트 실행)

```

- develop

```
# 실행시 필요한 명령어
```

- main

```
# 실행시 필요한 명령어

```

---
