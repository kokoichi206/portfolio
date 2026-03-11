#!/bin/bash
# PostToolUse hook: run oxfmt + oxlint on edited .ts/.tsx files

file_path=$(jq -r '.tool_input.file_path')

# Only process .ts/.tsx files
if ! echo "$file_path" | grep -qE '\.(ts|tsx)$'; then
  exit 0
fi

# Skip if file doesn't exist (e.g. deleted)
if [ ! -f "$file_path" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR" || exit 0

npx oxfmt "$file_path" 2>&1
npx oxlint -c oxlint.json "$file_path" 2>&1
