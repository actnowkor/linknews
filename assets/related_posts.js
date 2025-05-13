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
        "title": "2025년, 연애운이 상승하는 사주 조합은?",
        "slug": "2025-love-saju-match-2505081859",
        "category": "궁금증",
        "keywords": [
            "2025년 연애운",
            "을사년",
            "사주 조합",
            "인연 찾기"
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
    },
    {
        "title": "진짜 돈 된다면, 왜 너희는 안 해? AI 부업의 함정",
        "slug": "ai-sidejob-hype-truth-2505081905",
        "category": "궁금증",
        "keywords": [
            "AI 부업",
            "생성형 AI",
            "유튜브 쇼츠",
            "전자책",
            "수익 과장",
            "투잡",
            "사이드잡 검증"
        ]
    },
    {
        "title": "요즘 사람들은 왜 ‘되는 척’에 진심일까?",
        "slug": "why-fake-it-culture-on-social-media-2505120935",
        "category": "트렌드",
        "keywords": [
            "브랜딩",
            "SNS",
            "비교 심리",
            "외현 중심",
            "불안"
        ]
    },
    {
        "title": "‘성공한 사람처럼 보이기’에 중독된 사회",
        "slug": "successful-image-addiction-2505100243",
        "category": "트렌드",
        "keywords": [
            "자기확신",
            "허영",
            "브랜딩 강박",
            "외부 시선",
            "이미지 메이킹"
        ]
    },
    {
        "title": "‘되는 사람’처럼 보이는 법을 배우는 사람들",
        "slug": "deoneun-saram-cheoreom-boineun-beob-2505100213",
        "category": "트렌드",
        "keywords": [
            "포장 기술",
            "자기계발",
            "성공 프레임",
            "현실 회피",
            "브랜딩 피로"
        ]
    },
    {
        "title": "디지털 시대의 셀프케어, 헬시 플레저의 부상",
        "slug": "healthy-pleasure-digital-selfcare-2505110125",
        "category": "자기계발",
        "keywords": [
            "헬시플레저",
            "자기관리",
            "스트레스",
            "운동",
            "영양"
        ]
    },
    {
        "title": "AI와 함께하는 자기계발, 새로운 가능성의 문을 열다",
        "slug": "ai-self-development-gpt-automation-2505110118",
        "category": "자기계발",
        "keywords": [
            "AI",
            "자기계발",
            "생산성",
            "시간관리",
            "GPT"
        ]
    },
    {
        "title": "마음챙김과 명상, 현대인의 필수 자기계발 도구",
        "slug": "mindfulness-meditation-tool-2505101630",
        "category": "자기계발",
        "keywords": [
            "마음챙김",
            "명상",
            "스트레스관리",
            "자기돌봄",
            "마음건강"
        ]
    },
    {
        "title": "당신의 판단은 틀릴 수도 있다, 메타인지 테스트로 알아보는 자기 객관화 능력",
        "slug": "metacognition-test-clarity-2505101644",
        "category": "궁금증",
        "keywords": [
            "메타인지",
            "메타인지 테스트",
            "자기 객관화",
            "인지 오류"
        ]
    },
    {
        "title": "공부 잘하는 아이들의 비밀, 메타인지 학습법",
        "slug": "metacognition-learning-2505120332",
        "category": "자기계발",
        "keywords": [
            "메타인지 학습법",
            "메타인지 능력",
            "메타인지 공부법"
        ]
    },
    {
        "title": "메타인지, AI 시대를 살아가는 인간의 마지막 무기",
        "slug": "metacognition-ai-era-human-weapon-2505101650",
        "category": "트렌드",
        "keywords": [
            "메타인지",
            "AI",
            "자기객관화",
            "미래역량"
        ]
    },
    {
        "title": "되는 사람처럼 보이고 싶은 심리, SNS 브랜딩의 이면",
        "slug": "sns-identity-and-anxiety-trend-2505110143",
        "category": "트렌드",
        "keywords": [
            "브랜딩",
            "SNS",
            "비교 심리",
            "자기 정체성",
            "SNS 피로감"
        ]
    },
    {
        "title": "조훈현과 이창호, 그들의 ‘승부’가 지금 사람들의 마음을 뒤흔드는 이유",
        "slug": "cho-hunhyun-lee-changho-seungbu-2505111212",
        "category": "트렌드",
        "keywords": [
            "조훈현",
            "이창호",
            "승부",
            "사제 관계",
            "바둑",
            "감정"
        ]
    },
    {
        "title": "자격증만 쌓다 끝나는 사람들의 공통점",
        "slug": "certificate-obsession-2505120309",
        "category": "자기계발",
        "keywords": [
            "자격증",
            "자격증추천",
            "유망자격증"
        ]
    },
    {
        "title": "실손보험 청구, 왜 할수록 더 헷갈릴까?",
        "slug": "health-insurance-claim-confusion-2505120938",
        "category": "궁금증",
        "keywords": [
            "실손보험청구",
            "실손보험",
            "실비보험"
        ]
    },
    {
        "title": "왜 사람들은 상처받기 전에 끊어내는 걸까?",
        "slug": "avoidant-relationship-psychology-2505120312",
        "category": "트렌드",
        "keywords": [
            "회피형인간",
            "회피형인간특징",
            "관계심리"
        ]
    },
    {
        "title": "괜찮다고 말할수록 마음이 병든다",
        "slug": "pretending-to-be-okay-hurts-more-2505120945",
        "category": "심리",
        "keywords": [
            "감정억제",
            "자존감",
            "사회적페르소나"
        ]
    },
    {
        "title": "루틴만 붙잡고 사는 사람들의 공통 심리",
        "slug": "routine-psychology-2505120255",
        "category": "자기계발",
        "keywords": [
            "루틴",
            "루틴뜻",
            "습관강박"
        ]
    },
    {
        "title": "“대출 승인률 87%”의 진실, 믿어도 될까?",
        "slug": "loan-approval-rate-truth-2505120320",
        "category": "궁금증",
        "keywords": [
            "대출승인률",
            "금융심리",
            "마케팅트릭"
        ]
    },
    {
        "title": "전기차 리스가 보조금보다 인기인 이유",
        "slug": "electric-car-lease-trend-2505120947",
        "category": "트렌드",
        "keywords": [
            "전기차리스",
            "전기차",
            "전기차보조금"
        ]
    },
    {
        "title": "연애운이 좋다는 말, 실제로 어떤 변화가 있나요?",
        "slug": "romantic-luck-psychology-effect-2505121118",
        "category": "궁금증",
        "keywords": [
            "연애운",
            "사주",
            "운세심리",
            "자각효과",
            "심리暗示"
        ]
    },
    {
        "title": "짝사랑이 오래 지속되면 생기는 심리학적 현상 5가지",
        "slug": "unrequited-love-psychology-effects-2505121113",
        "category": "심리",
        "keywords": [
            "짝사랑",
            "이상화",
            "자기기만",
            "심리현상",
            "감정지속"
        ]
    },
    {
        "title": "연애상담은 언제 받아야 할까? 상담 적기 판단법",
        "slug": "love-counseling-right-time-2505121134",
        "category": "궁금증",
        "keywords": [
            "연애상담",
            "상담타이밍",
            "연애문제",
            "커플상담",
            "심리기준"
        ]
    },
    {
        "title": "재회부적 정말 효과 있나요? 전문가 의견 정리",
        "slug": "does-reunion-charm-work-2505121139",
        "category": "궁금증",
        "keywords": [
            "재회부적",
            "부적효과",
            "심리의존",
            "매직씽킹",
            "미신"
        ]
    },
    {
        "title": "연애심리상담, 무료와 유료의 차이는 무엇인가요?",
        "slug": "free-vs-paid-love-counseling-2505121126",
        "category": "궁금증",
        "keywords": [
            "연애심리상담",
            "무료상담",
            "유료상담",
            "상담심리",
            "상담비용"
        ]
    },
    {
        "title": "신혼부부가 가전 살 때 가장 많이 하는 실수는?",
        "slug": "common-appliance-mistakes-newlyweds-2505121121",
        "category": "심리",
        "keywords": [
            "신혼가전리스트",
            "가전제품렌탈",
            "LG냉장고",
            "삼성가전",
            "중고가전"
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