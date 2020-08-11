const job = document.getElementsByTagName('b')
const jobTitle = [...job]
const developer = document.getElementById('developer')
const singer = document.getElementById('singer')
const translator = document.getElementById('translator')

const developerActive = () =>{
    jobTitle.forEach(x => {
        x.classList.remove('active')
    })
    developer.classList.add('active')

}
const singerActive = () => {
    jobTitle.forEach(x => {
        x.classList.remove('active')
    })
    singer.classList.add('active')

}
const translatorActive = () =>{
    jobTitle.forEach(x => {
        x.classList.remove('active')
    })
    translator.classList.add('active')

}

setTimeout(()=>{
    setInterval(developerActive,3000)
},10)

setTimeout(() => {
    setInterval(singerActive, 3000)
},1010)

setTimeout(() => {
    setInterval(translatorActive, 3000)
},2010)

// active link module
const x =[...document.getElementsByClassName('nav-link')]

x.map(e => {
    e.addEventListener('click', event =>{
        x.forEach(i =>{
          i.classList.remove('active-link')
        })
       event.target.classList.add('active-link')
    })
})