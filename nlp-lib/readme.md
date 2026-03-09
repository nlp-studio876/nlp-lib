# 🌟 gw-lib | Minimalist FiveM UI

A modern, fast, and ultra-lightweight UI library for FiveM servers. Completely standalone (works on ESX, QBCore, vRP, or Custom Frameworks) using pure JS/CSS/HTML with zero dependencies (no jQuery, Tailwind, etc.).

## 🔥 Features
- **Notifications (Notify):** Sleek design, multiple states (success, error, info, warning), and a soft built-in sound effect.
- **Text UI:** Positioned perfectly above the minimap. Automatically parses text inside brackets (e.g., `[E]`) and renders a stylish glowing keyboard key.
- **Progress Bar:** Centered at the bottom with a smooth filling animation and neon glow effect.
- **Highly Optimized:** 0.00ms resmon, entirely client-side, loads instantly.
- **Modern UI/UX:** Uses `backdrop-filter` for a glassmorphism effect, subtle shadows, and the premium Montserrat font.

## 📥 Installation
1. Download or clone this repository.
2. Place the `gw-lib` folder inside your server's `resources` directory.
3. Make sure you have your notification sound placed in `gw-lib/html/sound/notification.mp3`.
4. Add `ensure gw-lib` to your `server.cfg`.

## 🛠️ Export Usage

### 1. Notifications
Trigger a beautiful notification popup.
**Client-side:**
```lua
-- exports['gw-lib']:Notify(text, type, duration)
exports['gw-lib']:Notify('Vehicle purchased successfully!', 'success', 5000)
exports['gw-lib']:Notify('Not enough money.', 'error', 3000)
```
**Server-side:**
```lua
TriggerClientEvent('gw-lib:notify', source, 'Welcome to the server!', 'info', 7000)
```

### 2. Text UI
Show interaction prompts on the screen. Any text placed in `[ ]` will be rendered as a key button.
```lua
-- Show TextUI
exports['gw-lib']:ShowTextUI('Press [E] to open the door', 'info')
exports['gw-lib']:ShowTextUI('Hold [ALT] to interact', 'warning')

-- Hide TextUI
exports['gw-lib']:HideTextUI()
```

### 3. Progress Bar
Show a smooth progress bar at the bottom center of the screen.
```lua
-- exports['gw-lib']:Progressbar(text, duration_in_ms)
exports['gw-lib']:Progressbar('Repairing Engine...', 10000)
```

## 🎨 Customization
- **Sound:** Replace `html/sound/notification.mp3` with any `.mp3` file of your choice.
- **Volume:** Open `html/script.js` and change `audio.volume = 0.3;` to your preferred level.
- **Design:** All styles, colors, and positions can be modified via `html/style.css`.

## 📜 License
This project is open-source and available under the MIT License. Feel free to use and modify it for your servers!