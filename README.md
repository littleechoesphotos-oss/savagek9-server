# Savage K9 — Production API Server

This repository contains the compiled production backend for the Savage K9 mobile app.

## Deployment

Deployed on Render.com (Starter plan — always-on, no sleep).

## Health Check

```
GET /api/health
→ { "ok": true, "timestamp": 1234567890 }
```

## Environment Variables Required

| Variable | Description |
|---|---|
| `DATABASE_URL` | TiDB Cloud MySQL connection string |
| `JWT_SECRET` | Cookie/session signing secret |
| `VITE_APP_ID` | Manus app ID |
| `OAUTH_SERVER_URL` | Manus OAuth server URL |
| `OWNER_OPEN_ID` | Owner's Manus Open ID |
| `BUILT_IN_FORGE_API_URL` | Manus AI API URL |
| `BUILT_IN_FORGE_API_KEY` | Manus AI API key |
| `NODE_ENV` | Set to `production` |
| `PORT` | Set to `3000` |

## Updating the Server

To deploy a new version:
1. Rebuild in Manus: `node_modules/.bin/esbuild server/_core/index.ts --platform=node --packages=external --bundle --format=cjs --outfile=index.js`
2. Copy the new `index.js` to this repo
3. `git add index.js && git commit -m "Update server" && git push`
4. Render auto-deploys on push
