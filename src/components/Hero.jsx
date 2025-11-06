import React from 'react'
import { useI18n } from '../i18n'

const Hero = () => {
	const { t } = useI18n()
	return (
		<section className="min-h-screen flex items-center justify-center px-4 py-20">
			<div className="text-center max-w-4xl mx-auto">
				<h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
					{t('helloTitle')}
				</h1>
				<p className="text-xl md:text-2xl text-gray-600 mb-8">
					{t('helloSubtitle')}
				</p>
				<div className="flex justify-center gap-4 flex-wrap">
					<a 
						href="#about" 
						className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
					>
						{t('btnAbout')}
					</a>
					<a 
						href="#projects" 
						className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
					>
						{t('btnProjects')}
					</a>
				</div>
			</div>
		</section>
	)
}

export default Hero

