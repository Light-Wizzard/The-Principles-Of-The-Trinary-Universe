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
/* ****************************************************************************
 * Trinary JavaScript
 * Last Update: 28 December 2018
 * Copyright and Copyleft by: Jeffrey Scott Flesher
 * Below is for JSlint http://jslint.com/;
 * Check: a browser, long lines and whitespace mess
 * do not alter it, no space before global.
 */
/*global window */
/* ****************************************************************************
 *  isEven(n)
 */
function isEven(n) {
    "use strict";
    return n % 2 === 0;
}
/* ****************************************************************************
 *  isOdd(n)
 */
function isOdd(n) {
    "use strict";
    return Math.abs(n % 2) === 1;
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
 *  Numerological Conversion
 */
function calcNumerological() {
    "use strict";
    var WordSpell = document.getElementById("txtWordSpell").value;
    var i = 0;
    var x = 0;
    var y = 0;
    var formula = "";
    // for (i = 0; i < WordSpell.length; i += 1) {
    while (i < WordSpell.length) {
        x = 0;
        switch (WordSpell.charAt(i).toLowerCase()) {
        case "a":
            x = 1;
            formula += x;
            break;
        case "b":
            x = 2;
            formula += x;
            break;
        case "c":
            x = 3;
            formula += x;
            break;
        case "d":
            x = 4;
            formula += x;
            break;
        case "e":
            x = 5;
            formula += x;
            break;
        case "f":
            x = 6;
            formula += x;
            break;
        case "g":
            x = 7;
            formula += x;
            break;
        case "h":
            x = 8;
            formula += x;
            break;
        case "i":
            x = 9;
            formula += x;
            break;
        case "j":
            x = 1; // 10
            formula += x;
            break;
        case "k":
            x = 2; // 11
            formula += x;
            break;
        case "l":
            x = 3; // 12
            formula += x;
            break;
        case "m":
            x = 4; // 13
            formula += x;
            break;
        case "n":
            x = 5; // 14
            formula += x;
            break;
        case "o":
            x = 6; // 15
            formula += x;
            break;
        case "p":
            x = 7; // 16
            formula += x;
            break;
        case "q":
            x = 8; // 17
            formula += x;
            break;
        case "r":
            x = 9; // 18
            formula += x;
            break;
        case "s":
            x = 1; // 19
            formula += x;
            break;
        case "t":
            x = 2; // 20
            formula += x;
            break;
        case "u":
            x = 3; // 21
            formula += x;
            break;
        case "v":
            x = 4; // 22
            formula += x;
            break;
        case "w":
            x = 5; // 23
            formula += x;
            break;
        case "x":
            x = 6; // 24
            formula += x;
            break;
        case "y":
            x = 7; // 25
            formula += x;
            break;
        case "z":
            x = 8; // 26
            formula += x;
            break;
        }
        y += parseInt(x);
        if (i + 1 < WordSpell.length) {
            formula += " + ";
        }
        i += 1;
    } // end while
    formula += " = " + y.toString();
    var answer = y.toString();
    y = 0;
    var anlen = answer.length; // Ignore 0 in loop by uing < and not <=
    i = 0;
    while (i < anlen && anlen > 1) {
        y += parseInt(answer.charAt(i));
        // 12
        if (i + 2 === anlen) {
            formula += " = " + (y + parseInt(answer.charAt(i + 1)));
        }
        i += 1;
    }
    y = answer.toString();
    document.getElementById("numerological_value").innerHTML = y;
    document.getElementById("numerological_formula").innerHTML = formula;
}
/* ****************************************************************************
 *  calc Energy
 */
function calcEnergy() {
    "use strict";
    var F = parseFloat(document.getElementById("txtFRF").value);
    var x = parseFloat(document.getElementById("txtX").value);
    document.getElementById("energy").innerHTML = numberWithCommas(F - (F - x));
    document.getElementById("formula").innerHTML = numberWithCommas(F) + " - (  " + numberWithCommas(F) + " - " + numberWithCommas(x) + "  )";
}
/* ****************************************************************************
 *  calc Speeds
    Orbital Speeds
    Minimum: 333,333
    Maximum: 666,666
    Current: 477,354.850
    Variable: 7.826 hertz
    Minimum: 3.333
    Maximum: 6.666
    I need to write the Math Formula that uses this Variable to calculate the Speed.
    Average Speed = Distance / (Days * 24)
    Variable is Frequency and Wavelength and realates to Earths Resonant frequency of 7.826 hz currently
    If the Frequency is 7.826 hz, what is the Wavelenght,
    Frequency * Wavelenght = Speed, maximum is the Speed of Light
 */
function calcSpeeds() {
    "use strict";
    /* Rotational */
    var aDiameter = parseFloat(document.getElementById("txtDiameter").value);
    var aRotation = parseFloat(document.getElementById("txtRotation").value);
    var rotation_result = (aDiameter * Math.PI) / (aRotation * 24);
    document.getElementById("rotation_speed").innerHTML = numberWithCommas(rotation_result.toFixed(3));
    /* Orbital */
    var aOrbitalDistance = parseFloat(document.getElementById("txtOrbitalDistance").value);
    var aOrbitalPeriod = parseFloat(document.getElementById("txtOrbitalPeriod").value);
    var obrital_result = aOrbitalDistance / (aOrbitalPeriod * 24);
    document.getElementById("orbital_speed").innerHTML = numberWithCommas(obrital_result.toFixed(3));
}
/* ****************************************************************************
 *  preset Combo Box
 *  Notes: cb must not be a number, cb === 1 does not work
 *  I use 365 and not 365.2, this is to keep the numbers whole,
 *  in reality this an average and not the actual speed,
 *  this calculation needs a Maximum, Minimum and Current,
 *  set useJulianDays to 1 to change this to Julian days.
 */
function presetCB(cb) {
    "use strict";
    var useJulianDays = 0;
    var earthYearInDays = 365;
    if (useJulianDays === 1) {
        earthYearInDays = 365.256;
    }
    // alert("cb=" + cb);
    var cb_diameter_miles         = 7926.2109;
    var cb_sidereal_day           = 0.99726968;
    var cb_orbital_period_days    = earthYearInDays;  // Revolution period 365
    var cb_orbital_distance_miles = 584000000;
    /* Sun 483,000 to 514,495 miles per hour or 669,600,000.000 */
    if (cb === "1") {
        cb_diameter_miles         = 864575.9; // 864948.7  864575.9 864938
        cb_sidereal_day           = 25.379995;
        cb_orbital_distance_miles = (2 * 161057496139894200) * Math.PI; // 1011954093357316200
        cb_orbital_period_days    = 242000000 * earthYearInDays;  // 88330000000
    }
    /* Mercury orbits the sun 105,947 or 105,954.682 miles */
    if (cb === "2") {
        cb_diameter_miles         = 3031.9186;
        cb_sidereal_day           = 58.646225;
        cb_orbital_distance_miles = 223700000;
        cb_orbital_period_days    = 87.97;
    }
    /* Venus orbits the sun 78,341 or 78,345.201 miles per hour */
    if (cb === "3") {
        cb_diameter_miles         = 7521.0769;
        cb_sidereal_day           = 243.0187;
        cb_orbital_distance_miles = 422500000;
        cb_orbital_period_days    = 224.7;
    }
    /* Earth orbits the sun  */
    if (cb === "4") {
        cb_diameter_miles         = 7926.2109;
        cb_sidereal_day           = 0.99726968;
        cb_orbital_distance_miles = 584000000;
        cb_orbital_period_days    = earthYearInDays;  // 365 or 365.256
        /*
        584000000 / (365 * 24) = 66666.666666667
        584000000 / 8760 = 67,000 mph
        */
    }
    /* Moon orbits Earth at a speed of 2,288 or 2,286.032 miles per hour */
    if (cb === "5") {
        cb_diameter_miles         = 2159;
        cb_sidereal_day           = 27.321661;
        cb_orbital_distance_miles = 1499070; // 477168.801082 452954.96804 1423000  1499070
        cb_orbital_period_days    = 27.323;
    }
    /* Mars orbits the sun 53,979 or 53,858.919 miles per hour */
    if (cb === "6") {
        cb_diameter_miles         = 4217.246;
        cb_sidereal_day           = 1.02595675;
        cb_orbital_distance_miles = 888000000;
        cb_orbital_period_days    = 686.98;
    }
    /* Jupiter orbits the sun 29,236 miles per hour or 29,220.354 */
    if (cb === "7") {
        cb_diameter_miles         = 88731.8063;
        cb_sidereal_day           = 0.41007;
        cb_orbital_distance_miles = 3037000000;
        cb_orbital_period_days    = 4330.6;
    }
    /* Saturn orbits the sun 21,637 miles per hour or 21,561.823 */
    if (cb === "8") {
        cb_diameter_miles         = 74974.6481;
        cb_sidereal_day           = 0.426;
        cb_orbital_distance_miles = 5565900000;
        cb_orbital_period_days    = 10755.7;
    }
    /* Uranus orbits the sun 15,290 miles per hour or 15,210.065 Equatorial rotation velocity 5791.18 mph */
    if (cb === "9") {
        cb_diameter_miles         = 31763.253;
        cb_sidereal_day           = 0.71833;
        cb_orbital_distance_miles = 11201300000;
        cb_orbital_period_days    = 30685;
    }
    /* Neptune orbits the sun 12,253 miles per hour or 12,157.543 */
    if (cb === "10") {
        cb_diameter_miles         = 30775.272;
        cb_sidereal_day           = 0.67125;
        cb_orbital_distance_miles = 17562300000;
        cb_orbital_period_days    = 60190;
    }
    document.getElementById("txtDiameter").value = cb_diameter_miles;
    document.getElementById("txtRotation").value = cb_sidereal_day;
    document.getElementById("txtOrbitalDistance").value = cb_orbital_distance_miles;
    document.getElementById("txtOrbitalPeriod").value   = cb_orbital_period_days;
    calcSpeeds();
}
/* ****************************************************************************
 *  Madness Meter
 */
function madnessMeter() {
    /*
        Working on a way that I do not have use a form to iterate through
        I can set id Universe_1 - 3 and God_1 - 3,
        I have no idea what value they are set to, or if any value has been set,
        I can make a hidden span
        <span class="hidden" id="Universe_Ans">0</span>
        <span class="hidden" id="God_Ans">0</span>
        SEO will take a hit, but its all ready doing that if it ignores JavaScript resetting them.
        now I can get
        we need to functions; on for Universe_ the other for God_
        otherwise we have no idea what to set
        var universe = parseInt(document.getElementById("Universe_Ans").value;
        if () > 0)
        {
        }
        if (parseInt(document.getElementById("God_Ans").value) > 0)
    */
    "use strict";
    var UniverseMadness = 6;
    var GodMadness = 6;
    var myElements;
    myElements = document.querySelectorAll('input[name="Universe"]');
    [].forEach.call(myElements, function (myElement) {
        if (myElement.checked) {
            UniverseMadness = parseInt(myElement.value, 10);
            if (UniverseMadness === 2) {
                UniverseMadness = 0;
            }
        }
    });
    myElements = document.querySelectorAll('input[name="God"]');
    [].forEach.call(myElements, function (myElement) {
        if (myElement.checked) {
            GodMadness = parseInt(myElement.value, 10);
            if (GodMadness === 2) {
                GodMadness = 0;
            }
        }
    });
    if (GodMadness === 0 && UniverseMadness === 0) {
        document.getElementById("Madness_of_People").innerHTML = "<span style='color: green;'>You are Sane</span>";
        return;
    }
    if (GodMadness === 0 || UniverseMadness === 0) {
        if (GodMadness === 6) {
            document.getElementById("Madness_of_People").innerHTML = "<span style='color: green;'>You are Sane, but I need you to answer the next question to make sure.</span>";
            return;
        }
        if (UniverseMadness === 6) {
            document.getElementById("Madness_of_People").innerHTML = "<span style='color: green;'>You are Sane, but I need you to answer the previous question to make sure.</span>";
            return;
        }
        document.getElementById("Madness_of_People").innerHTML = "<span style='color: gold;'>You are between Sanity and Madness</span>";
        return;
    }
    document.getElementById("Madness_of_People").innerHTML = "<span style='color: red;'>You are Mad</span>";
}
/* ************************************************************************* */
window.onload = function () {
    "use strict";
    calcSpeeds();
    calcEnergy();
};
/* ************************ End of File *********************************** */
