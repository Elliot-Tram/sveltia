#!/bin/bash
# Post-deploy script: notify search engines of sitemap updates
# Usage: ./scripts/ping-search-engines.sh

SITE_URL="https://sveltia.fr"
SITEMAP_URL="${SITE_URL}/sitemap.xml"
INDEXNOW_KEY="be6dc13a828f59b4c5ec4324ba560634"

echo "Pinging Google sitemap..."
curl -s -o /dev/null -w "Google: HTTP %{http_code}\n" \
  "https://www.google.com/ping?sitemap=${SITEMAP_URL}"

echo "Pinging Bing sitemap..."
curl -s -o /dev/null -w "Bing: HTTP %{http_code}\n" \
  "https://www.bing.com/ping?sitemap=${SITEMAP_URL}"

echo "Pinging IndexNow (Bing)..."
curl -s -o /dev/null -w "IndexNow: HTTP %{http_code}\n" \
  "https://api.indexnow.org/indexnow?url=${SITE_URL}&key=${INDEXNOW_KEY}"

echo "Done."
