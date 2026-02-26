//Time Added
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const WelcomeMessage = document.querySelector("#Welcome")

if (isMorning) {

    WelcomeMessage.textContent = "It is the morning"

}

if (isAfternoon) {

    WelcomeMessage.textContent = "It is the afternoon"

}

if (isEvening) {

    WelcomeMessage.textContent = "It is the evening"

}

//Secret Message
console.log(WelcomeMessage)

localStorage.setItem("It's a secret to everybody.", "+100 Rupees")

//Carousel
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

setInterval(() => {
    currentImage = currentImage + 1
    showImages()
}, 5000)

next.addEventListener('click', () => {
    currentImage = currentImage + 1
    showImages()
})

prev.addEventListener('click', () => {
    currentImage = currentImage - 1
    showImages()
})

//To-Do List
const newTodo = document.querySelector('#new-todo')
const todoButton = document.querySelector('#addTodo')
const todoList = document.querySelector(".todo-list")
const todoLists = 
[
    { "text": "Watch napoelon dynamite", "completed": false },
    { "text": "Go to work", "completed": false },
    { "text": "Eat at Mcdonalds", "completed": false }
]

const renderToDos = () => {
    todoList.innerHTML = ''

    todoLists.forEach ( todo => {
    const li = document.createElement('li')
    li.textContent = todo.text,
    todoList.append(li)
})}


localStorage.setItem('todo-List', JSON.stringify(todoLists)),
renderToDos()

todoButton.addEventListener('click', () => {
    todoLists.push({ text: newTodo.value, completed: false }),
    localStorage.setItem('todo-List', JSON.stringify(todoLists)),
    renderToDos()
})