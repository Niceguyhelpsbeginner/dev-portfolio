import React from 'react'
import { useI18n } from '../i18n'

const About = () => {
	const { t } = useI18n()
	return (
		<section id="about" className="py-20 px-4 bg-white">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					{t('aboutTitle')}
				</h2>
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
						<h3 className="text-2xl font-bold mb-4">교육 배경</h3>
						<div className="space-y-3">
							<p className="text-lg">
								<span className="font-semibold">{t('eduSchool')}:</span> 동의과학대학교
							</p>
							<p className="text-lg">
								<span className="font-semibold">{t('eduGrade')}:</span> 2학년 재학중
							</p>
							<p className="text-lg">
								<span className="font-semibold">{t('eduGpa')}:</span> 4.31 / 4.5
							</p>
						</div>
					</div>
					<div className="space-y-4">
						<div className="bg-gray-50 rounded-lg p-6 shadow-md">
							<h4 className="text-xl font-semibold text-gray-800 mb-2">
								{t('interests')}
							</h4>
							<p className="text-gray-600">
								데이터 분석, AI/ML, 컴퓨터 비전, 환경 문제 해결
							</p>
						</div>
						<div className="bg-gray-50 rounded-lg p-6 shadow-md">
							<h4 className="text-xl font-semibold text-gray-800 mb-2">
								{t('strengths')}
							</h4>
							<p className="text-gray-600">
								실무 프로젝트 경험을 바탕으로 한 문제 해결 능력과 
								학업 성과를 보여주는 성실함
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About

