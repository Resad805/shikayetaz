<div align="center">

# 🏙️ ShikayetAZ

**Citizen Complaints Dashboard for the Baku City Executive Authority**

Filter, search, and track citizen complaints from a clean operator panel — built with React 18 + Vite.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&labelColor=1f2933)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&labelColor=1f2933)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black&labelColor=1f2933)
![No UI libs](https://img.shields.io/badge/CSS-plain%2C%20no%20libs-102A43?labelColor=1f2933)
![Status](https://img.shields.io/badge/status-all%20stages%20%2B%20bonus%20done-1a7a44?labelColor=1f2933)

</div>

---

## 📋 What this is

Operators need to see citizen-submitted complaints, filter them by status, search by title, and read overall stats at a glance — without a page reload. That's this panel.

## 🚀 Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints — usually **http://localhost:5173**.

## 🧩 Project structure

```
src/
├── main.jsx
├── App.jsx                    ← state, effects, wiring
├── index.css                  ← all styling (Stage 4)
├── api/
│   └── complaints.js          ← mock backend (given)
├── hooks/
│   └── useComplaintStats.js   ← bonus custom hook
└── components/
    ├── StatusBadge.jsx
    ├── ComplaintCard.jsx
    ├── ComplaintList.jsx
    ├── FilterBar.jsx
    └── StatsBar.jsx
```

## ✅ Stages completed

| Stage | What it covers | Where |
|---|---|---|
| **1 · Components & props** | Static render, one-way data flow, `id` as key | `StatusBadge`, `ComplaintCard`, `ComplaintList` |
| **2 · State & events** | Lifted state, filter buttons update instantly | `FilterBar` + `App.jsx` |
| **3 · Hooks** | `useEffect` fetch + loading state, derived stats via `useMemo` | `App.jsx`, `useComplaintStats.js` |
| **4 · Styling** | Status colours, hover lift, priority stripe, styled empty state | `index.css` |

## 🎁 Bonus completed

- 🔎 **Live search** by title, combined with the status filter
- 🔄 **Click-to-cycle status** (`new → in_progress → closed`), updated immutably
- 🪝 Stats calculation extracted into a **custom hook** (`useComplaintStats`)

## 🗒️ Notes

Nothing left unfinished — all four stages and all three bonus items are implemented.

---

<div align="center">

Built for the Holberton School Azerbaijan · Full Stack React sprint 🇦🇿

</div>
