#!/usr/bin/env bash
# Usage: upload-screenshots.sh [--repo owner/name] [--branch name] AR-1234 before-x.png after-x.png [...]
# --repo: the fork to push to when it isn't origin (Routines, whose origin is drivenets/design-system).
set -euo pipefail

branch=pr-screenshots
repo=
while [ $# -gt 0 ]; do
	case $1 in
		--repo)
			repo=$2
			shift 2
			;;
		--branch)
			branch=$2
			shift 2
			;;
		*) break ;;
	esac
done

if [ $# -lt 2 ]; then
	echo "Usage: $0 [--repo owner/name] [--branch name] AR-XXXX <file.png> [file.png ...]" >&2
	exit 1
fi

ticket=$1
shift
origin_url=$(git remote get-url origin)

if [ -n "$repo" ]; then
	slug=$repo
	# Same host and auth as origin, other repo: works for SSH, HTTPS and the cloud git proxy.
	remote=$(sed -E "s#[^/:]+/[^/]+\$#${repo}#" <<<"$origin_url")
else
	slug=$(gh repo view "$origin_url" --json nameWithOwner -q .nameWithOwner)
	remote=origin
fi

if [ "$slug" = drivenets/design-system ]; then
	echo "target is upstream; push screenshots to your fork (Routines: pass --repo)" >&2
	exit 1
fi

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
export GIT_INDEX_FILE=$tmp/index

parent=
if git fetch -q "$remote" "$branch" 2>/dev/null; then
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
git push -q "$remote" "${commit}:refs/heads/${branch}"

for file in "$@"; do
	echo "https://raw.githubusercontent.com/${slug}/${commit}/${ticket}/$(basename "$file")"
done
