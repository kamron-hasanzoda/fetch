let cont = document.querySelector('.container')

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then(res => reload(res, cont))

let ID;

function reload(arr, place) {
    cont.innerHTML = ''
    for (let item of arr) {
        let itemDiv = document.createElement('div')
        let img = document.createElement('img')

        itemDiv.classList.add('item')

        img.src = item.url
        ID = item.id

        itemDiv.onclick = () => {
            let modal = document.createElement('div')
            let img = document.createElement('img')
            let p = document.createElement('p')
            let id = document.createElement('p')
            let albumID = document.createElement('p')
            let close = document.createElement('img')

            modal.classList.add('modal')
            p.innerHTML = item.title
            id.innerHTML = `Id: ${item.id}`
            albumID.innerHTML = `Album Id: ${item.albumId}`

            img.src = item.thumbnailUrl
            close.src = './img/close.svg'
            close.classList.add('close')

            close.onclick = () => {
                modal.style.display = 'none'
            }

            modal.append(close, img, albumID, id, p)
            place.append(modal)
        }

        itemDiv.append(img)
        place.append(itemDiv)
    }
}