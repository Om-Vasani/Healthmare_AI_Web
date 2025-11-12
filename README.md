HealthMate AI — Full System (React + Flask + Firebase)
=====================================================

This package contains:
- frontend-react/: React + Vite demo (50 screens) with Firebase & AI integration examples.
- backend-flask/: Flask API that proxies to OpenAI (example).

Frontend quickstart:
1. cd frontend-react
2. cp .env.example .env.local and fill values (or set env vars in Vercel)
3. npm install
4. npm run dev
5. Open http://localhost:5173

Backend quickstart:
1. cd backend-flask
2. cp .env.example .env and set OPENAI_API_KEY
3. pip install -r requirements.txt
4. python app.py
5. Backend runs on http://127.0.0.1:5000

Deployment:
- Deploy backend on Render/Railway. Use Procfile or gunicorn as start command.
- Deploy frontend to Vercel and set env vars including REACT_APP_AI_BACKEND pointing to backend URL.

Security:
- Never commit real API keys to public repos.
- Use deployment platform env vars for secrets.
