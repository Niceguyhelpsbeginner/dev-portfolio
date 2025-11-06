import React from 'react'
import { useI18n } from '../i18n'

const Experience = () => {
	const { t } = useI18n()
	return (
		<section id="experience" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
					{t('experienceTitle')}
				</h2>
				<div className="bg-white rounded-2xl p-8 shadow-lg">
					<div className="flex flex-col md:flex-row gap-6 items-start">
						<div className="text-5xl">📣</div>
						<div className="flex-1">
							<h3 className="text-2xl font-bold text-gray-800 mb-2">
								{t('expRole')}
							</h3>
							<p className="text-gray-600 mb-4">
								{t('expDesc')}
							</p>
							<ul className="list-disc list-inside space-y-2 text-gray-700">
								<li>{t('expBul1')}</li>
								<li>{t('expBul2')}</li>
								<li>{t('expBul3')}</li>
								<li>{t('expBul4')}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
