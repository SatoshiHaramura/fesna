# SecuWord Boost

## 概要
このWebサービスは、英単語を学習するサービスです。

想定している利用者は、海外のセキュリティインシデントなどのセキュリティに関する情報を収集しているセキュリティエンジニアとなります。

特徴としては、収容している英単語が、実際のセキュリティニュースの記事に使用されている英単語に特化しており、その英単語の意味を4択のクイズ形式で学習することができます。
また、意味の他にも、英単語に関連する単語や使用例も併せて学習することができます。

## URL
https://secuword-boost.vercel.app

## 技術スタック
- フロントエンド
  - TypeScript 4.9.5
  - Next.js 13.1.6
  - React 18.2.0
  - Tailwind CSS 3.2.7

- テスト
  - Jest 29.4.3
  - React Testing Library 13.4.0
  - Playwright 1.31.1

- Linter/Formatter
  - ESLint 8.34.0
  - Prettier 2.8.4

- デプロイ環境
  - Vercel

- CI/CD
  - GitHub Actions

## ローカルでの環境構築
### セットアップ
```
git clone https://github.com/SatoshiHaramura/secuword-boost.git
cd secuword-boost
yarn
```

### 起動
```
yarn dev
```

### Lint
```
yarn lint
```

### Format
```
yarn format:check
```

### Test
```
# 単体テストと統合テストの両方を実行
yarn test:unit/integration
```
```
# E2Eテストを実行
yarn test:e2e
```
```
# 全てのテストを実行
yarn test:all
```
