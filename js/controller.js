'use strict'
var gElCanvas;
var gCtx;
var gSide;
var gFontSize = 20;

function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderImges()
    // resizeCanvas()
    // addListeners()


}

function renderImges() {
    var images = getImages()
    var strHtmls = images.map(function (image) {
        return `<img class="img-front-page img${image.id}" id="${image.id}" onclick="onClickImg(this)" src="${image.url}" alt="">`

    })
    document.querySelector('.images-wrapper').innerHTML = strHtmls.join('');
}

function onClickImg(elLink) {
    var images = getImages()
    var clickedImg = elLink.id;
    var currImg = images.find((image) => {
        if (parseInt(clickedImg) === image.id) {
            return image;
        }
    })
    const image = document.getElementById(currImg.id);
    gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
    _createMemes(currImg.id)
    // gMeme.selectedImgId=currImg.id
    // console.log('gMeme.selectedImgId:', gMeme.selectedImgId)
    var canvasWindow = document.querySelector('.edit-canvas-container')
    var restImages = document.querySelector('.images-wrapper')
    canvasWindow.classList.remove('hidden')
    restImages.classList.add('hidden')
}

function onCloseModal() {
    var canvasWindow = document.querySelector('.edit-canvas-container')
    var restImages = document.querySelector('.images-wrapper')
    canvasWindow.classList.add('hidden')
    restImages.classList.remove('hidden')
}
function onChangeTextfont(x) {
    if (gFontSize < 8) return
    gFontSize += x   
    document.querySelector('.chosen-font-Size').innerText = gFontSize;
}
function onChangeTextAlign(x) {
    _createLines()
    changeTextAlign(x)
}

function onForm(ev) {
    ev.preventDefault()
    var text = document.querySelector('input[name=text]').value
    var color = document.querySelector('input[name=color]').value
    // var color = document.querySelector('input[name=color]').value

    if (gMeme.selectedLineIdx === 0) {
        drawText(text, color, gSide, gFontSize, 200, 100)
        console.log('0');
    } else if (gMeme.selectedLineIdx === 1) {
        drawText(text, color, gSide, gFontSize, 200, 400)
        console.log('gSide:', gSide)
        console.log('1');
    } else {
        console.log('2');
        drawText(text, color, gSide, gFontSize, 200, 250)
    }
}


function drawImg(image) {
    var canvas = document.querySelector('#canvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0)
    ctx.fill()
}
