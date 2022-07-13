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

##
