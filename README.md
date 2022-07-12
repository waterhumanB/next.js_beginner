# Next.js Beginner 🏃‍♂️

## Next.js 학습의 목표 🚀

1. SSR 프레임워크인 Next.js 동작 방법
2. Next.js를 쓰는 이유와 장단점 파악
3. Next.js를 이용한 SEO 최적화 방법
4. 그 밖에 알았던, 몰랐던 내용들 학습

# Next.js에 대한 기초 학습 📚

설치 방법 : npx create-next-app@latest --typescript

실행 방법 : npm run dev

## 프레임워크와 라이브러리의 차이점

```
라이브러리 : 개발자로서 내가 사용하는 것들, 내 마음대로 할 수 있다. 어떠한 라이브러리를 불러와서 사용해서 무엇인가 한다.

프레임워크 : 나의 코드를 불러오는 것, 규칙을 따라야 작동한다. 규칙을 지키고 코드를 작성하면 내 코드를 불러와 모든 걸 동작하게 만들어 준다.
```

## Next.js page routing 방법

```
pages 파일에 react.js or ts component를 export 하고 있는 파일을 pages 폴더 안에 두면 파일의 이름을 가져다가 url 이름으로 쓴다.
예외로 index.js만 이름을 url로 쓰지 않고 "/" 인 HomePage로 보여준다.
(리액트로 만들면, router 직접 설정을 해줘야 하지만 next.js를 알아서 해준다.)

만약 파일이 없는 url를 입력하면 404 페이지가 나온다.
(리액트에서는 404페이지를 만들어야 하지만, next.js는 이미 만들어져 있다.)
```
