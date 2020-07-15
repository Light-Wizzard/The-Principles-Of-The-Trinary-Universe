/* ****************************************************************************
 * 1 Document 2 Rule them All 3
 * Last Update: 6 November 2019
 * http://TrinaryUniversity.org/books/1-document-2-rule-them-all-3/book/oebps/
 * 1-document-2-rule-them-all-3-kindle-ebook-pdf-web-page.html
 * Copyright and Copyleft by Jeffrey Scott Flesher
 *
 * Below is for JSlint http://jslint.com/;
 * do not alter it, no space before global.
 */
/*global window */

/* ****************************************************************************
 *  subst
 * wkhtmltopdf page counter
 */
function subst(debugInfo) {
    if (debugInfo === 1) {
        document.getElementById("debug_info").innerHTML = "wkhtmltopdf: called subst()";
    }
    var vars = {};
    var query_strings_from_url = document.location.search.substring(1).split('&');
    for (var query_string in query_strings_from_url) {
        if (query_strings_from_url.hasOwnProperty(query_string)) {
            var temp_var = query_strings_from_url[query_string].split('=', 2);
            vars[temp_var[0]] = decodeURI(temp_var[1]);
        }
    }
    var css_selector_classes = ['page', 'frompage', 'topage', 'webpage', 'section', 'subsection', 'date', 'isodate', 'time', 'title', 'doctitle', 'sitepage', 'sitepages'];
    var css_class;
    var j;
    for (css_class in css_selector_classes) {
        if (css_selector_classes.hasOwnProperty(css_class)) {
            var element = document.getElementsByClassName(css_selector_classes[css_class]);
            for (j = 0; j < element.length; ++j) {
                  element[j].textContent = vars[css_selector_classes[css_class]];
            }
        }
    }
}
/* ****************************************************************************
 *  number With Commas
 *  123,456 returns numberWithCommas(123456)
 */
function numberWithCommas(x) {
    "use strict";
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/* ****************************************************************************
 *  go Back: this is to return from a Link
 */
function goBack() {
    "use strict";
    window.history.back();
}
/* ****************************************************************************
 *  targetBlank
 * XHTML does not allow a target in anchor tags:
 * <a class="blank_target_link" href="X.html#X" target= "_blank">X</a>,
 * this will add a blank target to every <a with class="blank_target_link"
 */
function targetBlank() {
    "use strict";
    var myElements = document.querySelectorAll(".blank_target_link,.https_blank_target_link,.button_blank_target_link");
    [].forEach.call(myElements, function (myElement) {
        myElement.target = "_blank";
    });
}
/* ****************************************************************************
 *  Add Attribute to tage
 */
function AddAttribute(id, a, v) {
    "use strict";
    var x = document.getElementById(id);
    x.setAttribute(a, v);
}
/* ****************************************************************************
 *  Set Agent to display hidden tags
 *  ePub: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) calibre/2.85.1 Safari/538.1
 *        Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/79.0.3945.0 Safari/537.36 
 */
function setAgent() {
    "use strict";
    var str = navigator.userAgent;
    var myElements;
    var debugInfo = 0; // Set to 1 to print debug_info at bottom of page
    // debug_info
    if (debugInfo === 1) {
        myElements = document.querySelectorAll(".debug_info");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "block";
        });
    }
    myElements = document.querySelectorAll(".js_only");
    [].forEach.call(myElements, function (myElement) {
        myElement.style.display = "block";
    });
    // Note: Replace the word "HeadlessChrome" with the userAgent used to make this into a Book
    if (str.indexOf("wkhtmltopdf") > -1 || str.indexOf("HeadlessChrome") > -1) {
        // ******************************************* Run if PDF
        if (debugInfo === 1) {
            document.getElementById("debug_info").innerHTML = "Debug Message PDF Maker: " + str;
        }
        // if PDF
        // Show in Web Page Only
        myElements = document.querySelectorAll(".show_only_pdfs");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "block";
        });
        // Show in: HTML only: TOC
        myElements = document.querySelectorAll(".no_show_book");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "none";
        });
        // Show in: HTML
        myElements = document.querySelectorAll(".no_show_pdf");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "none";
        });
        // Show in Web Page Only
        myElements = document.querySelectorAll(".show_web_page_only");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "none";
        });
        // Show in: HTML
        myElements = document.querySelectorAll(".noprint");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "none";
        });
        // Show in: HTML if js_only and Not PDF or Book
        myElements = document.querySelectorAll(".show_if_js_only_no_show_pdf_book");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "none";
        });
        // Show Line Break
//        myElements = document.querySelectorAll(".a_line_show_break_html");
//        [].forEach.call(myElements, function (myElement) {
//            myElement.style.display = "none";
//        });
        // targetBlank(); // Fix in bash by renaming
        // I could not get this to work
        // subst(debugInfo);
    } else {
        // If not PDF and not HeadlessChrome
        if (debugInfo === 1) {
            document.getElementById("debug_info").innerHTML = "Debug Message Browser: " + str;
        }
        myElements = document.querySelectorAll(".a_line_show_break_html");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "block";
        });
        // Show in: HTML
        myElements = document.querySelectorAll(".noprint");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "block";
            myElement.className = "align_center";
        });
        // Show in: HTML and PDF
        myElements = document.querySelectorAll(".no_show_book");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "block";
            myElement.className = "the_chapter";
        });
        // Show in: HTML if js_only and Not PDF or Book
        myElements = document.querySelectorAll(".show_if_js_only_no_show_pdf_book");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "block";
        });
        // Show in Web Page Only
        myElements = document.querySelectorAll(".show_web_page_only");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "block";
        });
        // Show in Web Page Only
        myElements = document.querySelectorAll(".goog-te-gadget-simple");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.marginTop = "0";
            myElement.style.paddingTop = "0";
            myElement.style.fontSize = "large";
        });
        // Show in: HTML, full size images span
        myElements = document.querySelectorAll(".no_show_pdf");
        [].forEach.call(myElements, function (myElement) {
            myElement.style.display = "inline";
        });
        // targetBlank(); // Fix in bash by renaming
    } 
}
// OnLoad
document.onload = setAgent();
/* ******************* End of File ***************************************** */
