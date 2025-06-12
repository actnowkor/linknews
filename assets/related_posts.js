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
        "title": "짝사랑 포기하고 싶은데, 왜 자꾸 마음이 돌아설까요?",
        "slug": "why-cant-i-get-over-crush-2505141551",
        "category": "심리",
        "keywords": [
            "짝사랑",
            "집착",
            "미련",
            "감정조절",
            "애착이론"
        ]
    },
    {
        "title": "잠수이별을 당한 사람의 심리와 대처법, 다시 연락올 가능성은?",
        "slug": "ghosting-psychology-and-recovery-2505141602",
        "category": "궁금증",
        "keywords": [
            "잠수이별",
            "고스트",
            "회피형 애착",
            "이별심리",
            "연락심리"
        ]
    },
    {
        "title": "이별 후 미련, 몇 주가 지나야 정상인가요?",
        "slug": "how-long-is-breakup-grief-normal-2505121141",
        "category": "심리",
        "keywords": [
            "이별",
            "미련",
            "애도",
            "감정 순환",
            "이별 극복"
        ]
    },
    {
        "title": "연애심리테스트로 알아보는 나의 연애유형",
        "slug": "love-personality-test-2505121148",
        "category": "궁금증",
        "keywords": [
            "연애심리테스트",
            "연애유형",
            "애착유형",
            "MBTI연애",
            "테스트"
        ]
    },
    {
        "title": "재회상담, 실제 효과 있을까? 경험자 후기 분석",
        "slug": "reunion-counseling-effectiveness-2505121145",
        "category": "궁금증",
        "keywords": [
            "재회상담",
            "상담후기",
            "재회심리",
            "상담효과",
            "연애컨설팅"
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
    },
    {
        "title": "중고가전 잘 파는 사람이 하는 3가지 행동",
        "slug": "used-appliance-selling-tips-2505141544",
        "category": "트렌드",
        "keywords": [
            "중고가전판매",
            "중고냉장고",
            "가전제품무료수거",
            "중고거래"
        ]
    },
    {
        "title": "알부민이 낮으면 일어나는 진짜 무서운 일들",
        "slug": "low-albumin-symptoms-warning-2505140051",
        "category": "심리",
        "keywords": [
            "알부민 효능",
            "간 기능",
            "면역력",
            "수치 해석",
            "건강 불안"
        ]
    },
    {
        "title": "왜 어떤 사람은 AI 덕분에 부자가 될까?",
        "slug": "ai-money-gap-strategy-2505142150",
        "category": "자기계발",
        "keywords": [
            "AI 부업",
            "ChatGPT 수익화",
            "GPT 마케팅",
            "지식 자동화"
        ]
    },
    {
        "title": "나만 빼고 다 쓰는 AI 툴, 뭐길래?",
        "slug": "popular-ai-tools-for-beginners-2505141556",
        "category": "궁금증",
        "keywords": [
            "AI 툴",
            "트렌드",
            "ChatGPT",
            "Notion AI",
            "추천 앱"
        ]
    },
    {
        "title": "“시간 낭비 끝났다” 요즘 사람들이 메이크 자동화에 빠지는 이유",
        "slug": "make-automation-trend-2505140215",
        "category": "트렌드",
        "keywords": [
            "메이크",
            "자동화",
            "워크플로우",
            "노코드",
            "생산성"
        ]
    },
    {
        "title": "자동화한다고 더 나아질 줄 알았지? 메이크에 속은 사람들",
        "slug": "make-automation-failure-truth-2505140223",
        "category": "트렌드",
        "keywords": [
            "메이크",
            "자동화 실패",
            "생산성 역효과",
            "노코드 리스크",
            "과신의 함정"
        ]
    },
    {
        "title": "장염 걸리면 절대 하지 말아야 할 5가지",
        "slug": "enteritis-dont-dos-guide-2505141541",
        "category": "자기계발",
        "keywords": [
            "장염",
            "회복법",
            "생활습관",
            "음식",
            "피해야 할 행동",
            "치료"
        ]
    },
    {
        "title": "왜 나만 장염이 자주 걸릴까? 의외의 원인 3가지",
        "slug": "frequent-enteritis-psychological-causes-2505141537",
        "category": "심리",
        "keywords": [
            "장염",
            "스트레스",
            "반복",
            "원인",
            "생활습관",
            "자율신경"
        ]
    },
    {
        "title": "이 종목 살까 말까?”가 반복된다면: 투자 결정을 망설이는 사람의 심리와 대응법",
        "slug": "investor-decision-psychology-2505150038",
        "category": "심리",
        "keywords": [
            "주식심리",
            "투자결정",
            "매수망설임",
            "심리적장애",
            "의사결정"
        ]
    },
    {
        "title": "PER, PBR? 초보자도 알기 쉽게 이해하는 가치평가 지표의 핵심",
        "slug": "per-pbr-beginner-stock-valuation-2505190744",
        "category": "자기계발",
        "keywords": [
            "PER",
            "PBR",
            "주식가치평가",
            "기초지표",
            "초보주식"
        ]
    },
    {
        "title": "매수는 잘하는데 매도를 못 한다면 꼭 읽어야 할 심리 전략",
        "slug": "stock-buy-timing-strategy-2505190940",
        "category": "심리",
        "keywords": [
            "매도심리",
            "손절타이밍",
            "이익실현",
            "투자심리",
            "주식습관"
        ]
    },
    {
        "title": "ETF와 개별주식 중 뭐가 더 유리할까? 상황별 장단점 비교",
        "slug": "etf-vs-stocks-comparison-guide-2505190938",
        "category": "궁금증",
        "keywords": [
            "ETF",
            "개별주식",
            "투자비교",
            "포트폴리오",
            "주식입문"
        ]
    },
    {
        "title": "우량주 장기투자, 정말 수익이 날까? 10년 시뮬레이션 결과 분석",
        "slug": "bluechip-10yr-simulation-strategy-2505190759",
        "category": "트렌드",
        "keywords": [
            "우량주투자",
            "장기보유",
            "10년수익률",
            "투자시뮬레이션",
            "장기전략"
        ]
    },
    {
        "title": "“떨어질 때 사면 돈 번다?” 하락장에서 살아남는 매매 전략",
        "slug": "bear-market-buying-strategies-2505142332",
        "category": "자기계발",
        "keywords": [
            "하락장투자",
            "매매전략",
            "저가매수",
            "주식리스크관리",
            "하락대응"
        ]
    },
    {
        "title": "내가 감정적으로 매수하는지 확인하는 3가지 체크리스트",
        "slug": "emotional-trading-checklist-2505151854",
        "category": "심리",
        "keywords": [
            "감정매매",
            "충동매수",
            "공포매도",
            "투자심리테스트",
            "자기점검"
        ]
    },
    {
        "title": "‘주린이’가 가장 많이 묻는 7가지 질문과 실전 답변",
        "slug": "beginner-stock-questions-guide-2505161239",
        "category": "궁금증",
        "keywords": [
            "주린이",
            "주식기초",
            "투자Q&A",
            "입문가이드",
            "주식공부"
        ]
    },
    {
        "title": "배당주 포트폴리오를 처음 짠다면 반드시 알아야 할 5가지 기준",
        "slug": "dividend-portfolio-beginner-guide-2505161235",
        "category": "자기계발",
        "keywords": [
            "배당주",
            "포트폴리오구성",
            "안정적수익",
            "투자전략",
            "배당성장"
        ]
    },
    {
        "title": "왜 우리는 오요안나의 목소리에 귀 기울이지 못했을까?",
        "slug": "oh-yoanna-voice-workplace-bullying-2505200028",
        "category": "심리",
        "keywords": [
            "직장 내 괴롭힘",
            "우울증",
            "정신 건강",
            "사회적 인식",
            "오요안나"
        ]
    },
    {
        "title": "미국 신용등급 강등, 달러의 미래는?",
        "slug": "us-credit-downgrade-dollar-future-2505200747",
        "category": "트렌드",
        "keywords": [
            "미국 신용등급",
            "무디스",
            "달러화",
            "글로벌 금융 시장"
        ]
    },
    {
        "title": "예금자보호기금, 왜 달러로도 쌓나?",
        "slug": "deposit-insurance-dollar-fund-2505200800",
        "category": "트렌드",
        "keywords": [
            "예금자보호기금",
            "달러 예금",
            "금융 안정성",
            "외환 정책"
        ]
    },
    {
        "title": "미·중 관세 전쟁, 이제 끝났나?",
        "slug": "us-china-tariff-truce-2025-2505200751",
        "category": "트렌드",
        "keywords": [
            "미중 무역",
            "관세 인하",
            "무역 협상",
            "글로벌 공급망"
        ]
    },
    {
        "title": "왜 AI 글은 사람 같지 않을까?",
        "slug": "ai-writing-vs-human-touch-2505201054",
        "category": "궁금증",
        "keywords": [
            "챗GPT",
            "자연스러운 문장",
            "감정 연결",
            "대화체",
            "리듬"
        ]
    },
    {
        "title": "AI가 자꾸 칭찬만 한다고요? 그건 프롬프트 때문입니다",
        "slug": "gpt-too-positive-fix-prompt-2505201011",
        "category": "트렌드",
        "keywords": [
            "챗GPT",
            "프롬프트",
            "어시스턴트 한계",
            "냉정한 답변",
            "설정법"
        ]
    },
    {
        "title": "혼자 쓰지 마세요. GPT는 최고의 글쓰기 코치입니다",
        "slug": "gpt-writing-coach-guide-2505200941",
        "category": "자기계발",
        "keywords": [
            "GPT 글쓰기",
            "초안",
            "감정 퇴고",
            "창작 불안",
            "쓰기 습관"
        ]
    },
    {
        "title": "왜 우리는 수치심에 휘둘릴까?",
        "slug": "understanding-shame-and-self-worth-2505201019",
        "category": "심리",
        "keywords": [
            "수치심",
            "자존감",
            "감정",
            "심리",
            "관계 불안"
        ]
    },
    {
        "title": "왜 우리는 자극적인 뉴스에 끌릴까?",
        "slug": "why-we-crave-sensational-news-2505200918",
        "category": "심리",
        "keywords": [
            "자극 뉴스",
            "생생함 효과",
            "심리 편향",
            "정보 소비",
            "주의력"
        ]
    },
    {
        "title": "가짜 뉴스에 속는 심리, 그 이면은?",
        "slug": "why-we-believe-fake-news-2505200935",
        "category": "심리",
        "keywords": [
            "가짜 뉴스",
            "확증 편향",
            "인지 편향",
            "심리",
            "미디어"
        ]
    },
    {
        "title": "화면 없는 기기, 새로운 인터페이스의 시대가 온다",
        "slug": "screenless-ai-interface-future-2505261004",
        "category": "궁금증",
        "keywords": [
            "OpenAI",
            "AI 기기",
            "무화면 인터페이스",
            "사용자 경험",
            "신기술"
        ]
    },
    {
        "title": "조니 아이브가 다시 만든다, AI 시대의 아이콘",
        "slug": "jony-ive-ai-design-icon-2505261012",
        "category": "트렌드",
        "keywords": [
            "조니 아이브",
            "OpenAI",
            "AI 디자인",
            "하드웨어 혁신",
            "신제품"
        ]
    },
    {
        "title": "비혼주의자의 심리와 삶의 질: 혼자여도 안정적인 이유",
        "slug": "psychology-of-single-life-2505261059",
        "category": "심리",
        "keywords": [
            "비혼",
            "비혼주의자",
            "비혼주의",
            "비혼식",
            "비혼 뜻"
        ]
    },
    {
        "title": "보험, 안심을 사는 심리: 과잉보장의 행동경제학",
        "slug": "insurance-psychology-economics-2505261208",
        "category": "심리",
        "keywords": [
            "보험",
            "보험설계",
            "보험리모델링",
            "보험종류",
            "보험비교"
        ]
    },
    {
        "title": "집을 산다는 건 무엇을 소유하는가: 부동산의 심리와 지위",
        "slug": "house-ownership-identity-2505261146",
        "category": "심리",
        "keywords": [
            "부동산",
            "부동산공부",
            "부동산투자",
            "부동산매매",
            "부동산스터디"
        ]
    },
    {
        "title": "기억에 남는 콘텐츠는 감정이다: 디지털 콘텐츠의 심리 공식",
        "slug": "emotional-digital-content-2505261122",
        "category": "자기계발",
        "keywords": [
            "디지털콘텐츠",
            "콘텐츠제작",
            "영상제작",
            "AI 콘텐츠",
            "콘텐츠"
        ]
    },
    {
        "title": "혼자 사는 삶은 왜 더 철저한가: 비혼의 자기효능감",
        "slug": "single-life-self-efficacy-2505261231",
        "category": "심리",
        "keywords": [
            "비혼",
            "1인가구",
            "자기효능감",
            "비혼 라이프스타일",
            "비혼 소비패턴"
        ]
    },
    {
        "title": "보험은 안심을 줄까? 위험 인식의 심리적 착시",
        "slug": "insurance-risk-psychology-2505261056",
        "category": "심리",
        "keywords": [
            "보험",
            "보험진단",
            "보험과잉보장",
            "심리적 안정",
            "보험심리학"
        ]
    },
    {
        "title": "집값보다 감정이 움직인다: 주택시장과 기대 심리",
        "slug": "housing-market-emotion-2505261102",
        "category": "심리",
        "keywords": [
            "부동산심리",
            "부동산투자",
            "집값심리",
            "주택시장심리",
            "부동산경기"
        ]
    },
    {
        "title": "창작자는 왜 지치나: 피드백 루프와 콘텐츠 자존감",
        "slug": "creator-feedback-loop-2505261142",
        "category": "자기계발",
        "keywords": [
            "디지털콘텐츠",
            "SNS 창작자",
            "피드백 루프",
            "자존감과 SNS",
            "콘텐츠심리"
        ]
    },
    {
        "title": "터틀 트레이딩 전략, 규칙만 지키면 누가 해도 되는가?",
        "slug": "turtle-trading-strategy-discipline-2505261521",
        "category": "자기계발",
        "keywords": [
            "터틀트레이딩",
            "시스템트레이딩",
            "추세추종",
            "투자전략",
            "백테스트"
        ]
    },
    {
        "title": "투자 심리를 이기는 5가지 사고 습관",
        "slug": "investment-psychology-habits-2505281512",
        "category": "심리",
        "keywords": [
            "투자심리",
            "행동재무학",
            "FOMO",
            "확증편향",
            "손실회피"
        ]
    },
    {
        "title": "CPI와 금리가 당신의 포트폴리오에 미치는 실제 영향",
        "slug": "cpi-interest-rates-portfolio-impact-2505281508",
        "category": "트렌드",
        "keywords": [
            "금리",
            "CPI",
            "경제지표",
            "포트폴리오",
            "시장분석"
        ]
    },
    {
        "title": "차트 패턴, 통계로 검증된 진짜 효과는?",
        "slug": "chart-patterns-statistical-effectiveness-2505281504",
        "category": "궁금증",
        "keywords": [
            "차트패턴",
            "기술적분석",
            "투자동향",
            "패턴검증",
            "RSI"
        ]
    },
    {
        "title": "모바일 크롬에서 Medium 앱 자동 실행 막는 방법",
        "slug": "disable-medium-app-launch-on-chrome-2505281536",
        "category": "궁금증",
        "keywords": [
            "Medium",
            "앱자동실행",
            "모바일링크",
            "크롬설정",
            "앱연결해제"
        ]
    },
    {
        "title": "선물 선택이 고민될 때, 상황별 추천 가이드",
        "slug": "gift-selection-guide-2505281549",
        "category": "자기계발",
        "keywords": [
            "선물추천",
            "감사선물",
            "답례품",
            "의미있는선물",
            "기프트가이드"
        ]
    },
    {
        "title": "사과선물, 말보다 진심을 전하는 방법",
        "slug": "gift-for-apology-emotion-2506112036",
        "category": "심리",
        "keywords": [
            "사과선물",
            "화해선물",
            "감정회복",
            "관계회복"
        ]
    },
    {
        "title": "작별선물, 따뜻한 기억을 남기는 사람들의 선택",
        "slug": "farewell-gift-meaningful-choices-2505281741-2505281737",
        "category": "자기계발",
        "keywords": [
            "작별선물",
            "이직선물",
            "졸업기념",
            "추억선물"
        ]
    },
    {
        "title": "“터틀 트레이딩 전략, 이렇게 구성되어 있습니다 – 규칙 완전 해부”",
        "slug": "turtle-trading-strategy-breakdown-2505281730",
        "category": "자기계발",
        "keywords": [
            "터틀 트레이딩",
            "트레이딩 전략",
            "시스템 매매",
            "재현 가능한 규칙",
            "투자 원칙"
        ]
    },
    {
        "title": "트레이딩뷰로 터틀 전략 구현하는 방법 – 코드와 설정 공개",
        "slug": "tradingview-turtle-strategy-implementation-guide-2505281737-2505281735",
        "category": "자기계발",
        "keywords": [
            "터틀 전략",
            "트레이딩뷰",
            "Pine Script",
            "트레이딩 자동화",
            "전략 구현"
        ]
    },
    {
        "title": "파이썬으로 구현하는 터틀 전략 – backtrader 백테스트 기초 튜토리얼",
        "slug": "python-turtle-strategy-backtrader-tutorial-2505281732-2505281733",
        "category": "자기계발",
        "keywords": [
            "터틀 전략",
            "파이썬",
            "backtrader",
            "백테스트",
            "시스템 트레이딩"
        ]
    },
    {
        "title": "터틀 전략은 왜 지금도 언급될까? 장기 생존 전략으로서의 의미",
        "slug": "turtle-strategy-long-term-survival-2505281731",
        "category": "자기계발",
        "keywords": [
            "터틀 전략",
            "리스크 관리",
            "장기 투자",
            "시스템 트레이딩",
            "투자 철학"
        ]
    },
    {
        "title": "내가 못된 걸까? 돈 벌수록 친구가 줄었다",
        "slug": "rich-lonely-psychology-2506112038-2506112033",
        "category": "심리",
        "keywords": [
            "부자 심리",
            "관계 변화",
            "성공의 대가",
            "외로움"
        ]
    },
    {
        "title": "왜 TikTok 창업자는 인터뷰를 피할까?",
        "slug": "tiktok-founder-media-strategy-2506112030",
        "category": "궁금증",
        "keywords": [
            "창업자 성향",
            "은둔 부자",
            "미디어 회피",
            "장잉밍"
        ]
    },
    {
        "title": "억만장자 100인의 첫 사업 아이디어는 이것이었다",
        "slug": "first-business-ideas-of-billionaires-2506112034",
        "category": "트렌드",
        "keywords": [
            "창업 아이템",
            "시작 단계",
            "현실성",
            "실패율"
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