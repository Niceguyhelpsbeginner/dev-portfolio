import React, { createContext, useContext, useMemo, useState } from 'react'

const I18nContext = createContext(null)

const translations = {
	ko: {
		helloTitle: '안녕하세요, 개발자입니다',
		helloSubtitle: '데이터 분석과 AI 기술로 문제를 해결하는 개발자',
		btnAbout: '자기소개 보기',
		btnProjects: '프로젝트 보기',
		aboutTitle: '자기소개',
		eduSchool: '학교',
		eduGrade: '학년',
		eduGpa: '학점',
		interests: '관심 분야',
		strengths: '강점',
		awardsTitle: '수상실적',
		projectsTitle: '프로젝트',
		skillsTitle: '어학성적',
		experienceTitle: '경험',
		footerTitle: '포트폴리오',
		footerDesc: '데이터 분석과 AI 기술로 문제를 해결하는 개발자',
		footerCopy: '© 2024 개발자 포트폴리오. 모든 권리 보유.',
		expRole: '해외영업·마케팅 인턴 · 소셜빈',
		expDesc: '해외 인플루언서 리스트업 및 X 플랫폼 프로모션으로 성장 견인',
		expBul1: '해외 인플루언서 리서치 및 타깃 리스트 구축',
		expBul2: 'X(구 트위터) 채널 프로모션 운영 및 캠페인 관리',
		expBul3: '팔로워 0 → 1,200명 (약 2개월)',
		expBul4: '게시물 조회수 100,000+ 달성',
		langKorean: '한국어',
		langEnglish: '영어',
		langJapanese: '일본어',
	},
	en: {
		helloTitle: "Hi, I'm a developer",
		helloSubtitle: 'Solving problems with data analysis and AI',
		btnAbout: 'View About',
		btnProjects: 'View Projects',
		aboutTitle: 'About',
		eduSchool: 'School',
		eduGrade: 'Year',
		eduGpa: 'GPA',
		interests: 'Interests',
		strengths: 'Strengths',
		awardsTitle: 'Awards',
		projectsTitle: 'Projects',
		skillsTitle: 'Language Scores',
		experienceTitle: 'Experience',
		footerTitle: 'Portfolio',
		footerDesc: 'Developer solving problems with data analysis and AI',
		footerCopy: '© 2024 Developer Portfolio. All rights reserved.',
		expRole: 'Overseas Sales & Marketing Intern · Socialbin',
		expDesc: 'Grew channels via influencer listing and X promotions',
		expBul1: 'Researched overseas influencers and built target lists',
		expBul2: 'Operated X (Twitter) promotions and managed campaigns',
		expBul3: 'Followers 0 → 1,200 in ~2 months',
		expBul4: 'Achieved 100,000+ post views',
		langKorean: 'Korean',
		langEnglish: 'English',
		langJapanese: 'Japanese',
	},
	ja: {
		helloTitle: 'こんにちは、開発者です',
		helloSubtitle: 'データ分析とAIで課題を解決します',
		btnAbout: '自己紹介を見る',
		btnProjects: 'プロジェクトを見る',
		aboutTitle: '自己紹介',
		eduSchool: '学校',
		eduGrade: '学年',
		eduGpa: '成績',
		interests: '関心分野',
		strengths: '強み',
		awardsTitle: '受賞歴',
		projectsTitle: 'プロジェクト',
		skillsTitle: '語学成績',
		experienceTitle: '経験',
		footerTitle: 'ポートフォリオ',
		footerDesc: 'データ分析とAIで課題を解決する開発者',
		footerCopy: '© 2024 開発者ポートフォリオ. All rights reserved.',
		expRole: '海外営業・マーケティング インターン · Socialbin',
		expDesc: 'インフルエンサーのリスト化とXでのプロモーションで成長',
		expBul1: '海外インフルエンサーのリサーチとターゲットリスト作成',
		expBul2: 'X（旧Twitter）プロモーション運用とキャンペーン管理',
		expBul3: 'フォロワー 0 → 1,200（約2ヶ月）',
		expBul4: '投稿の閲覧数 100,000+ 達成',
		langKorean: '韓国語',
		langEnglish: '英語',
		langJapanese: '日本語',
	},
}

export function I18nProvider({ children }) {
	const [lang, setLang] = useState('ko')
	const value = useMemo(() => {
		const dict = translations[lang] || translations.ko
		const t = (key) => dict[key] ?? key
		return { lang, setLang, t }
	}, [lang])
	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
	const ctx = useContext(I18nContext)
	if (!ctx) throw new Error('useI18n must be used within I18nProvider')
	return ctx
}
