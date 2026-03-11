# kokoichi206 Portfolio

[![CI](https://github.com/kokoichi206/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/kokoichi206/portfolio/actions/workflows/ci.yml)

Software Engineer のポートフォリオサイト。

**https://kokoichi0206.work**

## Tech Stack

- [Astro](https://astro.build/) 6 (Static)
- [React](https://react.dev/) 19 (Islands Architecture)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) + Testing Library
- [oxlint](https://oxc.rs/docs/guide/usage/linter) / [oxfmt](https://oxc.rs/docs/guide/usage/formatter)

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

## Commands

| Command          | Description            |
| :--------------- | :--------------------- |
| `pnpm dev`       | 開発サーバー起動       |
| `pnpm build`     | 本番ビルド (`./dist/`) |
| `pnpm preview`   | ビルド結果のプレビュー |
| `pnpm lint`      | oxlint                 |
| `pnpm fmt`       | oxfmt (自動修正)       |
| `pnpm fmt:check` | oxfmt (チェックのみ)   |
| `pnpm check`     | Astro type check       |
| `pnpm test`      | Vitest                 |

## Project Structure

```
data/                   # コンテンツ JSON
  profile.json          #   プロフィール・タグライン・リンク
  skills.json           #   スキル・技術スタック
  certifications.json   #   資格一覧
  experience.json       #   職務経歴
  projects.json         #   OSS / 個人プロジェクト
  writing.json          #   ブログ・執筆統計
src/
  components/           # React コンポーネント (islands)
  layouts/              # Astro レイアウト
  pages/                # Astro ページ
  styles/               # global.css (Tailwind + テーマ変数)
  types/                # TypeScript 型定義
```

## Updating Content

コンテンツは全て `data/*.json` で管理しています。JSON を編集して push すれば自動デプロイされます。

| 更新内容         | 編集ファイル               |
| :--------------- | :------------------------- |
| プロフィール     | `data/profile.json`        |
| スキル追加       | `data/skills.json`         |
| 資格取得         | `data/certifications.json` |
| 転職・案件追加   | `data/experience.json`     |
| プロジェクト追加 | `data/projects.json`       |
| ブログ統計更新   | `data/writing.json`        |

## Deploy

Vercel で自動デプロイ。`main` ブランチへの push でプロダクション反映。

- Domain: `kokoichi0206.work` (Cloudflare DNS)
- Preview: PR ごとにプレビューデプロイ

## License

[MIT](./LICENSE)
