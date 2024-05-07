---
title: 시작하기
date: 2024-05-07
preview: 블로그 docs
---

_시작하기 앞서:_

- 이 템플릿의 svelte 빌드 버전 `@sveltejs/kit@2.0.0`

- 이 블로그는 [mattjennings의 sveltekit-blog-template](https://github.com/mattjennings/sveltekit-blog-template)을 원본으로 하고있습니다.

이제 글을 쓰는 방법을 알아보겠습니다.

## Creating a Post

모든 블로그의 포스트는 _(이 글도 포함)_ `src/posts` 폴더에 저장되어 있습니다. markdown 서식을 지원하며 mdsvex를 사용하여 파일을 읽습니다. 만약 mdsvex가 익숙하지 않다면, [웹사이트](https://mdsvex.com/playground)를 확인하는 것을 추천합니다.

새로운 .md 파일 또는 index.md를 포함한 폴더를 추가하여 새로운 게시물을 작성할 수 있습니다:

```
src/posts/new-post.md
src/posts/new-post/index.md
```

파일에 `title`과 `date` 속성이 있는지 확인합니다.:

```md
---
title: 첫 게시물
date: 2024-05-07
preview: 없을 시 첫 단락이 표시됨
---

(게시물 내용)
```

`preview` 속성은 선택입니다. 제공되지 않으면 게시물의 첫 문단이 표시됩니다.

## Rendering Posts

작성된 md 파일은 `src/routes/post/[slug]`에서 랜더링합니다.

```
-| +page.ts
-| +page.server.ts
-| +page.svelte
```

- `+page.server.ts`: 게시물에 대한 데이터를 가져옵니다
- `+page.js`: 게시물의 md 파일을 가져옵니다
- `+page.svelte`: 가져온 데이터들을 이용하여 랜더링합니다

생성된 오픈 그래프 이미지([g-image.vercel.app](https://og-image.vercel.app)의 courtity)를 포함하여 SEO 및 소셜 미디어 공유를 위한 몇 가지 기본 메타 태그 설정이 있습니다.

![open-graph](https://og-image.vercel.app/**Getting%20Started**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg)

## Getting Posts

게시물은 `import { posts } from '$lib/post'`를 통해 가져올 수 있습니다. 최신순으로 자동 정렬되며 각 게시물에 대한 메타데이터를 저장하고 있습니다.

`$lib/post`는 `*.server.js` 파일에서만 사용해야됩니다. 서버 측에서만 작동하는 API를 사용하므로 클라이언트에서 사용된다면 오류가 발생합니다. (또한 웹사이트의 모든 게시물에 대한 데이터 소스이므로 어쨌든 클라이언트 코드와 함께 번들되는 것을 원하지 않을 것입니다!)

전체 게시물을 랜더링하길 원한다면, 직접적으로 `.md`파일을 읽어드려야 될것입니다. (`src/routes/post/[slug]/+page.js` 참고).

## Theme

사이트의 대부분은 Tailwind의 [typography plugin](https://tailwindcss.com/docs/typography-plugin)을 사용하여 테마를 지정합니다. tailwind.config.cjs에서 구성을 볼 수 있습니다. 이 게시물은 [Tailwind's "Spotlight"](https://spotlight.tailwindui.com/)를 참고한 <https://sveltekit-blog-template.vercel.app>를 참고하였습니다.

코드 블록의 테마를 변경하려면 src/prism.css 파일을 편집할 수 있습니다. 프리즘 테마는 [여기](https://github.com/PrismJS/prism-themes/tree/master/themes)에서 찾을 수 있습니다.

```javascript
function helloWorld() {
  return 'Hello World'
}
```

## Mdsvex Plugins

추가 사항을 지원하기 위해 mdsvex 플러그인을 추가했습니다('mdsvex.config.js' 파일에서 확인 가능).

### Videos

.mp4와 .webm 형식의 비디오는 이미지와 마찬가지로 지원됩니다.

```md
![my video](/videos/my-cool-video.mp4)
```

### Relative URLs for Images and Videos

[mdsvex-relative-images](https://github.com/mattjennings/mdsvex-relative-images) 플러그인을 사용하면 상대 경로로 이미지 또는 비디오를 로드할 수 있습니다. 이는 동일한 폴더 아래의 게시물로 이미지를 그룹화하는 데 특히 좋습니다.

```md
![penguins](./penguins.mp4)
```

![penguins](./penguins.mp4)

## Deploying

다른 sveltekit 프로젝트처럼 배포 할 수 있습니다. 본 블로그는 static-adapter를 사용하여 배포하였습니다.

[관련 문서 확인하기](https://kit.svelte.dev/docs/adapters)

## That's it!

질문, 제안 또는 문제가 있으면 언제든지 연락바랍니다. [open an issue](https://github.com/mattjennings/sveltekit-blog-template/issues).
