// 🔥 サウナde政策！限界耐久ゲーム — 政策カードデータ（70問）
const QUESTIONS = [
  // ===== カテゴリ1: 大田区の政策（良い政策）=====
  {
    id: 1,
    text: "大田区の公園を子どもが安全に遊べるよう整備する",
    correct: true,
    category: "大田区政策",
    explanation: "子どもの安全な遊び場は大切！正解です✅"
  },
  {
    id: 2,
    text: "区内の高齢者に無料送迎サービスを提供する",
    correct: true,
    category: "大田区政策",
    explanation: "高齢者の移動支援は重要な福祉政策！✅"
  },
  {
    id: 3,
    text: "地元商店街の活性化イベントを行政が支援する",
    correct: true,
    category: "大田区政策",
    explanation: "地域経済の活性化は大切！✅"
  },
  {
    id: 4,
    text: "羽田空港周辺の観光案内を多言語対応にする",
    correct: true,
    category: "大田区政策",
    explanation: "国際都市・大田区として当然の取り組み！✅"
  },
  {
    id: 5,
    text: "子育て世代への保育所無償化を推進する",
    correct: true,
    category: "大田区政策",
    explanation: "子育て支援は未来への投資！✅"
  },
  {
    id: 6,
    text: "区立図書館の夜間開館時間を延長する",
    correct: true,
    category: "大田区政策",
    explanation: "働く世代も使えるよう配慮した政策！✅"
  },
  {
    id: 7,
    text: "地域の防災訓練を年2回実施する",
    correct: true,
    category: "大田区政策",
    explanation: "災害に備えることは命を守る政策！✅"
  },
  {
    id: 8,
    text: "若者の政治参加を促す区民討論会を開催する",
    correct: true,
    category: "大田区政策",
    explanation: "民主主義の根幹！若者の声を政治へ！✅"
  },
  {
    id: 31,
    text: "区内の自転車レーンを整備して安全な通行を確保する",
    correct: true,
    category: "大田区政策",
    explanation: "自転車通行の安全は交通政策の基本！✅"
  },
  {
    id: 32,
    text: "区内の空き家を活用してコミュニティスペースを作る",
    correct: true,
    category: "大田区政策",
    explanation: "空き家問題の解決と地域活性化を同時に！✅"
  },
  {
    id: 33,
    text: "小中学校のトイレを全校洋式化・清潔化する",
    correct: true,
    category: "大田区政策",
    explanation: "子どもの生活環境改善は最優先！✅"
  },
  {
    id: 34,
    text: "区内の公共WiFiスポットを駅・公園に拡充する",
    correct: true,
    category: "大田区政策",
    explanation: "デジタル格差解消！区民の利便性UP！✅"
  },
  {
    id: 35,
    text: "障がい者が働きやすい環境整備に補助金を出す",
    correct: true,
    category: "大田区政策",
    explanation: "インクルーシブな社会の実現！✅"
  },
  {
    id: 36,
    text: "区内の保育士に処遇改善手当を上乗せ支給する",
    correct: true,
    category: "大田区政策",
    explanation: "保育士不足解消！子育て支援の土台づくり！✅"
  },
  {
    id: 37,
    text: "区立公園に授乳室・おむつ替えスペースを整備する",
    correct: true,
    category: "大田区政策",
    explanation: "子連れで外出しやすい街づくり！✅"
  },
  {
    id: 38,
    text: "町工場の技術を継承するための育成プログラムを実施する",
    correct: true,
    category: "大田区政策",
    explanation: "大田区の誇るものづくり文化を守る！✅"
  },
  {
    id: 39,
    text: "区内の河川沿いを遊歩道として整備しリフレッシュ空間にする",
    correct: true,
    category: "大田区政策",
    explanation: "水辺の癒し空間は区民の心身に良い！✅"
  },
  {
    id: 40,
    text: "羽田空港の深夜騒音対策のため防音助成を拡充する",
    correct: true,
    category: "大田区政策",
    explanation: "空港隣接エリアの住民を守る大切な政策！✅"
  },
  {
    id: 41,
    text: "区内の外国人住民向けに行政サービスを多言語対応する",
    correct: true,
    category: "大田区政策",
    explanation: "多文化共生のまちづくり！✅"
  },
  {
    id: 42,
    text: "学校でのプログラミング教育を充実させ講師を招聘する",
    correct: true,
    category: "大田区政策",
    explanation: "未来を生きる子どもたちへのデジタル教育！✅"
  },

  // ===== カテゴリ2: ダメな政策（悪い政策）=====
  {
    id: 9,
    text: "区民税を目的不明のまま30%値上げする",
    correct: false,
    category: "ダメ政策",
    explanation: "目的のない増税は絶対NG！❌"
  },
  {
    id: 10,
    text: "公園のベンチをすべて撤去する",
    correct: false,
    category: "ダメ政策",
    explanation: "休める場所をなくしたらダメ！❌"
  },
  {
    id: 11,
    text: "議員の給与を区民の同意なく3倍にする",
    correct: false,
    category: "ダメ政策",
    explanation: "区民無視の独断はNG！❌"
  },
  {
    id: 12,
    text: "小学校の給食を廃止してコスト削減する",
    correct: false,
    category: "ダメ政策",
    explanation: "子どもの食育を削減はダメ！❌"
  },
  {
    id: 13,
    text: "深夜に工事音が出ても住民の苦情を無視する",
    correct: false,
    category: "ダメ政策",
    explanation: "住民の声を無視することは論外！❌"
  },
  {
    id: 14,
    text: "区内の温泉・銭湯をすべて閉鎖する",
    correct: false,
    category: "ダメ政策",
    explanation: "サウナを取り上げるとは何事か！❌",
    isSaunaJoke: true
  },
  {
    id: 15,
    text: "議会の予算審議を非公開にして区民に見せない",
    correct: false,
    category: "ダメ政策",
    explanation: "透明性のない行政は信頼を失う！❌"
  },
  {
    id: 16,
    text: "自分の名前入り石碑を区内全域に50本建立する",
    correct: false,
    category: "ダメ政策",
    explanation: "税金の私物化は絶対NG！❌"
  },
  {
    id: 43,
    text: "区内の信号をすべて撤去して渋滞を解消する",
    correct: false,
    category: "ダメ政策",
    explanation: "信号なしは事故多発で大惨事！❌"
  },
  {
    id: 44,
    text: "議員が気に入らない住民の陳情を全部却下する",
    correct: false,
    category: "ダメ政策",
    explanation: "住民の声を聴くのが議員の仕事！❌"
  },
  {
    id: 45,
    text: "公立小学校を廃校にしてマンションを建てる",
    correct: false,
    category: "ダメ政策",
    explanation: "子どもたちの学校をなくすのは論外！❌"
  },
  {
    id: 46,
    text: "区内のゴミ収集を月1回に減らしてコストカットする",
    correct: false,
    category: "ダメ政策",
    explanation: "衛生環境が悪化して病気が広まる！❌"
  },
  {
    id: 47,
    text: "区民への情報公開を全面的に禁止する",
    correct: false,
    category: "ダメ政策",
    explanation: "情報公開は民主主義の基本！禁止は憲法違反！❌"
  },
  {
    id: 48,
    text: "消防署を廃止して火事は自分で消すようにする",
    correct: false,
    category: "ダメ政策",
    explanation: "消防は命を守るライフライン！廃止は危険！❌"
  },
  {
    id: 49,
    text: "区民の許可なく個人情報を企業に売却する",
    correct: false,
    category: "ダメ政策",
    explanation: "プライバシー侵害・違法行為！絶対NG！❌"
  },
  {
    id: 50,
    text: "公共交通機関の補助金をゼロにして全面値上げさせる",
    correct: false,
    category: "ダメ政策",
    explanation: "生活インフラの値上げは区民生活を直撃！❌"
  },
  {
    id: 51,
    text: "小学校の授業時間を削って広告を見させる",
    correct: false,
    category: "ダメ政策",
    explanation: "教育の場を広告に使うのは問題外！❌"
  },
  {
    id: 52,
    text: "区内の公衆トイレを全廃してコンビニに任せる",
    correct: false,
    category: "ダメ政策",
    explanation: "公衆トイレは誰もが使える公共サービス！❌"
  },
  {
    id: 53,
    text: "高齢者福祉サービスを全廃して民間に任せる",
    correct: false,
    category: "ダメ政策",
    explanation: "行政が支えるべき弱者を切り捨てるのはNG！❌"
  },
  {
    id: 54,
    text: "道路の修繕費をゼロにして穴ぼこだらけにする",
    correct: false,
    category: "ダメ政策",
    explanation: "インフラ崩壊で事故が続出する！❌"
  },

  // ===== カテゴリ3: サウナ・温泉ネタ政策 =====
  {
    id: 17,
    text: "外気浴スペースを区有地に整備する",
    correct: true,
    category: "サウナ政策",
    explanation: "ととのいスペースの確保は公共福祉！✅",
    isSaunaJoke: true
  },
  {
    id: 18,
    text: "投票所にサウナを設置して投票率を上げる",
    correct: true,
    category: "サウナ政策",
    explanation: "笑えるけど理にかなってる！投票率UP！✅",
    isSaunaJoke: true
  },
  {
    id: 19,
    text: "区民全員にととのいポイントカードを配る",
    correct: true,
    category: "サウナ政策",
    explanation: "地域活性化と健康増進の一石二鳥！✅",
    isSaunaJoke: true
  },
  {
    id: 20,
    text: "銭湯の入浴料を補助して区民が通いやすくする",
    correct: true,
    category: "サウナ政策",
    explanation: "健康づくりと文化継承！正解！✅",
    isSaunaJoke: true
  },
  {
    id: 21,
    text: "温泉旅行を税金で区民全員に全額負担する",
    correct: false,
    category: "サウナ政策",
    explanation: "さすがに財政破綻する！❌",
    isSaunaJoke: true
  },
  {
    id: 22,
    text: "サウナの温度を40℃に強制的に下げる条例を制定する",
    correct: false,
    category: "サウナ政策",
    explanation: "それはもはやサウナではない！❌",
    isSaunaJoke: true
  },
  {
    id: 23,
    text: "サウナ内での政治演説を全議員に義務化する",
    correct: false,
    category: "サウナ政策",
    explanation: "汗だくで演説は混乱するだけ！❌",
    isSaunaJoke: true
  },
  {
    id: 55,
    text: "区内の銭湯を文化財として保護・支援する",
    correct: true,
    category: "サウナ政策",
    explanation: "銭湯は大田区の大切な文化遺産！✅",
    isSaunaJoke: true
  },
  {
    id: 56,
    text: "区民が健康づくりのため公衆浴場を無料開放する日を設ける",
    correct: true,
    category: "サウナ政策",
    explanation: "健康増進＋銭湯文化の普及！一石二鳥！✅",
    isSaunaJoke: true
  },
  {
    id: 57,
    text: "サウナ後の水風呂は5℃以下にすることを法律で決める",
    correct: false,
    category: "サウナ政策",
    explanation: "さすがに行政が介入しすぎ！個人の自由！❌",
    isSaunaJoke: true
  },
  {
    id: 58,
    text: "区立のアウフグース（熱波）施設を新設する",
    correct: true,
    category: "サウナ政策",
    explanation: "区民の憩いと観光資源！ありです！✅",
    isSaunaJoke: true
  },
  {
    id: 59,
    text: "サウナ中のスマホ操作を全面禁止する条例を制定する",
    correct: false,
    category: "サウナ政策",
    explanation: "そこまで管理するのはやりすぎ！❌",
    isSaunaJoke: true
  },
  {
    id: 60,
    text: "区内の老舗銭湯を観光スポットとしてPRする",
    correct: true,
    category: "サウナ政策",
    explanation: "インバウンド観光×地域文化！最高！✅",
    isSaunaJoke: true
  },
  {
    id: 61,
    text: "議員研修の一環でサウナを導入し心身を鍛える",
    correct: true,
    category: "サウナ政策",
    explanation: "心身ともに整った議員が増えれば最高！✅",
    isSaunaJoke: true
  },
  {
    id: 62,
    text: "区内の温泉施設すべてに「ととのい師」を常駐させる",
    correct: false,
    category: "サウナ政策",
    explanation: "ととのい師の確保が難しすぎる！現実的でない❌",
    isSaunaJoke: true
  },
  {
    id: 63,
    text: "区の健康増進事業にサウナ活用プログラムを組み込む",
    correct: true,
    category: "サウナ政策",
    explanation: "予防医療としてのサウナ！理にかなってる！✅",
    isSaunaJoke: true
  },

  // ===== カテゴリ4: 爆笑ギャグ問題 =====
  {
    id: 24,
    text: "大田区の鳩を選挙権者として住民登録する",
    correct: false,
    category: "ギャグ",
    explanation: "ハトが投票！？それは無理です！❌"
  },
  {
    id: 25,
    text: "議会をサウナ室で開催する（全員タオル1枚）",
    correct: false,
    category: "ギャグ",
    explanation: "気持ちはわかるけど流石にダメ！❌"
  },
  {
    id: 26,
    text: "区長の公式名称を「ととのい太郎」に変更する条例",
    correct: false,
    category: "ギャグ",
    explanation: "ウケるけどそれは許可できない！❌"
  },
  {
    id: 27,
    text: "政治家が全員サウナに入れば良い話し合いができる",
    correct: true,
    category: "ギャグ",
    explanation: "裸の付き合い！案外正解かも！✅"
  },
  {
    id: 28,
    text: "区の公式マスコットに「こくみんうさぎ」を採用する",
    correct: true,
    category: "ギャグ",
    explanation: "かわいくて認知度も高い！アリです！✅"
  },
  {
    id: 29,
    text: "区役所の入口に「ウェルカム！ととのえ！」と書く",
    correct: true,
    category: "ギャグ",
    explanation: "区民が来やすくなる！ウェルカム精神！✅"
  },
  {
    id: 30,
    text: "毎週金曜日を「ととのいデー」として半日休暇にする",
    correct: true,
    category: "ギャグ",
    explanation: "ワークライフバランス的には悪くない！✅"
  },
  {
    id: 64,
    text: "区議会議員の当選祝いはサウナで汗を流すことにする",
    correct: true,
    category: "ギャグ",
    explanation: "初心を忘れずさっぱりした気持ちで臨む！✅"
  },
  {
    id: 65,
    text: "大田区のキャッチフレーズを「ととのえ！大田！」にする",
    correct: true,
    category: "ギャグ",
    explanation: "インパクト抜群でSNS映え間違いなし！✅"
  },
  {
    id: 66,
    text: "区民全員が選挙に行けばサウナ無料券をプレゼントする",
    correct: true,
    category: "ギャグ",
    explanation: "投票率100%への斬新なアプローチ！✅"
  },
  {
    id: 67,
    text: "区議会の休憩時間にロウリュを全員に強制体験させる",
    correct: false,
    category: "ギャグ",
    explanation: "強制は良くない！自由参加にしよう！❌"
  },
  {
    id: 68,
    text: "区役所の職員食堂のメニューに「政策定食」を追加する",
    correct: true,
    category: "ギャグ",
    explanation: "面白い！職員の士気も上がりそう！✅"
  },
  {
    id: 69,
    text: "大田区の区民歌に「ととのいソング」を作曲する",
    correct: true,
    category: "ギャグ",
    explanation: "地域の個性を発信！バズる可能性大！✅"
  },
  {
    id: 70,
    text: "区議会議員はサウナ検定1級取得を義務とする",
    correct: false,
    category: "ギャグ",
    explanation: "議員の資格は政治力！サウナは関係ない笑❌"
  },
  // ===== ここから100問に向けた追加問題 =====
  {
    id: 71,
    text: "大田区内の防犯カメラを増設し、安全な街づくりを進める",
    correct: true,
    category: "大田区政策",
    explanation: "区民の安心・安全を守る基本の政策！✅"
  },
  {
    id: 72,
    text: "区役所の手続きをすべてスマートフォンで完結できるようにする",
    correct: true,
    category: "大田区政策",
    explanation: "行政のDX化！窓口の混雑解消で便利に！✅"
  },
  {
    id: 73,
    text: "多摩川河川敷を整備し、区民が無料で使えるスポーツエリアを作る",
    correct: true,
    category: "大田区政策",
    explanation: "健康増進と憩いの場を提供！素晴らしい！✅"
  },
  {
    id: 74,
    text: "大田区の全区民に毎月100万円を無条件で給付する",
    correct: false,
    category: "ダメ政策",
    explanation: "気持ちはわかるが財源ゼロ！一瞬で破綻する❌"
  },
  {
    id: 75,
    text: "区長室を黄金で作って権威を示す",
    correct: false,
    category: "ダメ政策",
    explanation: "無駄遣いの極み！絶対に許されない❌"
  },
  {
    id: 76,
    text: "道路の白線をすべてピンク色に塗り替える",
    correct: false,
    category: "ダメ政策",
    explanation: "交通ルールが混乱して大事故になる！❌"
  },
  {
    id: 77,
    text: "温泉・サウナの入浴税を全額免除にする",
    correct: true,
    category: "サウナ政策",
    explanation: "サウナー歓喜！健康増進で医療費も減るかも！✅",
    isSaunaJoke: true
  },
  {
    id: 78,
    text: "すべての公園に無料の足湯を設置する",
    correct: true,
    category: "サウナ政策",
    explanation: "お年寄りから若者まで集える癒しスポット！✅",
    isSaunaJoke: true
  },
  {
    id: 79,
    text: "区内の銭湯の煙突をライトアップして観光名所にする",
    correct: true,
    category: "サウナ政策",
    explanation: "大田区の銭湯文化を世界に発信！粋な政策！✅",
    isSaunaJoke: true
  },
  {
    id: 80,
    text: "サウナの「熱波師」を大田区の公務員として採用する",
    correct: false,
    category: "サウナ政策",
    explanation: "さすがに公務員の職種としては無理がある！❌",
    isSaunaJoke: true
  },
  {
    id: 81,
    text: "議会中に「ととのった！」と叫んだら即退場にする",
    correct: false,
    category: "ギャグ",
    explanation: "厳しすぎる！ちょっとくらい許してあげて！❌"
  },
  {
    id: 82,
    text: "大田区の特産品として「大田区公式サウナハット」を開発する",
    correct: true,
    category: "ギャグ",
    explanation: "ふるさと納税の返礼品としてバズるかも！？✅"
  },
  {
    id: 83,
    text: "「こくみんうさぎ」を1日区長にしてパレードを行う",
    correct: true,
    category: "ギャグ",
    explanation: "子どもたちも大喜びのイベント！✅"
  },
  {
    id: 84,
    text: "サウナの後のコーヒー牛乳を大田区の公式飲料に指定する",
    correct: true,
    category: "ギャグ",
    explanation: "銭湯上がりの定番！文化として保護したい！✅"
  },
  {
    id: 85,
    text: "自転車のヘルメット着用を啓発し、購入補助を出す",
    correct: true,
    category: "大田区政策",
    explanation: "命を守るための大切な安全対策！✅"
  },
  {
    id: 86,
    text: "区内の歩道から点字ブロックを撤去して景観を優先する",
    correct: false,
    category: "ダメ政策",
    explanation: "視覚障がい者の命綱を奪うのは絶対NG！❌"
  },
  {
    id: 87,
    text: "羽田空港の滑走路で毎週末にフェスを開催する",
    correct: false,
    category: "ダメ政策",
    explanation: "飛行機が飛べなくて日本中が大パニック！❌"
  },
  {
    id: 88,
    text: "区内の中小企業を支援するため、大田区ブランドの認証制度を作る",
    correct: true,
    category: "大田区政策",
    explanation: "ものづくりの街・大田区の魅力を発信！✅"
  },
  {
    id: 89,
    text: "議員がサウナで汗を流す様子を24時間生配信する",
    correct: false,
    category: "ギャグ",
    explanation: "誰がその配信を見るんだ！プライバシーの侵害！❌"
  },
  {
    id: 90,
    text: "サウナに入る前は必ず福井ゆうたのポスターにお辞儀をさせる",
    correct: false,
    category: "ギャグ",
    explanation: "独裁国家みたいになってる！絶対ダメ！❌"
  },
  {
    id: 91,
    text: "区民の健康診断に「サウナ耐性チェック」を追加する",
    correct: false,
    category: "サウナ政策",
    explanation: "医学的な根拠が不明！普通に血圧を測ろう！❌",
    isSaunaJoke: true
  },
  {
    id: 92,
    text: "水風呂の水を多摩川の天然水にする",
    correct: true,
    category: "サウナ政策",
    explanation: "大田区ならではの自然の恵み！実現したら最高！✅",
    isSaunaJoke: true
  },
  {
    id: 93,
    text: "区の税金をすべて仮想通貨に変えてギャンブルする",
    correct: false,
    category: "ダメ政策",
    explanation: "税金でギャンブルは犯罪レベルの失政！❌"
  },
  {
    id: 94,
    text: "高齢者向けのスマホ教室を各地域で開催する",
    correct: true,
    category: "大田区政策",
    explanation: "誰も取り残されないデジタル化！✅"
  },
  {
    id: 95,
    text: "区民向けのスポーツ大会「大田区サウナリンピック」を開催",
    correct: true,
    category: "ギャグ",
    explanation: "我慢大会にならないように注意すれば面白い！✅"
  },
  {
    id: 96,
    text: "大田区内のすべての駅に立ち食いサウナを作る",
    correct: false,
    category: "サウナ政策",
    explanation: "立ち食いそば感覚でサウナに入れない！❌",
    isSaunaJoke: true
  },
  {
    id: 97,
    text: "学校の夏休みをなくして1年中授業を受けさせる",
    correct: false,
    category: "ダメ政策",
    explanation: "子どもと先生が倒れてしまうブラック政策！❌"
  },
  {
    id: 98,
    text: "大田区の災害備蓄品に「使い捨てサウナポンチョ」を導入する",
    correct: true,
    category: "サウナ政策",
    explanation: "避難所での防寒着としても超優秀！✅",
    isSaunaJoke: true
  },
  {
    id: 99,
    text: "町工場の技術を活かして最強の「サウナストーブ」を開発する",
    correct: true,
    category: "大田区政策",
    explanation: "これぞ大田区のものづくり！メイドイン大田！✅"
  },
  {
    id: 100,
    text: "福井ゆうたを応援すれば大田区がもっと良くなる",
    correct: true,
    category: "大田区政策",
    explanation: "その通り！みんなで応援してより良い大田区へ！✅"
  }
];

// シャッフル関数
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
