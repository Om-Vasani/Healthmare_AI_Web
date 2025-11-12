const names = ["Splash", "Login", "Signup", "Home Dashboard", "Symptom Checker", "Diet & Wellness", "AI Chat", "Profile", "Settings", "Feedback", "Alerts", "Notification Center", "Plan Selection", "Language Switch", "Logout", "Health Records", "Medicine Reminder", "Water Tracker", "Sleep Monitor", "Steps Counter", "Stress Level Test", "Mood Tracker", "Doctor Connect", "Emergency SOS", "AI Diet Planner", "Blood Pressure Log", "Blood Sugar Log", "BMI Calculator", "Vaccine Tracker", "Women's Health", "Fitness Challenges", "Meditation", "Sleep Sounds", "Daily Motivation", "Data Sync", "AI Voice Chat", "Doctor AI Bot", "Prescription AI", "Health Report Generator", "Market Hub", "Supplement Store", "Subscription Plans", "Payment Gateway", "Order History", "AI Translator", "Analytics Dashboard", "Community Forum", "Help Center", "About Us", "Terms & Privacy"];

const screens = names.map((title, idx) => {
  const id = idx + 1
  const path = `/screen/${id}`
  return { id, title, path }
})

export default screens
