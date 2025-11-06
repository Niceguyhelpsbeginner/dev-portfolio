import React from 'react'
import { useI18n } from '../i18n'

const Footer = () => {
	const { t } = useI18n()
	return (
		<footer className="bg-gray-800 text-white py-12 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<h3 className="text-2xl font-bold mb-4">{t('footerTitle')}</h3>
				<p className="text-gray-400 mb-6">
					{t('footerDesc')}
				</p>
				<div className="border-t border-gray-700 pt-6">
					<p className="text-gray-400">
						{t('footerCopy')}
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer

