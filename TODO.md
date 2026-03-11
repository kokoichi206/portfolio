# Portfolio TODO

## Tech Stack

- Astro + React (islands)
- Tailwind CSS v4
- Framer Motion (React islands)
- Cloudflare Pages
- pnpm

---

## Non-Functional Requirements

### Responsive (SP対応)

- [ ] Mobile-first で設計する（Bento Grid は SP で 1列、Tablet で 2列、Desktop で 3-4列）
- [ ] 全セクション SP で崩れないことを確認
- [ ] タッチ操作を考慮（hover エフェクトは SP では表示しない or tap に変換）
- [ ] フォントサイズ・余白を SP 用に調整

### Dark / Light Mode

- [ ] ダークモードをデフォルト
- [ ] ライトモードへの切替ボタンを配置（ヘッダー or フローティング）
- [ ] Tailwind の dark mode (class strategy) を使用
- [ ] OS の prefers-color-scheme も尊重する（初回訪問時）
- [ ] LocalStorage でユーザーの選択を保持
- [ ] 切替時のちらつき防止（inline script で初期化）

### Testing

- [ ] React コンポーネントの単体テスト (Vitest + Testing Library)
- [ ] Storybook で React island コンポーネントを管理
  - BentoCard, ThemeToggle, SkillBadge, ProjectCard, TimelineItem 等
- [ ] Storybook の interaction tests も活用
- [ ] e2e は不要（ページ数少・認証なし・フォームなし）

### Design / Branding

- [ ] Accent color: #F19DB5 (桜坂ピンク)
  - hover, リンク, ボタン, アクティブ状態, グラデーション等に使用
  - ダーク/ライト両方で映える明度調整（ダークではそのまま、ライトではやや濃く）
- [ ] Tailwind config で `sakura` カラーパレットを定義
  - sakura-50 ~ sakura-900 のスケール生成
- [ ] favicon: 桜モチーフ or イニシャル
- [ ] OGP 画像: サイト共有時のプレビュー画像を作成

---

## Performance / SEO

- [ ] Lighthouse 全項目 95+ を目標（Astro なのでほぼ達成可能）
- [ ] 画像は全て WebP/AVIF + lazy loading（Astro の Image コンポーネント）
- [ ] フォントは `font-display: swap` + サブセット化
- [ ] meta tags: title, description, og:image を全ページに設定
- [ ] sitemap.xml 自動生成 (@astrojs/sitemap)
- [ ] robots.txt
- [ ] canonical URL 設定
- [ ] JSON-LD 構造化データ（Person schema）

---

## Accessibility

- [ ] セマンティック HTML（header, main, nav, section, article）
- [ ] キーボードナビゲーション対応
- [ ] カラーコントラスト比 WCAG AA 以上（特に #F19DB5 の上のテキスト）
- [ ] alt テキスト（プロジェクトスクショ等）
- [ ] skip to content リンク
- [ ] aria-label（テーマ切替ボタン等）

---

## Infrastructure

- [ ] Cloudflare Pages 設定
- [ ] カスタムドメイン kokoichi0206.work 接続
- [ ] GitHub Actions CI: lint + test + build
- [ ] ブログ RSS 定期リビルド（Cloudflare cron trigger or GitHub Actions schedule）
- [ ] \_headers ファイルで Cache-Control / Security Headers 設定

---

## Content Implementation

- [ ] /data 配下に JSON ファイル作成
  - profile.json
  - skills.json
  - certifications.json
  - experience.json
  - projects.json
  - writing.json
- [ ] RSS fetch (hatena + zenn) をビルド時に実行
- [ ] GitHub contributions graph の取得（GitHub API or SVG embed）

---

## Pages

- [ ] / (トップ: Bento Grid レイアウト)
- [ ] /projects (optional: 個別プロジェクト詳細ページ)
- [ ] 404 ページ

---

## Polish (最後の仕上げ)

- [ ] スクロールアニメーション（Framer Motion whileInView）
- [ ] ページ遷移アニメーション（View Transitions API - Astro built-in）
- [ ] スムーズスクロール
- [ ] Loading 状態（フォント読み込み完了まで）
- [ ] 印刷用スタイル（レジュメとして印刷される可能性）
- [ ] 各ブラウザ確認（Chrome, Safari, Firefox）
