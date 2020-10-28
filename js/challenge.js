// counter functionality
const count = document.getElementById('counter')
function addSecond() {
    let seconds = parseInt(count.innerText)
    seconds++
    count.innerText = seconds
}
let windowCounter = window.setInterval(addSecond, 1000)


// plus/minus buttons
const plusButton = document.querySelector("#plus")
plusButton.addEventListener("click", function() {
    let seconds = parseInt(count.innerText)
    seconds++
    count.innerText = seconds
})

const minButton = document.getElementById('minus')
minButton.addEventListener('click', function() {
    let seconds = parseInt(count.innerText)
    seconds--;
    count.innerText = seconds
})

// like individual numbers
const likeContainer = document.querySelector(".likes")
const likeButton = document.querySelector("#heart")

likeButton.addEventListener("click", function(){
    if( document.body.contains(document.getElementById(`${count.innerText}`)) ){
        const element = document.getElementById(`${count.innerText}`)
        let oldcount = element.getAttribute("oldcount")
        oldcount++
        element.setAttribute("oldcount", oldcount)
        element.innerText = `${count.innerText} has been liked ${oldcount} times`
    } else {
        const newLike = document.createElement("li")
        newLike.setAttribute("id", count.innerText)
        newLike.setAttribute("oldCount", 1)
        newLike.innerText = `${count.innerText} has been liked 1 times`
        likeContainer.append(newLike)
    }
})

// PAUSE BUTTON

const pauseButton = document.getElementById("pause")
//let pause = false //maybe true?
console.log(pauseButton)
pauseButton.addEventListener("click", function(){
    
    if (pauseButton.textContent === ' pause ') {
        pauseButton.textContent = "resume"
        window.clearInterval(windowCounter)
        plusButton.disabled = true;
        minButton.disabled = true;
        likeButton.disabled = true;
        submitBtn.disabled = true;
    } else { // unpause function
        pauseButton.textContent = ' pause '
        // count.innerText = "0"
        windowCounter = window.setInterval(addSecond, 1000)
        plusButton.disabled = false;
        minButton.disabled = false;
        likeButton.disabled = false;
        submitBtn.disabled = false;
    }
})


// COMMENTS

const commentForm = document.querySelector("#comment-form")
const submitBtn = document.querySelector("#submit")
const commentInput = document.getElementById("comment-input")
const commentList = document.getElementById("list")
commentForm.addEventListener('submit', function(event){
    event.preventDefault()
    const newComment = document.createElement("p")
    newComment.innerText = commentInput.value
    commentList.append(newComment)
    commentForm.reset()
})

// <div id="list" class="comments">COMMENT ELEMENTS</div>