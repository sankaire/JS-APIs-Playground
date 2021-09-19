const link = document.querySelector('a')

//change the content in the a element
link.textContent = "tepela's Website"
link.href = "https://kerenke.vercel.app"

//grabbing the section
const section = document.querySelector('section')

//creating a paragraph
const paragraph = document.createElement('p')
paragraph.textContent = 'How are you doing this fine day'

//appending the paragraph to the section tag
section.appendChild(paragraph)

//creating a text node
const text = document.createTextNode('This is going to be Amazing')

//appending the text to the paragraph
const linkParagraph = document.querySelector('p')
linkParagraph.appendChild(text)

//removing nodes
linkParagraph.remove()

//adding attributes
paragraph.setAttribute('class', 'highlight')

