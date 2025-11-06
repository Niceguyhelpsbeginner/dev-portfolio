import React from 'react'
import { useI18n } from '../i18n'

const LanguageSwitcher = () => {
	const { lang, setLang, t } = useI18n()
	return (
		<div className="fixed top-4 right-4 z-50">
			<select
				aria-label="Language selector"
				value={lang}
				onChange={(e) => setLang(e.target.value)}
				className="bg-white/90 backdrop-blur px-3 py-2 rounded-md shadow border text-gray-700"
			>
				<option value="ko">{t('langKorean')}</option>
				<option value="en">{t('langEnglish')}</option>
				<option value="ja">{t('langJapanese')}</option>
			</select>
		</div>
	)
}

export default LanguageSwitcher
