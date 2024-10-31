# Relilert

![Relilert Logo](https://res.cloudinary.com/dc3apwy48/image/upload/v1730382313/d33tzkwfyzex2naa7jgu.png)

Relilert is a comprehensive uptime monitoring service that helps you track the availability of your services in real-time, ensuring high availability and reliability for your applications.

## 🌟 Features

### Real-time Monitoring
- Instant downtime detection
- Continuous availability tracking
- Performance metrics monitoring
- Real-time status updates

### Multiple Monitor Types
- **HTTP/HTTPS** - Monitor web applications and APIs
- **TCP** - Track TCP port availability
- **MongoDB** - Monitor database connectivity
- **Redis** - Track cache service status
- **SSL/TLS** - Certificate monitoring and expiration alerts

### Smart Alerting
- Customizable alert thresholds
- Multiple notification channels
- Instant notification delivery
- Group-based alert management

## 📊 Dashboard Features

### Uptime Monitoring
- Real-time status display
- Uptime percentage tracking
- Response time monitoring
- Custom test frequencies (10s to 24h)
- Comprehensive test history

### SSL Certificate Monitoring
- Certificate validity tracking
- Expiration notifications
- Issuer information
- Remaining days display
- Auto-renewal reminders

## 🔧 Monitor Configuration Options

### HTTP/HTTPS Monitor
- Custom HTTP methods (GET, POST, PUT, PATCH, DELETE, HEAD)
- Request headers customization
- Request body configuration
- Authentication support
- Redirect control
- Custom timeout settings
- Response assertions:
  - Status code validation
  - Response time thresholds
  - Content-type verification

### TCP Monitor
- Host and port monitoring
- Custom timeout settings
- Connection state verification
- Response time tracking

### Redis Monitor
- Connection string monitoring
- Authentication support
- Response time tracking
- Custom alert thresholds

### MongoDB Monitor
- Connection string verification
- Database connectivity checks
- Authentication validation
- Custom alert thresholds

### SSL/TLS Monitor
- Certificate validity checking
- Expiration monitoring
- Custom check frequencies
- Automated alerts for expiring certificates

## 👥 Contact Groups
- Email notification support
- Multiple recipient management
- Group-based alert routing
- Custom notification preferences

## 🚀 Getting Started

1. Create a free account at [Relilert](https://relilert.com)
2. Set up your first monitor:
   - Choose monitor type
   - Configure monitor settings
   - Set up alert thresholds
   - Add notification groups
3. Start monitoring!

## 💻 Monitor Creation States
- **Running**: Monitor starts immediately after creation
- **Paused**: Monitor remains inactive until manually started

## ⚙️ Heartbeat Frequencies
- 10 seconds
- 30 seconds
- 1 minute
- 5 minutes
- 15 minutes
- 30 minutes
- 1 hour
- 24 hours

## 📈 Status Indicators
- 🟢 Operational
- 🟡 Warning
- 🔴 Down
- ⚫ Paused


## 📥 Installation

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- Redis
- MongoDB
- PM2 (for production deployment)

### Frontend Setup (Next.js + GraphQL)
1. Clone the repository:
```bash
git clone https://github.com/JohnOlshea/relilert.git
cd relilert/client
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```env
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
NEXT_PUBLIC_GRAPHQL_WS_URL=ws://localhost:4000/graphql
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
```

4. Run development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
npm start
```

### Backend Setup (Node.js + GraphQL + PostgreSQL)
1. Navigate to server directory:
```bash
cd relilert/server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
# Server
PORT=4000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=relilert
DB_USER=your_db_user
DB_PASSWORD=your_db_password

# Redis
REDIS_URL=redis://localhost:6379

# MongoDB
MONGODB_URL=mongodb://localhost:27017/relilert

# JWT
JWT_SECRET=your_jwt_secret

# Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASSWORD=your_smtp_password
```

4. Set up the database:
```bash
# Create PostgreSQL database
createdb relilert
```

5. Run development server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

7. Start production server with PM2:
```bash
npm start
```


## 🛠️ Tech Stack
- **Frontend**:
  - Next.js 15.0.2
  - React 19
  - Apollo Client
  - GraphQL
  - TailwindCSS
  - Chart.js
  - TypeScript

- **Backend**:
  - Node.js
  - Express
  - Apollo Server
  - GraphQL
  - PostgreSQL
  - Redis
  - MongoDB
  - TypeScript
  - PM2 for process management

## 🔗 Links
- [Website](https://relilert-client.onrender.com/)

## 🤝 Contributing
Contributions are very welcome! Whether it's bug reports, feature suggestions, or pull requests, all input helps make this project better for everyone.