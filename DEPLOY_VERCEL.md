# 🚀 Deploy UCP Demo to Vercel (Live Server)

## Quick Deploy (Easiest)

### Step 1: Click Deploy Button
Click this button: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNitish1711%2Fucp-demo&project-name=ucp-demo&repo-name=ucp-demo)

### Step 2: Follow Vercel Prompts
- Sign in with GitHub (if not already)
- Review project settings
- Click "Deploy"

### Step 3: Done! ✅
Vercel will automatically:
- Build your project
- Start your Node.js server
- Provide you a live URL

**Your app will be live in ~2 minutes!**

---

## Manual Deployment (3 Steps)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This opens a browser to authenticate with Vercel.

### Step 3: Deploy
```bash
cd D:\nitis\Desktop\UCP_Project\ucp-demo1
vercel
```

**Follow the prompts:**
```
? Set up and deploy "D:\nitis\Desktop\UCP_Project\ucp-demo1"? [Y/n] y
? Which scope do you want to deploy to? (Your account or team)
? Link to existing project? [y/N] n
? What's your project's name? ucp-demo
? In which directory is your code located? ./
? Want to modify these settings? [y/N] n

✅ Project ready for deployment!
🔗 Vercel assigned you a project URL
```

---

## After Deployment

### Your Live URL
You'll get a URL like:
```
https://ucp-demo.vercel.app
```

### Test Your Live Server
```bash
# Test the discovery endpoint
curl https://ucp-demo.vercel.app/.well-known/ucp | jq

# Test products
curl https://ucp-demo.vercel.app/api/shopping/products | jq

# Test health
curl https://ucp-demo.vercel.app/health | jq
```

### Access the Web UI
Visit: `https://ucp-demo.vercel.app`

You should see the interactive demo with:
- ✅ Discovery endpoint information
- ✅ Product listing
- ✅ Checkout demo
- ✅ Sample transactions

---

## Troubleshooting

### Build Fails
**Error**: "Cannot find module"
**Solution**:
```bash
npm install
npm run build
vercel --prod
```

### Port Issues
Vercel automatically handles port allocation. No need to set PORT.

### Environment Variables
If you need environment variables:
1. Go to Vercel dashboard
2. Select your project
3. Settings → Environment Variables
4. Add your variables
5. Redeploy

### View Logs
```bash
vercel logs
```

### Rebuild
```bash
vercel --prod
```

---

## Automatic Deployments

**Enable Auto-Deploy:**
1. Go to [vercel.com](https://vercel.com)
2. Select your project
3. Go to Settings → Git Integration
4. Enable automatic deployments
5. Now every `git push` automatically deploys!

---

## Alternative Platforms

### Railway.app
1. Go to https://railway.app
2. New Project → Deploy from GitHub
3. Select your repo
4. Done!

### Render.com
1. Go to https://render.com
2. Create new → Web Service
3. Connect your GitHub repo
4. Set build command: `npm run build`
5. Set start command: `npm start`
6. Deploy!

---

## GitHub Pages Alternative

If you really want to use GitHub Pages, you need a static build:

**Create gh-pages branch:**
```bash
git checkout -b gh-pages
npm run build
cp -r src/public/* ./
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

**But this ONLY serves static files!** The Node.js server won't run.

---

## What NOT to Do

❌ Deploy to GitHub Pages expecting Node.js to run
❌ Use GitHub Pages for dynamic APIs
❌ Try to run `npm start` on GitHub Pages

**GitHub Pages = Static Site Hosting Only**
**Vercel = Node.js Server Hosting**

---

## Summary

| Step | Action | Time |
|------|--------|------|
| 1 | Click Deploy Button | 5 sec |
| 2 | Sign in to Vercel | 30 sec |
| 3 | Review settings | 1 min |
| 4 | Click Deploy | 2 min |
| **Total** | **Your server is live!** | **~4 minutes** |

---

## Your Live Server Commands

Once deployed, test with:

```bash
# Replace with your actual Vercel URL
YOUR_URL="https://ucp-demo.vercel.app"

# Test discovery
curl $YOUR_URL/.well-known/ucp | jq

# Test products
curl $YOUR_URL/api/shopping/products | jq

# Test health
curl $YOUR_URL/health | jq

# Test checkout
curl -X POST $YOUR_URL/api/shopping/checkout-sessions \
  -H "Content-Type: application/json" \
  -d '{
    "line_items": [
      {"item": {"id": "ai-voice-assistant"}, "quantity": 1}
    ],
    "currency": "USD",
    "payment": {
      "selected_instrument_id": "mock-instrument-1",
      "instruments": [
        {"id": "mock-instrument-1", "handler_id": "mock-payment-handler", "type": "token"}
      ]
    }
  }' | jq
```

---

## Next Steps

1. ✅ Click the Vercel Deploy button
2. ✅ Sign in with GitHub
3. ✅ Let Vercel build and deploy
4. ✅ Share your live URL: `https://your-ucp-demo.vercel.app`
5. ✅ Every `git push` auto-deploys!

---

**Your UCP Demo is now LIVE on the internet!** 🚀

**Share your live URL with anyone!**

