# 🌟 nlp-lib | Modern FiveM UI Library

![FiveM](https://img.shields.io/badge/FiveM-Ready-orange.svg)
![Standalone](https://img.shields.io/badge/Framework-Standalone-blue.svg)
![Optimization](https://img.shields.io/badge/Resmon-0.00ms-brightgreen.svg)

**nlp-lib** is an ultra-lightweight, highly optimized, and modern UI library for FiveM. 
It replaces standard ugly notifications and helps developers easily implement beautiful UI elements like Notifications, TextUI, and Progress Bars with zero dependencies (no jQuery, no Tailwind).

## ✨ Features
- **🔔 Notifications:** Sleek design, multiple states (success, error, info, warning), and a soft built-in sound effect.
- **⌨️ Smart TextUI:** Positioned perfectly above the minimap. Automatically parses text inside brackets (e.g., `[E]`) and renders a stylish glowing keyboard key.
- **⏳ Progress Bar:** Centered at the bottom with a smooth filling animation and neon glow effect.
- **⚡ Highly Optimized:** 0.00ms resmon. Runs entirely on the client side and only draws when active.
- 
## 📥 Installation
1. Download or clone this repository.
2. Place the `nlp-lib` folder inside your server's `resources` directory.
3. Add `ensure nlp-lib` to your `server.cfg`.

## 🚀 Quick Usage
```lua
-- Notify
exports['nlp-lib']:Notify('Vehicle purchased successfully!', 'success', 5000)

-- Text UI
exports['nlp-lib']:ShowTextUI('Press[E] to open the door', 'info')
exports['nlp-lib']:HideTextUI()

-- Progressbar
exports['nlp-lib']:Progressbar('Repairing Engine...', 10000)
```

For advanced usage, customization, and server-side events, please read our [Developer Documentation](DOCS.md).

## 📜 License
This project is open-source and available under the MIT License.
