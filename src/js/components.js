import '../css/components.css'
export const hello = (name) => {
    console.log('test')
    const tittle = document.createElement('h1')
    tittle.innerText = `Hello ${name}, this is the js development environment base`
    document.body.append(tittle)
}
