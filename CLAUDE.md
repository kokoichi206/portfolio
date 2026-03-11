# CLAUDE.md

## WHY - プロジェクトの目的

ソフトウェアエンジニア Takahiro Tominaga (kokoichi206) のポートフォリオサイト。
Bento Grid + ダークモードデフォルトのシングルページ構成。

## WHAT - 技術スタック

Astro 6 (Static) / React 19 (islands) / TypeScript / Tailwind CSS 4 / pnpm 10

- Lint: oxlint
- Format: oxfmt
- Test: Vitest + Testing Library
- Deploy: Vercel
- Domain: kokoichi0206.work (Cloudflare DNS)

## ディレクトリ構造

```
data/              # コンテンツ JSON (profile, skills, certs, experience, projects, writing)
src/
  components/      # React コンポーネント (islands)
  layouts/         # Astro レイアウト
  pages/           # Astro ページ (/, /404)
  styles/          # global.css (Tailwind + テーマ変数)
  types/           # TypeScript 型定義
```

## HOW - 開発コマンド

```bash
pnpm dev          # 開発サーバー
pnpm build        # 本番ビルド
pnpm lint         # oxlint
pnpm fmt          # oxfmt (自動修正)
pnpm fmt:check    # oxfmt (チェックのみ)
pnpm check        # astro type check
pnpm test         # vitest
```

## 設計方針

- **Static Site**: Astro の static output。サーバーサイド処理なし
- **React Islands**: インタラクティブなコンポーネントのみ `client:load` で hydrate (ThemeToggle, Header)
- **データ管理**: `data/*.json` に全コンテンツを集約。更新は JSON 編集 → push → 自動デプロイ
- **テーマ**: ダークモードデフォルト。CSS 変数の上書きでライトモード対応 (`html.light`)
- **アクセントカラー**: `#F19DB5` (桜ピンク) → Tailwind `sakura-50` ~ `sakura-900`

## コーディングルール

- **言語**: 日本語でコミュニケーション
- **コンポーネント**: React は `.tsx`、ページ・レイアウトは `.astro`
- **スタイル**: Tailwind ユーティリティクラス優先。カスタム CSS は `global.css` に最小限
- **型**: `src/types/data.ts` で JSON データの型を定義。`as` キャストは `index.astro` のデータ読み込み時のみ許容
- **変更前に確認**: `pnpm fmt && pnpm lint && pnpm check && pnpm test && pnpm build` が全て通ること

## 詳細ドキュメント

- **コンポーネント設計**: [.claude/rules/component-patterns.md](.claude/rules/component-patterns.md)
- **テーマシステム**: [.claude/rules/theme-system.md](.claude/rules/theme-system.md)
