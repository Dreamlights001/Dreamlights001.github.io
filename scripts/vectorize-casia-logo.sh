#!/usr/bin/env bash

set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_dir="$(cd -- "$script_dir/.." && pwd)"
input="${1:-/home/dlts/Downloads/CASIA.jpg}"
output="${2:-$repo_dir/assets/casia-emblem.svg}"
work_dir="$(mktemp -d)"

cleanup() {
    rm -rf "$work_dir"
}
trap cleanup EXIT

if [[ ! -f "$input" ]]; then
    printf 'Input image not found: %s\n' "$input" >&2
    exit 1
fi

# Quantize before tracing so JPEG ringing does not become extra vector layers.
npx --yes sharp-cli@5.2.0 \
    -i "$input" \
    -o "$work_dir/quantized.png" \
    -f png \
    --palette \
    --colours 3 \
    --dither 0

npx --yes @neplex/vectorizer@0.1.0 \
    "$work_dir/quantized.png" \
    "$work_dir/vectorized.svg" \
    --preset poster \
    --color-precision 8 \
    --filter-speckle 1 \
    --layer-difference 8 \
    --hierarchical stacked \
    --mode spline \
    --corner-threshold 70 \
    --length-threshold 2 \
    --max-iterations 10 \
    --splice-threshold 45 \
    --path-precision 3 \
    --optimize \
    --multipass \
    --multipass-iterations 5

# Add a scalable viewBox and remove the quantized full-canvas background.
perl -0pe '
    s/width="(\d+)" height="(\d+)"/viewBox="0 0 $1 $2"/;
    s{<path fill="#[0-9a-fA-F]{6}" d="M0 0h\d+v\d+H0Z"/>}{};
' \
    "$work_dir/vectorized.svg" > "$output"

printf 'Wrote %s\n' "$output"
