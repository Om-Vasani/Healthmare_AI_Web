const API_BASE =
  process.env.REACT_APP_AI_BACKEND ||
  "https://healthmare-ai-web-pogh.vercel.app"; // 🔹 તારો live backend URL

export async function getAIReply(message) {
  const res = await fetch(`${API_BASE}/ai/reply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error("AI error: " + text);
  }

  const j = await res.json();
  return j.reply;
}
