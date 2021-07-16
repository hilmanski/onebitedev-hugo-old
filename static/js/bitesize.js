//trigger by hashtag
const url = window.location.href
if (url.includes('mode=bitesize')) {

const slideName = "bitesize_wrapper"
const slideContentName = "slide_content"
const articleWrapper = document.getElementsByClassName('article')[0]
const tagTopic = 'h2'

const basicStyle = `background: white;`

const slides = convertToBiteSize()
let active_slide = 0

if (slides != null) {
    initSlideShow()
}

function convertToBiteSize() {
    const regexTopic = new RegExp(`<${tagTopic}(.*)<\/${tagTopic}>`, 'g')
    const matchedTopic = articleWrapper.innerHTML.match(regexTopic)

    if (matchedTopic == null) {
        return null
    }

    let tempArticle = articleWrapper.innerHTML
    let slide = []

    matchedTopic.forEach(function (match, i) {
        let activePart = tempArticle.split(match)[0]
        slide[i] = activePart

        tempArticle = tempArticle.replace(activePart, '')
        if (matchedTopic.length - 1 == i) {
            slide[i + 1] = tempArticle
        }
    })
    return slide
}

function initSlideShow() {
    const title = document.querySelector('h1').innerText
    
    //Add Canvas
    articleWrapper.style.display = 'none'
    insertContent(document.body, `<div id="${slideName}" style="${basicStyle}">
                                    <div id="${slideContentName}" class="article"></div>
                                </div>`)

    const slideWrapper = document.getElementById(slideName)

    //Add navigation
    insertContent(slideWrapper, `
    <div id="slide-menu">
        <h1> ${title} </h1>
        <div id="slide-nav">
        <span id="bs-prev-btn" class="is-hidden" onclick="navBiteSize('PREV')"> &lt; Prev </span>
        <span id="bs-next-btn" onclick="navBiteSize('NEXT')"> Next &gt; </span>
        </div>
    </div>
    `, 'beforeend')

    //Import Slide
    insertContent(document.getElementById(slideContentName), slides[active_slide])
}

function navBiteSize(command) {
    const slideContent = document.getElementById(slideContentName)
    slideContent.innerHTML = ''

    if(command == 'NEXT') {
        document.getElementById('bs-prev-btn').classList.remove('is-hidden')
        active_slide = active_slide + 1
        if(active_slide >= slides.length) {
            return finsihBiteSize()
        }
    } else {
        active_slide = active_slide - 1
        if(active_slide < 0) {
            return finsihBiteSize()
        }
    }

    insertContent(slideContent, slides[active_slide])
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // 

    //reInitialize highlighter
    hljs.highlightAll()
}

function finsihBiteSize() {
    alert('Thanks for reading it in bitesize!')
    window.location.href = window.location.href.split('mode=bitesize')[0]
}

/**
 * parent: div where to put content
 * content: any HTML content 
 */
function insertContent(parent, content, position = 'afterbegin' ) {
    parent.insertAdjacentHTML(position, content)
}

}