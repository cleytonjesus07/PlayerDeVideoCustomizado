let video = document.querySelector("video");


window.onload = () => {
    inserirBtns();


}



function inserirBtns() {
    const svgs = {


        add: `  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`,
        backward: `<svg  xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12"/><polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12"/></g></g></svg>`,
        play: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>`,
        forward: `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="6.41,6 5,7.41 9.58,12 5,16.59 6.41,18 12.41,12"/><polygon points="13,6 11.59,7.41 16.17,12 11.59,16.59 13,18 19,12"/></g></g></svg>`,
        remove: ` <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>`,
        sound: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>`,
        muted: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14 8.83v6.34L11.83 13H9v-2h2.83L14 8.83M16 4l-5 5H7v6h4l5 5V4z"/></svg>`,
        pause: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`,
        fullscreen: `<svg id="fullscreen" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>`,
        exitFullscreen: `<svg id="exitFullscreen" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/></svg>`

    }

    Object.keys(svgs).forEach((svg, index) => {

        if (index < 5 || svg == "sound") {
            let div = document.createElement("div");
            div.id = svg;
            div.title = svg;
            if(svg == "add")
            div.title = "volume +"
            if(svg == "remove")
            div.title = "volume -"
            document.querySelector(".controls").append(div);
            document.querySelector(`#${svg}`).insertAdjacentHTML("afterbegin", svgs[svg]);
        }
    })

    document.querySelector(".up").innerHTML = svgs["sound"];
    document.querySelector(".down").innerHTML = svgs["muted"];
    document.querySelector(".fullscreen").innerHTML = svgs["fullscreen"];
    controladores(svgs);
}

function controladores(svgs) {
    executar(svgs);
    mutar(svgs);
    fullscreen(svgs)
    volume();
    avancar_retornar();
}

function avancar_retornar() {
    let forward = document.querySelector("#forward");
    let backward = document.querySelector("#backward");
    let skip = (secs) => {
        video.currentTime += secs;
    }
    forward.addEventListener("click", () => {
        skip(10);
    })

    backward.addEventListener("click", () => {
        skip(-10);
    })
}

function fullscreen(svgs) {
    document.querySelector(".fullscreen").addEventListener("click", () => telaCheia(svgs));

    document.querySelector(".fullscreen").addEventListener("mouseover", () => {
        document.querySelector(".fullscreen").setAttribute("style", "opacity:1")
    })
    document.querySelector(".fullscreen").addEventListener("mouseout", () => {
        document.querySelector(".fullscreen").setAttribute("style", "opacity:0.5")
    })
    document.querySelector(".controls").addEventListener("mouseover", () => {
        document.querySelector(".controls").setAttribute("style", "opacity:1")
    });
    document.querySelector(".controls").addEventListener("mouseout", () => {
        document.querySelector(".controls").setAttribute("style", "opacity:0.5")
    })
}


function telaCheia(svgs) {
    let conteiner = document.querySelector(".conteiner");
    if (conteiner.requestFullScreen) {
        conteiner.requestFullScreen();
    } else if (conteiner.webkitRequestFullScreen) {
        conteiner.webkitRequestFullScreen();
    } else if (conteiner.mozRequestFullScreen) {
        conteiner.mozRequestFullScreen();
    }
    document.querySelector(".fullscreen").innerHTML = svgs["exitFullscreen"];
    document.querySelector("#exitFullscreen").addEventListener("click", () => {
        document.exitFullscreen();
    })
}

function executar(svgs) {
    let play = document.querySelector("#play");
    let pause = document.querySelector("#pause");
    if (video.paused) {
        play.addEventListener("click", () => {
            play.innerHTML = svgs.pause;
            play.id = "pause";
            video.play().catch((err) => console.log("Houve um erro ao reproduzir: " + err))
            executar(svgs);
        })

    } else {
        pause.addEventListener("click", () => {
            pause.id = "play";
            pause.innerHTML = svgs.play;
            video.pause();
            executar(svgs);
        })
    }
}



function volume() {
    let bar = document.querySelector(".bar");
    let add = document.querySelector("#add");
    let remove = document.querySelector("#remove");
    let volume = document.querySelector(".volume")
    
    add.addEventListener("click", () => {
        volume.setAttribute("style", "left:0")
        if (video.volume <= 1.0) {
            video.volume = Math.min(1,video.volume + 0.1);
            bar.setAttribute("style", `height:${video.volume * 100}%`)
        } else {
            video.volume = 1.0;
        }
      add.addEventListener("mouseout",()=>{
        setTimeout(() => {
            volume.setAttribute("style", "left:-30px")
        }, 500)
      })
    })

    remove.addEventListener("click", () => {
        volume.setAttribute("style", "left:0")
      
        if (video.volume >= 0.0) {
            video.volume = Math.max(0,video.volume - 0.1);
            bar.setAttribute("style", `height:${video.volume * 100}%`)
        } else {
            video.volume = 0.0
        }
        remove.addEventListener("mouseout",()=>{
            setTimeout(() => {
                volume.setAttribute("style", "left:-30px")
            }, 500)
          })
    })
}

function mutar(svgs) {
    let sound = document.querySelector("#sound");

    sound.addEventListener("click", () => {
        sound.id = "muted";
        sound.innerHTML = svgs.muted;
        video.muted = true;

        if (video.muted) {
            document.querySelector("#muted").addEventListener("click", () => {
                sound.id = "sound";
                sound.innerHTML = svgs.sound;
                video.muted = false;
                mutar(svgs);
            })
        }
    })
}

