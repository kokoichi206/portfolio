---
globs:
  - src/styles/**
  - src/components/ThemeToggle*
---

# テーマシステム

## 仕組み

1. **デフォルト**: `<html class="dark">` でダークモード
2. **切替**: `ThemeToggle` が `html` の class を `dark` ↔ `light` に切替
3. **永続化**: `localStorage("theme")` で保持
4. **ちらつき防止**: `Layout.astro` の `<head>` 内 inline script で初期テーマを即座に適用

## CSS 変数による色の切替

`global.css` で CSS 変数を定義し、`html.light` で上書き:

```css
/* デフォルト (ダーク) */
@theme {
  --color-bg-dark: #0a0a0a;
  --color-surface-dark: #141414;
  --color-border-dark: #262626;
}

/* ライトモード: 同じ変数名を上書き */
html.light {
  --color-bg-dark: #fafafa;
  --color-surface-dark: #ffffff;
  --color-border-dark: #e5e5e5;
}
```

**重要**: `bg-bg-dark` や `bg-surface-dark` のようなクラス名はダーク専用ではなく、CSS 変数経由で両モード対応。変数名がやや紛らわしいが、全コンポーネントで統一されている。

## テーマ切替アニメーション (View Transitions API)

`ThemeToggle.tsx` に全ロジックを集約:

- クリック位置から `clip-path: circle()` で円形に展開/収縮
- Dark→Light: `::view-transition-new(root)` が広がる
- Light→Dark: `::view-transition-old(root)` が縮む
- CSS は `useEffect` で `<style>` タグとして注入
- View Transitions API 非対応ブラウザは即時切替にフォールバック

## neutral カラーの反転

ライトモードでは `--color-neutral-*` を反転定義して、テキスト色を自動で調整:

```css
html.light {
  --color-neutral-100: #171717;  /* dark では白に近い → light では黒に近い */
  --color-neutral-500: #737373;  /* 中間は維持 */
}
```
