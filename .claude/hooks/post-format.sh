#!/bin/bash

# Read JSON from stdin, extract file_path, format if it's a code file
# Exit 0 always to not block PostToolUse

read -r json

file_path=$(echo "$json" | node -e "
  const stdin = require('fs').readFileSync(0, 'utf-8');
  try {
    const data = JSON.parse(stdin);
    console.log(data.file_path || '');
  } catch (e) {
    console.log('');
  }
")

if [[ -z "$file_path" ]]; then
  exit 0
fi

case "$file_path" in
  *.ts|*.tsx|*.js|*.jsx|*.mjs)
    if [[ -f "$file_path" ]]; then
      npx prettier --write "$file_path" 2>/dev/null
    fi
    ;;
esac

exit 0