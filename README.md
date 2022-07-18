# Next.js Beginner 🏃‍♂️

## Next.js 학습의 목표

- SSR 프레임워크인 Next.js 동작 방법
- Next.js를 쓰는 이유와 장단점 파악
- Next.js를 이용한 SEO 최적화 방법
- 그 밖에 알았던, 몰랐던 내용들 학습

# Next.js에 대한 기초 학습 📚

설치 방법 : npx create-next-app@latest --typescript

실행 방법 : npm run dev

## 프레임워크와 라이브러리의 차이점

라이브러리 : 개발자로서 내가 사용하는 것들, 내 마음대로 할 수 있다. 어떠한 라이브러리를 불러와서 사용해서 무엇인가 한다.

프레임워크 : 나의 코드를 불러오는 것, 규칙을 따라야 작동한다. 규칙을 지키고 코드를 작성하면 내 코드를 불러와 모든 걸 동작하게 만들어 준다.

## Next.js page routing 방법

pages 파일에 react.js or ts component를 export 하고 있는 파일을 pages 폴더 안에 두면 파일의 이름을 가져다가 url 이름으로 쓴다.
예외로 index.js만 이름을 url로 쓰지 않고 "/" 인 HomePage로 보여준다.
(리액트로 만들면, router 직접 설정을 해줘야 하지만 next.js를 알아서 해준다.)

만약 파일이 없는 url를 입력하면 404 페이지가 나온다.
(리액트에서는 404페이지를 만들어야 하지만, next.js는 이미 만들어져 있다.)

페이지를 이동 하기 위해

```
import Link from 'next/link'

<Link herf="url">a태그나 button 등 태글르 만들어 준다.</Link>
```

Link는 단순하게 경로 이동만 해주는 태그이다.

useRouter hook을 사용하면 현재 페이지의 pathname 같은 값들을 읽을 수 있다.

## Static Pre Rendering

react 렌더링 방식은 client-side render 방식으로 브라우저가 HTML을 가져올 때 비어있는 id가 root인 div태그를 가져와서 모든 js에 요청을 해, js와 react를 실행한 후 UI가 보여진다. 브라우저는 JS가 있을 때 만 UI를 볼 수 있다.

Next.js는 렌더링 방식은 react.js를 백엔드에서 동작시켜서 페이지를 미리 만들어 UI를 보여준다. next.js 웹사이트는 초기 상태의 component로 미리 생성된 HTML 페이지를 보여주고, 상호작용이 발생하면 react.js가 그걸 받아서 작동하게 되는 방식으로 이것이 Hydrate, hydration이다.

요약하면 모든게 로딩되면 react.js와 연결되어 앱이 작동 하는 것이다.
이것이 SEO가 최적화 할 수 있다는 장점이다.

```typescript
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

템플릿을 커스텀할때는 \_app 파일을 사용한다. 위에 코드를 보면, pages에 있는 컴포넌트들을 보여줄 수 있고, 거기에 global style 과, header, footer, sideBar 같은 section을 만들 수 있을 거 같다. 그러면 script 태그를 추가해서 SEO 최적화 할 수 있다.

## Redirect && Rewrite

next.config.js에서 redirect를 사용할 수 있는데, 어떠한 url에서 다른 url로 이동할 때 편리한 기능이다. plain react에서 사용할 때는 어렵지 않겠지만, next.js는 기본으로 제공되는 기능이다.

```typescript
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/현재url/:path*', //path를 쓰게 되면 뒤에 있는 url들은 바꾸지 않고 바뀐 url 부분만 바뀐다. 그리고 아예 다른 url로 이동 가능하다.
        destination: '/보내고싶은url/:path*',
        permanent: false, // 영구적인지 판단
      },
      // 새로운 redirect를 입력하면 객체를 추가해주면 된다.
    ]
  },
}
```

그리고 rewrites 기능은 api_key 값을 숨길 때 편리하다.
이름 그대로 url을 덮어 씌워준다. 그러면 검사페이지에서 network에서 보면 apiKey값을 확인 할 수 없게 된다. 사용방법은 redirects와 똑같다.

```typescript
async rewrites() {
    return [
      {
        source: '/api/moives', // api 요청보낼 url 입력
        destination: `https://api.themovieldb.org/3/movie/popular${KEY}`, // key값이 들어있는 api오쳥 url 입력
      },
      // 위와 같이 api를 추가 해주면 된다.
    ]
  },
```

위에 코드 처럼 사용하면 되고, 좀 더 숨기고 싶으면 plain react에서 사용했던 env. 파일을 이용해서 api_key를 숨기면 더 확실하게 된다.

## Server Side Rendering

getServerSideProps라는 함수를 만들고 그안에 api 통신으로 받은 data 같은 것들을 넣을 수 있고, 그것을 props로 받을 수 있다.

```typescript
export async function getServerSideProps() {
  // 함수이름 무조건
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json() // url은 front url을 입력해줘야 한다. 이것은 서버에서 작동하기 때문
  return {
    props: {
      results,
    },
  }
} // 이런식으로 어떠한 것이라도 사용하면 될 거 같다.
```

흔히 plain react에서는 fetch된 data들을 받기 전에 suspense를 사용하는데, next.js에서는 데이터를 받기전 server에서 html을 넘겨주지 않으니, loading 화면이 필요 없을 거 같다. 요약하면 백엔드에 미리 html을 받아와서 프론트로 바로 보여준다고 생각하면 될거 같다. 단점은 api가 느리면 유저에게 느린화면을 보여줄 수 있다.

## Dynamic Routes

pages 폴더 안에 [] 로 감싸주면 params나 변수로 url을 보낼 수 있다.

## Catch ALL

위에 []로 params나 변수로 url를 보낼 수 있었다.

그리고 스프레드 문법을 사용하면, 배열 전체로 보낼 수 있다.
