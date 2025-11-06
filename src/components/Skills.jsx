import React from 'react'
import { useI18n } from '../i18n'

const Skills = () => {
	const { t } = useI18n()
	const languageScores = [
		{
			name: "TOEIC",
			score: "920",
			level: "Advanced",
			color: "from-green-500 to-emerald-600"
		},
		{
			name: "JLPT N1",
			score: "153",
			level: "Advanced",
			color: "from-red-500 to-pink-600"
		}
	]

	return (
		<section id="skills" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					{t('skillsTitle')}
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{languageScores.map((lang, index) => (
						<div
							key={index}
							className={`bg-gradient-to-br ${lang.color} rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all`}
						>
							<div className="text-center">
								<h3 className="text-3xl font-bold mb-2">{lang.name}</h3>
								<div className="text-6xl font-bold mb-4">{lang.score}점</div>
								<p className="text-xl opacity-90">{lang.level}</p>
							</div>
						</div>
					))}
				</div>
				<div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
					<h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
						언어 능력
					</h3>
					<div className="grid md:grid-cols-2 gap-6 text-center">
						<div>
							<p className="text-gray-600 mb-2">{t('langKorean')}</p>
							<div className="w-full bg-gray-200 rounded-full h-3">
								<div className="bg-blue-600 h-3 rounded-full" style={{ width: '100%' }}></div>
							</div>
							<span className="text-sm text-gray-500 mt-1">모국어</span>
						</div>
						<div>
							<p className="text-gray-600 mb-2">{t('langEnglish')}</p>
							<div className="w-full bg-gray-200 rounded-full h-3">
								<div className="bg-green-600 h-3 rounded-full" style={{ width: '92%' }}></div>
							</div>
							<span className="text-sm text-gray-500 mt-1">TOEIC 920</span>
						</div>
						<div>
							<p className="text-gray-600 mb-2">{t('langJapanese')}</p>
							<div className="w-full bg-gray-200 rounded-full h-3">
								<div className="bg-red-600 h-3 rounded-full" style={{ width: '90%' }}></div>
							</div>
							<span className="text-sm text-gray-500 mt-1">JLPT N1</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills

