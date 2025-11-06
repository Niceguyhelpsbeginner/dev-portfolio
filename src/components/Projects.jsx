import React from 'react'
import { useI18n } from '../i18n'

const Projects = () => {
  const { t } = useI18n()
  const projects = [
    {
      title: "해류데이터 기반 해양쓰레기 집적지 예측 시스템",
      description: "해류 데이터를 분석하여 쓰레기가 모이기 쉬운 환류지점을 예측하는 프로젝트",
      details: [
        "해류 데이터 분석을 통한 환류지점 식별",
        "데이터 분석 기반 쓰레기 집적지 예측",
        "실제 쓰레기섬과 모양 일치 성공 검증"
      ],
      technologies: ["데이터 분석", "Python", "시각화"],
      icon: "🌊",
      link:"https://blog.naver.com/seongjinkim_/223847899684"
    },
    {
      title: "YOLO v8 기반 해양쓰레기 탐지 드론 시스템",
      description: "AI를 활용한 해양쓰레기 자동 탐지 및 수거 시스템",
      details: [
        "YOLO v8 딥러닝 모델을 활용한 실시간 쓰레기 탐지",
        "드론을 통한 해양 쓰레기 모니터링",
        "탐지된 쓰레기 위치를 중앙센터에 자동 보고",
        "효율적인 쓰레기 수거 시스템 구축"
      ],
      technologies: ["YOLO v8", "Computer Vision", "Drone", "Python"],
      icon: "🚁",
      link:"https://www.youtube.com/watch?v=FVllEd5D1wc"
    },
    {
      title: "워싱턴 자전거 대여량 예측 캐글 컴페티션",
      description: "Kaggle 컴페티션 참여를 통한 시계열 데이터 예측 프로젝트",
      details: [
        "워싱턴 자전거 대여량 데이터 분석 및 전처리",
        "시계열 데이터를 활용한 대여량 예측 모델 개발",
        "Kaggle 플랫폼을 통한 컴페티션 참여 및 경험",
        "다양한 머신러닝 모델 비교 및 성능 평가"
      ],
      technologies: ["Kaggle", "시계열 분석", "Machine Learning", "Python", "데이터 분석"],
      icon: "🚴",
      link:"https://github.com/Niceguyhelpsbeginner/bike_rental_demand"
    },
    {
      title: "정량적 데이터를 활용한 AI 투자 모델 만들기 컴페티션",
      description: "정량적 금융 데이터 분석을 통한 투자 전략 개발 프로젝트",
      details: [
        "금융 정량 데이터 수집 및 분석",
        "AI/ML 기반 투자 예측 모델 개발",
        "컴페티션을 통한 모델 성능 검증 및 경쟁",
        "투자 전략 알고리즘 구현 및 최적화"
      ],
      technologies: ["AI", "금융 데이터 분석", "Machine Learning", "Python", "정량 분석"],
      icon: "📈",
      link:"https://blog.naver.com/seongjinkim_/224035644714"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {t('projectsTitle')}
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{project.icon}</span>
                <div className="flex-1">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {project.title}
                        </h3>
                    </a>
                  <p className="text-gray-600 mb-4 text-lg">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                    {project.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

