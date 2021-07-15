//trigger by hashtag
const hash = location.hash.substr(1);
if(hash == 'bitesize') {

const slideName = "bitesize_wrapper"
const slideContentName = "slide_content"
const articleWrapper = document.getElementsByClassName('article')[0]
const tagTopic = 'h2'

const basicStyle = `position: absolute;
                    z-index: 9999;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    background: white;
                    padding: 50px;`

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
    insertContent(document.body, `<div id="${slideName}" style="${basicStyle}">
                                    <div id="${slideContentName}" class="article"></div>
                                </div>`)

    const slideWrapper = document.getElementById(slideName)

    //Add navigation
    insertContent(slideWrapper, `
    <div id="slide-menu">
        <h1> ${title} </h1>
        <span id="bs-prev-btn" class="is-hidden" onclick="navBiteSize('PREV')"> &lt; Prev </span>
        <span id="bs-next-btn" onclick="navBiteSize('NEXT')"> Next &gt; </span>
    </div> <br>
    `)

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
            finsihBiteSize()
        }
    } else {
        active_slide = active_slide - 1
        if(active_slide < 0) {
            finsihBiteSize()
        }
    }

    insertContent(slideContent, slides[active_slide])
}

function finsihBiteSize() {
    alert('done bitesize!')
    window.location.href = window.location.href.split('#')[0]
}

/**
 * parent: div where to put content
 * content: any HTML content 
 */
function insertContent(parent, content) {
    parent.insertAdjacentHTML('afterbegin', content)
}

}