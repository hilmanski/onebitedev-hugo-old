"use strict";

//trigger by hashtag
var url = window.location.href;

if (url.includes('?mode=bitesize')) {
    var convertToBiteSize = function convertToBiteSize() {
        var regexTopic = new RegExp("<".concat(tagTopic, "(.*)</").concat(tagTopic, ">"), 'g');
        var matchedTopic = articleWrapper.innerHTML.match(regexTopic);

        if (matchedTopic == null) {
            return null;
        }

        var tempArticle = articleWrapper.innerHTML;
        var slide = [];
        matchedTopic.forEach(function (match, i) {
            var activePart = tempArticle.split(match)[0];
            slide[i] = activePart;
            tempArticle = tempArticle.replace(activePart, '');

            if (matchedTopic.length - 1 == i) {
                slide[i + 1] = tempArticle;
            }
        });
        return slide;
    };

    var initSlideShow = function initSlideShow() {
        var title = document.querySelector('h1').innerText;
        document.body.innerHTML = ''; //Add Canvas

        insertContent(document.body, "<div id=\"".concat(slideName, "\" style=\"").concat(basicStyle, "\">\n                                    <div id=\"").concat(slideContentName, "\" class=\"article\"></div>\n                                </div>"));
        var slideWrapper = document.getElementById(slideName); //Add navigation

        insertContent(slideWrapper, "\n    <div id=\"slide-menu\">\n        <h1 style=\"text-align:center;\"> ".concat(title, " </h1>\n        <br>\n        <span id=\"bs-prev-btn\" class=\"is-hidden\" onclick=\"navBiteSize('PREV')\"> &lt; Prev </span>\n        <span id=\"bs-next-btn\" onclick=\"navBiteSize('NEXT')\"> Next &gt; </span>\n    </div> <hr><br>\n    ")); //Import Slide

        insertContent(document.getElementById(slideContentName), slides[active_slide]);
    };

    var navBiteSize = function navBiteSize(command) {
        var slideContent = document.getElementById(slideContentName);
        slideContent.innerHTML = '';

        if (command == 'NEXT') {
            document.getElementById('bs-prev-btn').classList.remove('is-hidden');
            active_slide = active_slide + 1;

            if (active_slide >= slides.length) {
                finsihBiteSize();
            }
        } else {
            active_slide = active_slide - 1;

            if (active_slide < 0) {
                finsihBiteSize();
            }
        }

        insertContent(slideContent, slides[active_slide]);
    };

    var finsihBiteSize = function finsihBiteSize() {
        alert('done bitesize!');
        window.location.href = window.location.href.split('?mode=bitesize')[0];
    };
    /**
     * parent: div where to put content
     * content: any HTML content 
     */


    var insertContent = function insertContent(parent, content) {
        parent.insertAdjacentHTML('afterbegin', content);
    };

    var slideName = "bitesize_wrapper";
    var slideContentName = "slide_content";
    var articleWrapper = document.getElementsByClassName('article')[0];
    var tagTopic = 'h2';
    var basicStyle = "position: absolute;\n                    z-index: 9999;\n                    top: 0px;\n                    left: 0px;\n                    width: 100%;\n                    height: 100%;\n                    background: white;\n                    padding: 50px;";
    var slides = convertToBiteSize();
    var active_slide = 0;

    if (slides != null) {
        initSlideShow();
    }
}