// const input = document.querySelector('input')

// const postButton = document.querySelector('.postButton')

// const saveToArray = async () => {
//     let value = {name: input.value}
//     input.value = ""

//     const options = {
//         method: 'POST',
//         headers: {
//             "Content-Type": 'application/json',
//         },
//         body: JSON.stringify(value)
//     }
//     const request = await fetch('postApi', options)
// }

// postButton.onclick = saveToArray

// document.addEventListener('keyup', (e) => {
//     if(e.key == 'Enter'){
//         saveToArray()
//     }
// })

// //============================================================

// const showButton = document.querySelector('.showButton')
// const list = document.querySelector('.list')

// const showList = async () => {
//     const response = await fetch('/getApi')
//     const data = await response.json()
//     console.log(data)
// }

// showButton.onclick = showList

const input = document.querySelector('input')
const postButton = document.querySelector('.postButton')

const sendInputToServer = async () => {
    const savedName = input.value
    input.value = ''
    const dataToSend = {
        name: savedName,
        date: Date.now()
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(dataToSend)
    }
    const request = await fetch('/api', options)
}
postButton.addEventListener('click', sendInputToServer)
document.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        sendInputToServer()
    }
})

//============================================================

//grab our other button
//create a fetch to GET data from our DB
//insert the names into a list

const showButton = document.querySelector('.showButton')
const list = document.querySelector('.list')

const fetchDataFromServer = async () => {
    fetch('/api')
        .then(data => data.json())
        .then(objects => {
            while (list.firstChild) {
                list.removeChild(list.firstChild)
            }
            objects.forEach(object => {
                const listItem = document.createElement('li')
                listItem.textContent = object.name
                list.append(listItem)
            })
        })
}

showButton.onclick = fetchDataFromServer
