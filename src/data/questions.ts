import type { Question } from '@/types';

export const questionData: Question[] = [
  {
    id: 1,
    lessonId: 1,
    question: 'include',
    choices: ['を完了する', 'を避ける', 'に注意を払う、と述べる', 'を含む'],
    answer: 'を含む',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'inclusion',
        meaning: '包含、含まれるもの',
        partOfSpeech: '名詞',
      },
      {
        word: 'inclusive',
        meaning: 'すべてを含んだ',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the email including a malicious macro',
        meaning: '悪意のあるマクロを含むメール',
      },
    ],
  },
  {
    id: 2,
    lessonId: 1,
    question: 'steal',
    choices: ['を悪用する', 'を盗む', 'になりすます', 'を脅迫する、ゆすり取る'],
    answer: 'を盗む',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'steal sensitive information',
        meaning: '機微な情報を盗む',
      },
    ],
  },
  {
    id: 3,
    lessonId: 1,
    question: 'exploit',
    choices: [
      'を標的とする',
      'を妨げる',
      '(脆弱性)を突いて攻撃する',
      'と主張する',
    ],
    answer: '(脆弱性)を突いて攻撃する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'exploitation',
        meaning: '(脆弱性を突く)攻撃',
        partOfSpeech: '名詞',
      },
      {
        word: 'exploitable',
        meaning: '悪用可能な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'actively exploited vulnerability',
        meaning: 'よく攻撃に使われる脆弱性',
      },
    ],
  },
  {
    id: 4,
    lessonId: 1,
    question: 'release',
    choices: [
      'を暴露する',
      'を表示する、展示する',
      'と表明する',
      'を入手可能な状態にする',
    ],
    answer: 'を入手可能な状態にする',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'updates released today',
        meaning: '今日リリースされたアップデート',
      },
    ],
  },
  {
    id: 5,
    lessonId: 1,
    question: 'target',
    choices: [
      'と接触する、連絡する',
      'に携わる、を雇う',
      'を標的とする',
      'を侵害する',
    ],
    answer: 'を標的とする',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'targeted',
        meaning: '狙われた、標的型の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'targeted attack',
        meaning: '標的型攻撃',
      },
    ],
  },
  {
    id: 6,
    lessonId: 1,
    question: 'allow',
    choices: [
      'を強調する',
      'を可能とする、許可する',
      'を認証する',
      'を提供する',
    ],
    answer: 'を可能とする、許可する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'allowlist',
        meaning: '許可リスト',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the bug allowing attackers to execute arbitrary code',
        meaning: '攻撃者に任意のコード実行を許すバグ',
      },
    ],
  },
  {
    id: 7,
    lessonId: 1,
    question: 'provide',
    choices: ['を提案する、示唆する', 'を提出する', 'を提供する', 'を追跡する'],
    answer: 'を提供する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'provider',
        meaning: 'プロバイダー',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'provide detailed information',
        meaning: '詳細な情報を提供する',
      },
    ],
  },
  {
    id: 8,
    lessonId: 1,
    question: 'create',
    choices: ['起こる', 'のきっかけとなる', 'に影響する', 'を作り出す'],
    answer: 'を作り出す',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'creation',
        meaning: '作成',
        partOfSpeech: '名詞',
      },
      {
        word: 'creator',
        meaning: '作成者',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'create a new account',
        meaning: '新規アカウントを作成する',
      },
    ],
  },
  {
    id: 9,
    lessonId: 1,
    question: 'compromise',
    choices: [
      'を侵害する',
      'を悪用する',
      'を脅迫する、ゆすり取る',
      'になりすます',
    ],
    answer: 'を侵害する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'compromise',
        meaning: '侵害',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'compromised networks',
        meaning: '侵害されたネットワーク',
      },
    ],
  },
  {
    id: 10,
    lessonId: 1,
    question: 'warn',
    choices: [
      'を予期する、と推定する',
      'を警告する',
      'を妨げる',
      'に注意を払う、と述べる',
    ],
    answer: 'を警告する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'warning',
        meaning: '警告、注意',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'FBI warn of...',
        meaning: 'FBI が～について警告している',
      },
    ],
  },
  {
    id: 11,
    lessonId: 2,
    question: 'enable',
    choices: [
      'と主張する',
      'と評価する、見積もる',
      'を入手可能な状態にする',
      'を有効化する、可能にする',
    ],
    answer: 'を有効化する、可能にする',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'enable macro execution',
        meaning: 'マクロの実行を有効化する',
      },
    ],
  },
  {
    id: 12,
    lessonId: 2,
    question: 'expose',
    choices: ['に携わる、を雇う', 'を暴露する', 'を強調する', 'を強調する'],
    answer: 'を暴露する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'exposure',
        meaning: '暴露、公表',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: "exposed customers' information",
        meaning: '暴露された顧客の情報',
      },
    ],
  },
  {
    id: 13,
    lessonId: 2,
    question: 'affect',
    choices: [
      'に影響する',
      'を投稿する',
      'を分析する',
      'をよく考える、検討する、考慮する',
    ],
    answer: 'に影響する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'affected',
        meaning: '影響を受けた',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'affected versions',
        meaning: '影響を受けるバージョン',
      },
    ],
  },
  {
    id: 14,
    lessonId: 2,
    question: 'fix',
    choices: [
      'を避ける',
      'を無効化する',
      '(脆弱性やバグ)を修正する',
      'に知らせる',
    ],
    answer: '(脆弱性やバグ)を修正する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the problem fixed in this update',
        meaning: 'このアップデートで修正された問題',
      },
    ],
  },
  {
    id: 15,
    lessonId: 2,
    question: 'claim',
    choices: [
      'に置く',
      'を要求する、要請する',
      'を引き起こす、のふりをする',
      'と主張する',
    ],
    answer: 'と主張する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the ransomware attack claimed by REvil',
        meaning: 'REvil によるものとされるランサムウェア攻撃',
      },
    ],
  },
  {
    id: 16,
    lessonId: 2,
    question: 'contain',
    choices: ['に属する', 'を含む', 'と表明する', 'を限定する、制限する'],
    answer: 'を含む',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'container',
        meaning: 'コンテナ',
        partOfSpeech: '名詞',
      },
      {
        word: 'containment',
        meaning: '封じ込め',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'documents containing malicious macros',
        meaning: '悪意のあるマクロを含む文書',
      },
    ],
  },
  {
    id: 17,
    lessonId: 2,
    question: 'pay',
    choices: [
      'を強要する、実施する',
      'に関係する',
      'を利用する',
      'を支払う、(注意など)を払う',
    ],
    answer: 'を支払う、(注意など)を払う',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'payment',
        meaning: '支払い',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'force to pay the ransom',
        meaning: '身代金の支払いを強要する',
      },
    ],
  },
  {
    id: 18,
    lessonId: 2,
    question: 'deploy',
    choices: [
      '起こる',
      'を配置する、展開する',
      'を探す、検索する',
      'に携わる、を雇う',
    ],
    answer: 'を配置する、展開する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'deployment',
        meaning: '配備',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'deploy ransomware payload',
        meaning: 'ランサムウェアのペイロードを展開する',
      },
    ],
  },
  {
    id: 19,
    lessonId: 2,
    question: 'state',
    choices: [
      'と表明する',
      'を立ち上げる、を開始する',
      'を試みる',
      'をよく考える、検討する、考慮する',
    ],
    answer: 'と表明する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'statement',
        meaning: '声明',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the report stated that ...',
        meaning: '報告書には～と書かれている',
      },
    ],
  },
  {
    id: 20,
    lessonId: 2,
    question: 'confirm',
    choices: [
      '(脆弱性やバグ)を修正する',
      'に知らせる',
      'を確認する',
      'を破壊する、クラッシュする',
    ],
    answer: 'を確認する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'confirmation',
        meaning: '確認、承認',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'confirm a data breach',
        meaning: '情報流出を確認する',
      },
    ],
  },
  {
    id: 21,
    lessonId: 3,
    question: 'prevent',
    choices: [
      'と主張する',
      'を基盤とする、に基づく',
      'と説明する、記述する',
      'を妨げる',
    ],
    answer: 'を妨げる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'prevention',
        meaning: '防止、予防',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'prevent attackers from accessing the network',
        meaning: '攻撃者によるネットワークへのアクセスを防止する',
      },
    ],
  },
  {
    id: 22,
    lessonId: 3,
    question: 'publish',
    choices: [
      'を得る',
      'を表示する、展示する',
      'を発行する、出版する',
      'をだます',
    ],
    answer: 'を発行する、出版する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'publisher',
        meaning: '発行者、パブリッシャー',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'publish a list of the affected products',
        meaning: '影響を受ける製品のリストを公表する',
      },
    ],
  },
  {
    id: 23,
    lessonId: 3,
    question: 'detect',
    choices: ['に警告する', 'を検知する', 'を要求する、要請する', 'を完了する'],
    answer: 'を検知する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'detection',
        meaning: '検知',
        partOfSpeech: '名詞',
      },
      {
        word: 'undetected',
        meaning: '検知されていない',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the attacks were detected and stopped',
        meaning: '攻撃が検知され止められた',
      },
    ],
  },
  {
    id: 24,
    lessonId: 3,
    question: 'require',
    choices: [
      'を必要とする、要求する',
      'を無効化する',
      'を悪用する',
      'を防御する',
    ],
    answer: 'を必要とする、要求する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'requirement',
        meaning: '要件、必要条件',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'this update require no action from users',
        meaning: 'このアップデートはユーザーの操作を必要としない',
      },
    ],
  },
  {
    id: 25,
    lessonId: 3,
    question: 'launch',
    choices: [
      'を達成する、獲得する',
      'を立ち上げる、を開始する',
      'と思われる',
      'を限定する、制限する',
    ],
    answer: 'を立ち上げる、を開始する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'relaunch',
        meaning: '再開',
        partOfSpeech: '動詞',
      },
      {
        word: 'launcher',
        meaning: 'ランチャー',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'launch a new instance',
        meaning: '新しいインスタンスを起動する',
      },
    ],
  },
  {
    id: 26,
    lessonId: 3,
    question: 'block',
    choices: [
      'をよく考える、検討する、考慮する',
      'を遮断する',
      'に感染させる',
      'を公表する、暴露する',
    ],
    answer: 'を遮断する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'block malicious requests',
        meaning: '悪意のあるリクエストを遮断する',
      },
    ],
  },
  {
    id: 27,
    lessonId: 3,
    question: 'offer',
    choices: [
      'を管理する',
      'を示す、指摘する',
      'を押収する、を掴む',
      'を提供する',
    ],
    answer: 'を提供する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'offering',
        meaning: '提供',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'offer free anonymous hosting services',
        meaning: '無料の匿名ホスティングサービスを提供する',
      },
    ],
  },
  {
    id: 28,
    lessonId: 3,
    question: 'reveal',
    choices: [
      'を明らかにする',
      'を探す、検索する',
      'を予期する、と推定する',
      'を調査する',
    ],
    answer: 'を明らかにする',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'reveal the technical detail',
        meaning: '技術的な詳細を明らかにする',
      },
    ],
  },
  {
    id: 29,
    lessonId: 3,
    question: 'identify',
    choices: ['を実行する', 'を特定する', 'を探す、検索する', 'に関係する'],
    answer: 'を特定する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'identification',
        meaning: '識別',
        partOfSpeech: '名詞',
      },
      {
        word: 'identifier',
        meaning: '識別子',
        partOfSpeech: '名詞',
      },
      {
        word: 'identifiable',
        meaning: '識別可能な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'identify unauthorized access',
        meaning: '許可されていないアクセスを特定する',
      },
    ],
  },
  {
    id: 30,
    lessonId: 3,
    question: 'leak',
    choices: [
      'を求める、探す',
      '台頭する、現れる、明らかになる',
      'を遮断する',
      '流出する、を流出させる',
    ],
    answer: '流出する、を流出させる',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'data leak site',
        meaning: '盗んだデータを公開するサイト',
      },
    ],
  },
  {
    id: 31,
    lessonId: 4,
    question: 'encrypt',
    choices: ['に警告する', '広がる、を広げる', 'を暗号化する', 'を行う'],
    answer: 'を暗号化する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'encryption',
        meaning: '暗号化',
        partOfSpeech: '名詞',
      },
      {
        word: 'encryptor',
        meaning: '暗号化プログラム',
        partOfSpeech: '名詞',
      },
      {
        word: 'encrypted',
        meaning: '暗号化された',
        partOfSpeech: '形容詞',
      },
      {
        word: 'unencrypted',
        meaning: '暗号化されていない',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'All your files are encrypted.',
        meaning: 'すべてのファイルは暗号化された。',
      },
    ],
  },
  {
    id: 32,
    lessonId: 4,
    question: 'decrypt',
    choices: [
      'を維持する、整備する',
      'に携わる、を雇う',
      'を見直す、よく調べる',
      'を復号する',
    ],
    answer: 'を復号する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'decryptor',
        meaning: '復号プログラム',
        partOfSpeech: '名詞',
      },
      {
        word: 'decryption',
        meaning: '復号',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'try to decrypt the stored passwords',
        meaning: '保存されていたパスワードの復号を試みる',
      },
    ],
  },
  {
    id: 33,
    lessonId: 4,
    question: 'gain',
    choices: [
      'を入手可能な状態にする',
      'を雇う、使用する',
      'を獲得する',
      'を指示する、へ案内する',
    ],
    answer: 'を獲得する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'gain initial access',
        meaning: '初期アクセスを獲得する',
      },
    ],
  },
  {
    id: 34,
    lessonId: 4,
    question: 'disclose',
    choices: [
      '流出する、を流出させる',
      'を公表する、暴露する',
      'を信用する',
      'と主張する',
    ],
    answer: 'を公表する、暴露する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'disclosure',
        meaning: '公表、暴露',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'disclose cyberattack that impacted customers',
        meaning: '顧客に影響するサイバー攻撃を公表する',
      },
    ],
  },
  {
    id: 35,
    lessonId: 4,
    question: 'base',
    choices: [
      'に携わる、を雇う',
      'を基盤とする、に基づく',
      'を調査する',
      'を組み込む、埋め込む',
    ],
    answer: 'を基盤とする、に基づく',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'based on the behavior',
        meaning: '振る舞いに基づいて',
      },
    ],
  },
  {
    id: 36,
    lessonId: 4,
    question: 'execute',
    choices: ['を投資する', 'を組み込む、埋め込む', 'を確立する', 'を実行する'],
    answer: 'を実行する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'execution',
        meaning: '実行',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'execute arbitrary code',
        meaning: '任意のコードを実行する',
      },
    ],
  },
  {
    id: 37,
    lessonId: 4,
    question: 'manage',
    choices: [
      'をよく考える、検討する、考慮する',
      'を管理する',
      'を示す、証明する',
      'を求める、探す',
    ],
    answer: 'を管理する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'management',
        meaning: '管理',
        partOfSpeech: '名詞',
      },
      {
        word: 'manager',
        meaning: 'マネージャー',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'manage the devices remotely',
        meaning: '遠隔から機器を管理する',
      },
    ],
  },
  {
    id: 38,
    lessonId: 4,
    question: 'address',
    choices: [
      '(問題やバグなど)に対処する',
      'に知らせる',
      'を組み込む、埋め込む',
      'に通知する',
    ],
    answer: '(問題やバグなど)に対処する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'a security update to address a vulnerability',
        meaning: '脆弱性対処のためのセキュリティアップデート',
      },
    ],
  },
  {
    id: 39,
    lessonId: 4,
    question: 'ensure',
    choices: [
      'に注意を払う、と述べる',
      'を確実にする、保証する',
      'を巻き込む、関係させる',
      'を見直す、よく調べる',
    ],
    answer: 'を確実にする、保証する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'ensure all the networks are secure',
        meaning: 'すべてのネットワークがセキュアであることを保証する',
      },
    ],
  },
  {
    id: 40,
    lessonId: 4,
    question: 'phish',
    choices: [
      'と接触する、連絡する',
      'を運用する、操作する',
      'を可能とする、許可する',
      'フィッシングを行う',
    ],
    answer: 'フィッシングを行う',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'phishing',
        meaning: 'フィッシング',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: "phish the employee's credentials",
        meaning: 'フィッシングで従業員の認証情報を盗む',
      },
    ],
  },
  {
    id: 41,
    lessonId: 5,
    question: 'note',
    choices: [
      '進歩する',
      'に注意を払う、と述べる',
      'を見直す、よく調べる',
      'を予期する、と推定する',
    ],
    answer: 'に注意を払う、と述べる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'notable',
        meaning: '注目に値する、顕著な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'it is worth noting that ...',
        meaning: '～に注目する価値がある',
      },
    ],
  },
  {
    id: 42,
    lessonId: 5,
    question: 'track',
    choices: [
      'を運用する、操作する',
      'を破壊する、クラッシュする',
      'を追跡する',
      'を検証する',
    ],
    answer: 'を追跡する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'tracking',
        meaning: '追跡、トラッキング',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'track the threat actor',
        meaning: '脅威アクターを追跡する',
      },
    ],
  },
  {
    id: 43,
    lessonId: 5,
    question: 'deliver',
    choices: [
      'になりすます',
      'に関係する',
      'を押し出す、配信する',
      'を配送する',
    ],
    answer: 'を配送する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'delivery',
        meaning: '配送',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'deliver malicious emails',
        meaning: '悪意のあるメールを配信する',
      },
    ],
  },
  {
    id: 44,
    lessonId: 5,
    question: 'attempt',
    choices: [
      '～に～するように強く要請する',
      'を決心する、判断する',
      'を試みる',
      '失敗する',
    ],
    answer: 'を試みる',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'attempt to disable real-time detection',
        meaning: 'リアルタイム検知の無効化を試みる',
      },
    ],
  },
  {
    id: 45,
    lessonId: 5,
    question: 'operate',
    choices: [
      'を軽減する、緩和する',
      'を運用する、操作する',
      '〜を〜に取り替える',
      'を示す、証明する',
    ],
    answer: 'を運用する、操作する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'operation',
        meaning: '運用、作戦',
        partOfSpeech: '名詞',
      },
      {
        word: 'operator',
        meaning: '操作員、オペレーター',
        partOfSpeech: '名詞',
      },
      {
        word: 'operational',
        meaning: '運用の、作戦の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'users who operate with administrative privileges',
        meaning: '管理者権限で操作するユーザー',
      },
    ],
  },
  {
    id: 46,
    lessonId: 5,
    question: 'involve',
    choices: [
      'を巻き込む、関係させる',
      'を探す、検索する',
      'を発行する、出版する',
      'を明らかにする',
    ],
    answer: 'を巻き込む、関係させる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'involvement',
        meaning: '関与',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'they were involved in the money laundering',
        meaning: '彼らはマネーロンダリングに関与していた',
      },
    ],
  },
  {
    id: 47,
    lessonId: 5,
    question: 'relate',
    choices: ['を実行する', 'に関連する', 'を狙う、目指す', 'に知らせる'],
    answer: 'に関連する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'related',
        meaning: '関連した',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'kill all processes related to the malware',
        meaning: 'マルウェアに関連するすべてのプロセスを終了する',
      },
    ],
  },
  {
    id: 48,
    lessonId: 5,
    question: 'investigate',
    choices: [
      'を調査する',
      'を回復する',
      'を引き起こす、のふりをする',
      'を含む',
    ],
    answer: 'を調査する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'investigation',
        meaning: '調査',
        partOfSpeech: '名詞',
      },
      {
        word: 'investigator',
        meaning: '調査員',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'investigate potential threats',
        meaning: '潜在的な脅威について調査する',
      },
    ],
  },
  {
    id: 49,
    lessonId: 5,
    question: 'secure',
    choices: [
      'を明らかにする',
      'を告発する、請求する',
      'に関連する',
      'を安全にする',
    ],
    answer: 'を安全にする',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'insecure',
        meaning: '安全でない',
        partOfSpeech: '形容詞',
      },
      {
        word: 'unsecured',
        meaning: 'セキュリティ対策のない',
        partOfSpeech: '形容詞',
      },
      {
        word: 'securely',
        meaning: '安全に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'how to secure your devices',
        meaning: 'あなたのデバイスを安全にする方法',
      },
    ],
  },
  {
    id: 50,
    lessonId: 5,
    question: 'recommend',
    choices: [
      'を入手可能な状態にする',
      'を推奨する',
      'を中断させる、混乱させる',
      'を迂回する',
    ],
    answer: 'を推奨する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'recommendation',
        meaning: '勧告、推薦',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'we recommend the following measures',
        meaning: '次に示す処置を行うことを推奨します',
      },
    ],
  },
  {
    id: 51,
    lessonId: 6,
    question: 'contact',
    choices: [
      'に属する',
      'を扱う、処理する',
      'に警告する',
      'と接触する、連絡する',
    ],
    answer: 'と接触する、連絡する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'Do not try to contact the crooks.',
        meaning: '犯罪者と接触しようとしないでください。',
      },
    ],
  },
  {
    id: 52,
    lessonId: 6,
    question: 'disable',
    choices: [
      'を破壊する、クラッシュする',
      'を無効化する',
      'を組み込む、埋め込む',
      'を検知する',
    ],
    answer: 'を無効化する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'disabled',
        meaning: '無効化された、故障した',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'disable unnecessary functions',
        meaning: '不必要な機能を無効化する',
      },
    ],
  },
  {
    id: 53,
    lessonId: 6,
    question: 'delete',
    choices: [
      'を自動化する',
      'を調整する、まとめ上げる',
      'を削除する',
      '(罪など)犯す、を約束する',
    ],
    answer: 'を削除する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'deletion',
        meaning: '削除',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'accidentally deleted an important file',
        meaning: '間違えて大事なファイルを削除してしまった',
      },
    ],
  },
  {
    id: 54,
    lessonId: 6,
    question: 'exist',
    choices: [
      'を獲得する',
      '存在する、すでにある',
      'を押収する、を掴む',
      'を発行する、出版する',
    ],
    answer: '存在する、すでにある',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'existence',
        meaning: '存在、実在',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the bug exists in a third-party library',
        meaning: 'そのバグはサードパーティライブラリーに存在する',
      },
    ],
  },
  {
    id: 55,
    lessonId: 6,
    question: 'expect',
    choices: [
      'を破壊する、クラッシュする',
      'するように促す',
      'を推奨する',
      'を予期する、と推定する',
    ],
    answer: 'を予期する、と推定する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'unexpected',
        meaning: '予期しない、突然の',
        partOfSpeech: '形容詞',
      },
      {
        word: 'unexpectedly',
        meaning: '思いがけなく、突然に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'they expect more victims to appear',
        meaning: 'より多くの被害者が現れると予想されている',
      },
    ],
  },
  {
    id: 56,
    lessonId: 6,
    question: 'link',
    choices: [
      'を入手可能な状態にする',
      'を維持する、整備する',
      'と関連づける',
      'に集中する、焦点を当てる',
    ],
    answer: 'と関連づける',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'IP addresses linked to the campaign',
        meaning: 'そのキャンペーンに関連したIPアドレス',
      },
    ],
  },
  {
    id: 57,
    lessonId: 6,
    question: 'fail',
    choices: [
      '(データなど)を密かに流出させる',
      '失敗する',
      'を利用する',
      '存在する、すでにある',
    ],
    answer: '失敗する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'failure',
        meaning: '失敗、故障',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'it failed to patch the vulnerabilities',
        meaning: '脆弱性の修正に失敗する',
      },
    ],
  },
  {
    id: 58,
    lessonId: 6,
    question: 'conduct',
    choices: [
      'を行う',
      'に集中する、焦点を当てる',
      'を基盤とする、に基づく',
      'を隠す',
    ],
    answer: 'を行う',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'conduct attacks on corporate networks',
        meaning: '企業ネットワークへの攻撃を行う',
      },
    ],
  },
  {
    id: 59,
    lessonId: 6,
    question: 'distribute',
    choices: [
      'を運用する、操作する',
      'を配布する',
      'と思われる',
      'を付け加える',
    ],
    answer: 'を配布する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'distribution',
        meaning: '配送、分布',
        partOfSpeech: '名詞',
      },
      {
        word: 'distributor',
        meaning: 'ディストリビューター',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'distribute malware through websites',
        meaning: 'Webサイトを通じてマルウェアを配布する',
      },
    ],
  },
  {
    id: 60,
    lessonId: 6,
    question: 'observe',
    choices: [
      'を自動化する',
      'を含む',
      'を観測する、観察する',
      'に注意を払う、と述べる',
    ],
    answer: 'を観測する、観察する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'observation',
        meaning: '観測、観察',
        partOfSpeech: '名詞',
      },
      {
        word: 'observed',
        meaning: '観測された',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'observe a new distribution campaign for malware',
        meaning: '新しいマルウェアばらまきキャンペーンを観測する',
      },
    ],
  },
  {
    id: 61,
    lessonId: 7,
    question: 'urge',
    choices: [
      '～に～するように強く要請する',
      'と主張する',
      '起こる',
      'を強いる',
    ],
    answer: '～に～するように強く要請する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'urgent',
        meaning: '緊急の',
        partOfSpeech: '形容詞',
      },
      {
        word: 'urgency',
        meaning: '緊急',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'urge orgs to patch actively exploited vulnerabilities',
        meaning: 'よく悪用される脆弱性の修正を強く要請する',
      },
    ],
  },
  {
    id: 62,
    lessonId: 7,
    question: 'impersonate',
    choices: [
      '(脆弱性やバグ)を修正する',
      'になりすます',
      'を予期する、と推定する',
      'を確立する',
    ],
    answer: 'になりすます',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'impersonation',
        meaning: 'なりすまし',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the most impersonated brand in phishing attack',
        meaning: 'フィッシング攻撃で最も騙られたブランド',
      },
    ],
  },
  {
    id: 63,
    lessonId: 7,
    question: 'advise',
    choices: [
      'を扱う、処理する',
      'に注意を払う、と述べる',
      'を暗号化する',
      'を忠告する、勧める',
    ],
    answer: 'を忠告する、勧める',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'advisor',
        meaning: 'アドバイザー',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'We strongly advise deploying the latest patches.',
        meaning: '最新のパッチの適用を強くお勧めします。',
      },
    ],
  },
  {
    id: 64,
    lessonId: 7,
    question: 'occur',
    choices: ['を変更する', 'を復旧する、元に戻す', '起こる', 'を明らかにする'],
    answer: '起こる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'occurrence',
        meaning: '発生、出来事',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'one issue that occurred due to these fixes',
        meaning: 'これらの修正に起因して発生した問題',
      },
    ],
  },
  {
    id: 65,
    lessonId: 7,
    question: 'display',
    choices: [
      'を有効化する、可能にする',
      'を表示する、展示する',
      '失敗する',
      'を予期する、と推定する',
    ],
    answer: 'を表示する、展示する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'display fake phishing login forms',
        meaning: '偽のフィッシングログインフォームを表示する',
      },
    ],
  },
  {
    id: 66,
    lessonId: 7,
    question: 'focus',
    choices: [
      'を防御する',
      'を狙う、目指す',
      'に集中する、焦点を当てる',
      'を推奨する',
    ],
    answer: 'に集中する、焦点を当てる',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: "the attack doesn't focus on specific organizations",
        meaning: 'その攻撃は特定の組織を狙っているわけではない',
      },
    ],
  },
  {
    id: 67,
    lessonId: 7,
    question: 'determine',
    choices: [
      'を入手可能な状態にする',
      'を決心する、判断する',
      '(問題やバグなど)に対処する',
      'と主張する',
    ],
    answer: 'を決心する、判断する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'determination',
        meaning: '決定',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'determine if the email is legitimate',
        meaning: '正規のメールかどうか判断する',
      },
    ],
  },
  {
    id: 68,
    lessonId: 7,
    question: 'post',
    choices: ['を暴露する', 'を投稿する', 'を隠す', 'を暗号化する'],
    answer: 'を投稿する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'avoid posting  your full name, address or phone number',
        meaning: '本名・住所・電話番号の投稿を避ける',
      },
    ],
  },
  {
    id: 69,
    lessonId: 7,
    question: 'consider',
    choices: [
      'を検証する',
      'を押収する、を掴む',
      'を遮断する',
      'をよく考える、検討する、考慮する',
    ],
    answer: 'をよく考える、検討する、考慮する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'consideration',
        meaning: '考慮、検討',
        partOfSpeech: '名詞',
      },
      {
        word: 'considerable',
        meaning: 'かなりの',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'consider using stronger authentication',
        meaning: 'より強力な認証方式を検討する',
      },
    ],
  },
  {
    id: 70,
    lessonId: 7,
    question: 'resolve',
    choices: [
      'を添付する、取り付け',
      'を解決する、名前解決する',
      'を支払う、(注意など)を払う',
      'を中断させる、混乱させる',
    ],
    answer: 'を解決する、名前解決する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'resolver',
        meaning: '(DNSの)リゾルバ―',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'resolve the issue affecting Internet connectivity',
        meaning: 'インターネット接続に影響する問題を解決する',
      },
    ],
  },
  {
    id: 71,
    lessonId: 8,
    question: 'force',
    choices: [
      'を発行する、出版する',
      'を盗む',
      'を観測する、観察する',
      'を強いる',
    ],
    answer: 'を強いる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'brute-force',
        meaning: '総当たりの、強引な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'force to pay the ransom',
        meaning: '身代金の支払いを強要する',
      },
    ],
  },
  {
    id: 72,
    lessonId: 8,
    question: 'obtain',
    choices: [
      'を立ち上げる、を開始する',
      'を得る',
      '(脆弱性)を突いて攻撃する',
      'を付け加える',
    ],
    answer: 'を得る',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'obtain access to the victim network',
        meaning: '被害者のネットワークへのアクセスを得る',
      },
    ],
  },
  {
    id: 73,
    lessonId: 8,
    question: 'monitor',
    choices: [
      '起こる',
      '～に～するように強く要請する',
      'を示す、指摘する',
      'を監視する',
    ],
    answer: 'を監視する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'monitoring',
        meaning: '監視、モニタリング',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'You should monitor your financial account.',
        meaning: '口座の様子を監視すべきです。',
      },
    ],
  },
  {
    id: 74,
    lessonId: 8,
    question: 'alert',
    choices: ['を予期する、と推定する', 'に警告する', 'を妨げる', 'を配送する'],
    answer: 'に警告する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'alert them via email on new incidents',
        meaning: '新しいインシデントについてメールで警告する',
      },
    ],
  },
  {
    id: 75,
    lessonId: 8,
    question: 'analyze',
    choices: [
      'を予期する、と推定する',
      'に注意を払う、と述べる',
      'を分析する',
      'を提案する、示唆する',
    ],
    answer: 'を分析する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'analysis',
        meaning: '分析、解析',
        partOfSpeech: '名詞',
      },
      {
        word: 'analytics',
        meaning: '分析',
        partOfSpeech: '名詞',
      },
      {
        word: 'analyst',
        meaning: 'アナリスト',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'collecting and analyzing the information',
        meaning: '情報の収集と分析',
      },
    ],
  },
  {
    id: 76,
    lessonId: 8,
    question: 'associate',
    choices: ['と関連付ける', 'を設定する', 'を促進する', 'と主張する'],
    answer: 'と関連付ける',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'association',
        meaning: '協会、提携',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the IOCs associated with the ransomware activity',
        meaning: 'そのランサムウェアの活動に関連するIOC',
      },
    ],
  },
  {
    id: 77,
    lessonId: 8,
    question: 'abuse',
    choices: ['を悪用する', 'を強調する', 'を盗む', 'を確立する'],
    answer: 'を悪用する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'abused',
        meaning: '悪用された',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'abuse a known vulnerability',
        meaning: '既知の脆弱性を悪用する',
      },
    ],
  },
  {
    id: 78,
    lessonId: 8,
    question: 'implement',
    choices: [
      'を認める、入れる',
      'をだます',
      'を実装する、実行する',
      '進歩する',
    ],
    answer: 'を実装する、実行する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'implementation',
        meaning: '実装、実行',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'once the above measures are implemented',
        meaning: '上に示した対策が一度適用されたら',
      },
    ],
  },
  {
    id: 79,
    lessonId: 8,
    question: 'infect',
    choices: ['に感染させる', 'を押収する、を掴む', 'を信用する', 'に登録する'],
    answer: 'に感染させる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'infection',
        meaning: '感染',
        partOfSpeech: '名詞',
      },
      {
        word: 'infected',
        meaning: '感染している',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the victims unknowingly infect themselves with malware',
        meaning: '被害者は知らないうちに自分でマルウェアに感染させてしまう',
      },
    ],
  },
  {
    id: 80,
    lessonId: 8,
    question: 'mitigate',
    choices: [
      'を調整する、まとめ上げる',
      'を強調する',
      'を軽減する、緩和する',
      'を強いる',
    ],
    answer: 'を軽減する、緩和する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'mitigation',
        meaning: '軽減、緩和',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'to mitigate this issue',
        meaning: 'この問題の影響を緩和するために',
      },
    ],
  },
  {
    id: 81,
    lessonId: 9,
    question: 'bypass',
    choices: ['を自動化する', 'になりすます', 'に関係する', 'を迂回する'],
    answer: 'を迂回する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'bypass MFA using remote access tools',
        meaning: 'リモートアクセスツールを使って多要素認証を迂回する',
      },
    ],
  },
  {
    id: 82,
    lessonId: 9,
    question: 'highlight',
    choices: [
      'を認証する',
      'を強調する',
      '台頭する、現れる、明らかになる',
      'を公表する、暴露する',
    ],
    answer: 'を強調する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'highlight risks related to social engineering',
        meaning: 'ソーシャルエンジニアリングに関連するリスクを強調する',
      },
    ],
  },
  {
    id: 83,
    lessonId: 9,
    question: 'append',
    choices: [
      'を脅迫する、ゆすり取る',
      'を無効化する',
      'を付け加える',
      'を利用する',
    ],
    answer: 'を付け加える',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'append the .hoge extension',
        meaning: '.hoge 拡張子を追加する',
      },
    ],
  },
  {
    id: 84,
    lessonId: 9,
    question: 'notify',
    choices: ['と関連付ける', 'を強いる', 'を完了する', 'に通知する'],
    answer: 'に通知する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'notification',
        meaning: '通知',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'notify law enforcement of the incident',
        meaning: '法執行機関にインシデントを通知する',
      },
    ],
  },
  {
    id: 85,
    lessonId: 9,
    question: 'configure',
    choices: ['を求める、探す', 'を暴露する', 'を設定する', 'と関連付ける'],
    answer: 'を設定する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'misconfigure',
        meaning: '間違って設定する',
        partOfSpeech: '動詞',
      },
      {
        word: 'configuration',
        meaning: '設定',
        partOfSpeech: '名詞',
      },
      {
        word: 'misconfiguration',
        meaning: '設定ミス',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'configure various system parameters',
        meaning: '様々なシステムパラメータを設定する',
      },
    ],
  },
  {
    id: 86,
    lessonId: 9,
    question: 'restore',
    choices: ['を強いる', 'を復旧する、元に戻す', '失敗する', 'を検証する'],
    answer: 'を復旧する、元に戻す',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'restoration',
        meaning: '復旧、回復',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example:
          'restore from a backup created before the malware was installed',
        meaning: 'マルウェア感染前のバックアップから復旧する',
      },
    ],
  },
  {
    id: 87,
    lessonId: 9,
    question: 'argue',
    choices: ['と主張する', 'を利用する', 'を要求する、要請する', 'を特定する'],
    answer: 'と主張する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'argument',
        meaning: '主張、議論、引数',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: '"Hogehoge" the firm argued.',
        meaning: 'その会社は「hogehoge」と主張した。',
      },
    ],
  },
  {
    id: 88,
    lessonId: 9,
    question: 'describe',
    choices: [
      'を達成する、獲得する',
      'を予期する、と推定する',
      'と説明する、記述する',
      'に注意を払う、と述べる',
    ],
    answer: 'と説明する、記述する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'description',
        meaning: '記述、説明(書)',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'this report describes the evasion techniques',
        meaning: 'このレポートは検知回避手法を説明している',
      },
    ],
  },
  {
    id: 89,
    lessonId: 9,
    question: 'generate',
    choices: [
      'を狙う、目指す',
      'に携わる、を雇う',
      'に警告する',
      'を生成する、生じさせる',
    ],
    answer: 'を生成する、生じさせる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'generator',
        meaning: 'ジェネレーター',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'generate the unique identifier',
        meaning: '一意の識別子を生成する',
      },
    ],
  },
  {
    id: 90,
    lessonId: 9,
    question: 'avoid',
    choices: ['を脅迫する、ゆすり取る', 'を避ける', 'と思われる', 'と主張する'],
    answer: 'を避ける',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'avoidance',
        meaning: '回避',
        partOfSpeech: '名詞',
      },
      {
        word: 'avoidable',
        meaning: '避けられる',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'how to avoid getting phished',
        meaning: 'フィッシングの被害を避けるための方法',
      },
    ],
  },
  {
    id: 91,
    lessonId: 10,
    question: 'belong',
    choices: ['を追跡する', 'を強調する', 'に属する', 'を暴露する'],
    answer: 'に属する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'networks belonging to critical infrastructure company',
        meaning: '重要インフラ企業のネットワーク',
      },
    ],
  },
  {
    id: 92,
    lessonId: 10,
    question: 'indicate',
    choices: [
      'と主張する',
      'を示す、指摘する',
      'になりすます',
      'を可能とする、許可する',
    ],
    answer: 'を示す、指摘する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'indicator',
        meaning: '指標、インジケーター',
        partOfSpeech: '名詞',
      },
      {
        word: 'indicative',
        meaning: 'を示している',
        partOfSpeech: '形容詞',
      },
      {
        word: 'indication',
        meaning: '兆候',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'as its name indicates',
        meaning: 'その名前が示すように',
      },
    ],
  },
  {
    id: 93,
    lessonId: 10,
    question: 'respond',
    choices: [
      'を回復する',
      'を有効化する、可能にする',
      'を配送する',
      '対応する、応答する',
    ],
    answer: '対応する、応答する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'response',
        meaning: '返答、反応',
        partOfSpeech: '名詞',
      },
      {
        word: 'respondent',
        meaning: '回答者',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'respond to sophisticated attacks',
        meaning: '洗練された攻撃に対応する',
      },
    ],
  },
  {
    id: 94,
    lessonId: 10,
    question: 'hide',
    choices: [
      'を暴露する',
      'を隠す',
      'を監視する',
      '～に～するように強く要請する',
    ],
    answer: 'を隠す',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'hidden',
        meaning: '隠れた、隠された',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'use Morse code to hide malicious URLs',
        meaning: 'モールス信号を使って悪意のあるURLを隠す',
      },
    ],
  },
  {
    id: 95,
    lessonId: 10,
    question: 'recover',
    choices: [
      'を購入する',
      'を設定する',
      'をよく考える、検討する、考慮する',
      'を回復する',
    ],
    answer: 'を回復する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'recovery',
        meaning: '回復',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'there is no way to recover the funds',
        meaning: '資金を回復する方法はない',
      },
    ],
  },
  {
    id: 96,
    lessonId: 10,
    question: 'suggest',
    choices: [
      'を暴露する',
      'を要求する、要請する',
      'を提案する、示唆する',
      'に関連する',
    ],
    answer: 'を提案する、示唆する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'suggestion',
        meaning: '提案',
        partOfSpeech: '名詞',
      },
      {
        word: 'suggested',
        meaning: '提案された',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'as its name suggests',
        meaning: 'その名前が示唆するように',
      },
    ],
  },
  {
    id: 97,
    lessonId: 10,
    question: 'inform',
    choices: [
      'を投資する',
      'に知らせる',
      'を悪用する',
      'を中断させる、混乱させる',
    ],
    answer: 'に知らせる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'informant',
        meaning: '情報提供者',
        partOfSpeech: '名詞',
      },
      {
        word: 'informed',
        meaning: '知識に基づいた',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'inform the customers of the data breach',
        meaning: '顧客にデータ漏えいについて通知する',
      },
    ],
  },
  {
    id: 98,
    lessonId: 10,
    question: 'commit',
    choices: [
      '(罪など)犯す、を約束する',
      'を軽減する、緩和する',
      '(問題やバグなど)に対処する',
      'に集中する、焦点を当てる',
    ],
    answer: '(罪など)犯す、を約束する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'commitment',
        meaning: '約束、公約',
        partOfSpeech: '名詞',
      },
      {
        word: 'committed',
        meaning: 'に専心している',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'commit fraud and money laundering',
        meaning: '詐欺とマネーロンダリングの罪を犯す',
      },
    ],
  },
  {
    id: 99,
    lessonId: 10,
    question: 'rely',
    choices: [
      'を提供する',
      'に依存する、を信頼する',
      'を観測する、観察する',
      'を認証する',
    ],
    answer: 'に依存する、を信頼する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'reliability',
        meaning: '信頼性',
        partOfSpeech: '名詞',
      },
      {
        word: 'reliable',
        meaning: '信頼性のある',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'rely on cloud services',
        meaning: 'クラウドサービスに依存する',
      },
    ],
  },
  {
    id: 100,
    lessonId: 10,
    question: 'verify',
    choices: [
      'を検証する',
      'を強いる',
      'を添付する、取り付ける',
      '～から～に及ぶ',
    ],
    answer: 'を検証する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'verification',
        meaning: '検証',
        partOfSpeech: '名詞',
      },
      {
        word: 'unverified',
        meaning: '検証されていない',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'verify email addresses',
        meaning: 'メールアドレスを検証する',
      },
    ],
  },
  {
    id: 101,
    lessonId: 11,
    question: 'disrupt',
    choices: [
      'を明らかにする',
      'を提案する、示唆する',
      '起こる',
      'を中断させる、混乱させる',
    ],
    answer: 'を中断させる、混乱させる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'disruption',
        meaning: '中断、破壊',
        partOfSpeech: '名詞',
      },
      {
        word: 'disruptive',
        meaning: '破壊的な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: "disrupt the company's services",
        meaning: '企業のサービスを中断させる',
      },
    ],
  },
  {
    id: 102,
    lessonId: 11,
    question: 'push',
    choices: [
      'を決心する、判断する',
      'を観測する、観察する',
      'を押し出す、配信する',
      '広がる、を広げる',
    ],
    answer: 'を押し出す、配信する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'pushes a notification to the user',
        meaning: 'ユーザーに通知を配信する',
      },
    ],
  },
  {
    id: 103,
    lessonId: 11,
    question: 'charge',
    choices: ['を告発する、請求する', 'を含む', 'と関連づける', 'を完了する'],
    answer: 'を告発する、請求する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'arrest and charge the criminals',
        meaning: '犯罪者を逮捕し、告発する',
      },
    ],
  },
  {
    id: 104,
    lessonId: 11,
    question: 'limit',
    choices: [
      'を侵害する',
      'を運用する、操作する',
      'と主張する',
      'を限定する、制限する',
    ],
    answer: 'を限定する、制限する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'limitation',
        meaning: '限界、制限',
        partOfSpeech: '名詞',
      },
      {
        word: 'limited',
        meaning: '限られた、限定的な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'limit access to the internal assets',
        meaning: '内部資産へのアクセスを制限する',
      },
    ],
  },
  {
    id: 105,
    lessonId: 11,
    question: 'switch',
    choices: [
      'を付け加える',
      'を押収する、を掴む',
      'を切り替える',
      'を軽減する、緩和する',
    ],
    answer: 'を切り替える',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'switch focus on new targets',
        meaning: '新しい標的に狙いを変える',
      },
    ],
  },
  {
    id: 106,
    lessonId: 11,
    question: 'register',
    choices: [
      'を得る',
      'に登録する',
      '存在する、すでにある',
      'を確実にする、保証する',
    ],
    answer: 'に登録する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'registration',
        meaning: '登録',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the domain was registered by someone else',
        meaning: 'そのドメインは他の誰かによって登録された',
      },
    ],
  },
  {
    id: 107,
    lessonId: 11,
    question: 'maintain',
    choices: ['を追跡する', 'を提出する', 'を維持する、整備する', 'に置く'],
    answer: 'を維持する、整備する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'maintenance',
        meaning: '維持、整備',
        partOfSpeech: '名詞',
      },
      {
        word: 'maintainer',
        meaning: 'メンテナ―',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'maintain offline backups of data',
        meaning: 'データのオフラインバックアップを整備する',
      },
    ],
  },
  {
    id: 108,
    lessonId: 11,
    question: 'utilize',
    choices: [
      'を利用する',
      'を添付する、取り付ける',
      '対応する、応答する',
      '～に～するように強く要請する',
    ],
    answer: 'を利用する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'utilization',
        meaning: '利用',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'utilize third-party packages',
        meaning: 'サードパーティのパッケージを利用する',
      },
    ],
  },
  {
    id: 109,
    lessonId: 11,
    question: 'establish',
    choices: [
      '(問題やバグなど)に対処する',
      'を確立する',
      'を行う',
      'を推奨する',
    ],
    answer: 'を確立する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'establishment',
        meaning: '確立、機関',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'establish persistence and perform lateral movement',
        meaning: '永続性を確立し、横展開を行う',
      },
    ],
  },
  {
    id: 110,
    lessonId: 11,
    question: 'wipe',
    choices: [
      'を必要とする、要求する',
      'を提出する',
      'を検証する',
      '(データなど)を削除する',
    ],
    answer: '(データなど)を削除する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'wiper',
        meaning: 'ワイパー(データ削除マルウェア)',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'wipe the hard drive',
        meaning: 'ハードディスクドライブのデータを削除する',
      },
    ],
  },
  {
    id: 111,
    lessonId: 12,
    question: 'modify',
    choices: ['に関係する', 'を変更する', 'を検知する', 'と表明する'],
    answer: 'を変更する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'modification',
        meaning: '変更',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'modify the default configuration',
        meaning: 'デフォルトの設定を変更する',
      },
    ],
  },
  {
    id: 112,
    lessonId: 12,
    question: 'trigger',
    choices: [
      'と関連づける',
      'を監視する',
      'を維持する、整備する',
      'のきっかけとなる',
    ],
    answer: 'のきっかけとなる',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: "an issue triggered by last month's updates",
        meaning: '先月のアップデートで発生した問題',
      },
    ],
  },
  {
    id: 113,
    lessonId: 12,
    question: 'exfiltrate',
    choices: [
      '(データなど)を密かに流出させる',
      'を悪用する',
      '(データなど)を削除する',
      'と説明する、記述する',
    ],
    answer: '(データなど)を密かに流出させる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'exfiltration',
        meaning: '(データの)持ち出し、流出',
        partOfSpeech: '名詞',
      },
      {
        word: 'exfiltrated',
        meaning: '流出した',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'exfiltrate sensitive files',
        meaning: '機微なファイルを流出させる',
      },
    ],
  },
  {
    id: 114,
    lessonId: 12,
    question: 'prompt',
    choices: [
      'するように促す',
      'と思われる',
      'を限定する、制限する',
      'に属する',
    ],
    answer: 'するように促す',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'promptly',
        meaning: '迅速に、即座に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'prompt the user to click on the "Enable Content"',
        meaning: 'ユーザーに「コンテンツの有効化」をクリックするよう促す',
      },
    ],
  },
  {
    id: 115,
    lessonId: 12,
    question: 'embed',
    choices: [
      'を予期する、と推定する',
      'を管理する',
      'を組み込む、埋め込む',
      'を雇う、使用する',
    ],
    answer: 'を組み込む、埋め込む',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the attackers embed login forms into their phishing pages',
        meaning: '攻撃者はフィッシングページにログインフォームを埋め込む',
      },
    ],
  },
  {
    id: 116,
    lessonId: 12,
    question: 'seek',
    choices: [
      'を巻き込む、関係させる',
      'になりすます',
      'を避ける',
      'を求める、探す',
    ],
    answer: 'を求める、探す',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'seeker',
        meaning: '(仕事など)を求める人',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'seek access to the company’s environment',
        meaning: '企業の環境へのアクセス法を探す',
      },
    ],
  },
  {
    id: 117,
    lessonId: 12,
    question: 'expand',
    choices: [
      'と説明する、記述する',
      '広がる、を広げる',
      'を特定する',
      'に影響する',
    ],
    answer: '広がる、を広げる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'expansion',
        meaning: '広がり',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'this attack has expanded to other organizations',
        meaning: 'この攻撃は他の組織にも広がっている',
      },
    ],
  },
  {
    id: 118,
    lessonId: 12,
    question: 'engage',
    choices: [
      'に携わる、を雇う',
      'を立ち上げる、を開始する',
      'を生成する、生じさせる',
      'を推奨する',
    ],
    answer: 'に携わる、を雇う',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'engagement',
        meaning: '契約',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'engage in phishing and other kinds of frauds',
        meaning: 'フィッシングとその他の詐欺に関与する',
      },
    ],
  },
  {
    id: 119,
    lessonId: 12,
    question: 'replace',
    choices: ['を提出する', 'に影響する', 'を試みる', '〜を〜に取り替える'],
    answer: '〜を〜に取り替える',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'replacement',
        meaning: '取り換え、置き換え',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'replace outdated standards with newer variants',
        meaning: '時代遅れの基準を新しいものに取り替える',
      },
    ],
  },
  {
    id: 120,
    lessonId: 12,
    question: 'seem',
    choices: [
      'を告発する、請求する',
      'と思われる',
      'を変更する',
      'を提案する、示唆する',
    ],
    answer: 'と思われる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'seemingly',
        meaning: '見たところは、表面上は',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: "this version doesn't seem to be affected",
        meaning: 'このバージョンは影響を受けないようだ',
      },
    ],
  },
  {
    id: 121,
    lessonId: 13,
    question: 'demand',
    choices: [
      'を見直す、よく調べる',
      'と結論づける',
      'を要求する',
      'を雇う、使用する',
    ],
    answer: 'を要求する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'on-demand',
        meaning: 'オンデマンドの',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'demand a ransom payment',
        meaning: '身代金の支払いを要求する',
      },
    ],
  },
  {
    id: 122,
    lessonId: 13,
    question: 'defend',
    choices: ['を配送する', 'を防御する', 'に知らせる', 'を実行する'],
    answer: 'を防御する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'defense',
        meaning: '防御、防衛',
        partOfSpeech: '名詞',
      },
      {
        word: 'defender',
        meaning: '防御者',
        partOfSpeech: '名詞',
      },
      {
        word: 'defensive',
        meaning: '防御の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'defend e-commerce websites',
        meaning: 'EC サイトを防御する',
      },
    ],
  },
  {
    id: 123,
    lessonId: 13,
    question: 'trick',
    choices: [
      'と評価する、見積もる',
      'をだます',
      'を分析する',
      '台頭する、現れる、明らかになる',
    ],
    answer: 'をだます',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'trick the victim into opening email attachments',
        meaning: '被害者をだましてメールの添付ファイルを開かせる',
      },
    ],
  },
  {
    id: 124,
    lessonId: 13,
    question: 'pose',
    choices: [
      'を引き起こす、のふりをする',
      'を得る',
      'を軽減する、緩和する',
      'を維持する、整備する',
    ],
    answer: 'を引き起こす、のふりをする',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'pose a serious risk to users',
        meaning: 'ユーザーに深刻なリスクをもたらす',
      },
    ],
  },
  {
    id: 125,
    lessonId: 13,
    question: 'promote',
    choices: [
      'と主張する',
      'をよく考える、検討する、考慮する',
      'を雇う、使用する',
      'を促進する',
    ],
    answer: 'を促進する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'promotion',
        meaning: '(販売)促進',
        partOfSpeech: '名詞',
      },
      {
        word: 'promotional',
        meaning: '販促の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'promote the adoption of MFA',
        meaning: '多要素認証の使用を促進する',
      },
    ],
  },
  {
    id: 126,
    lessonId: 13,
    question: 'emerge',
    choices: [
      'を信用する',
      'を決心する、判断する',
      '台頭する、現れる、明らかになる',
      'を行う',
    ],
    answer: '台頭する、現れる、明らかになる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'emergence',
        meaning: '出現',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'emerge in the cybercrime space',
        meaning: 'サイバー犯罪の世界で台頭する',
      },
    ],
  },
  {
    id: 127,
    lessonId: 13,
    question: 'trust',
    choices: ['を完了する', 'を推奨する', '対応する、応答する', 'を信用する'],
    answer: 'を信用する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'untrusted',
        meaning: '信用できない',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'if you trust the source of the file',
        meaning: 'そのファイルの出所を信用するのなら',
      },
    ],
  },
  {
    id: 128,
    lessonId: 13,
    question: 'achieve',
    choices: ['と主張する', 'を達成する、獲得する', 'を追跡する', 'を購入する'],
    answer: 'を達成する、獲得する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'achievement',
        meaning: '功績、達成',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'achieve privilege escalation',
        meaning: '権限昇格を達成する',
      },
    ],
  },
  {
    id: 129,
    lessonId: 13,
    question: 'coordinate',
    choices: [
      'に注意を払う、と述べる',
      '流出する、を流出させる',
      'を提案する、示唆する',
      'を調整する、まとめ上げる',
    ],
    answer: 'を調整する、まとめ上げる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'coordination',
        meaning: '調整、協調',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'a joint operation coordinated by the FBI',
        meaning: 'FBIが調整した共同作戦',
      },
    ],
  },
  {
    id: 130,
    lessonId: 13,
    question: 'aim',
    choices: [
      'を押し出す、配信する',
      'を回復する',
      'を狙う、目指す',
      'を強いる',
    ],
    answer: 'を狙う、目指す',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'aim to prepare security professionals',
        meaning: 'セキュリティ専門家の育成を目指す',
      },
    ],
  },
  {
    id: 131,
    lessonId: 14,
    question: 'submit',
    choices: [
      'を提供する',
      'を提出する',
      'を組み込む、埋め込む',
      'と接触する、連絡する',
    ],
    answer: 'を提出する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'submission',
        meaning: '提出',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'a sample submitted to the VT',
        meaning: 'VTに提出された検体',
      },
    ],
  },
  {
    id: 132,
    lessonId: 14,
    question: 'admit',
    choices: [
      'と結論づける',
      'と主張する',
      'を探す、検索する',
      'を認める、入れる',
    ],
    answer: 'を認める、入れる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'admission',
        meaning: '入会、入学、入院',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'admit to being a victim of a ransomware attack',
        meaning: 'ランサムウェア攻撃を受けたことを認める',
      },
    ],
  },
  {
    id: 133,
    lessonId: 14,
    question: 'concern',
    choices: ['に関係する', 'を避ける', 'を購入する', 'を促進する'],
    answer: 'に関係する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'concerned',
        meaning: '関係している',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'this incident concerned criminal activity',
        meaning: 'このインシデントには犯罪発動が関係している',
      },
    ],
  },
  {
    id: 134,
    lessonId: 14,
    question: 'inject',
    choices: [
      'をだます',
      'を示す、指摘する',
      'を注入する、仕掛ける',
      'に感染させる',
    ],
    answer: 'を注入する、仕掛ける',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'injection',
        meaning: '注入、インジェクション',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'inject the card skimmer into the webpage',
        meaning: 'Webページにカードスキマーを仕掛ける',
      },
    ],
  },
  {
    id: 135,
    lessonId: 14,
    question: 'allege',
    choices: ['と主張する', 'を強調する', 'に知らせる', 'を配置する、展開する'],
    answer: 'と主張する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'allegation',
        meaning: '主張、申し立て',
        partOfSpeech: '名詞',
      },
      {
        word: 'alleged',
        meaning: 'といわれている',
        partOfSpeech: '形容詞',
      },
      {
        word: 'allegedly',
        meaning: '伝えられるところでは',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'as alleged in the indictment',
        meaning: '起訴状の主張によれば',
      },
    ],
  },
  {
    id: 136,
    lessonId: 14,
    question: 'automate',
    choices: [
      'を明らかにする',
      'を自動化する',
      '〜を〜に取り替える',
      'を投資する',
    ],
    answer: 'を自動化する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'automation',
        meaning: '自動化',
        partOfSpeech: '名詞',
      },
      {
        word: 'automated',
        meaning: '自動化された',
        partOfSpeech: '形容詞',
      },
      {
        word: 'automatic',
        meaning: '自動の、自動的な',
        partOfSpeech: '形容詞',
      },
      {
        word: 'automatically',
        meaning: '自動的に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'automate crawling of the websites',
        meaning: 'Webサイトのクローリングを自動化する',
      },
    ],
  },
  {
    id: 137,
    lessonId: 14,
    question: 'purchase',
    choices: ['を購入する', 'を投資する', 'と表明する', 'を扱う、処理する'],
    answer: 'を購入する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'purchaser',
        meaning: '購入者',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'purchase products from fake websites',
        meaning: '偽サイトで商品を購入してしまう',
      },
    ],
  },
  {
    id: 138,
    lessonId: 14,
    question: 'conclude',
    choices: [
      'を信用する',
      'を獲得する',
      'を観測する、観察する',
      'と結論づける',
    ],
    answer: 'と結論づける',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'conclusion',
        meaning: '結論',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'as the report concluded',
        meaning: '報告書はこう結論づけている',
      },
    ],
  },
  {
    id: 139,
    lessonId: 14,
    question: 'demonstrate',
    choices: [
      'を悪用する',
      'を雇う、使用する',
      'を示す、証明する',
      'を遮断する',
    ],
    answer: 'を示す、証明する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'demonstration',
        meaning: '実演',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the video demonstrated the exploitability of the bug',
        meaning: 'その動画がバグの悪用可能性を証明した',
      },
    ],
  },
  {
    id: 140,
    lessonId: 14,
    question: 'locate',
    choices: [
      'を利用する',
      'に置く',
      'を認可する、権限を与える',
      'を示す、指摘する',
    ],
    answer: 'に置く',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'location',
        meaning: '場所、所在地',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the servers are located in various countries',
        meaning: 'そのサーバーはいくつもの国に設置されていた',
      },
    ],
  },
  {
    id: 141,
    lessonId: 15,
    question: 'request',
    choices: [
      'に携わる、を雇う',
      'を標的とする',
      'を要求する、要請する',
      '台頭する、現れる、明らかになる',
    ],
    answer: 'を要求する、要請する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'this app requests too many permissions',
        meaning: 'このアプリが要求する許可は多すぎる',
      },
    ],
  },
  {
    id: 142,
    lessonId: 15,
    question: 'seize',
    choices: [
      'を押収する、を掴む',
      '〜を〜に取り替える',
      'に影響する',
      'を決心する、判断する',
    ],
    answer: 'を押収する、を掴む',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'seizure',
        meaning: '押収',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'seized 10 servers used by the threat actor',
        meaning: '脅威アクターが使用していた 10 のサーバーを押収した',
      },
    ],
  },
  {
    id: 143,
    lessonId: 15,
    question: 'handle',
    choices: ['に通知する', 'を扱う、処理する', 'と表明する', 'に関係する'],
    answer: 'を扱う、処理する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'handling',
        meaning: '扱い、操作',
        partOfSpeech: '名詞',
      },
      {
        word: 'handler',
        meaning: 'ハンドラー',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'handle personal data safely',
        meaning: '個人情報を安全に扱う',
      },
    ],
  },
  {
    id: 144,
    lessonId: 15,
    question: 'complete',
    choices: [
      'を配置する、展開する',
      'を巻き込む、関係させる',
      'を完了する',
      'を切り替える',
    ],
    answer: 'を完了する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'incomplete',
        meaning: '不完全な',
        partOfSpeech: '形容詞',
      },
      {
        word: 'completely',
        meaning: '完全に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'complete the sign-up process',
        meaning: '登録の手続きを完了する',
      },
    ],
  },
  {
    id: 145,
    lessonId: 15,
    question: 'review',
    choices: [
      'を認証する',
      'と接触する、連絡する',
      'に携わる、を雇う',
      'を見直す、よく調べる',
    ],
    answer: 'を見直す、よく調べる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'reviewer',
        meaning: 'レビュアー',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'review the incident response procedure',
        meaning: 'インシデント対応手順を見直す',
      },
    ],
  },
  {
    id: 146,
    lessonId: 15,
    question: 'employ',
    choices: [
      'を強いる',
      'を指示する、へ案内する',
      'を雇う、使用する',
      'を特定する',
    ],
    answer: 'を雇う、使用する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'employee',
        meaning: '従業員',
        partOfSpeech: '名詞',
      },
      {
        word: 'employer',
        meaning: '雇用者、雇い主',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the samples employed anti-analysis techniques',
        meaning: '耐解析技術が使用された検体',
      },
    ],
  },
  {
    id: 147,
    lessonId: 15,
    question: 'authenticate',
    choices: [
      'を信用する',
      'と主張する',
      'を認可する、権限を与える',
      'を認証する',
    ],
    answer: 'を認証する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'authentication',
        meaning: '認証',
        partOfSpeech: '名詞',
      },
      {
        word: 'unauthenticated',
        meaning: '認証されていない',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'identify, authenticate and authorize',
        meaning: '識別・認証・認可を行う',
      },
    ],
  },
  {
    id: 148,
    lessonId: 15,
    question: 'search',
    choices: [
      '起こる',
      'を探す、検索する',
      'を遮断する',
      'を引き起こす、のふりをする',
    ],
    answer: 'を探す、検索する',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'search for available packages',
        meaning: '利用可能なパッケージを検索する',
      },
    ],
  },
  {
    id: 149,
    lessonId: 15,
    question: 'invest',
    choices: ['を提出する', 'を獲得する', 'を投資する', 'を狙う、目指す'],
    answer: 'を投資する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'investment',
        meaning: '投資',
        partOfSpeech: '名詞',
      },
      {
        word: 'investor',
        meaning: '投資家',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'invest millions of dollars in promoting its products',
        meaning: '製品の販促のため数百万ドル投資する',
      },
    ],
  },
  {
    id: 150,
    lessonId: 15,
    question: 'crash',
    choices: [
      'に感染させる',
      'を提供する',
      '～から～に及ぶ',
      'を破壊する、クラッシュする',
    ],
    answer: 'を破壊する、クラッシュする',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'crash the device firmware',
        meaning: 'デバイスのファームウェアを破壊する',
      },
    ],
  },
  {
    id: 151,
    lessonId: 16,
    question: 'range',
    choices: [
      '(問題やバグなど)に対処する',
      '～から～に及ぶ',
      'に通知する',
      'を隠す',
    ],
    answer: '～から～に及ぶ',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'ransoms range from $100k to millions',
        meaning: '身代金の要求額は10万ドルから数百万ドルに及ぶ',
      },
    ],
  },
  {
    id: 152,
    lessonId: 16,
    question: 'extend',
    choices: [
      'を入手可能な状態にする',
      'を拡張する、広げる',
      'を添付する、取り付ける',
      'を悪用する',
    ],
    answer: 'を拡張する、広げる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'extent',
        meaning: '程度、範囲',
        partOfSpeech: '名詞',
      },
      {
        word: 'extension',
        meaning: '拡張子、拡張機能',
        partOfSpeech: '名詞',
      },
      {
        word: 'extensive',
        meaning: '広い、広範な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'extend macro protection',
        meaning: 'マクロ防御機能を拡張する',
      },
    ],
  },
  {
    id: 153,
    lessonId: 16,
    question: 'extort',
    choices: ['を悪用する', 'になりすます', 'を脅迫する、ゆすり取る', 'を盗む'],
    answer: 'を脅迫する、ゆすり取る',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'extortion',
        meaning: '脅迫、ゆすり',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'extort their victims multiple times',
        meaning: '被害者を何度もゆする',
      },
    ],
  },
  {
    id: 154,
    lessonId: 16,
    question: 'enforce',
    choices: [
      '～に～するように強く要請する',
      'を強要する、実施する',
      'と主張する',
      '起こる',
    ],
    answer: 'を強要する、実施する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'enforcement',
        meaning: '執行',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'enable and enforce MFA',
        meaning: '多要素認証を有効化・強制する',
      },
    ],
  },
  {
    id: 155,
    lessonId: 16,
    question: 'rate',
    choices: [
      'と評価する、見積もる',
      'を付け加える',
      'を獲得する',
      'を公表する、暴露する',
    ],
    answer: 'と評価する、見積もる',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'rating',
        meaning: '評価、格付け',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'rated as "high" severity',
        meaning: '深刻度「高」と評価されている',
      },
    ],
  },
  {
    id: 156,
    lessonId: 16,
    question: 'advance',
    choices: [
      'を告発する、請求する',
      '進歩する',
      'を強要する、実施する',
      'を強調する',
    ],
    answer: '進歩する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'advancement',
        meaning: '進歩、発展',
        partOfSpeech: '名詞',
      },
      {
        word: 'advanced',
        meaning: '進歩的な、発展的な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'Advanced and Persistent Threat (APT)',
        meaning: '高度で持続的な脅威',
      },
    ],
  },
  {
    id: 157,
    lessonId: 16,
    question: 'direct',
    choices: [
      'を引き起こす、のふりをする',
      'を迂回する',
      'を扱う、処理する',
      'を指示する、へ案内する',
    ],
    answer: 'を指示する、へ案内する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'direction',
        meaning: '指示、方向',
        partOfSpeech: '名詞',
      },
      {
        word: 'directive',
        meaning: '指令',
        partOfSpeech: '名詞',
      },
      {
        word: 'directly',
        meaning: '直接に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'users may be directed to fake support desks',
        meaning: 'ユーザーが偽のサポートデスクに案内されるおそれがある',
      },
    ],
  },
  {
    id: 158,
    lessonId: 16,
    question: 'attach',
    choices: [
      'を添付する、取り付ける',
      'を検証する',
      'を配布する',
      'を雇う、使用する',
    ],
    answer: 'を添付する、取り付ける',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'attachment',
        meaning: '添付(ファイル)、アタッチメント',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'an attached ZIP file contains DOC file',
        meaning: '添付されたZIPファイルにはDOCファイルが入っている',
      },
    ],
  },
  {
    id: 159,
    lessonId: 16,
    question: 'authorize',
    choices: [
      'を確認する',
      'を認める、入れる',
      'を認可する、権限を与える',
      'を認証する',
    ],
    answer: 'を認可する、権限を与える',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'authorization',
        meaning: '認可、許可',
        partOfSpeech: '名詞',
      },
      {
        word: 'unauthorized',
        meaning: '認可されていない、不正な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'make sure only authorized users can access',
        meaning: '許可されたユーザーだけがアクセスできるようにする',
      },
    ],
  },
  {
    id: 160,
    lessonId: 17,
    question: 'vulnerability',
    choices: ['脅威', '機能、関数', '機関、団体', '脆弱性'],
    answer: '脆弱性',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'vulnerable',
        meaning: '脆弱な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'zero-day vulnerability',
        meaning: 'ゼロデイ脆弱性',
      },
    ],
  },
  {
    id: 161,
    lessonId: 17,
    question: 'threat',
    choices: ['管理者', '報奨金', '脅威', '量、ボリューム'],
    answer: '脅威',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'threaten',
        meaning: 'を脅す',
        partOfSpeech: '動詞',
      },
      {
        word: 'threatening',
        meaning: '脅迫する',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'threat intelligence',
        meaning: '脅威インテリジェンス',
      },
    ],
  },
  {
    id: 162,
    lessonId: 17,
    question: 'actor',
    choices: ['過程、工程', '詐欺師', '当局、権威', '攻撃者グループ、アクター'],
    answer: '攻撃者グループ、アクター',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'threat actor',
        meaning: '脅威アクター',
      },
    ],
  },
  {
    id: 163,
    lessonId: 17,
    question: 'issue',
    choices: [
      '設定、環境',
      '問題(点)',
      'コード、符号',
      '(マルウェアなどの)亜種、変異種',
    ],
    answer: '問題(点)',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'report issues',
        meaning: '問題点を報告する',
      },
    ],
  },
  {
    id: 164,
    lessonId: 17,
    question: 'customer',
    choices: [
      '挙動、振る舞い',
      '報道',
      '顧客、取引先',
      '進路、(ファイルの)パス',
    ],
    answer: '顧客、取引先',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'both customers and providers',
        meaning: '顧客とプロバイダーの両方',
      },
    ],
  },
  {
    id: 165,
    lessonId: 17,
    question: 'victim',
    choices: ['企業', '量、総計', '(システムなどの)停止', '被害者'],
    answer: '被害者',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: "victim's email address",
        meaning: '被害者のメールアドレス',
      },
    ],
  },
  {
    id: 166,
    lessonId: 17,
    question: 'account',
    choices: ['型、タイプ', '機能、関数', 'アカウント、口座', '対策、基準'],
    answer: 'アカウント、口座',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'stolen account credentials',
        meaning: '盗まれたアカウントの認証情報',
      },
    ],
  },
  {
    id: 167,
    lessonId: 17,
    question: 'organization',
    choices: ['役割', '組織', '詐欺', 'パッチ、修正プログラム'],
    answer: '組織',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'organize',
        meaning: 'を組織化する、体系化する',
        partOfSpeech: '動詞',
      },
      {
        word: 'organizational',
        meaning: '組織の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'targeted organizations',
        meaning: '標的にされた組織',
      },
    ],
  },
  {
    id: 168,
    lessonId: 17,
    question: 'code',
    choices: ['詐欺師', '仕事、タスク', 'コード、符号', '苦情、告訴'],
    answer: 'コード、符号',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: '2FA code',
        meaning: '二要素認証の符号',
      },
    ],
  },
  {
    id: 169,
    lessonId: 17,
    question: 'breach',
    choices: [
      '(データの)流出、侵害',
      '(アンケートなどによる)調査',
      '仕組み、悪だくみ、スキーム',
      '戦略',
    ],
    answer: '(データの)流出、侵害',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'data breach',
        meaning: '情報流出',
      },
    ],
  },
  {
    id: 170,
    lessonId: 18,
    question: 'feature',
    choices: ['四半期', '価格', '特徴、目玉', '(利用などの)規約、期間、用語'],
    answer: '特徴、目玉',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'anti-analysis features',
        meaning: '耐解析機能の特徴',
      },
    ],
  },
  {
    id: 171,
    lessonId: 18,
    question: 'campaign',
    choices: ['量、総計', '報奨金', '対策、基準', '一連の作戦、キャンペーン'],
    answer: '一連の作戦、キャンペーン',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'large-scale phishing campaign',
        meaning: '大規模なフィッシングキャンペーン',
      },
    ],
  },
  {
    id: 172,
    lessonId: 18,
    question: 'government',
    choices: ['政府', '制裁', '顧客、取引先', '問題(点)'],
    answer: '政府',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'govern',
        meaning: 'を統治する、運営する',
        partOfSpeech: '動詞',
      },
      {
        word: 'governmental',
        meaning: '政府の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'multiple government agencies',
        meaning: '複数の政府機関',
      },
    ],
  },
  {
    id: 173,
    lessonId: 18,
    question: 'tool',
    choices: ['証明書', '詐欺', '制裁', '道具、ツール'],
    answer: '道具、ツール',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'toolkit',
        meaning: 'ツールキット',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'a freely available tool',
        meaning: '自由に入手できるツール',
      },
    ],
  },
  {
    id: 174,
    lessonId: 18,
    question: 'flaw',
    choices: ['欠陥', '能力', '資金、基金', 'パッチ、修正プログラム'],
    answer: '欠陥',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'fix 10 flaws',
        meaning: '10個の欠陥を修正する',
      },
    ],
  },
  {
    id: 175,
    lessonId: 18,
    question: 'source',
    choices: ['進路、(ファイルの)パス', '出所', '制裁', '省、局'],
    answer: '出所',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'open source intelligence (OSINT)',
        meaning: '公開情報によるインテリジェンス',
      },
    ],
  },
  {
    id: 176,
    lessonId: 18,
    question: 'ransom',
    choices: ['細部、詳細', '(人や組織などの)主体', '身代金', '特徴、目玉'],
    answer: '身代金',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'ransom demands',
        meaning: '身代金の要求',
      },
    ],
  },
  {
    id: 177,
    lessonId: 18,
    question: 'firm',
    choices: ['会社', '能力', '状態', '選択肢、オプション'],
    answer: '会社',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'cybersecurity firm JohnDoe',
        meaning: 'ジョン・ドゥというサイバーセキュリティ企業',
      },
    ],
  },
  {
    id: 178,
    lessonId: 18,
    question: 'process',
    choices: ['(システムなどの)停止', '記事', '過程、工程', '保険'],
    answer: '過程、工程',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'processing',
        meaning: '処理、加工',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the final step in the process',
        meaning: '過程の最後の段階',
      },
    ],
  },
  {
    id: 179,
    lessonId: 18,
    question: 'detail',
    choices: ['脅威', '窃盗', '(権限の)昇格', '細部、詳細'],
    answer: '細部、詳細',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'detailed',
        meaning: '詳細な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'publish the details',
        meaning: '詳細を発表する',
      },
    ],
  },
  {
    id: 180,
    lessonId: 19,
    question: 'law',
    choices: ['効果、影響', '法', '方針、信条、設定(の集まり)', '刑務所'],
    answer: '法',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'law firms',
        meaning: '法律事務所',
      },
    ],
  },
  {
    id: 181,
    lessonId: 19,
    question: 'agency',
    choices: ['挙動、振る舞い', '機関', '管理者', '取り組み方、接近'],
    answer: '機関',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'federal agency',
        meaning: '連邦政府の機関',
      },
    ],
  },
  {
    id: 182,
    lessonId: 19,
    question: 'patch',
    choices: ['問題(点)', '個人', '認証情報', 'パッチ、修正プログラム'],
    answer: 'パッチ、修正プログラム',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'unpatched',
        meaning: 'パッチ未適用の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the patch for RCE vulnerability',
        meaning: 'リモートコード実行脆弱性を修正するパッチ',
      },
    ],
  },
  {
    id: 183,
    lessonId: 19,
    question: 'scam',
    choices: ['詐欺', 'おとり、ルアー', '機関、団体', '管理者'],
    answer: '詐欺',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'scammer',
        meaning: '詐欺師',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the romance scams',
        meaning: 'ロマンス詐欺',
      },
    ],
  },
  {
    id: 184,
    lessonId: 19,
    question: 'fraud',
    choices: ['詐欺', '税金', '付加', '機関、団体'],
    answer: '詐欺',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'fraudulent',
        meaning: '詐欺の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'fraud detection mechanisms',
        meaning: '詐欺検知メカニズム',
      },
    ],
  },
  {
    id: 185,
    lessonId: 19,
    question: 'fraudster',
    choices: ['加盟メンバー', '欠陥', '機会', '詐欺師'],
    answer: '詐欺師',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'freeze accounts used by fraudsters',
        meaning: '詐欺師に悪用されていた口座を凍結する',
      },
    ],
  },
  {
    id: 186,
    lessonId: 19,
    question: 'setting',
    choices: ['組織', '設定、環境', '値、価値', '機会'],
    answer: '設定、環境',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the default settings',
        meaning: 'デフォルトの設定',
      },
    ],
  },
  {
    id: 187,
    lessonId: 19,
    question: 'image',
    choices: ['識別情報', '値、価値', '画像、イメージ', '行政長官、経営者'],
    answer: '画像、イメージ',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'images uploaded to the C2',
        meaning: 'C2 サーバーにアップロードされた画像',
      },
    ],
  },
  {
    id: 188,
    lessonId: 19,
    question: 'policy',
    choices: ['役割', '緊急事態', '経路、方向', '方針、信条、設定(の集まり)'],
    answer: '方針、信条、設定(の集まり)',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'vulnerability disclosure policy',
        meaning: '脆弱性開示方針',
      },
    ],
  },
  {
    id: 189,
    lessonId: 19,
    question: 'variant',
    choices: [
      '(アンケートなどによる)調査',
      '(マルウェアなどの)亜種、変異種',
      '苦情、告訴',
      '手順、手続き',
    ],
    answer: '(マルウェアなどの)亜種、変異種',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'massive amounts of variants',
        meaning: '大量の亜種',
      },
    ],
  },
  {
    id: 190,
    lessonId: 20,
    question: 'industry',
    choices: ['選挙', '報奨金', '産業、業界', '内部の人、会員'],
    answer: '産業、業界',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'industrial',
        meaning: '産業の、工業の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'oil and gas industry',
        meaning: '石油・ガス業界',
      },
    ],
  },
  {
    id: 191,
    lessonId: 20,
    question: 'individual',
    choices: ['挙動、振る舞い', '役割', '脅威', '個人'],
    answer: '個人',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'individuals are being increasingly targeted in BEC',
        meaning: 'ますます多くの個人が BEC の標的になっている',
      },
    ],
  },
  {
    id: 192,
    lessonId: 20,
    question: 'privilege',
    choices: ['特権', '識別情報', '詐欺', '管理者'],
    answer: '特権',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'privileged',
        meaning: '特権のある',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'privilege escalation (elevation)',
        meaning: '権限昇格',
      },
    ],
  },
  {
    id: 193,
    lessonId: 20,
    question: 'type',
    choices: ['パッチ、修正プログラム', '型、タイプ', '四半期', '資金、基金'],
    answer: '型、タイプ',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'these types of vulnerabilities',
        meaning: 'これらのタイプの脆弱性',
      },
    ],
  },
  {
    id: 194,
    lessonId: 20,
    question: 'sector',
    choices: ['当局、権威', '内部の人、会員', '付加', '業界、分野'],
    answer: '業界、分野',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'critical infrastructure sector',
        meaning: '重要インフラ業界',
      },
    ],
  },
  {
    id: 195,
    lessonId: 20,
    question: 'department',
    choices: ['出所', '取り組み方、接近', '省、局', '苦情、告訴'],
    answer: '省、局',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the US Department of Justice',
        meaning: '米国司法省',
      },
    ],
  },
  {
    id: 196,
    lessonId: 20,
    question: 'identity',
    choices: ['注目度、プロフィール', '識別情報', '費用', '犯罪'],
    answer: '識別情報',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'online identity monitoring service',
        meaning: '(流出して)公開されている識別情報を監視するサービス',
      },
    ],
  },
  {
    id: 197,
    lessonId: 20,
    question: 'cryptocurrency',
    choices: [
      '行政長官、経営者',
      '取り組み方、接近',
      '加盟メンバー',
      '暗号通貨',
    ],
    answer: '暗号通貨',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'currency',
        meaning: '通貨',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'cryptocurrency theft',
        meaning: '暗号通貨の窃盗',
      },
    ],
  },
  {
    id: 198,
    lessonId: 20,
    question: 'content',
    choices: ['細部、詳細', '内容、コンテンツ', '報奨金', '状態'],
    answer: '内容、コンテンツ',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'change the clipboard content',
        meaning: 'クリップボードの内容を変更する',
      },
    ],
  },
  {
    id: 199,
    lessonId: 20,
    question: 'enterprise',
    choices: ['企業', '消費者', '管理者', '取り組み方、接近'],
    answer: '企業',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'access to large enterprise network',
        meaning: '大規模な企業ネットワークへのアクセス',
      },
    ],
  },
  {
    id: 200,
    lessonId: 21,
    question: 'connection',
    choices: ['裁判所', '省、局', '保険', '接続、コネクション'],
    answer: '接続、コネクション',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'disconnect',
        meaning: '接続を断つ',
        partOfSpeech: '動詞',
      },
      {
        word: 'connectivity',
        meaning: '接続性',
        partOfSpeech: '名詞',
      },
      {
        word: 'connected',
        meaning: '接続された、連続した',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'connection between networks and third-party systems',
        meaning: 'ネットワークとサードパーティのシステムとの接続',
      },
    ],
  },
  {
    id: 201,
    lessonId: 21,
    question: 'form',
    choices: [
      '(人や組織などの)主体',
      '業界、分野',
      '政府',
      '形態、種類、フォーム',
    ],
    answer: '形態、種類、フォーム',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'all forms of transactions',
        meaning: 'すべての種類のトランザクション',
      },
    ],
  },
  {
    id: 202,
    lessonId: 21,
    question: 'method',
    choices: ['戦略', '過程、工程', '方法、方式', '取り組み方、接近'],
    answer: '方法、方式',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'different encryption methods',
        meaning: '異なる暗号方式',
      },
    ],
  },
  {
    id: 203,
    lessonId: 21,
    question: 'option',
    choices: ['例、インスタンス', '値、価値', '費用', '選択肢、オプション'],
    answer: '選択肢、オプション',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'optional',
        meaning: '任意選択の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the best option',
        meaning: '最善策',
      },
    ],
  },
  {
    id: 204,
    lessonId: 21,
    question: 'intelligence',
    choices: [
      '機関、団体',
      '知能、インテリジェンス',
      '資金、基金',
      '過程、工程',
    ],
    answer: '知能、インテリジェンス',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'artificial intelligence (AI)',
        meaning: '人工知能',
      },
    ],
  },
  {
    id: 205,
    lessonId: 21,
    question: 'outage',
    choices: [
      '(システムなどの)停止',
      '(データの)流出、侵害',
      '回避策、緩和策',
      '戦術',
    ],
    answer: '(システムなどの)停止',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the computer outage caused issues at some clinics',
        meaning: 'コンピュータの停止により、一部のクリニックで問題が発生した',
      },
    ],
  },
  {
    id: 206,
    lessonId: 21,
    question: 'theft',
    choices: ['特権', '窃盗', '対策、基準', '組織'],
    answer: '窃盗',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'identity theft',
        meaning: '識別情報の窃盗',
      },
    ],
  },
  {
    id: 207,
    lessonId: 21,
    question: 'consumer',
    choices: ['管理者', '内部の人、会員', '消費者', '機関、団体'],
    answer: '消費者',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'target consumers and small businesses',
        meaning: '消費者と小規模事業者を標的とする',
      },
    ],
  },
  {
    id: 208,
    lessonId: 21,
    question: 'capability',
    choices: ['方針、信条、設定(の集まり)', '能力', '証明書', '対策、基準'],
    answer: '能力',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'capable',
        meaning: '能力がある',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example:
          'the malware displayed advanced capabilities to evade detection',
        meaning: 'マルウェアは検知回避の高度な能力を示した',
      },
    ],
  },
  {
    id: 209,
    lessonId: 21,
    question: 'tactic',
    choices: ['機能、関数', '暗号通貨', '過程、工程', '戦術'],
    answer: '戦術',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'Tactics, Techniques and Procedures (TTPs)',
        meaning: '戦術・技術・手順',
      },
    ],
  },
  {
    id: 210,
    lessonId: 22,
    question: 'measure',
    choices: ['報奨金', '対策、基準', '能力', '挙動、振る舞い'],
    answer: '対策、基準',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'take measures to counter threats',
        meaning: '脅威に対抗するために対策をとる',
      },
    ],
  },
  {
    id: 211,
    lessonId: 22,
    question: 'technique',
    choices: ['手法', '役割', '細部、詳細', '能力'],
    answer: '手法',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'technical',
        meaning: '技術的な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'obfuscation techniques to evade detection',
        meaning: '検知を回避するための難読化手法',
      },
    ],
  },
  {
    id: 212,
    lessonId: 22,
    question: 'certificate',
    choices: ['機関', '取り組み方、接近', '証明書', '特徴、目玉'],
    answer: '証明書',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'certify',
        meaning: 'を証明する、認定する',
        partOfSpeech: '動詞',
      },
      {
        word: 'certification',
        meaning: '証明(書)、認定',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'code signing certificate',
        meaning: 'コード署名証明書',
      },
    ],
  },
  {
    id: 213,
    lessonId: 22,
    question: 'addition',
    choices: ['知能、インテリジェンス', '業界、分野', '(権限の)昇格', '付加'],
    answer: '付加',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'additional',
        meaning: '追加の',
        partOfSpeech: '形容詞',
      },
      {
        word: 'additionally',
        meaning: '加えて',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'in addition to website outage',
        meaning: 'Web サイトの停止に加えて',
      },
    ],
  },
  {
    id: 214,
    lessonId: 22,
    question: 'administrator',
    choices: ['機関、団体', '管理者', '裁判所', '企業'],
    answer: '管理者',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'administration',
        meaning: '管理、経営',
        partOfSpeech: '名詞',
      },
      {
        word: 'administrative',
        meaning: '管理の、経営の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'gain administrator privileges',
        meaning: '管理者の特権を獲得する',
      },
    ],
  },
  {
    id: 215,
    lessonId: 22,
    question: 'channel',
    choices: ['設定、環境', '興味、関心事', '付加', '経路'],
    answer: '経路',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'Trickbot distribution channel',
        meaning: 'Trickbotの配送経路',
      },
    ],
  },
  {
    id: 216,
    lessonId: 22,
    question: 'evidence',
    choices: ['報道', '選挙', '証拠', '(利用などの)規約、期間、用語'],
    answer: '証拠',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'evident',
        meaning: '明らかな',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the evidence collected so far',
        meaning: 'これまでに収集された証拠',
      },
    ],
  },
  {
    id: 217,
    lessonId: 22,
    question: 'amount',
    choices: ['量、総計', '身代金', '加盟メンバー', '過程、工程'],
    answer: '量、総計',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'huge amount of money',
        meaning: '巨額のお金',
      },
    ],
  },
  {
    id: 218,
    lessonId: 22,
    question: 'affiliate',
    choices: [
      '注目度、プロフィール',
      '優先度、優先すべきこと',
      '説明、指示、命令',
      '加盟メンバー',
    ],
    answer: '加盟メンバー',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'arrests of Ransomware-as-a-Service affiliates',
        meaning: 'RaaS加盟メンバーの逮捕',
      },
    ],
  },
  {
    id: 219,
    lessonId: 22,
    question: 'loss',
    choices: [
      '緊急事態',
      '問題(点)',
      '損害、喪失',
      '(マルウェアなどの)亜種、変異種',
    ],
    answer: '損害、喪失',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'lose',
        meaning: 'を失う、負ける',
        partOfSpeech: '動詞',
      },
    ],
    useExamples: [
      {
        example: 'tens of millions in losses',
        meaning: '数千万ドルの損害',
      },
    ],
  },
  {
    id: 220,
    lessonId: 23,
    question: 'entity',
    choices: ['入り口、項目', '省、局', '(人や組織などの)主体', '道具、ツール'],
    answer: '(人や組織などの)主体',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'governments and other entities',
        meaning: '政府やその他の主体',
      },
    ],
  },
  {
    id: 221,
    lessonId: 23,
    question: 'value',
    choices: ['方針、信条、設定(の集まり)', '細部、詳細', '値、価値', '保険'],
    answer: '値、価値',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'contain an invalid value',
        meaning: '不正な値を含んでいる',
      },
    ],
  },
  {
    id: 222,
    lessonId: 23,
    question: 'role',
    choices: ['供給', '資金、基金', '(権限の)昇格', '役割'],
    answer: '役割',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'play a key role',
        meaning: '重要な役割を担う',
      },
    ],
  },
  {
    id: 223,
    lessonId: 23,
    question: 'authority',
    choices: ['能力', '当局、権威', '産業、業界', '値、価値'],
    answer: '当局、権威',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'authoritative',
        meaning: '当局の、権威のある',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'Certification Authority (CA)',
        meaning: '認証局',
      },
    ],
  },
  {
    id: 224,
    lessonId: 23,
    question: 'approach',
    choices: ['戦略', '回避策、緩和策', '過程、工程', '取り組み方、接近'],
    answer: '取り組み方、接近',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the best approach',
        meaning: '最善の取り組み方',
      },
    ],
  },
  {
    id: 225,
    lessonId: 23,
    question: 'supply',
    choices: ['量、総計', '証拠', '供給', '注目度、プロフィール'],
    answer: '供給',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'supplier',
        meaning: 'サプライヤー',
        partOfSpeech: '名詞',
      },
      {
        word: 'supply-chain',
        meaning: 'サプライチェーン',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'supply chain attack',
        meaning: 'サプライチェーン攻撃',
      },
    ],
  },
  {
    id: 226,
    lessonId: 23,
    question: 'behavior',
    choices: ['能力', '挙動、振る舞い', '設定、環境', '経路、方向'],
    answer: '挙動、振る舞い',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'behave',
        meaning: '振る舞う',
        partOfSpeech: '動詞',
      },
      {
        word: 'behavioral',
        meaning: '振る舞いの',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'cause unexpected behavior',
        meaning: '予期しない挙動の原因となる',
      },
    ],
  },
  {
    id: 227,
    lessonId: 23,
    question: 'scheme',
    choices: ['戦術', '手法', '仕組み、悪だくみ、スキーム', '過程、工程'],
    answer: '仕組み、悪だくみ、スキーム',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'Internet-based fraud scheme',
        meaning: 'インターネット上での詐欺の仕組み',
      },
    ],
  },
  {
    id: 228,
    lessonId: 23,
    question: 'instance',
    choices: [
      '一連の作戦、キャンペーン',
      '証明書',
      '例、インスタンス',
      '接続、コネクション',
    ],
    answer: '例、インスタンス',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'for instance',
        meaning: '例えば',
      },
    ],
  },
  {
    id: 229,
    lessonId: 23,
    question: 'ability',
    choices: ['機関', '機能、関数', '緊急事態', '能力'],
    answer: '能力',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'ability to analyze complex and large datasets',
        meaning: '複雑で大きなデータセットを分析する能力',
      },
    ],
  },
  {
    id: 230,
    lessonId: 24,
    question: 'fund',
    choices: ['当局、権威', '省、局', '資金、基金', '顧客、取引先'],
    answer: '資金、基金',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'funding',
        meaning: '資金提供・調達',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the funds and their movements are being traced',
        meaning: '資金とその移動は追跡されていた',
      },
    ],
  },
  {
    id: 231,
    lessonId: 24,
    question: 'patient',
    choices: ['被害者', '患者', '身代金', '内部の人、会員'],
    answer: '患者',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'patience',
        meaning: '忍耐',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: "the stolen files contained patients' personal information",
        meaning: '盗まれたファイルには患者の個人情報が含まれていた',
      },
    ],
  },
  {
    id: 232,
    lessonId: 24,
    question: 'crime',
    choices: ['窃盗', '欠陥', '犯罪', '(マルウェアなどの)亜種、変異種'],
    answer: '犯罪',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'criminal',
        meaning: '犯罪者',
        partOfSpeech: '名詞',
      },
      {
        word: 'criminal',
        meaning: '犯罪の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'organized crime group',
        meaning: '組織化された犯罪グループ',
      },
    ],
  },
  {
    id: 233,
    lessonId: 24,
    question: 'profile',
    choices: [
      '細部、詳細',
      '方針、信条、設定(の集まり)',
      '興味、関心事',
      '注目度、プロフィール',
    ],
    answer: '注目度、プロフィール',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'high-profile',
        meaning: '著名な、人目を引く',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'high profile targets',
        meaning: '知名度のある標的',
      },
    ],
  },
  {
    id: 234,
    lessonId: 24,
    question: 'opportunity',
    choices: ['値、価値', '機会', '資産、財産', '優先度、優先すべきこと'],
    answer: '機会',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'opportunistic',
        meaning: '日和見的な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'Opportunity, Motivation and Rationalization',
        meaning: '機会・動機・正当化',
      },
    ],
  },
  {
    id: 235,
    lessonId: 24,
    question: 'function',
    choices: ['道具、ツール', '挙動、振る舞い', '能力', '機能、関数'],
    answer: '機能、関数',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'functionality',
        meaning: '機能性',
        partOfSpeech: '名詞',
      },
      {
        word: 'functional',
        meaning: '機能の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'have two different functions',
        meaning: '2つの異なる機能を持つ',
      },
    ],
  },
  {
    id: 236,
    lessonId: 24,
    question: 'interest',
    choices: ['経路、方向', '興味、関心事', '能力', '保険'],
    answer: '興味、関心事',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'interestingly',
        meaning: '興味深いことに',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'the interest of ransomware actor',
        meaning: 'ランサムウェアアクターの関心事',
      },
    ],
  },
  {
    id: 237,
    lessonId: 24,
    question: 'term',
    choices: ['組織', '特権', '対策、基準', '(利用などの)規約、期間、用語'],
    answer: '(利用などの)規約、期間、用語',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'terms of use',
        meaning: '利用規約',
      },
    ],
  },
  {
    id: 238,
    lessonId: 24,
    question: 'volume',
    choices: ['苦情、告訴', '報奨金', '設定、環境', '量、ボリューム'],
    answer: '量、ボリューム',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the volume of suspicious network traffic',
        meaning: '不審なネットワークトラフィックの量',
      },
    ],
  },
  {
    id: 239,
    lessonId: 24,
    question: 'tax',
    choices: ['身代金', '報奨金', '税金', '証明書'],
    answer: '税金',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'taxpayer',
        meaning: '納税者',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'tax season',
        meaning: '確定申告の時期',
      },
    ],
  },
  {
    id: 240,
    lessonId: 25,
    question: 'permission',
    choices: ['特権', '能力', '機能、関数', '許可'],
    answer: '許可',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'permit',
        meaning: 'を許可する',
        partOfSpeech: '動詞',
      },
      {
        word: 'permissive',
        meaning: '緩い',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'require additional permissions',
        meaning: '追加の許可を必要とする',
      },
    ],
  },
  {
    id: 241,
    lessonId: 25,
    question: 'insider',
    choices: ['仕組み、悪だくみ、スキーム', '内部の人、会員', '管理者', '個人'],
    answer: '内部の人、会員',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'insider threat',
        meaning: '内部犯による脅威',
      },
    ],
  },
  {
    id: 242,
    lessonId: 25,
    question: 'task',
    choices: ['仕事、タスク', '税金', '資金、基金', '特徴、目玉'],
    answer: '仕事、タスク',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'organize and manage tasks',
        meaning: '仕事を体系化し、管理する',
      },
    ],
  },
  {
    id: 243,
    lessonId: 25,
    question: 'institution',
    choices: ['識別情報', '手順、手続き', '緊急事態', '機関、団体'],
    answer: '機関、団体',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'institute',
        meaning: '研究所',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'financial and medical institution',
        meaning: '金融・医療機関',
      },
    ],
  },
  {
    id: 244,
    lessonId: 25,
    question: 'strategy',
    choices: ['制裁', '機会', '脅威', '戦略'],
    answer: '戦略',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'strategic',
        meaning: '戦略の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the new zero trust strategy',
        meaning: '新しいゼロトラスト戦略',
      },
    ],
  },
  {
    id: 245,
    lessonId: 25,
    question: 'vector',
    choices: ['興味、関心事', '経路、方向', '患者', '身代金'],
    answer: '経路、方向',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the initial infection vector remain unclear',
        meaning: '最初の感染経路はまだはっきりしていない',
      },
    ],
  },
  {
    id: 246,
    lessonId: 25,
    question: 'article',
    choices: ['出所', '脆弱性', '業界、分野', '記事'],
    answer: '記事',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'after the article published',
        meaning: 'その記事が発表された後',
      },
    ],
  },
  {
    id: 247,
    lessonId: 25,
    question: 'cost',
    choices: ['量、総計', '報奨金', '費用', '保険'],
    answer: '費用',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'expect additional costs',
        meaning: '追加費用を見込む',
      },
    ],
  },
  {
    id: 248,
    lessonId: 25,
    question: 'court',
    choices: ['裁判所', '省、局', '機関、団体', '資産、財産'],
    answer: '裁判所',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'a court order',
        meaning: '裁判所命令',
      },
    ],
  },
  {
    id: 249,
    lessonId: 25,
    question: 'insurance',
    choices: ['認証情報', '当局、権威', '保険', '機関'],
    answer: '保険',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'insurer',
        meaning: '保険業者',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'health insurance information',
        meaning: '医療保険の情報',
      },
    ],
  },
  {
    id: 250,
    lessonId: 26,
    question: 'asset',
    choices: ['価格', '量、総計', '証拠', '資産、財産'],
    answer: '資産、財産',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the value of the stolen assets',
        meaning: '盗まれた資産の価値',
      },
    ],
  },
  {
    id: 251,
    lessonId: 26,
    question: 'press',
    choices: ['注目度、プロフィール', '供給', '報道', '裁判所'],
    answer: '報道',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'press release',
        meaning: 'プレスリリース、報道発表',
      },
    ],
  },
  {
    id: 252,
    lessonId: 26,
    question: 'path',
    choices: [
      '(データの)流出、侵害',
      '進路、(ファイルの)パス',
      '認証情報',
      '(権限の)昇格',
    ],
    answer: '進路、(ファイルの)パス',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'regardless of the attack path',
        meaning: '攻撃経路によらず',
      },
    ],
  },
  {
    id: 253,
    lessonId: 26,
    question: 'lure',
    choices: ['欠陥', '詐欺', 'おとり、ルアー', '量、総計'],
    answer: 'おとり、ルアー',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'lures related to the tax season',
        meaning: '確定申告の時期に関係したおとり',
      },
    ],
  },
  {
    id: 254,
    lessonId: 26,
    question: 'workaround',
    choices: [
      '報奨金',
      '回避策、緩和策',
      'パッチ、修正プログラム',
      '(システムなどの)停止',
    ],
    answer: '回避策、緩和策',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'there is no patch or workaround for this vulnerability',
        meaning: 'この脆弱性にはパッチや回避策がない',
      },
    ],
  },
  {
    id: 255,
    lessonId: 26,
    question: 'emergency',
    choices: ['緊急事態', '当局、権威', '脆弱性', '苦情、告訴'],
    answer: '緊急事態',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'emergency directive',
        meaning: '緊急指令',
      },
    ],
  },
  {
    id: 256,
    lessonId: 26,
    question: 'survey',
    choices: [
      '(人や組織などの)主体',
      '成功',
      '細部、詳細',
      '(アンケートなどによる)調査',
    ],
    answer: '(アンケートなどによる)調査',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'conduct surveys',
        meaning: '調査を実施する',
      },
    ],
  },
  {
    id: 257,
    lessonId: 26,
    question: 'sanction',
    choices: ['制裁', '窃盗', '業界、分野', '機関'],
    answer: '制裁',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'bypass sanctions',
        meaning: '制裁を回避する',
      },
    ],
  },
  {
    id: 258,
    lessonId: 26,
    question: 'bounty',
    choices: ['効果、影響', '経路、方向', '挙動、振る舞い', '報奨金'],
    answer: '報奨金',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'bug bounty program',
        meaning: '脆弱性報奨金制度、バグバウンティプログラム',
      },
    ],
  },
  {
    id: 259,
    lessonId: 26,
    question: 'credential',
    choices: ['暗号通貨', '認証情報', '証拠', '方針、信条、設定(の集まり)'],
    answer: '認証情報',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'use a different credential for all log-ins',
        meaning: 'すべてのログインで異なる認証情報を使う',
      },
    ],
  },
  {
    id: 260,
    lessonId: 27,
    question: 'election',
    choices: ['欠陥', '形態、種類、フォーム', '機会', '選挙'],
    answer: '選挙',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'elect',
        meaning: 'を選ぶ',
        partOfSpeech: '動詞',
      },
    ],
    useExamples: [
      {
        example: 'the Presidential election',
        meaning: '大統領選挙',
      },
    ],
  },
  {
    id: 261,
    lessonId: 27,
    question: 'status',
    choices: ['例、インスタンス', '状態', '特徴、目玉', '(権限の)昇格'],
    answer: '状態',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'monitor the security status of the device',
        meaning: 'デバイスのセキュリティの状態を監視する',
      },
    ],
  },
  {
    id: 262,
    lessonId: 27,
    question: 'complaint',
    choices: ['苦情、告訴', '緊急事態', '機関、団体', '(データの)流出、侵害'],
    answer: '苦情、告訴',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'complain',
        meaning: '文句を言う',
        partOfSpeech: '動詞',
      },
    ],
    useExamples: [
      {
        example: 'complaints from enterprise users',
        meaning: '企業ユーザーからの苦情',
      },
    ],
  },
  {
    id: 263,
    lessonId: 27,
    question: 'procedure',
    choices: [
      '道具、ツール',
      '挙動、振る舞い',
      '説明、指示、命令',
      '手順、手続き',
    ],
    answer: '手順、手続き',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'proceed',
        meaning: '進行する',
        partOfSpeech: '動詞',
      },
      {
        word: 'procedural',
        meaning: '手続き上の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'response and notification procedures for incidents',
        meaning: 'インシデントの対応・ 通知手順',
      },
    ],
  },
  {
    id: 264,
    lessonId: 27,
    question: 'quarter',
    choices: ['役割', '能力', '四半期', '個人'],
    answer: '四半期',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'in the first quarter of last year',
        meaning: '昨年の第一四半期に',
      },
    ],
  },
  {
    id: 265,
    lessonId: 27,
    question: 'executive',
    choices: ['顧客、取引先', '行政長官、経営者', '管理者', '機関、団体'],
    answer: '行政長官、経営者',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'Executive Order 14028',
        meaning: '大統領令14028号',
      },
    ],
  },
  {
    id: 266,
    lessonId: 27,
    question: 'instruction',
    choices: ['機能、関数', '機関', '付加', '説明、指示、命令'],
    answer: '説明、指示、命令',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'instruct',
        meaning: 'を教える',
        partOfSpeech: '動詞',
      },
    ],
    useExamples: [
      {
        example: 'you can find detailed instructions here',
        meaning: 'より詳細な説明はここにある',
      },
    ],
  },
  {
    id: 267,
    lessonId: 27,
    question: 'price',
    choices: [
      'アカウント、口座',
      'コード、符号',
      '価格',
      '一連の作戦、キャンペーン',
    ],
    answer: '価格',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'rising cryptocurrency prices',
        meaning: '値上がりしている暗号通貨の価格',
      },
    ],
  },
  {
    id: 268,
    lessonId: 27,
    question: 'priority',
    choices: [
      '効果、影響',
      '優先度、優先すべきこと',
      '方針、信条、設定(の集まり)',
      '取り組み方、接近',
    ],
    answer: '優先度、優先すべきこと',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'prioritize',
        meaning: 'を優先する',
        partOfSpeech: '動詞',
      },
    ],
    useExamples: [
      {
        example: 'customer safety is the top priority',
        meaning: '顧客の安全が最優先事項である',
      },
    ],
  },
  {
    id: 269,
    lessonId: 27,
    question: 'entry',
    choices: ['出所', '内部の人、会員', '接続、コネクション', '入り口、項目'],
    answer: '入り口、項目',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'enter',
        meaning: 'に入る',
        partOfSpeech: '動詞',
      },
    ],
    useExamples: [
      {
        example: 'highlight suspicious log entry',
        meaning: '不審なログの項目を強調表示する',
      },
    ],
  },
  {
    id: 270,
    lessonId: 28,
    question: 'prison',
    choices: ['裁判所', '刑務所', '省、局', '企業'],
    answer: '刑務所',
    partOfSpeech: '名詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'he was sentenced to five years in prison',
        meaning: '彼は 5年の刑を宣告された',
      },
    ],
  },
  {
    id: 271,
    lessonId: 28,
    question: 'effect',
    choices: ['能力', '付加', '資産、財産', '効果、影響'],
    answer: '効果、影響',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'effectiveness',
        meaning: '有効性',
        partOfSpeech: '名詞',
      },
      {
        word: 'effective',
        meaning: '有効な、効果的な',
        partOfSpeech: '形容詞',
      },
      {
        word: 'effectively',
        meaning: '効果的に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'notable economical effects',
        meaning: '顕著な経済的影響',
      },
    ],
  },
  {
    id: 272,
    lessonId: 28,
    question: 'success',
    choices: ['機会', '成功', '注目度、プロフィール', '報奨金'],
    answer: '成功',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'succeed',
        meaning: '成功する',
        partOfSpeech: '動詞',
      },
      {
        word: 'successful',
        meaning: '成功した',
        partOfSpeech: '形容詞',
      },
      {
        word: 'successfully',
        meaning: 'うまく、首尾よく',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'the attempt with little success so far',
        meaning: '今のところあまり成功していない試み',
      },
    ],
  },
  {
    id: 273,
    lessonId: 28,
    question: 'elevation',
    choices: ['選挙', '個人', '特権', '(権限の)昇格'],
    answer: '(権限の)昇格',
    partOfSpeech: '名詞',
    relatedWords: [
      {
        word: 'elevate',
        meaning: '(権限) を昇格させる',
        partOfSpeech: '動詞',
      },
      {
        word: 'elevated',
        meaning: '(権限が)高い',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'privilege elevation vulnerability',
        meaning: '権限昇格の脆弱性',
      },
    ],
  },
  {
    id: 274,
    lessonId: 29,
    question: 'malicious',
    choices: ['累積の', '重大な、致命的な', '悪意のある', '上級の'],
    answer: '悪意のある',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'malicious attachments',
        meaning: '悪意のある添付ファイル',
      },
    ],
  },
  {
    id: 275,
    lessonId: 29,
    question: 'critical',
    choices: ['大規模な', '累積の', '機微な、取扱注意の', '重大な、致命的な'],
    answer: '重大な、致命的な',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'critical vulnerability',
        meaning: '致命的な脆弱性',
      },
    ],
  },
  {
    id: 276,
    lessonId: 29,
    question: 'remote',
    choices: ['さらに進んだ', '遠隔の、遠隔からの', '典型的な', '最初の'],
    answer: '遠隔の、遠隔からの',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'remotely',
        meaning: '遠隔で',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'Remote Code Execution(RCE)',
        meaning: 'リモートコード実行',
      },
    ],
  },
  {
    id: 277,
    lessonId: 29,
    question: 'available',
    choices: [
      'を知っている',
      'の原因である、責任がある',
      'ある特定の、確かな',
      '利用可能である',
    ],
    answer: '利用可能である',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'availability',
        meaning: '可用性',
        partOfSpeech: '名詞',
      },
      {
        word: 'unavailable',
        meaning: '利用・入手できない',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'latest available version',
        meaning: '利用可能な最新のバージョン',
      },
    ],
  },
  {
    id: 278,
    lessonId: 29,
    question: 'personal',
    choices: ['既知の', '機密の', '個人の', '進行中の'],
    answer: '個人の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'personally',
        meaning: '個人的に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'personal information',
        meaning: '個人情報',
      },
    ],
  },
  {
    id: 279,
    lessonId: 29,
    question: 'multiple',
    choices: ['任意の', '典型的な', '社会の、社会的な', '多数の'],
    answer: '多数の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'on multiple platform',
        meaning: '複数のプラットフォームで',
      },
    ],
  },
  {
    id: 280,
    lessonId: 29,
    question: 'public',
    choices: ['社会の、社会的な', '外部の', '公共の、公然の', '手動の'],
    answer: '公共の、公然の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'publicly',
        meaning: '公に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'public spaces',
        meaning: '公共の空間',
      },
    ],
  },
  {
    id: 281,
    lessonId: 29,
    question: 'financial',
    choices: ['連邦の', '金銭的な、金融の', '特に、特定の', 'ありそうな'],
    answer: '金銭的な、金融の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'finance',
        meaning: '金融、財政',
        partOfSpeech: '名詞',
      },
      {
        word: 'financially',
        meaning: '財政的に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'financial, healthcare and manufacturing sectors',
        meaning: '金融・医療・製造業界',
      },
    ],
  },
  {
    id: 282,
    lessonId: 29,
    question: 'fake',
    choices: ['機微な、取扱注意の', '内部の', '偽の', '現在の、最新の'],
    answer: '偽の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'fake job posting',
        meaning: '偽の求人票',
      },
    ],
  },
  {
    id: 283,
    lessonId: 29,
    question: 'social',
    choices: ['正規の', '著しい、重要な', '進行中の', '社会の、社会的な'],
    answer: '社会の、社会的な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'society',
        meaning: '社会',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'social security number',
        meaning: '(米国の)社会保障番号',
      },
    ],
  },
  {
    id: 284,
    lessonId: 30,
    question: 'sensitive',
    choices: ['深刻な', '機微な、取扱注意の', '前の、先の', '医療の'],
    answer: '機微な、取扱注意の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'steal sensitive data',
        meaning: '機微なデータを盗む',
      },
    ],
  },
  {
    id: 285,
    lessonId: 30,
    question: 'likely',
    choices: ['ありそうな', '任意の', 'いくつかの', '手動の'],
    answer: 'ありそうな',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'the likely reason',
        meaning: 'ありそうな理由',
      },
    ],
  },
  {
    id: 286,
    lessonId: 30,
    question: 'recent',
    choices: ['潜在的な', '洗練された', '正規の', '最近の'],
    answer: '最近の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'recently',
        meaning: '最近',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'the most recent backup',
        meaning: '最新のバックアップ',
      },
    ],
  },
  {
    id: 287,
    lessonId: 30,
    question: 'private',
    choices: ['外部の', '特に、特定の', '内密の、私用の', '前の、先の'],
    answer: '内密の、私用の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'privately',
        meaning: '非公開で、個人で',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'private key',
        meaning: '秘密鍵',
      },
    ],
  },
  {
    id: 288,
    lessonId: 30,
    question: 'further',
    choices: [
      '現在の、最新の',
      '疑わしい、不審な',
      'の原因である、責任がある',
      'さらに進んだ',
    ],
    answer: 'さらに進んだ',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'further investigation',
        meaning: 'さらなる調査',
      },
    ],
  },
  {
    id: 289,
    lessonId: 30,
    question: 'several',
    choices: ['機密の', '機微な、取扱注意の', '特定の、明白な', 'いくつかの'],
    answer: 'いくつかの',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'execute several commands',
        meaning: 'いくつかのコマンドを実行する',
      },
    ],
  },
  {
    id: 290,
    lessonId: 30,
    question: 'potential',
    choices: ['内密の、私用の', '機密の', '潜在的な', '正規の'],
    answer: '潜在的な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'potentially',
        meaning: '潜在的に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'potential security issues',
        meaning: '潜在的なセキュリティ上の問題',
      },
    ],
  },
  {
    id: 291,
    lessonId: 30,
    question: 'legitimate',
    choices: ['洗練された', '正規の', '偽の、間違った', '法人の、企業の'],
    answer: '正規の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'legitimacy',
        meaning: '正当性',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'impersonate legitimate software',
        meaning: '正規のソフトウェアに偽装する',
      },
    ],
  },
  {
    id: 292,
    lessonId: 30,
    question: 'ongoing',
    choices: ['進行中の', '即時の、即座の', '現在の、最新の', '先の、以前の'],
    answer: '進行中の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'ongoing phishing campaign',
        meaning: '進行中のフィッシングキャンペーン',
      },
    ],
  },
  {
    id: 293,
    lessonId: 30,
    question: 'current',
    choices: ['先の、以前の', '洗練された', '現在の、最新の', '深刻な'],
    answer: '現在の、最新の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'currently',
        meaning: '現在は',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'under current versions',
        meaning: '現在のバージョンでは',
      },
    ],
  },
  {
    id: 294,
    lessonId: 31,
    question: 'federal',
    choices: ['法人の、企業の', '連邦の', '正規の', 'ありそうな'],
    answer: '連邦の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'Federal Bureau of Investigation (FBI)',
        meaning: '連邦捜査局',
      },
    ],
  },
  {
    id: 295,
    lessonId: 31,
    question: 'internal',
    choices: ['多数の', '前の、先の', '著しい、重要な', '内部の'],
    answer: '内部の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'access to the internal networks',
        meaning: '内部ネットワークへのアクセス',
      },
    ],
  },
  {
    id: 296,
    lessonId: 31,
    question: 'external',
    choices: ['個人の', '深刻な', '外部の', '累積の'],
    answer: '外部の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'XML external entity reference vulnerability',
        meaning: 'XML外部実体参照の脆弱性',
      },
    ],
  },
  {
    id: 297,
    lessonId: 31,
    question: 'significant',
    choices: [
      'の原因である、責任がある',
      '既知の',
      'を知っている',
      '著しい、重要な',
    ],
    answer: '著しい、重要な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'significantly',
        meaning: '著しく',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'affect a significant number of users',
        meaning: 'かなりの数のユーザーに影響を与える',
      },
    ],
  },
  {
    id: 298,
    lessonId: 31,
    question: 'corporate',
    choices: [
      '社会の、社会的な',
      '上級の',
      '法人の、企業の',
      '法的な、法曹業界の、合法の',
    ],
    answer: '法人の、企業の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'corporation',
        meaning: '法人',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'corporate and government victims',
        meaning: '企業と政府機関の被害者',
      },
    ],
  },
  {
    id: 299,
    lessonId: 31,
    question: 'previous',
    choices: ['先の、以前の', '疑わしい、不審な', '特に、特定の', '機密の'],
    answer: '先の、以前の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'previously',
        meaning: '以前に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'version 2.4.1 and all previous versions',
        meaning: 'バージョン 2.4.1 とそれ以前のすべてのバージョン',
      },
    ],
  },
  {
    id: 300,
    lessonId: 31,
    question: 'certain',
    choices: ['正規の', '洗練された', 'ある特定の、確かな', '個人の'],
    answer: 'ある特定の、確かな',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'ascertain',
        meaning: 'を確認する',
        partOfSpeech: '動詞',
      },
      {
        word: 'uncertainty',
        meaning: '不確実性',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'under certain conditions',
        meaning: '特定の状況において',
      },
    ],
  },
  {
    id: 301,
    lessonId: 31,
    question: 'specific',
    choices: [
      '特定の、明白な',
      '機密の',
      '機微な、取扱注意の',
      '重大な、致命的な',
    ],
    answer: '特定の、明白な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'specifically',
        meaning: '特に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'DDoS attacks against a specific target',
        meaning: '特定の標的に対するDDoS攻撃',
      },
    ],
  },
  {
    id: 302,
    lessonId: 31,
    question: 'aware',
    choices: ['全体の、完全な', 'を知っている', '深刻な', '最近の'],
    answer: 'を知っている',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'awareness',
        meaning: '意識、気づくこと',
        partOfSpeech: '名詞',
      },
      {
        word: 'unaware',
        meaning: '気づかない',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the vender is aware of the problem',
        meaning: 'ベンダーは問題を認識している',
      },
    ],
  },
  {
    id: 303,
    lessonId: 31,
    question: 'initial',
    choices: ['先の、以前の', '利用可能である', '個人の', '最初の'],
    answer: '最初の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'initialize',
        meaning: 'を初期化する',
        partOfSpeech: '動詞',
      },
      {
        word: 'initially',
        meaning: '最初に、最初は',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: "initial access to victims' networks",
        meaning: '被害者のネットワークへの初期アクセス',
      },
    ],
  },
  {
    id: 304,
    lessonId: 32,
    question: 'medical',
    choices: ['潜在的な', '洗練された', '医療の', '累積の'],
    answer: '医療の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'medical software vender',
        meaning: '医療用ソフトウェアベンダー',
      },
    ],
  },
  {
    id: 305,
    lessonId: 32,
    question: 'suspicious',
    choices: [
      '深刻な',
      '金銭的な、金融の',
      '遠隔の、遠隔からの',
      '疑わしい、不審な',
    ],
    answer: '疑わしい、不審な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'suspicion',
        meaning: '疑い',
        partOfSpeech: '名詞',
      },
      {
        word: 'suspiciously',
        meaning: '疑わしげに',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'this file looks suspicious',
        meaning: 'このファイルは不審に見える',
      },
    ],
  },
  {
    id: 306,
    lessonId: 32,
    question: 'cumulative',
    choices: ['累積の', 'さらに進んだ', '全体の、完全な', '典型的な'],
    answer: '累積の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'cumulate',
        meaning: 'を積み重ねる',
        partOfSpeech: '動詞',
      },
    ],
    useExamples: [
      {
        example: 'cumulative update',
        meaning: '累積更新プログラム',
      },
    ],
  },
  {
    id: 307,
    lessonId: 32,
    question: 'former',
    choices: ['深刻な', '医療の', '前の、先の', '特定の、明白な'],
    answer: '前の、先の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'a former employee',
        meaning: '元従業員',
      },
    ],
  },
  {
    id: 308,
    lessonId: 32,
    question: 'arbitrary',
    choices: ['特に、特定の', '任意の', '遠隔の、遠隔からの', '個人の'],
    answer: '任意の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'arbitrarily',
        meaning: '任意に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'buffer overflow leading to arbitrary code execution',
        meaning: '任意のコード実行につながるバッファオーバーフロー',
      },
    ],
  },
  {
    id: 309,
    lessonId: 32,
    question: 'massive',
    choices: ['大規模な', 'ある特定の、確かな', 'いくつかの', '公共の、公然の'],
    answer: '大規模な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'massively',
        meaning: '大規模に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'massive scale and ongoing attacks',
        meaning: '大規模で進行中の攻撃',
      },
    ],
  },
  {
    id: 310,
    lessonId: 32,
    question: 'particular',
    choices: [
      '典型的な',
      '疑わしい、不審な',
      '特に、特定の',
      '法的な、法曹業界の、合法の',
    ],
    answer: '特に、特定の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'particularly',
        meaning: '特に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'in this particular case',
        meaning: 'この特定の事例では',
      },
    ],
  },
  {
    id: 311,
    lessonId: 32,
    question: 'numerous',
    choices: ['洗練された', '現在の、最新の', '特定の、明白な', '多数の'],
    answer: '多数の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'this update fixes numerous issues',
        meaning: 'このアップデートで多数の問題が修正された',
      },
    ],
  },
  {
    id: 312,
    lessonId: 32,
    question: 'responsible',
    choices: ['累積の', 'の原因である、責任がある', '最近の', 'ありそうな'],
    answer: 'の原因である、責任がある',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'responsibility',
        meaning: '責任',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'it is unknown what group is responsible for the attack',
        meaning: '攻撃がどのグループによるものかは不明である',
      },
    ],
  },
  {
    id: 313,
    lessonId: 32,
    question: 'senior',
    choices: ['任意の', '正規の', '既知の', '上級の'],
    answer: '上級の',
    partOfSpeech: '形容詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'senior product manager',
        meaning: '上級プロダクトマネージャー',
      },
    ],
  },
  {
    id: 314,
    lessonId: 33,
    question: 'sophisticated',
    choices: ['さらに進んだ', '洗練された', '典型的な', '著しい、重要な'],
    answer: '洗練された',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'unsophisticated',
        meaning: '洗練されていない',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'highly sophisticated zero-day attack',
        meaning: 'きわめて洗練されたゼロデイ攻撃',
      },
    ],
  },
  {
    id: 315,
    lessonId: 33,
    question: 'legal',
    choices: [
      '深刻な',
      '重大な、致命的な',
      '典型的な',
      '法的な、法曹業界の、合法の',
    ],
    answer: '法的な、法曹業界の、合法の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'illegal',
        meaning: '違法な',
        partOfSpeech: '形容詞',
      },
      {
        word: 'legally',
        meaning: '法的に、合法的に',
        partOfSpeech: '副詞',
      },
      {
        word: 'illegally',
        meaning: '違法に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'business information including legal documents',
        meaning: '法的文書を含むビジネス情報',
      },
    ],
  },
  {
    id: 316,
    lessonId: 33,
    question: 'known',
    choices: ['最初の', '既知の', '正規の', '最近の'],
    answer: '既知の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'well-known',
        meaning: 'よく知られた',
        partOfSpeech: '形容詞',
      },
      {
        word: 'unknown',
        meaning: '未知の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'Known Exploited Vulnerabilities Catalog',
        meaning: '既知の悪用された脆弱性カタログ',
      },
    ],
  },
  {
    id: 317,
    lessonId: 33,
    question: 'entire',
    choices: [
      '内密の、私用の',
      '機微な、取扱注意の',
      '任意の',
      '全体の、完全な',
    ],
    answer: '全体の、完全な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'entirely',
        meaning: '完全に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'entire corporate networks',
        meaning: '企業のネットワーク全体',
      },
    ],
  },
  {
    id: 318,
    lessonId: 33,
    question: 'false',
    choices: [
      '悪意のある',
      '偽の、間違った',
      '著しい、重要な',
      '即時の、即座の',
    ],
    answer: '偽の、間違った',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'falsely',
        meaning: '間違って、不正に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'to avoid false positives',
        meaning: '誤検知を避けるために',
      },
    ],
  },
  {
    id: 319,
    lessonId: 33,
    question: 'severe',
    choices: ['累積の', '潜在的な', '深刻な', 'ある特定の、確かな'],
    answer: '深刻な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'severity',
        meaning: '深刻さ、重大さ',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'a new report about a severe security issue',
        meaning: '深刻なセキュリティの問題に関する新しいレポート',
      },
    ],
  },
  {
    id: 320,
    lessonId: 33,
    question: 'confidential',
    choices: ['任意の', '典型的な', '累積の', '機密の'],
    answer: '機密の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'confidence',
        meaning: '信用、信任',
        partOfSpeech: '名詞',
      },
      {
        word: 'confidentiality',
        meaning: '機密性',
        partOfSpeech: '名詞',
      },
      {
        word: 'confident',
        meaning: '確信している',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'include confidential documents',
        meaning: '機密文書を含む',
      },
    ],
  },
  {
    id: 321,
    lessonId: 33,
    question: 'immediate',
    choices: [
      'を知っている',
      '利用可能である',
      '即時の、即座の',
      '金銭的な、金融の',
    ],
    answer: '即時の、即座の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'immediately',
        meaning: '即座に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'receive an immediate response',
        meaning: '即時に返信を受け取る',
      },
    ],
  },
  {
    id: 322,
    lessonId: 33,
    question: 'typical',
    choices: ['社会の、社会的な', '典型的な', '最初の', '進行中の'],
    answer: '典型的な',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'typically',
        meaning: '典型的に、一般的に',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'in a typical environment',
        meaning: '典型的な環境では',
      },
    ],
  },
  {
    id: 323,
    lessonId: 33,
    question: 'manual',
    choices: ['いくつかの', '既知の', '個人の', '手動の'],
    answer: '手動の',
    partOfSpeech: '形容詞',
    relatedWords: [
      {
        word: 'manually',
        meaning: '手動で',
        partOfSpeech: '副詞',
      },
    ],
    useExamples: [
      {
        example: 'manual vulnerability scan',
        meaning: '手動での脆弱性スキャン',
      },
    ],
  },
];
