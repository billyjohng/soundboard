const buttons = document.querySelectorAll('.btn')
const audios = document.querySelectorAll('.aud')

buttons.forEach((button, idx) => {
    button.addEventListener('click', e => {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
        })
        audios[idx].play()
    })
})

window.addEventListener('keydown', e => {
    if (e.key == 'Q' || e.key == 'q') {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
            audios[0].play()
        })
    }

    if (e.key == 'W' || e.key == 'w') {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
            audios[1].play()
        })
    }

    if (e.key == 'E' || e.key == 'e') {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
            audios[2].play()
        })
    }

    if (e.key == 'R' || e.key == 'r') {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
            audios[3].play()
        })
    }

    if (e.key == 'A' || e.key == 'a') {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
            audios[4].play()
        })
    }

    if (e.key == 'S' || e.key == 's') {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
            audios[5].play()
        })
    }

    if (e.key == 'D' || e.key == 'd') {
        audios.forEach(audio => {
            audio.pause()
            audio.currentTime = 0;
            audios[6].play()
        })
    }
})