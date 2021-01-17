
// const countNum = document.getElementById("counter")

// const incrementer = document.getElementById("plus")
// const decrementer = document.getElementById("minus")
// const heartBtn = document.getElementById("heart")
// const pauseBtn = document.getElementById("pause")
// const commentList = document.getElementById("list")
// const submitForm = document.getElementById("comment-form")
// let commentText = document.getElementById("comment-input")

// let isPaused = false

// const likesUL = document.querySelector(".likes")

// setInterval( function() {
//     if (isPaused === false) {
//         countNum.innerText = Number(countNum.innerText) + 1
//     }
// }, 1000)

// incrementer.addEventListener("click", function(e) {
//     if (isPaused === false) {
//         countNum.innerText = Number(countNum.innerText) + 1
//     }
// })


// decrementer.addEventListener("click", function(e) {
//     if (isPaused === false) {
//         countNum.innerText = Number(countNum.innerText) - 1
//     }
// })


// heartBtn.addEventListener("click", function(e) {
//     if (isPaused === false) {
//         const like = document.createElement("li")
//         like.innerHTML = `Likes for ${countNum.innerText}: ${countNum.innerText.length}`
//         likesUL.append(like)
//     }
// })

// pauseBtn.addEventListener("click", function(e) {
//     isPaused = !isPaused
//     if (isPaused === true) {
//         pauseBtn.innerText = "resume"
//     } else {
//         pauseBtn.innerText = "pause"
//     }
// })


// submitForm.addEventListener("submit", function(e) {
//     e.preventDefault()
//     const commentP = document.createElement("p")
//     commentP.innerText = commentText.value
//     commentList.append(commentP)
//     commentText.value = ""
    
// })








































const counter = document.querySelector('#counter')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const likesContainer = document.querySelector('.likes')

const commentList = document.querySelector('#list')
const commentForm = document.querySelector('#comment-form')
const commentInput = document.querySelector('#comment-input')




// let isPaused = false


    // document.addEventListener('DOMContentLoaded', function(e) {
    // setInterval(function(e) {
    //     counter.innerText = Number(counter.innerText) + 1
    // }, 1000)})





plus.addEventListener('click', function(e) {
    //debugger
    counter.innerText = Number(counter.innerText) + 1
})

minus.addEventListener('click', function(e) {
    //debugger
    counter.innerText = Number(counter.innerText) - 1
})



heart.addEventListener('click', function(e) {
  
    let currentNum = Number(counter.textContent)
    const newLike = document.createElement('li')

    let numCounter = 0

    if (currentNum === Number(counter.innerText)) {
        const prevNum = newLike.closest('li')
        numCounter += 1
        newLike.textContent = `The number ${counter.innerText} has ${numCounter} likes`
    } else {
        newLike.textContent = `The number ${counter.innerText} has ${numCounter} like(s)`
    }
    likesContainer.appendChild(newLike)
})


pause.addEventListener('click', function(e) {
    //console.log(e.target)
    isFalse = true
    console.log('The game is quote unquote paused')
})



commentForm.addEventListener('submit', function(e) {
    e.preventDefault()
  
    let newP = document.createElement('p')
    newP.innerText = commentInput.value

    commentList.append(newP)

    e.target.reset()
})



