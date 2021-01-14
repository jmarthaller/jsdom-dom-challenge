
const countNum = document.getElementById("counter")

const incrementer = document.getElementById("plus")
const decrementer = document.getElementById("minus")
const heartBtn = document.getElementById("heart")
const pauseBtn = document.getElementById("pause")
const commentList = document.getElementById("list")
const submitForm = document.getElementById("comment-form")
let commentText = document.getElementById("comment-input")

let isPaused = false

const likesUL = document.querySelector(".likes")

setInterval( function() {
    if (isPaused === false) {
        countNum.innerText = Number(countNum.innerText) + 1
    }
}, 1000)

incrementer.addEventListener("click", function(e) {
    if (isPaused === false) {
        countNum.innerText = Number(countNum.innerText) + 1
    }
})


decrementer.addEventListener("click", function(e) {
    if (isPaused === false) {
        countNum.innerText = Number(countNum.innerText) - 1
    }
})


heartBtn.addEventListener("click", function(e) {
    if (isPaused === false) {
        const like = document.createElement("li")
        like.innerHTML = `Likes for ${countNum.innerText}: ${countNum.innerText.length}`
        likesUL.append(like)
    }
})

pauseBtn.addEventListener("click", function(e) {
    isPaused = !isPaused
    if (isPaused === true) {
        pauseBtn.innerText = "resume"
    } else {
        pauseBtn.innerText = "pause"
    }
})


submitForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const commentP = document.createElement("p")
    commentP.innerText = commentText.value
    commentList.append(commentP)
    commentText.value = ""
    
})
