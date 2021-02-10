// function addListeners() {
//     addMouseListeners()
//     addTouchListeners()
//     window.addEventListener('resize', () => {
//         resizeCanvas()
//         renderCanvas()
//     })
// }

// function addMouseListeners() {
//     gElCanvas.addEventListener('mousemove', onMove)
//     gElCanvas.addEventListener('mousedown', onDown)
//     gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//     gElCanvas.addEventListener('touchmove', onMove)
//     gElCanvas.addEventListener('touchstart', onDown)
//     gElCanvas.addEventListener('touchend', onUp)
// }

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container');
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }
// function renderCanvas() {
//     gCtx.fillStyle = "#ede5ff"
//     gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
// }

// function onDown(ev) {
//     const pos = getEvPos(ev)
//     if (!isCirlceClicked(pos)) return
//     gCircle.isDragging = true
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'
// }
// // function createText() {
// //     return {
// //         pos: { x: gElCanvas.width / 2, y: gElCanvas.height / 2 },
// //         size: 60,
// //         color: 'blue',
// //         isDragging: false
// //     }
// // }

// function onMove(ev) {
//     if (gCircle.isDragging) {
//         const pos = getEvPos(ev)
//         const dx = pos.x - gStartPos.x
//         const dy = pos.y - gStartPos.y

//         gCircle.pos.x += dx
//         gCircle.pos.y += dy

//         gStartPos = pos
//         renderCanvas()
//         renderCircle()
//     }
// }
