var gNextId=1;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['happy'] },{ id: 2, url: 'img/2.jpg', keywords: ['sad'] }];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function _createMemes(imgId){
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines:_createLines()
    }
}

function drawText(text, color = 'red', gSide = 'center',gFontSize=20,  x = 100, y = 100) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = color
    gCtx.fillStyle = 'white'
    gCtx.font =  gFontSize.toString()+'px Arial'
    console.log('gCtx.font:', gCtx.font)
    gCtx.textAlign = gSide
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    _createLines(text, color, size, gSide)
}

function _createLines(text='not ready yet', color='red', size=30, gSide='center'){
  var line= {
            txt: text,
            size: size,
            align: gSide,
            color: color
        }
        gMeme.selectedLineIdx++
    console.log('line:', line)
    console.log('gMeme.lines:', gMeme.lines)
    gMeme.lines.push(line);

}
function getMemes(){
    return gMemes;
}
function changeTextAlign(x){
    if (x === 0) {
        document.querySelector('.chosen-side').innerText = 'right';
        gMeme.lines[selectedLineIdx].align='right'
        // gSide = 'right';
    }
    if (x === 1) {
        document.querySelector('.chosen-side').innerText = 'left';
        console.log('gMeme:', gMeme)
        gMeme.lines[gMeme.selectedLineIdx].align='left'
        // gSide = 'left';
    }
    if (x === 2) {
        document.querySelector('.chosen-side').innerText = 'center';
        gMeme.lines[selectedLineIdx].align='center'
        // gSide = 'center';
    }
}
function getImages() {
    return gImgs;
}


function getKeyWord(){
    gKeywords
}

function _createImages() {
    return {
        id: gNextId++,
        imgUrl: bookName,
        keywords:getKeyWord()
    }
}