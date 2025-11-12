from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests

app = Flask(__name__)
CORS(app)

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")

@app.route("/ai/reply", methods=["POST"])
def ai_reply():
    data = request.get_json() or {}
    message = data.get("message", "")
    if not message:
        return jsonify({"error":"no message"}), 400
    if not OPENAI_API_KEY:
        reply = f"(demo) Received: {message}. Deploy with OPENAI_API_KEY to get real responses."
        return jsonify({"reply": reply})
    try:
        headers = {"Authorization": f"Bearer {OPENAI_API_KEY}", "Content-Type": "application/json"}
        payload = {
            "model": "gpt-4o-mini",
            "messages": [{"role":"user","content": message}],
            "max_tokens": 400
        }
        r = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload, timeout=30)
        r.raise_for_status()
        data = r.json()
        reply = data["choices"][0]["message"]["content"]
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"error":"ai request failed","detail": str(e)}), 500

@app.route("/health/check", methods=["GET"])
def health():
    return jsonify({"status":"ok","env_set": bool(OPENAI_API_KEY)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
