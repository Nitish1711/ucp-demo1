# UCP Demo - Universal Commerce Protocol

A production-ready implementation of the [Universal Commerce Protocol (UCP)](https://ucp.dev), showcasing a complete UCP-compliant merchant server with checkout capabilities.

**Status**: ✅ Production Ready | **Created by**: [Nitish1711](https://github.com/Nitish1711)

---

## 🎯 What is UCP?

Universal Commerce Protocol (UCP) is an open standard that enables seamless commerce interoperability between platforms, AI agents, and businesses. This demo shows how to build a merchant compatible with any UCP-compliant platform.

---

## 🚀 Quick Start (60 Seconds)

### Prerequisites
- **Node.js** 20+
- **npm** or yarn

### Installation & Run

```bash
# Clone
git clone https://github.com/Nitish1711/ucp-demo.git
cd ucp-demo

# Install
npm install

# Development (with hot reload)
npm run dev

# Production
npm run build && npm start
```

Visit **http://localhost:3000** to see the demo!

---

## ▶️ Run Directly

### Option 1: Run Locally (Fastest)
```bash
npm install && npm run dev
```
Then open: **[http://localhost:3000](http://localhost:3000)**

### Option 2: Run with Docker
```bash
docker build -t ucp-demo . && docker run -p 3000:3000 ucp-demo
```
Then open: **[http://localhost:3000](http://localhost:3000)**

### Option 3: Deploy & Run Online (No Local Setup)

#### Vercel (Recommended - 1 Click Deploy)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNitish1711%2Fucp-demo)

#### Railway (Quick Deploy)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2FNitish1711%2Fucp-demo)

### Option 4: Run Test Client
```bash
npm install
npm run client
```
Automatically tests the complete checkout flow.

---

## 🎥 Demo Video

Watch the UCP Demo in action:

[![UCP Demo Video](https://img.shields.io/badge/Watch-Demo%20Video-FF0000?style=for-the-badge&logo=youtube)](./Recording%202026-02-18%20101550.mp4)

This video shows:
- ✅ Starting the server
- ✅ Accessing the discovery endpoint
- ✅ Creating a checkout session
- ✅ Completing a purchase
- ✅ Full API workflow

---

## 📡 API Endpoints

### Discovery Endpoint (Main Entry Point)
```bash
GET /.well-known/ucp
```
Returns merchant's UCP profile with capabilities, payment handlers, and API endpoints.

### Checkout API
```bash
POST   /api/shopping/checkout-sessions              # Create checkout
GET    /api/shopping/checkout-sessions/:id          # Get checkout
PUT    /api/shopping/checkout-sessions/:id          # Update checkout
POST   /api/shopping/checkout-sessions/:id/complete # Complete order
POST   /api/shopping/checkout-sessions/:id/cancel   # Cancel checkout
GET    /api/shopping/products                       # List products
GET    /health                                      # Health check
```

---

## 🧪 Testing the API

### Test Discovery Endpoint
```bash
curl http://localhost:3000/.well-known/ucp | jq
```

### View Products
```bash
curl http://localhost:3000/api/shopping/products | jq
```

### Create Checkout Session
```bash
curl -X POST http://localhost:3000/api/shopping/checkout-sessions \
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

### Complete Checkout
```bash
# Replace {SESSION_ID} with the id from previous response
curl -X POST http://localhost:3000/api/shopping/checkout-sessions/{SESSION_ID}/complete \
  -H "Content-Type: application/json" \
  -d '{
    "payment_data": {
      "handler_id": "mock-payment-handler",
      "token": "success_token"
    }
  }' | jq
```

### Run Demo Client
```bash
npm run client
```
Runs automated test of complete checkout flow.

---

## 💳 Payment Testing

Mock payment handler accepts test tokens:
- `success_token` - ✅ Payment succeeds
- `fail_token` - ❌ Payment fails

---

## 🛍️ Sample Products

1. **AI Voice Assistant** - $89.99
2. **Neural Earbuds Pro** - $149.99
3. **AI Smart Glasses** - $299.99
4. **Robot Companion** - $199.99
5. **Brain Band** - $129.99 (out of stock)

---

## 📁 Project Structure

```
src/
├── server.ts           # Main server setup
├── index.ts            # Hono app configuration
├── discovery.ts        # UCP Discovery endpoint
├── checkout.ts         # Checkout API endpoints
├── data.ts             # Product catalog & storage
├── types.ts            # TypeScript types
├── client.ts           # Demo test client
└── public/
    ├── index.html      # Web UI
    ├── app.js          # Browser app logic
    └── styles.css      # Styling

dist/                   # Compiled JavaScript
package.json            # Dependencies
tsconfig.json           # TypeScript config
Dockerfile              # Docker containerization
docker-compose.yml      # Docker Compose setup
.env.example            # Configuration template
```

---

## 🐳 Docker Deployment

### Build Docker Image
```bash
docker build -t ucp-demo .
```

### Run Container
```bash
docker run -p 3000:3000 ucp-demo
```

### Docker Compose
```bash
docker-compose up
```

---

## 🚢 Deploy to Production

### Vercel (1 Click) ⭐ Recommended
1. Push to GitHub: `git push origin main`
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Deploy! 🎉

### Railway (Easy)
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select your repository
4. Done! 🎉

### Docker (Your Server)
```bash
docker build -t ucp-demo .
docker run -d -p 3000:3000 --name ucp-demo ucp-demo
```

### Environment Variables
```bash
PORT=3000              # Server port (default: 3000)
NODE_ENV=production    # Set to production
```

---

## 🔧 Technology Stack

- **Runtime**: Node.js 20+
- **Framework**: Hono (lightweight web framework)
- **Language**: TypeScript (full type safety)
- **API**: REST with JSON
- **Deployment**: Docker, Vercel, Railway, or any Node.js host

---

## ✨ Features

✅ **UCP Compliant** - Full protocol implementation
✅ **Discovery Endpoint** - /.well-known/ucp
✅ **Checkout API** - 5 complete endpoints
✅ **Products Catalog** - 5 sample items
✅ **Mock Payments** - Test success/fail flows
✅ **Web UI** - Interactive demo
✅ **CLI Client** - Automated testing
✅ **TypeScript** - Full type safety
✅ **Docker Ready** - Containerized
✅ **CORS Enabled** - Browser compatible
✅ **Health Checks** - Production monitoring
✅ **Error Handling** - Proper HTTP codes
✅ **Input Validation** - All fields validated
✅ **Environment Config** - Configurable via .env

---

## 📝 Development

### Development Mode
```bash
npm run dev
```
Auto-reloading server on file changes.

### Build
```bash
npm run build
```
Compiles TypeScript to JavaScript in `dist/` folder.

### Production
```bash
npm run build
npm start
```

---

## 🔒 Security

✅ No hardcoded secrets
✅ Environment variables for sensitive data
✅ CORS properly configured
✅ Input validation on all endpoints
✅ Proper error messages (no data leaks)
✅ Type safety with TypeScript
✅ No debug mode in production

---

## 📚 API Response Examples

### Discovery Profile
```json
{
  "ucp": {
    "version": "2026-01-11",
    "services": {
      "dev.ucp.shopping": {
        "version": "2026-01-11",
        "rest": {
          "endpoint": "http://localhost:3000/api/shopping"
        },
        "capabilities": [
          {
            "name": "dev.ucp.shopping.checkout",
            "version": "2026-01-11"
          }
        ]
      }
    }
  },
  "payment": {
    "handlers": [
      {
        "id": "mock-payment-handler",
        "name": "Mock Payment (Testing)",
        "type": "first_party",
        "supported_tokens": ["success_token", "fail_token"]
      }
    ]
  }
}
```

### Checkout Response
```json
{
  "ucp": {
    "version": "2026-01-11",
    "capabilities": [
      {
        "name": "dev.ucp.shopping.checkout",
        "version": "2026-01-11"
      }
    ]
  },
  "id": "uuid-string",
  "status": "ready_for_complete",
  "line_items": [
    {
      "id": "item-uuid",
      "item": {
        "id": "ai-voice-assistant",
        "name": "AI Voice Assistant"
      },
      "quantity": 1,
      "unit_price": 8999,
      "total_price": 8999
    }
  ],
  "currency": "USD",
  "totals": {
    "subtotal": 8999,
    "tax": 787,
    "shipping": 599,
    "discount": 0,
    "total": 10385
  },
  "payment": {
    "selected_instrument_id": "mock-instrument-1",
    "status": "pending"
  }
}
```

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Use different port
PORT=3001 npm run dev
```

### Build Fails
```bash
# Clean and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Docker Issues
```bash
# Remove old containers
docker rm -f ucp-demo
docker build -t ucp-demo .
docker run -p 3000:3000 ucp-demo
```

### CORS Issues
- ✅ CORS is enabled for all origins
- Check browser console for specific errors

---

## 📖 Learn More

- [UCP Specification](https://ucp.dev)
- [Hono Framework](https://hono.dev)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📄 License

MIT - Feel free to use this as a starting point for your own UCP implementation.

---

## 🤝 Contributing

Found a bug? Have a feature request?
- Open an issue on GitHub
- Submit a pull request
- Contact the developer

---

## 👤 Author

**[Nitish1711](https://github.com/Nitish1711)**

- GitHub: https://github.com/Nitish1711
- UCP Demo: https://github.com/Nitish1711/ucp-demo

---

## 🎯 Next Steps

1. ✅ Clone the repository
2. ✅ Install dependencies: `npm install`
3. ✅ Start development server: `npm run dev`
4. ✅ Visit http://localhost:3000
5. ✅ Test the discovery endpoint: `curl http://localhost:3000/.well-known/ucp`
6. ✅ Deploy to production
7. ✅ Customize for your needs

---

**Ready to build with UCP?** Start here! 🚀


