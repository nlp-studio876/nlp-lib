# 🌟 nlp-lib | Modern FiveM UI Library

![FiveM](https://img.shields.io/badge/FiveM-Ready-orange.svg)
![Standalone](https://img.shields.io/badge/Framework-Standalone-blue.svg)
![Optimization](https://img.shields.io/badge/Resmon-0.00ms-brightgreen.svg)

**nlp-lib** is an ultra-lightweight, highly optimized, and modern UI library for FiveM. 
It replaces standard ugly notifications and helps developers easily implement beautiful UI elements like Notifications, TextUI, and Progress Bars with zero dependencies (no jQuery, no Tailwind).

## 📸 Previews

**Notifications:**
<br>
<img src="https://media.discordapp.net/attachments/1480632593669034167/1480632777849438422/image.png?ex=69b0623b&is=69af10bb&hm=c8bb6ee934c47393893a1943c4a24c1722cd79e74a4efd00cec541ef62cf810f&=&format=webp&quality=lossless&width=498&height=375" width="300">

**Text UI:**
<br>
<img src="https://media.discordapp.net/attachments/1480632593669034167/1480632778595897374/image.png?ex=69b0623b&is=69af10bb&hm=68d72b50e1cfc65bafd4bafb038e9905ea6a255e37329ee31164ddd318922b29&=&format=webp&quality=lossless&width=573&height=468" width="300">

**Progress Bar:**
<br>
<img src="https://media.discordapp.net/attachments/1480632593669034167/1480632778214084749/image.png?ex=69b0623b&is=69af10bb&hm=72124439875a9d0ce5f0b55db317cbf696f784aab960f1b0a67aa4f3103b888d&=&format=webp&quality=lossless&width=566&height=165" width="600">

## ✨ Features
- **🔔 Notifications:** Sleek design, multiple states (success, error, info, warning), and a soft built-in sound effect.
- **⌨️ Smart TextUI:** Positioned perfectly above the minimap. Automatically parses text inside brackets (e.g., `[E]`) and renders a stylish glowing keyboard key.
- **⏳ Progress Bar:** Centered at the bottom with a smooth filling animation and neon glow effect.
- **⚡ Highly Optimized:** 0.00ms resmon. Runs entirely on the client side and only draws when active.
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
