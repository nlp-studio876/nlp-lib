# 🛠️ nlp-lib | Developer Documentation

This document provides detailed technical information on how to use, integrate, and customize `nlp-lib` within your FiveM server scripts.

---

## 📦 1. Client-Side Exports

### `Notify`
Triggers a notification popup on the player's screen.

**Syntax:**
```lua
exports['nlp-lib']:Notify(text, type, duration)
```
- `text` *(string)*: The message you want to display.
- `type` *(string)*: The style of the notification. Allowed values: `'success'`, `'error'`, `'info'`, `'warning'`. Default is `'info'`.
- `duration` *(number)*: Time in milliseconds the notification stays on screen. Default is `3000`.

**Example:**
```lua
-- Show a red error notification for 4 seconds
exports['nlp-lib']:Notify('You do not have enough items!', 'error', 4000)
```

### `ShowTextUI`
Displays a persistent UI prompt (usually used in markers or interaction zones).
**Important:** Any text wrapped in square brackets `[ ]` will automatically be converted into a stylish keyboard key button using Regex.

**Syntax:**
```lua
exports['nlp-lib']:ShowTextUI(text, type)
```
- `text` *(string)*: The prompt text. Example: `"Press [ALT] to engine on"`.
- `type` *(string)*: The color scheme of the icon. Allowed values: `'success'`, `'error'`, `'info'`, `'warning'`.

**Example:**
```lua
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        local dist = #(GetEntityCoords(PlayerPedId()) - vector3(100.0, 100.0, 20.0))
        
        if dist < 2.0 then
            -- Show UI
            exports['nlp-lib']:ShowTextUI('Press [E] to access the shop', 'info')
            if IsControlJustPressed(0, 38) then
                print("Shop opened!")
            end
        else
            -- Hide UI when player leaves the zone
            exports['nlp-lib']:HideTextUI()
        end
    end
end)
```

### `HideTextUI`
Hides the currently active TextUI prompt.

**Syntax:**
```lua
exports['nlp-lib']:HideTextUI()
```

### `Progressbar`
Shows a smooth filling bar at the bottom center of the screen.

**Syntax:**
```lua
exports['nlp-lib']:Progressbar(text, duration)
```
- `text` *(string)*: Title above the progress bar (e.g., `"Lockpicking..."`).
- `duration` *(number)*: How long it takes for the bar to fill from 0% to 100% in milliseconds.

**Example:**
```lua
exports['nlp-lib']:Progressbar('Healing...', 5000)
Wait(5000) -- Wait for the progress bar to finish
print("Healed!")
```

---

## 🌐 2. Server-Side Events

If you want to send a notification directly from a server script (e.g., after a database check), you can trigger the pre-configured NetEvent.

**Syntax:**
```lua
TriggerClientEvent('nlp-lib:notify', target_source, text, type, duration)
```

**Example:**
```lua
RegisterNetEvent('buyVehicle')
AddEventHandler('buyVehicle', function(price)
    local _source = source
    local hasMoney = true -- Your economy check here
    
    if hasMoney then
        TriggerClientEvent('nlp-lib:notify', _source, 'Vehicle purchased successfully!', 'success', 5000)
    else
        TriggerClientEvent('nlp-lib:notify', _source, 'Insufficient funds!', 'error', 3000)
    end
end)
```

---

## 🎨 3. Customization Guide

### Changing Notification Sounds
The library plays a sound every time `Notify()` is called. 
1. Replace `html/sound/notification.mp3` with your own `.mp3` file.
2. To adjust the **volume**, open `html/script.js`, locate `function createNotification`, and change:
   ```javascript
   audio.volume = 0.3; // Value between 0.0 (mute) and 1.0 (max)
   ```

### Adding New Icon Types
By default, the script supports `success`, `error`, `info`, and `warning`.
To add a new type (e.g., `admin`):
1. **In `html/script.js`**, add your SVG to the `icons` object:
   ```javascript
   const icons = {
       // ... existing icons
       admin: `<svg> ... </svg>`
   };
   ```
2. **In `html/style.css`**, add the color mapping:
   ```css
   .notification.admin .icon svg, .textui-box.admin .icon svg { 
       stroke: #a855f7; /* Purple color */
       color: #a855f7; 
   }
   ```
3. Call it in your lua script: `exports['nlp-lib']:Notify('Admin Mode ON', 'admin', 3000)`

### Adjusting TextUI Button Style (Regex Keys)
The script wraps bracketed text (like `[E]`) in a `<span class="key-bind">` tag. 
To change how the button looks (e.g., make it dark instead of white), edit `.key-bind` in `html/style.css`:
```css
.key-bind {
    background: #18181b; /* Dark background */
    color: #ffffff; /* White text */
    /* ... */
}
