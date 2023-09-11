let container = document.querySelector('.container');
previousElement = '';

container.addEventListener(`click`, function(event){
    let currentElement = event.target;

    if (currentElement.classList.contains("square-closed")) {
        currentElement.classList.remove("square-closed");

        if (previousElement == '') {
            previousElement = currentElement;
        }  else if (
            previousElement.classList.contains("blue")
            &&
            currentElement.classList.contains("blue")
            ) {
                previousElement.style.opacity = 0;
                currentElement.style.opacity = 0;
                previousElement = '';
        } else if (
            previousElement.classList.contains("red")
            &&
            currentElement.classList.contains("red")
            ) {
                previousElement.style.opacity = 0;
                currentElement.style.opacity = 0;
                previousElement = '';
            } else {
                previousElement.classList.add("square-closed");
                previousElement = currentElement;
            }
        }
    }
);