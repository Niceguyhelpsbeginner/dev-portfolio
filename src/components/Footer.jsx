import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">포트폴리오</h3>
        <p className="text-gray-400 mb-6">
          데이터 분석과 AI 기술로 문제를 해결하는 개발자
        </p>
        <div className="border-t border-gray-700 pt-6">
          <p className="text-gray-400">
            © 2024 개발자 포트폴리오. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

