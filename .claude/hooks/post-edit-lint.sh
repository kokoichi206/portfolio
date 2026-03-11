#!/bin/bash
# PostToolUse hook: run oxfmt + oxlint on edited .ts/.tsx files
#
# Exit 2 + stderr = Claude receives feedback and can fix issues
# See: https://code.claude.com/docs/en/hooks#exit-codes

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

# oxfmt: auto-fix formatting in place
npx oxfmt "$file_path" > /dev/null 2>&1

# oxlint: check for errors
lint_output=$(npx oxlint -c oxlint.json "$file_path" 2>&1)
lint_exit=$?

if [ $lint_exit -ne 0 ]; then
  echo "oxlint errors in $file_path — fix these issues:" >&2
  echo "$lint_output" >&2
  exit 2
fi

exit 0
