ユーザーの指示に基づいて `data/*.json` のコンテンツを更新してください。

## 対応する更新パターン

$ARGUMENTS

引数に応じて以下を判断:

- `profile` — プロフィール・タグライン・リンクの更新
- `skill` — スキルの追加・レベル変更・削除
- `cert` — 資格の追加
- `experience` — 職務経歴の追加・更新
- `project` — プロジェクトの追加・更新
- `writing` — ブログ統計の更新
- 引数なし — ユーザーに何を更新したいか質問

## 実行手順

### 1. 現在のデータ確認

更新対象の JSON ファイルを読み込み、現在の状態を確認する。

```bash
cat data/{対象}.json
```

### 2. 型定義の確認

`src/types/data.ts` を読み、対象の interface を確認する。JSON の構造がこの型に準拠していることを保証する。

### 3. データ更新

ユーザーの指示に基づいて JSON を編集する。

**注意事項:**

- JSON のフォーマットを崩さない (2 スペースインデント)
- 既存データの順序を不用意に変更しない
- 日付フォーマットは既存データに合わせる
  - certifications: `"YYYY/MM"` (例: `"2024/12"`)
  - experience.period: `"YYYY/MM~YYYY/MM"` または `"YYYY/MM~"` (現職)

#### パターン別の具体的な手順

**skill 追加:**

```json
// data/skills.json の languages 配列に追加
{ "name": "言語名", "years": 年数, "level": "main" | "sub" }
```

- `years` は整数または 0.5 刻み
- `level` は `"main"` (主力) または `"sub"` (補助)
- frameworks / infrastructure / databases / other は文字列配列

**cert 追加:**

```json
// data/certifications.json の配列先頭に追加 (新しい順)
{ "date": "YYYY/MM", "name": "正式名称", "abbr": "略称" }
```

**experience 追加:**

```json
// data/experience.json の配列先頭に追加 (新しい順)
{
  "period": "YYYY/MM~",
  "company": "会社名",
  "role": "役職",
  "description": "業務内容の説明",
  "tech": ["使用技術1", "使用技術2"]
}
```

**project 追加:**

```json
// data/projects.json の配列に追加
{
  "name": "プロジェクト名",
  "description": "説明",
  "tech": ["技術1", "技術2"],
  "github": "https://github.com/kokoichi206/xxx",
  "tier": 1 | 2
}
```

- `tier: 1` は Featured (大きいカード)、`tier: 2` は Secondary (小さいカード)
- `demo` フィールドはオプション

**writing 統計更新:**

```json
// data/writing.json の stats を更新
{
  "stats": {
    "hatenaCount": 記事数,
    "zennCount": 記事数,
    "tilCategories": カテゴリ数
  }
}
```

### 4. 検証

```bash
# JSON の構文チェック (node で parse できることを確認)
node -e "JSON.parse(require('fs').readFileSync('data/{対象}.json', 'utf8'))"

# 型チェック
pnpm check

# ビルド確認
pnpm build
```

### 5. 結果報告

更新内容のサマリーを表示:

- 何を変更したか
- 変更前 → 変更後 (diff)
- ビルドが通ったかどうか
