import React from 'react'

const Awards = () => {
  const awards = [
    {
      title: "2024 교내 캡스톤 동상",
      description: "창의적인 프로젝트 아이디어와 구현 능력 인정",
      icon: "🏆",
      link:"https://github.com/Niceguyhelpsbeginner/DIT_capstone_devton"
    },
    {
      title: "부산정보산업진흥원 DEV 아이디어상",
      description: "혁신적인 개발 아이디어로 인정받음",
      icon: "💡",
      link:"https://github.com/Niceguyhelpsbeginner/DIT_capstone_devton"
    },
    {
      title: "교내 ESG 경진대회 우수상",
      description: "환경·사회·지배구조를 고려한 프로젝트 기여",
      icon: "🌱",
      link:"#"
    }, 
    {
      title: "B-growth 창업대회 대상 ",
      description: "AI 기반 헬스케어 시스템 서비스 기획",
      icon: "🏆",
      link:"#"
    },    
    {
      title: "네이버 클라우드 부트캠프 2등상 ",
      description: "네이버 클라우드에서 서브넷 할당 및 클라우드 서비스 구축",
      icon: "🏆",
      link:"#"
    },
  ]

  return (
    <section id="awards" className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          수상실적
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 text-center">{award.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                {award.title}
              </h3>
              <p className="text-gray-600 text-center">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards

