"use strict";

(function () {
	const log = document.getElementById("chat-log");
	const form = document.getElementById("chat-form");
	const input = document.getElementById("chat-input");
	const suggestions = document.querySelectorAll("[data-prompt]");

	if (!log || !form || !input) return;

	const EMAIL = "shahiarusha@gmail.com";
	let audioCtx = null;

	function getAudioContext() {
		if (!audioCtx) {
			const AudioContext = window.AudioContext || window.webkitAudioContext;
			if (!AudioContext) return null;
			audioCtx = new AudioContext();
		}
		return audioCtx;
	}

	function playTone(frequency, duration, type, volume) {
		const ctx = getAudioContext();
		if (!ctx) return;

		if (ctx.state === "suspended") {
			ctx.resume();
		}

		const now = ctx.currentTime;
		const oscillator = ctx.createOscillator();
		const gain = ctx.createGain();

		oscillator.type = type || "sine";
		oscillator.frequency.setValueAtTime(frequency, now);

		gain.gain.setValueAtTime(0.0001, now);
		gain.gain.exponentialRampToValueAtTime(volume || 0.05, now + 0.01);
		gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

		oscillator.connect(gain);
		gain.connect(ctx.destination);

		oscillator.start(now);
		oscillator.stop(now + duration + 0.02);
	}

	function playSendSound() {
		playTone(520, 0.08, "triangle", 0.04);
		window.setTimeout(function () {
			playTone(680, 0.07, "triangle", 0.03);
		}, 40);
	}

	function playReceiveSound() {
		playTone(420, 0.1, "sine", 0.045);
		window.setTimeout(function () {
			playTone(560, 0.12, "sine", 0.035);
		}, 70);
	}

	function addMessage(text, role) {
		const row = document.createElement("div");
		row.className = "contact-chat-msg contact-chat-msg--" + role;

		const label = document.createElement("span");
		label.className = "contact-chat-label";
		label.textContent = role === "arusha" ? "Arusha" : "You";

		const bubble = document.createElement("p");
		bubble.className = "contact-chat-bubble";
		bubble.innerHTML = text;

		row.appendChild(label);
		row.appendChild(bubble);
		log.appendChild(row);
		log.scrollTop = log.scrollHeight;
	}

	function replyAsArusha(message) {
		const q = message.toLowerCase();

		if (/hire|work together|freelance|available|collab|retain/.test(q)) {
			return "I’d love to hear about it. Email me at <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a> with a short brief, and I’ll get back to you.";
		}

		if (/llm|ai|prompt|model|machine learning|ml\b|intelligent/.test(q)) {
			return "I work in LLM engineering — building practical AI features, refining prompts, and shaping interfaces around language models. You can browse examples on the <a href=\"portfolio.html\">portfolio</a> page.";
		}

		if (/work on|what do you|do you do|who are|about you|yourself|background|melbourne|where/.test(q)) {
			return "I’m Arusha — a software engineer based in Melbourne. I design and build intelligent software across product engineering and LLM applications. More on the <a href=\"about.html\">about</a> page.";
		}

		if (/email|contact|reach|linkedin|github/.test(q)) {
			return "Best email is <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>. I’m also on <a href=\"https://www.linkedin.com/in/shahiarusha\" target=\"_blank\" rel=\"noopener\">LinkedIn</a> and <a href=\"https://github.com/aarusa\" target=\"_blank\" rel=\"noopener\">GitHub</a>.";
		}

		if (/hello|hi\b|hey|hola|good (morning|afternoon|evening)/.test(q)) {
			return "Hi — nice to meet you. Ask me about my work, projects, or how to get in touch.";
		}

		if (/thank|thanks|cheers/.test(q)) {
			return "You’re welcome. Looking forward to chatting more — email works anytime.";
		}

		if (/project|portfolio/.test(q)) {
			return "Happy to talk through a project. You can skim recent work on the <a href=\"portfolio.html\">portfolio</a> page, or email <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a> with a short brief.";
		}

		return "Good question. For project work, email <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>. Or ask me about LLM engineering, software work, or what’s in the portfolio.";
	}

	function send(text) {
		const message = text.trim();
		if (!message) return;

		playSendSound();
		addMessage(escapeHtml(message), "user");
		input.value = "";

		window.setTimeout(function () {
			playReceiveSound();
			addMessage(replyAsArusha(message), "arusha");
		}, 350);
	}

	function escapeHtml(str) {
		return str
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;");
	}

	form.addEventListener("submit", function (event) {
		event.preventDefault();
		send(input.value);
	});

	suggestions.forEach(function (button) {
		button.addEventListener("click", function () {
			send(button.getAttribute("data-prompt") || button.textContent);
		});
	});

	addMessage("Hi, I’m Arusha. Ask me anything about my work — or how we can start a project together.", "arusha");
})();
