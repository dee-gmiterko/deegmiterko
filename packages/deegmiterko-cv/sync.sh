#!/bin/bash
for f in 2026/*/*.pdf; do
  d="/home/ienze/Sync/CVs/$(basename "$(dirname "$f")")"
  mkdir -p "$d"
  cp "$f" "$d/"
done
