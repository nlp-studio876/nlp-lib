fx_version 'cerulean'
game 'gta5'

author 'nlp-studio'
description 'nlp-lib'
version '1.0.0'

ui_page 'html/index.html'
client_script 'client.lua'

files {
    'html/index.html',
    'html/style.css',
    'html/script.js',
    'html/sound/notification.mp3'
}

export 'Notify'
export 'ShowTextUI'
export 'HideTextUI'
export 'Progressbar'