
// define componenet blocks
const comps = {
    'header':(data)=>{console.log(data)
       return `<div class="${data.css}" id="${data.id}"><h3>${data.logoText}</h3> <br/> </div>`
    },
    'hero':(data)=>{
        return `<div class="${data.css}" id="${data.id}">        
        <div><h3>${data.heroText}</h3>
        <p>${data.heroSmall}</p></div></div>`
    }
}