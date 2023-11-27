const messgeNode = document.getElementById('message')

const render = (message = "", node = messgeNode) => {
  messgeNode.textContent = message
}

render("Hello")