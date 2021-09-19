//grab DOM
const input = document.querySelector('input')
const add = document.querySelector('button')
const ul = document.querySelector('ul')

add.onclick = () =>{
    let items = input.value
    input.value = ''

    //creating elements
    const listItems = document.createElement('li')
    const listText = document.createElement('span')
    const listButton = document.createElement('button')

    //appending
    listText.textContent = items
    listButton.textContent = 'Delete'
    listItems.appendChild(listText)
    listItems.appendChild(listButton)
    ul.appendChild(listItems)

    //delete function
    listButton.onclick = (e) =>{
        ul.removeChild(listItems)
    }

    input.focus()

}