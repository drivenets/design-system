#!/usr/bin/env bash
# Usage: upload-screenshots.sh AR-1234 before-x.png after-x.png [...]
set -euo pipefail

if [ $# -lt 2 ]; then
	echo "Usage: $0 AR-XXXX <file.png> [file.png ...]" >&2
	exit 1
fi

ticket=$1
shift
branch=pr-screenshots
slug=$(gh repo view "$(git remote get-url origin)" --json nameWithOwner -q .nameWithOwner)

if [ "$slug" = drivenets/design-system ]; then
	echo "origin is upstream; push screenshots to your fork" >&2
	exit 1
fi

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
export GIT_INDEX_FILE=$tmp/index

parent=
if git fetch -q origin "$branch" 2>/dev/null; then
	parent=$(git rev-parse FETCH_HEAD)
	git read-tree "$parent"
else
	git read-tree --empty
fi

for file in "$@"; do
	blob=$(git hash-object -w "$file")
	git update-index --add --cacheinfo 100644 "$blob" "$ticket/$(basename "$file")"
done

tree=$(git write-tree)
commit=$(git commit-tree "$tree" ${parent:+-p "$parent"} -m "chore: add $ticket screenshots [$ticket]")
git push -q origin "${commit}:refs/heads/${branch}"

for file in "$@"; do
	echo "https://raw.githubusercontent.com/${slug}/${commit}/${ticket}/$(basename "$file")"
done
