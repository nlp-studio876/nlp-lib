local isTextUIVisible = false

local function Notify(text, type, duration)
    SendNUIMessage({
        action = 'notify',
        text = text or "",
        type = type or "info",
        duration = duration or 3000
    })
end

local function ShowTextUI(text, type)
    isTextUIVisible = true
    SendNUIMessage({
        action = 'showTextUI',
        text = text or "",
        type = type or "info"
    })
end

local function HideTextUI()
    if not isTextUIVisible then return end
    isTextUIVisible = false
    SendNUIMessage({
        action = 'hideTextUI'
    })
end

local function Progressbar(text, duration)
    SendNUIMessage({
        action = 'showProgress',
        text = text or "",
        duration = duration or 5000
    })
end

exports('Notify', Notify)
exports('ShowTextUI', ShowTextUI)
exports('HideTextUI', HideTextUI)
exports('Progressbar', Progressbar)

RegisterNetEvent('nlp-lib:notify')
AddEventHandler('nlp-lib:notify', function(text, type, duration)
    Notify(text, type, duration)
end)