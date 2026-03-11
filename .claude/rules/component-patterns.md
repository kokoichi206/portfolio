---
globs:
  - src/components/**
  - src/pages/**
---

# コンポーネント設計パターン

## Astro vs React の使い分け

- **Astro (.astro)**: ページ、レイアウト、静的コンテンツ。JS ゼロ
- **React (.tsx)**: ユーザーインタラクションが必要なコンポーネントのみ
  - ThemeToggle (クリック + アニメーション)
  - Header (ナビゲーション)

## React コンポーネントの規約

- Props は interface で定義し、コンポーネントと同じファイルに置く
- データは Astro 側で JSON から読み込み、props として React に渡す
- React コンポーネント内で JSON を直接 import しない

```typescript
// Good: Props interface + named export
interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => { ... };
```

## client ディレクティブ

- `client:load` — ページ読み込み時に即 hydrate (Header, ThemeToggle)
- `client:visible` — ビューポートに入ったら hydrate (将来のアニメーション用)
- ディレクティブなしの React コンポーネントは SSR のみ (HTML だけ出力)

## スタイリング

- Tailwind ユーティリティクラスを直接使用
- ダーク/ライト対応: CSS 変数 (`--color-bg-dark` 等) が `html.light` で上書きされるため、同じクラス名で両モード対応済み
- `text-neutral-*` や `bg-surface-dark` はモード切替で自動的に色が変わる
