# StackSherpa

An advanced issue tracking system built with modern web technologies.

## Features (Planned)

- JWT-based authentication with refresh token rotation
- Role-based access control
- Real-time dashboard with WebSocket updates
- Tree-based visualization of issue dependencies
- Interactive Kanban board
- Team collaboration with graphs and relationship visualization
- Performance optimized React components

## Tech Stack

### Frontend
- React with TypeScript
- Vite for fast development
- React Query for server state management
- React Router for navigation
- Axios for API requests

### Backend
- Node.js with Express
- TypeScript for type safety
- MongoDB with Mongoose
- JWT for authentication
- WebSockets for real-time features

### DevOps
- GitHub Actions for CI/CD
- Docker for containerization
- Automated testing

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository

git clone https://github.com/poluruhemu/StackSherpa.git
cd StackSherpa

2. Install dependencies

Install client dependencies
cd client
npm install
Install server dependencies
cd ../server
npm install

3. Set up environment variables
Create `.env` file in the server directory with:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_token_secret

4. Run the application

Run client (from client directory)
npm run dev
Run server (from server directory)
npm run dev

## Development Roadmap

- [x] Project setup
- [ ] User authentication with JWT
- [ ] Role-based access control
- [ ] Issue tracking core functionality
- [ ] Real-time dashboard
- [ ] Tree visualization of issues
- [ ] Team collaboration features
- [ ] Advanced search and filtering
- [ ] Testing and deployment