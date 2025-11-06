import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          경험
        </h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="text-5xl">📣</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                해외영업·마케팅 인턴 · 소셜빈
              </h3>
              <p className="text-gray-600 mb-4">
                해외 인플루언서 리스트업 및 X 플랫폼 프로모션 진행을 통해 브랜드 인지도와 도달률을 빠르게 성장시켰습니다.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>해외 인플루언서 리서치 및 타깃 리스트 구축</li>
                <li>X(구 트위터) 채널 프로모션 운영 및 캠페인 관리</li>
                <li>팔로워 <span className="font-semibold">0 → 1,200명</span> 달성 (약 2개월)</li>
                <li>게시물 조회수 <span className="font-semibold">100,000+</span> 달성</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
