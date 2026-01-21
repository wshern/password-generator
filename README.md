🛡️ Random Password Generator

A client-side random password generator built with HTML, CSS, and vanilla JavaScript, focused on correctness, security, and clean UX.

This project was developed as a structured learning exercise with a locked specification (Source of Truth) to practice building software against fixed requirements and knowing when to stop.

⸻

✨ Features
	•	Generate random passwords with a length between 6–30 characters
	•	Select allowed character types:
	•	Lowercase letters (a–z)
	•	Uppercase letters (A–Z)
	•	Numbers (0–9)
	•	Symbols (!@#$%&_+-=.?)
	•	Minimum 1 character automatically enforced for each selected type
	•	Unchecked character types are fully excluded
	•	Cannot deselect all character types (prevents invalid input)
	•	Password characters are:
	•	Generated using crypto-safe randomness
	•	Shuffled securely before display
	•	Click password to copy to clipboard
	•	Non-blocking tooltip feedback (no alerts)
	•	Responsive, centered UI

⸻

🔐 Security & Correctness
	•	Uses crypto.getRandomValues() for all randomness
	•	No use of Math.random()
	•	Repeated characters are allowed (by design)
	•	No backend, no persistence — all logic runs locally in the browser

⸻

🧩 Project Structure

password-generator/
├── index.html
├── style.css
├── index.js
└── icons/
    └── refresh.png


⸻

🧠 Design Decisions
	•	Hard-coded minimums
Users only select allowed character types; the generator enforces minimum inclusion automatically to avoid user-defined errors.
	•	No password strength meter (intentionally)
Strength meters were considered a stretch goal but excluded from v1.0 to avoid misleading or conflicting feedback.
	•	No backend
This project focuses purely on frontend logic, UI, and correctness.
	•	Stop at “done”
Once the specification was satisfied and UX polished, development stopped intentionally to avoid scope creep.

⸻

🚫 Non-Goals (v1.0)
	•	No password strength scoring
	•	No backend or database
	•	No user-defined minimums per character type
	•	No duplicate-character restrictions

⸻

🛠️ Technologies Used
	•	HTML5
	•	CSS3 (Flexbox, transitions)
	•	Vanilla JavaScript (ES6+)
	•	Web Crypto API

⸻

🚀 How to Use
	1.	Open index.html in a modern browser
	2.	Adjust password length using the slider
	3.	Select allowed character types
	4.	Click the refresh button to generate a new password
	5.	Click the password field to copy it to your clipboard

⸻

📌 Status

Version: v1.0
Status: Complete
Maintenance: No further development planned (learning project)

⸻

📝 License

This project is for learning and personal use.
No warranty or guarantees provided.
