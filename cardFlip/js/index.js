(() => {
	// TODO: Flip the card when clicked

    // const cardFlip = document.querySelector('.flipped')
    // cardFlip.addEventListener("click", (e) => {
    //     e.target.classList.toggle('flipped')
    // })
    const cardsFlip =  document.querySelectorAll('.flipped')
        for (let cardFlip of cardsFlip) {
            cardFlip.addEventListener("click", (e) => {
                e.target.classList.toggle('flipped')
            })
        }
})();
