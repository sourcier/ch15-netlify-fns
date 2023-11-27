const messgeNode = document.getElementById('message')

const render = (message = "", node = messgeNode) => {
  messgeNode.textContent = message
}

const getData = async () => {
  try {
    const response = await fetch('/.netlify/functions/hello-world')
    if(!response.ok) throw response
    const data = await response.json()
    render(data.message)
  } catch(err) {
  }
}

getData()