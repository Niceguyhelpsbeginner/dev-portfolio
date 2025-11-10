# 개발자 포트폴리오

개인 개발자 포트폴리오 웹사이트입니다.
https://niceguyhelpsbeginner.github.io/dev-portfolio/
## 기술 스택

- React 18
- Vite
- Tailwind CSS

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 프로젝트 구조

```
dev-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # 메인 히어로 섹션
│   │   ├── About.jsx       # 자기소개 섹션
│   │   ├── Awards.jsx      # 수상실적 섹션
│   │   ├── Projects.jsx    # 프로젝트 섹션
│   │   ├── Skills.jsx      # 어학성적 섹션
│   │   └── Footer.jsx      # 푸터
│   ├── App.jsx            # 메인 앱 컴포넌트
│   ├── main.jsx           # React 진입점
│   └── index.css          # 글로벌 스타일
├── index.html
├── package.json
└── vite.config.js
```

## 주요 섹션

- **Hero**: 메인 인사말 및 네비게이션
- **About**: 학교, 학점 등 자기소개
- **Awards**: 수상실적
- **Projects**: 진행한 프로젝트 소개
- **Skills**: 어학성적 (TOEIC, JLPT)

## GitHub Pages 배포 방법

### 1. GitHub 리포지토리 준비
```bash
# Git 초기화 (아직 안 했다면)
git init
git add .
git commit -m "Initial commit"

# GitHub에 리포지토리 생성 후 연결
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. vite.config.js 설정 확인
`vite.config.js` 파일의 `base` 경로를 리포지토리 이름에 맞게 수정하세요:
```js
base: '/YOUR_REPO_NAME/', // 리포지토리 이름으로 변경
```

### 3. GitHub Pages 설정
1. GitHub 리포지토리 페이지로 이동
2. **Settings** → **Pages** 메뉴 클릭
3. **Source**에서 **GitHub Actions** 선택
4. 저장

### 4. 자동 배포
- `main` 브랜치에 코드를 푸시하면 자동으로 빌드 및 배포됩니다
- GitHub Actions 탭에서 배포 진행 상황을 확인할 수 있습니다
- 배포 완료 후 `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`에서 확인 가능합니다

### 주의사항
- 리포지토리 이름이 `dev-portfolio`가 아닌 경우 `vite.config.js`의 `base` 경로를 반드시 수정하세요
- 배포는 몇 분 정도 소요될 수 있습니다

