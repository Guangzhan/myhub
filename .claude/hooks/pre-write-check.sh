#!/bin/bash
# Pre-write check hook - blocks writes to protected files
# Exit 2 = blocked, Exit 0 = allowed

py -3 -c "
import sys, json

try:
    data = json.load(sys.stdin)
except:
    sys.exit(0)

file_path = data.get('file_path', '')
if not file_path:
    sys.exit(0)

# Extract basename for fuzzy matching
import os
basename = os.path.basename(file_path)

# Protected files with fuzzy matching (filename contains)
protected = {
    'next.config.mjs': 'Next.js core config, wrong changes break builds',
    'package-lock.json': 'dependency lock file, should not be manually edited',
}

# Check by basename
for protected_file, reason in protected.items():
    if protected_file in basename:
        print(f'BLOCKED: {file_path}', file=sys.stderr)
        print(f'Reason: {reason}', file=sys.stderr)
        sys.exit(2)

# Check .env files (starts with .env or .env.local)
if basename.startswith('.env'):
    print(f'BLOCKED: {file_path}', file=sys.stderr)
    print(f'Reason: contains sensitive information', file=sys.stderr)
    sys.exit(2)

sys.exit(0)
"