import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
          안녕하세요, 개발자입니다
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          데이터 분석과 AI 기술로 문제를 해결하는 개발자
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="#about" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            자기소개 보기
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            프로젝트 보기
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

