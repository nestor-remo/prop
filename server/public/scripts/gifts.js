const renderGifts = async () => {
    
    const response = await fetch('/gifts')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${gift.image})`

            const name = document.createElement('h3')
            name.textContent = gift.name
            bottomContainer.appendChild(name)

            const difficulty = document.createElement('p')
            difficulty.textContent = 'Difficulty: ' + gift.difficulty
            bottomContainer.appendChild(difficulty)

            const Runes = document.createElement('p')
            Runes.textContent = 'Runes: ' + gift.runes
            bottomContainer.appendChild(Runes)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/gifts/${gift.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedURL = window.location.href.split('/').pop()

if (requestedURL) {
    window.location.href = "../404.html"
} else {
    renderGifts()
}