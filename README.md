
# ☕️ starbucks
- 스타벅스 홈페이지 클론 코딩
	- 구현 시작일: 2021.07.11
	- 구현 완료일: 2021.07.24
- [Open Page](https://plutoin.github.io/starbucks/)  


## ✔️ Libraries

### 1️. reset css
- css 설정 모두 초기화(뷰포트에 기본적으로 지정되어 있는 margin 값 등의 제거 위함)
- reset.min.css에서 html 코드 복사
- min 파일은 다량의 데이터를 압축한 것이므로 일반 reset.css 파일보다 주로 사용
- [reset-css CDN](https://www.jsdelivr.com/package/npm/reset-css)

### 2️. material icons
- 구글에서 제공하는 머터리얼 아이콘
- [Google Fonts](https://fonts.google.com/icons)

### 3️. GSAP & ScrollToPlugin
**GSAP**
- 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리
- 애니메이션의 진행이 매끄럽도록 함
- [Docs](https://greensock.com/docs/v2/Easing)

**ScrollToPlugin**
-   스크롤 애니메이션을 지원하는 gsap 플러그인
- [gsap - Libraries](https://cdnjs.com/libraries/gsap)

```jsx
gsap.to(요소, 시간, 옵션)
// 또는
TweenMax.to(요소, 시간, 옵션)

gsap.to(window, .7, {
  scrollTo: 0
});
```

### 4️. Swiper
- 스와이퍼(슬라이드) 라이브러리
- css 파일과 js 파일 라이브러리 모두 필요
- [Getting Started with Swiper](https://swiperjs.com/get-started)
- [Swiper API](https://swiperjs.com/swiper-api)

```html
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

```jsx
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,  // 자동 재생 여부
  loop: true  // 반복 재생 여부
});
```

### 5️. Youtube API
- 유튜브 동영상 제어 가능 라이브러리
- `onYouTubePlayerAPIReady` 은 Youtube IFrame Player API에서 사용하는 이름이기 때문에 다르게 지정하면 동작하지 않음
- 함수는 전역 등록
- [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

```html
<!-- HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- BODY -->
<div id="player"></div>

```
### 6. ScrollMagic
- [ScrollMagic - Libraries](https://cdnjs.com/libraries/ScrollMagic)


## ETC

#### ✔️  같은 클래스 이름의 태그 여러 개 만들 때
- .클래스 이름 * 개수 > 자식 클래스

#

```html
<!-- hero 클래스 안에 image 클래스가 포함된 div 태그 32개 만들려고 할 때 -->
.hero*32>.image
```

#

#### ✔️ a 태그 링크
- a 태그에 링크 삽입 시 링크가 아직 준비되지 않은 경우 `javascript:void(0)` 혹은 `#` 사용
- 전자를 더 권장, #은 실행 시 페이지에 변화가 있을 수 있음

```html
<a href="javascript:void(0)">예시</a>
```

#

#### ✔️ Open Graph
- 웹 페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

#

#### ✔️ Favicon
- 웹 페이지를 나타내는 아이콘이며 웹 페이지의 로고를 설정, 파일이 루트에 있어야 함
- `favicon.ico` 파일을 위치하면 자동으로 로고 생성하므로 `<link />` 작성할 필요가 없음
- `favicon.ico` 64 x 64 (px) 또는 32 x 32 또는 16 x 16
- `favicon.png` 500 x 500 (px)

```html
<link rel="icon" href="./favicon.png" />
```

#

#### ✔️ BEM
- HTML 클래스 속성의 작명법
- **요소__일부분**: `Underscore(Lodash)` 기호로 <u>요소의 일부분</u> 표시
- **요소—상태**: `Hyphen(Dash)` 기호로 <u>요소의 상태</u> 표시

```html
<div class="container">
  <div class="name"></div>
  <div class="item">
    <div class="name"></div>
  </div>
</div>

<div class="btn primary"></div>
<div class="btn success"></div>
<div class="btn error"></div>
```

↓

```html
<div class="container">
  <div class="container__name"></div>
  <div class="item">
    <div class="item__name"></div>
  </div>
</div>

<div class="btn btn--primary"></div>
<div class="btn btn--success"></div>
<div class="btn btn--error"></div>
```

#


#### ✔️ padding-top
> 원하는 비율대로 늘 고정되어 출력하기 가능

```css
.container {
  width: 500px;
  background-color: royalblue;
}
.container .item {
  width: 100%;
  height: 0;
  padding-top: 50%; /* 원하는 비율대로 항상 출력 */
}
```

#


#### ✔️ 3D amination

```css
body {
  padding: 50px;
}
.container .item {
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
}
.container .item.back {
  transform: rotateY(-180deg);
}
```

> 어떠한 전환 효과도 없이 삽입했으므로 '뒤' 글자가 뒤집혀서 나타남
<img src="https://user-images.githubusercontent.com/66389585/126861465-fc950fef-e51a-4c33-bac1-0b1a77f9d135.png" width="200px" height="auto">

#


```css
body {
  padding: 50px;
}
.container .item {
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
}
.container .item.front {
  position: absolute; /* 추가 */
}
.container .item.back {
  transform: rotateY(-180deg);
}
```

> 부모 기준으로 배치했기 때문에 '앞' 박스와 '뒤' 박스가 합쳐져 같은 공간에 나타남
<img src="https://user-images.githubusercontent.com/66389585/126861576-9fa642ea-3f82-4802-8ff4-dbd62cf43168.png" width="200px">

#


```css
body {
  padding: 50px;
}
.container .item {
  /* 가로 세로 너비 지정 */
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
  backface-visibility: hidden; /* 뒷면의 이미지 숨기기 */
}
.container .item.front {
  position: absolute;
}
.container:hover .item.front {
  transform: rotateY(180deg); /* 커서 올리면 180도 회전 */
}
.container .item.back {
  transform: rotateY(-180deg); 
}
.container:hover .item.back {
  transform: rotateY(0deg); /* 커서 내리면 다시 180도 회전하여 원래 이미지 출력 */
}
```

<img src="https://user-images.githubusercontent.com/66389585/126861577-c9839e13-df50-4a21-b258-dad662178822.gif" width="200px">

#


```css
body {
  padding: 50px;
}
.container {
  /* 가로 세로 너비 지정 */
  width: 100px;
  height: 100px;
  background-color: orange;
  perspective: 300px; /* 원근법 추가 */
}
.container .item {
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
  backface-visibility: hidden;
  transition: 1s; /* 전환 시간 추가 */
}
.container .item.front {
  position: absolute;
  transform: rotateY(0deg);
}
.container:hover .item.front {
  transform: rotateY(180deg);
}
.container .item.back {
  transform: rotateY(-180deg);
}
.container:hover .item.back {
  transform: rotateY(0deg);
}
```

> 원근법 추가되어 조금 더 매끄러운 전환 효과 연출 가능
<img src="https://user-images.githubusercontent.com/66389585/126861579-9ae152fd-12f3-4349-867b-bdd65e70880e.gif" width="200px">


#

#### ✔️ 특수문자 출력

-   html 코드로 특수문자 출력 가능
- [Character Entity Reference Chart](https://dev.w3.org/html5/html-author/charref)

```html
&copy;
<
>
&lt;div&gt;

```
<img src="https://user-images.githubusercontent.com/66389585/126872483-b40e086f-6c4d-4c3b-9fad-55a5161cce8e.png" width="250px">

#


#### ✔️ img 중앙 정렬

-  img 요소가 display: block; + margin: 0 auto; 인 경우 width 속성이 없어도 가운데 정렬 가능
