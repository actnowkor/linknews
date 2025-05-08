// 📦 관련 콘텐츠 추천 함수
// ✔ 같은 카테고리 & 공통 키워드가 있는 글 중 최대 5개 추천
function findRelated(currentSlug, currentCategory, currentKeywords) {
  const posts = [
    {
        "title": "사주로 보는 2025년 연애 트렌드: 소통과 자기 개발의 시대",
        "slug": "saju-2025-love-growth-2505080208",
        "category": "심리",
        "keywords": [
            "사주",
            "연애 트렌드",
            "소통",
            "자기 개발",
            "2025년"
        ]
    },
    {
        "title": "사주로 본 2025년 연애운: 새로운 시작을 위한 전략",
        "slug": "saju-2025-love-strategy-2505080246",
        "category": "자기계발",
        "keywords": [
            "사주",
            "연애운",
            "2025년",
            "새로운 시작",
            "전략"
        ]
    },
    {
        "title": "2025년, 사주로 보는 연애운의 변화와 그 의미",
        "slug": "2025-saju-love-trend-2505080014",
        "category": "트렌드",
        "keywords": [
            "사주",
            "연애운",
            "2025년",
            "변화",
            "의미"
        ]
    },
    {
        "title": "요즘 남자들, 왜 립밤에 집착할까?",
        "slug": "zmen-beauty-lipbalm-trend-2505081839",
        "category": "트렌드",
        "keywords": [
            "남성 뷰티",
            "립밤",
            "Z세대",
            "외모 관리",
            "자존감",
            "비교 심리"
        ]
    },
    {
        "title": "왜 사진 속 나는 이상하게 나올까? 진짜 얼굴 vs 셀카의 진실",
        "slug": "photo-vs-mirror-self-image-2505081847",
        "category": "궁금증",
        "keywords": [
            "외모 왜곡",
            "셀카",
            "거울",
            "자기 이미지",
            "비교 심리",
            "사진 스트레스"
        ]
    }
]
  const result = posts.filter(post => {
    if (post.slug === currentSlug) return false;
    if (post.category !== currentCategory) return false;

    // 키워드 겹치는지 확인
    return post.keywords.some(k => currentKeywords.includes(k));
  }).slice(0, 5);

  return result;
}