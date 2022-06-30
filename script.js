
const counters = document.querySelectorAll('.counter')


counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        //normally using the function getAttribute() turns your dataType into a string
        //if you want to turn your dataType into a number
        //one quick way is to add a '+' in FRONT os your method
        const target = +counter.getAttribute('data-target')

        const c = +counter.innerText

        const increment = target / 200

        if(c<target){
            counter.innerText = `${ Math.ceil(c + increment) }`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})



























