/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bbq chicken.png":
/*!*****************************!*\
  !*** ./src/bbq chicken.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ecb0252484243733c42a.png";

/***/ }),

/***/ "./src/donatello.png":
/*!***************************!*\
  !*** ./src/donatello.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ae242b2ee6d9edb48a6.png";

/***/ }),

/***/ "./src/leonardo.png":
/*!**************************!*\
  !*** ./src/leonardo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7986a8c9d1ea7389c9a6.png";

/***/ }),

/***/ "./src/margherita.png":
/*!****************************!*\
  !*** ./src/margherita.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4f512c6885e5f4f75287.png";

/***/ }),

/***/ "./src/michelangelo.png":
/*!******************************!*\
  !*** ./src/michelangelo.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e0e385153bd67d8b082.png";

/***/ }),

/***/ "./src/pepperoni.png":
/*!***************************!*\
  !*** ./src/pepperoni.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "364ee9a3fbe182d3270b.png";

/***/ }),

/***/ "./src/raphael.png":
/*!*************************!*\
  !*** ./src/raphael.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "207b8b7ad27e0b29eca8.png";

/***/ }),

/***/ "./src/veggie.png":
/*!************************!*\
  !*** ./src/veggie.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "660d820f44ea2fbc3767.png";

/***/ }),

/***/ "./src/we-love-pizza.jpg":
/*!*******************************!*\
  !*** ./src/we-love-pizza.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6590ab583ae74a2d1351.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _we_love_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./we-love-pizza.jpg */ "./src/we-love-pizza.jpg");
/* harmony import */ var _margherita_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./margherita.png */ "./src/margherita.png");
/* harmony import */ var _pepperoni_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pepperoni.png */ "./src/pepperoni.png");
/* harmony import */ var _veggie_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./veggie.png */ "./src/veggie.png");
/* harmony import */ var _bbq_chicken_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bbq chicken.png */ "./src/bbq chicken.png");
/* harmony import */ var _leonardo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./leonardo.png */ "./src/leonardo.png");
/* harmony import */ var _donatello_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donatello.png */ "./src/donatello.png");
/* harmony import */ var _raphael_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./raphael.png */ "./src/raphael.png");
/* harmony import */ var _michelangelo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./michelangelo.png */ "./src/michelangelo.png");










// ContentHolder where selected page elements are to be loaded into 
const contentHolder = document.getElementById('contentStuff');
contentHolder.classList.add("items-center","justify-center","text-center","h-full","w-5/6","ml-auto","mr-auto","h-full");

//////////////////////////////////

// module for homepage
const HomeTabModule = (() => {
    
    // Homepage elements
    const titleMessage = document.createElement("h1");
    titleMessage.textContent = "Welcome To Full Moon Pizza!";
    titleMessage.classList.add("text-4xl","sm:text-5xl","font-semibold","leading-none","tracking-tighter","mb-4","text-white");

    const blurbHolder = document.createElement("div");
    blurbHolder.classList.add("bg-stone-700","rounded","shadow-lg","overflow-hidden","p-8");

    const pizzaBlurb = document.createElement("p");
    pizzaBlurb.textContent = "Pizza tastes good because it has richness from meats, fat and cheese, the appealing texture of a crispy crust, an acidic and slightly sweet sauce, and a host of savory toppings. If you throw on a bunch of mushrooms, it packs an awesome umami punch as well. Pizza smells great too.";
    pizzaBlurb.textContent += "I guess you could say that pizza appeals to all of your senses, there isn’t much to dislike about it.";
    pizzaBlurb.classList.add("text-lg","text-white","leading-tight");
    blurbHolder.appendChild(pizzaBlurb);

    // const imgHolder = document.createElement("div");
    // imgHolder.classList.add("m-auto","flex","flex-col-reverse","md:flex-row","justify-center","bg-white","rounded","shadow-lg","overflow-hidden","max-w-fit");
    // const pizzaImg = new Image();
    // pizzaImg.src = pizzaPic;
    // imgHolder.appendChild(pizzaImg);

    function loadHomePage() {

        homeButton.classList = selectedTabClasses.join(" ");
        menuButton.classList = unselectedTabClasses.join(" ");
        contactButton.classList = unselectedTabClasses.join(" ");

        contentHolder.innerHTML = "";

        contentHolder.appendChild(titleMessage);
        contentHolder.appendChild(blurbHolder);
        // contentHolder.appendChild(imgHolder);
    }
    return {
        loadHomePage
    };
})();

//////////////////////////////////////

// module for Menu Page
const MenuTabModule = (() => {
    
    // class for menu item
    class MenuItem {
        constructor(title, ingredients, image) {
            this.title = title;
            this.ingredients = ingredients;
            this.image = image;
        }
    }

    function calculatePrice(MenuItem) {

        let basePrice = 10;
        let toppingsPrice = 0;
        MenuItem.ingredients.forEach(ingredient => {
            toppingsPrice += 1;
        });
        let totalPrice = basePrice + toppingsPrice;

        return totalPrice;
    }

    function createMenuItemHTML(MenuItem) {
        let cardholder = document.createElement('div');
        cardholder.classList.add("sm:w-1/4","p-2");

        let card = document.createElement('div');
        card.classList.add("bg-white","px-6","py-8","rounded-lg","shadow-lg","text-center");

        let imageholder = document.createElement('div');
        imageholder.classList.add("mb-3");

        let menuImage = new Image();
        menuImage.src = MenuItem.image;
        menuImage.classList.add("w-auto","mx-auto","rounded-full");
        

        let menuTitle = document.createElement('h2');
        menuTitle.classList.add("text-xl","font-medium","text-gray-700");
        menuTitle.textContent = MenuItem.title

        let menuIngredients = document.createElement('span');
        menuIngredients.classList.add("text-blue-500","block","mb-5");
        menuIngredients.textContent = MenuItem.ingredients.join(", ");

        cardholder.appendChild(card);
        card.appendChild(imageholder);
        imageholder.appendChild(menuImage);
        card.appendChild(menuTitle);
        card.appendChild(menuIngredients);

        return cardholder;
    }

    function renderMenu(){

        homeButton.classList = unselectedTabClasses.join(" ");
        menuButton.classList = selectedTabClasses.join(" ");
        contactButton.classList = unselectedTabClasses.join(" ");

        contentHolder.innerHTML = "";
        
        let HTMLmenu = generateHTMLmenu();
        
        const menuHolder = document.createElement('div');
        menuHolder.classList.add("flex","flex-col","sm:flex-row");
        contentHolder.appendChild(menuHolder);

        HTMLmenu.forEach(menuItem => {
            menuHolder.appendChild(menuItem);
        });
    }

    function generateHTMLmenu() {
        let HTMLmenu = [];

        // const margheritaHTML = new MenuItem("Margherita", ["Mozzarella", "Tomato Sauce", "Basil"], margheritaPic).createMenuItemHTML();
        // const pepperoniHTML = new MenuItem("Pepperoni", ["Mozzarella", "Tomato Sauce", "Pepperoni Slices"], pepperoniPic).createMenuItemHTML();
        // const veggieiHTML = new MenuItem("Veggie Supreme", ["Mozzarella", "Tomato Sauce", "Peppers", "Onions", "Sweetcorn"], veggiePic).createMenuItemHTML();
        // const bbqChickenHTML = new MenuItem("BBQ Chicken", ["Mozzarella", "BBQ Sauce", "Chicken Pieces"], bbqchickenPic).createMenuItemHTML();

        const margheritaHTML = createMenuItemHTML(new MenuItem("Margherita", ["Mozzarella", "Tomato Sauce", "Basil"], _margherita_png__WEBPACK_IMPORTED_MODULE_1__));
        const pepperoniHTML = createMenuItemHTML(new MenuItem("Pepperoni", ["Mozzarella", "Tomato Sauce", "Pepperoni Slices"], _pepperoni_png__WEBPACK_IMPORTED_MODULE_2__));
        const veggieiHTML = createMenuItemHTML(new MenuItem("Veggie Supreme", ["Mozzarella", "Tomato Sauce", "Peppers", "Onions", "Sweetcorn"], _veggie_png__WEBPACK_IMPORTED_MODULE_3__));
        const bbqChickenHTML = createMenuItemHTML(new MenuItem("BBQ Chicken", ["Mozzarella", "BBQ Sauce", "Chicken Pieces"], _bbq_chicken_png__WEBPACK_IMPORTED_MODULE_4__));

        HTMLmenu.push(margheritaHTML, pepperoniHTML, veggieiHTML, bbqChickenHTML);

        return HTMLmenu;
    }
    
    return {
        calculatePrice,
        renderMenu
    };
})();

/////////////////////////////////////

//////////////////////////////////////

// module for Contact Page
const ContactTabModule = (() => {
    
    // class for menu item
    class StaffMember {
        constructor(name, role, image) {
            this.name = name;
            this.role = role;
            this.image = image;
        }
    }

    function createStaffMemberHTML(StaffMember) {
        let cardholder = document.createElement('div');
        cardholder.classList.add("sm:w-1/4","p-2");

        let card = document.createElement('div');
        card.classList.add("bg-white","px-6","py-8","rounded-lg","shadow-lg","text-center");

        let imageholder = document.createElement('div');
        imageholder.classList.add("mb-3");

        let staffImage = new Image();
        staffImage.src = StaffMember.image;
        staffImage.classList.add("w-auto","mx-auto","rounded-full");
        
        let staffName = document.createElement('h2');
        staffName.classList.add("text-xl","font-medium","text-gray-700");
        staffName.textContent = StaffMember.name;

        let staffRole = document.createElement('span');
        staffRole.classList.add("text-blue-500","block","mb-5");
        staffRole.textContent = StaffMember.role;

        cardholder.appendChild(card);
        card.appendChild(imageholder);
        imageholder.appendChild(staffImage);
        card.appendChild(staffName);
        card.appendChild(staffRole);

        return cardholder;
    }

    function renderContact(){

        homeButton.classList = unselectedTabClasses.join(" ");
        menuButton.classList = unselectedTabClasses.join(" ");
        contactButton.classList = selectedTabClasses.join(" ");

        contentHolder.innerHTML = "";
        
        let HTMLstaff = generateHTMLStaffPage();
        
        const staffList = document.createElement('div');
        staffList.classList.add("flex","flex-col","sm:flex-row");
        contentHolder.appendChild(staffList);

        HTMLstaff.forEach(staffer => {
            staffList.appendChild(staffer);
        });
    }

    function generateHTMLStaffPage() {
        let HTMLstaff = [];

        const leoHTML = createStaffMemberHTML(new StaffMember("Leonardo", "Manager", _leonardo_png__WEBPACK_IMPORTED_MODULE_5__));
        const donHTML = createStaffMemberHTML(new StaffMember("Donatello", "Head Pizza Chef", _donatello_png__WEBPACK_IMPORTED_MODULE_6__));
        const rafHTML = createStaffMemberHTML(new StaffMember("Rafael", "Delivery Driver", _raphael_png__WEBPACK_IMPORTED_MODULE_7__));
        const micHTML = createStaffMemberHTML(new StaffMember("Michelangelo", "Quality Control", _michelangelo_png__WEBPACK_IMPORTED_MODULE_8__));

        HTMLstaff.push(leoHTML, donHTML, rafHTML, micHTML);

        return HTMLstaff;
    }
    
    return {
        renderContact
    };
})();

/////////////////////////////////////



// selected tab classlist 
//const selectedTabClasses = ["text-gray-600","py-4","px-6","block","hover:text-blue-500","focus:outline-none","text-blue-500","border-b-2","font-medium","border-blue-500"];
const selectedTabClasses = ["text-gray-600","py-4","px-6","block","hover:text-blue-500","focus:outline-none","text-blue-500","border-b-2","font-medium","border-blue-500"];
const unselectedTabClasses = ["text-white","py-4","px-6","block","hover:text-blue-500","focus:outline-none"];

// // Tab based NavBar

const navBarHolder = document.getElementById('navBar');
navBarHolder.classList.add("bg-slate-500");

const navBar = document.createElement('nav');
navBar.classList.add("flex","flex-col","sm:flex-row");

const homeButton = document.createElement('button');

homeButton.classList = (selectedTabClasses.join(" "));
homeButton.textContent = "Home";
homeButton.addEventListener("click", HomeTabModule.loadHomePage);

const menuButton = document.createElement('button');
menuButton.classList = unselectedTabClasses.join(" ");
menuButton.textContent = "Menu";
menuButton.addEventListener("click", MenuTabModule.renderMenu);

const contactButton = document.createElement('button');
contactButton.classList = unselectedTabClasses.join(" ");
contactButton.textContent = "Contact Us";
contactButton.addEventListener("click", ContactTabModule.renderContact);

navBarHolder.appendChild(navBar);
navBar.appendChild(homeButton);
navBar.appendChild(menuButton);
navBar.appendChild(contactButton);

HomeTabModule.loadHomePage();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcGl6emFQaWMgZnJvbSAnLi93ZS1sb3ZlLXBpenphLmpwZyc7XHJcbmltcG9ydCBtYXJnaGVyaXRhUGljIGZyb20gJy4vbWFyZ2hlcml0YS5wbmcnO1xyXG5pbXBvcnQgcGVwcGVyb25pUGljIGZyb20gJy4vcGVwcGVyb25pLnBuZyc7XHJcbmltcG9ydCB2ZWdnaWVQaWMgZnJvbSAnLi92ZWdnaWUucG5nJztcclxuaW1wb3J0IGJicWNoaWNrZW5QaWMgZnJvbSAnLi9iYnEgY2hpY2tlbi5wbmcnO1xyXG5pbXBvcnQgbGVvUGljIGZyb20gJy4vbGVvbmFyZG8ucG5nJztcclxuaW1wb3J0IGRvblBpYyBmcm9tICcuL2RvbmF0ZWxsby5wbmcnO1xyXG5pbXBvcnQgcmFmUGljIGZyb20gJy4vcmFwaGFlbC5wbmcnO1xyXG5pbXBvcnQgbWljUGljIGZyb20gJy4vbWljaGVsYW5nZWxvLnBuZyc7XHJcblxyXG4vLyBDb250ZW50SG9sZGVyIHdoZXJlIHNlbGVjdGVkIHBhZ2UgZWxlbWVudHMgYXJlIHRvIGJlIGxvYWRlZCBpbnRvIFxyXG5jb25zdCBjb250ZW50SG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnRTdHVmZicpO1xyXG5jb250ZW50SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtcy1jZW50ZXJcIixcImp1c3RpZnktY2VudGVyXCIsXCJ0ZXh0LWNlbnRlclwiLFwiaC1mdWxsXCIsXCJ3LTUvNlwiLFwibWwtYXV0b1wiLFwibXItYXV0b1wiLFwiaC1mdWxsXCIpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gbW9kdWxlIGZvciBob21lcGFnZVxyXG5jb25zdCBIb21lVGFiTW9kdWxlID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gSG9tZXBhZ2UgZWxlbWVudHNcclxuICAgIGNvbnN0IHRpdGxlTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIHRpdGxlTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSBUbyBGdWxsIE1vb24gUGl6emEhXCI7XHJcbiAgICB0aXRsZU1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInRleHQtNHhsXCIsXCJzbTp0ZXh0LTV4bFwiLFwiZm9udC1zZW1pYm9sZFwiLFwibGVhZGluZy1ub25lXCIsXCJ0cmFja2luZy10aWdodGVyXCIsXCJtYi00XCIsXCJ0ZXh0LXdoaXRlXCIpO1xyXG5cclxuICAgIGNvbnN0IGJsdXJiSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJsdXJiSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJiZy1zdG9uZS03MDBcIixcInJvdW5kZWRcIixcInNoYWRvdy1sZ1wiLFwib3ZlcmZsb3ctaGlkZGVuXCIsXCJwLThcIik7XHJcblxyXG4gICAgY29uc3QgcGl6emFCbHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGl6emFCbHVyYi50ZXh0Q29udGVudCA9IFwiUGl6emEgdGFzdGVzIGdvb2QgYmVjYXVzZSBpdCBoYXMgcmljaG5lc3MgZnJvbSBtZWF0cywgZmF0IGFuZCBjaGVlc2UsIHRoZSBhcHBlYWxpbmcgdGV4dHVyZSBvZiBhIGNyaXNweSBjcnVzdCwgYW4gYWNpZGljIGFuZCBzbGlnaHRseSBzd2VldCBzYXVjZSwgYW5kIGEgaG9zdCBvZiBzYXZvcnkgdG9wcGluZ3MuIElmIHlvdSB0aHJvdyBvbiBhIGJ1bmNoIG9mIG11c2hyb29tcywgaXQgcGFja3MgYW4gYXdlc29tZSB1bWFtaSBwdW5jaCBhcyB3ZWxsLiBQaXp6YSBzbWVsbHMgZ3JlYXQgdG9vLlwiO1xyXG4gICAgcGl6emFCbHVyYi50ZXh0Q29udGVudCArPSBcIkkgZ3Vlc3MgeW91IGNvdWxkIHNheSB0aGF0IHBpenphIGFwcGVhbHMgdG8gYWxsIG9mIHlvdXIgc2Vuc2VzLCB0aGVyZSBpc27igJl0IG11Y2ggdG8gZGlzbGlrZSBhYm91dCBpdC5cIjtcclxuICAgIHBpenphQmx1cmIuY2xhc3NMaXN0LmFkZChcInRleHQtbGdcIixcInRleHQtd2hpdGVcIixcImxlYWRpbmctdGlnaHRcIik7XHJcbiAgICBibHVyYkhvbGRlci5hcHBlbmRDaGlsZChwaXp6YUJsdXJiKTtcclxuXHJcbiAgICAvLyBjb25zdCBpbWdIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgLy8gaW1nSG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJtLWF1dG9cIixcImZsZXhcIixcImZsZXgtY29sLXJldmVyc2VcIixcIm1kOmZsZXgtcm93XCIsXCJqdXN0aWZ5LWNlbnRlclwiLFwiYmctd2hpdGVcIixcInJvdW5kZWRcIixcInNoYWRvdy1sZ1wiLFwib3ZlcmZsb3ctaGlkZGVuXCIsXCJtYXgtdy1maXRcIik7XHJcbiAgICAvLyBjb25zdCBwaXp6YUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgLy8gcGl6emFJbWcuc3JjID0gcGl6emFQaWM7XHJcbiAgICAvLyBpbWdIb2xkZXIuYXBwZW5kQ2hpbGQocGl6emFJbWcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRIb21lUGFnZSgpIHtcclxuXHJcbiAgICAgICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QgPSBzZWxlY3RlZFRhYkNsYXNzZXMuam9pbihcIiBcIik7XHJcbiAgICAgICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QgPSB1bnNlbGVjdGVkVGFiQ2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuICAgICAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdCA9IHVuc2VsZWN0ZWRUYWJDbGFzc2VzLmpvaW4oXCIgXCIpO1xyXG5cclxuICAgICAgICBjb250ZW50SG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQodGl0bGVNZXNzYWdlKTtcclxuICAgICAgICBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGJsdXJiSG9sZGVyKTtcclxuICAgICAgICAvLyBjb250ZW50SG9sZGVyLmFwcGVuZENoaWxkKGltZ0hvbGRlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvYWRIb21lUGFnZVxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBtb2R1bGUgZm9yIE1lbnUgUGFnZVxyXG5jb25zdCBNZW51VGFiTW9kdWxlID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gY2xhc3MgZm9yIG1lbnUgaXRlbVxyXG4gICAgY2xhc3MgTWVudUl0ZW0ge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBpbmdyZWRpZW50cywgaW1hZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgICAgICB0aGlzLmluZ3JlZGllbnRzID0gaW5ncmVkaWVudHM7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUHJpY2UoTWVudUl0ZW0pIHtcclxuXHJcbiAgICAgICAgbGV0IGJhc2VQcmljZSA9IDEwO1xyXG4gICAgICAgIGxldCB0b3BwaW5nc1ByaWNlID0gMDtcclxuICAgICAgICBNZW51SXRlbS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xyXG4gICAgICAgICAgICB0b3BwaW5nc1ByaWNlICs9IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHRvdGFsUHJpY2UgPSBiYXNlUHJpY2UgKyB0b3BwaW5nc1ByaWNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdG90YWxQcmljZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNZW51SXRlbUhUTUwoTWVudUl0ZW0pIHtcclxuICAgICAgICBsZXQgY2FyZGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmRob2xkZXIuY2xhc3NMaXN0LmFkZChcInNtOnctMS80XCIsXCJwLTJcIik7XHJcblxyXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiYmctd2hpdGVcIixcInB4LTZcIixcInB5LThcIixcInJvdW5kZWQtbGdcIixcInNoYWRvdy1sZ1wiLFwidGV4dC1jZW50ZXJcIik7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGltYWdlaG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJtYi0zXCIpO1xyXG5cclxuICAgICAgICBsZXQgbWVudUltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgbWVudUltYWdlLnNyYyA9IE1lbnVJdGVtLmltYWdlO1xyXG4gICAgICAgIG1lbnVJbWFnZS5jbGFzc0xpc3QuYWRkKFwidy1hdXRvXCIsXCJteC1hdXRvXCIsXCJyb3VuZGVkLWZ1bGxcIik7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC14bFwiLFwiZm9udC1tZWRpdW1cIixcInRleHQtZ3JheS03MDBcIik7XHJcbiAgICAgICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gTWVudUl0ZW0udGl0bGVcclxuXHJcbiAgICAgICAgbGV0IG1lbnVJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBtZW51SW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcInRleHQtYmx1ZS01MDBcIixcImJsb2NrXCIsXCJtYi01XCIpO1xyXG4gICAgICAgIG1lbnVJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IE1lbnVJdGVtLmluZ3JlZGllbnRzLmpvaW4oXCIsIFwiKTtcclxuXHJcbiAgICAgICAgY2FyZGhvbGRlci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGltYWdlaG9sZGVyKTtcclxuICAgICAgICBpbWFnZWhvbGRlci5hcHBlbmRDaGlsZChtZW51SW1hZ2UpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG1lbnVJbmdyZWRpZW50cyk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXJkaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlck1lbnUoKXtcclxuXHJcbiAgICAgICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QgPSB1bnNlbGVjdGVkVGFiQ2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdCA9IHNlbGVjdGVkVGFiQ2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuICAgICAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdCA9IHVuc2VsZWN0ZWRUYWJDbGFzc2VzLmpvaW4oXCIgXCIpO1xyXG5cclxuICAgICAgICBjb250ZW50SG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IEhUTUxtZW51ID0gZ2VuZXJhdGVIVE1MbWVudSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1lbnVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51SG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJmbGV4XCIsXCJmbGV4LWNvbFwiLFwic206ZmxleC1yb3dcIik7XHJcbiAgICAgICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChtZW51SG9sZGVyKTtcclxuXHJcbiAgICAgICAgSFRNTG1lbnUuZm9yRWFjaChtZW51SXRlbSA9PiB7XHJcbiAgICAgICAgICAgIG1lbnVIb2xkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlSFRNTG1lbnUoKSB7XHJcbiAgICAgICAgbGV0IEhUTUxtZW51ID0gW107XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IG1hcmdoZXJpdGFIVE1MID0gbmV3IE1lbnVJdGVtKFwiTWFyZ2hlcml0YVwiLCBbXCJNb3p6YXJlbGxhXCIsIFwiVG9tYXRvIFNhdWNlXCIsIFwiQmFzaWxcIl0sIG1hcmdoZXJpdGFQaWMpLmNyZWF0ZU1lbnVJdGVtSFRNTCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IHBlcHBlcm9uaUhUTUwgPSBuZXcgTWVudUl0ZW0oXCJQZXBwZXJvbmlcIiwgW1wiTW96emFyZWxsYVwiLCBcIlRvbWF0byBTYXVjZVwiLCBcIlBlcHBlcm9uaSBTbGljZXNcIl0sIHBlcHBlcm9uaVBpYykuY3JlYXRlTWVudUl0ZW1IVE1MKCk7XHJcbiAgICAgICAgLy8gY29uc3QgdmVnZ2llaUhUTUwgPSBuZXcgTWVudUl0ZW0oXCJWZWdnaWUgU3VwcmVtZVwiLCBbXCJNb3p6YXJlbGxhXCIsIFwiVG9tYXRvIFNhdWNlXCIsIFwiUGVwcGVyc1wiLCBcIk9uaW9uc1wiLCBcIlN3ZWV0Y29yblwiXSwgdmVnZ2llUGljKS5jcmVhdGVNZW51SXRlbUhUTUwoKTtcclxuICAgICAgICAvLyBjb25zdCBiYnFDaGlja2VuSFRNTCA9IG5ldyBNZW51SXRlbShcIkJCUSBDaGlja2VuXCIsIFtcIk1venphcmVsbGFcIiwgXCJCQlEgU2F1Y2VcIiwgXCJDaGlja2VuIFBpZWNlc1wiXSwgYmJxY2hpY2tlblBpYykuY3JlYXRlTWVudUl0ZW1IVE1MKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hcmdoZXJpdGFIVE1MID0gY3JlYXRlTWVudUl0ZW1IVE1MKG5ldyBNZW51SXRlbShcIk1hcmdoZXJpdGFcIiwgW1wiTW96emFyZWxsYVwiLCBcIlRvbWF0byBTYXVjZVwiLCBcIkJhc2lsXCJdLCBtYXJnaGVyaXRhUGljKSk7XHJcbiAgICAgICAgY29uc3QgcGVwcGVyb25pSFRNTCA9IGNyZWF0ZU1lbnVJdGVtSFRNTChuZXcgTWVudUl0ZW0oXCJQZXBwZXJvbmlcIiwgW1wiTW96emFyZWxsYVwiLCBcIlRvbWF0byBTYXVjZVwiLCBcIlBlcHBlcm9uaSBTbGljZXNcIl0sIHBlcHBlcm9uaVBpYykpO1xyXG4gICAgICAgIGNvbnN0IHZlZ2dpZWlIVE1MID0gY3JlYXRlTWVudUl0ZW1IVE1MKG5ldyBNZW51SXRlbShcIlZlZ2dpZSBTdXByZW1lXCIsIFtcIk1venphcmVsbGFcIiwgXCJUb21hdG8gU2F1Y2VcIiwgXCJQZXBwZXJzXCIsIFwiT25pb25zXCIsIFwiU3dlZXRjb3JuXCJdLCB2ZWdnaWVQaWMpKTtcclxuICAgICAgICBjb25zdCBiYnFDaGlja2VuSFRNTCA9IGNyZWF0ZU1lbnVJdGVtSFRNTChuZXcgTWVudUl0ZW0oXCJCQlEgQ2hpY2tlblwiLCBbXCJNb3p6YXJlbGxhXCIsIFwiQkJRIFNhdWNlXCIsIFwiQ2hpY2tlbiBQaWVjZXNcIl0sIGJicWNoaWNrZW5QaWMpKTtcclxuXHJcbiAgICAgICAgSFRNTG1lbnUucHVzaChtYXJnaGVyaXRhSFRNTCwgcGVwcGVyb25pSFRNTCwgdmVnZ2llaUhUTUwsIGJicUNoaWNrZW5IVE1MKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEhUTUxtZW51O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhbGN1bGF0ZVByaWNlLFxyXG4gICAgICAgIHJlbmRlck1lbnVcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gbW9kdWxlIGZvciBDb250YWN0IFBhZ2VcclxuY29uc3QgQ29udGFjdFRhYk1vZHVsZSA9ICgoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIGNsYXNzIGZvciBtZW51IGl0ZW1cclxuICAgIGNsYXNzIFN0YWZmTWVtYmVyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCByb2xlLCBpbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnJvbGUgPSByb2xlO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0YWZmTWVtYmVySFRNTChTdGFmZk1lbWJlcikge1xyXG4gICAgICAgIGxldCBjYXJkaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZGhvbGRlci5jbGFzc0xpc3QuYWRkKFwic206dy0xLzRcIixcInAtMlwiKTtcclxuXHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJiZy13aGl0ZVwiLFwicHgtNlwiLFwicHktOFwiLFwicm91bmRlZC1sZ1wiLFwic2hhZG93LWxnXCIsXCJ0ZXh0LWNlbnRlclwiKTtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW1hZ2Vob2xkZXIuY2xhc3NMaXN0LmFkZChcIm1iLTNcIik7XHJcblxyXG4gICAgICAgIGxldCBzdGFmZkltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgc3RhZmZJbWFnZS5zcmMgPSBTdGFmZk1lbWJlci5pbWFnZTtcclxuICAgICAgICBzdGFmZkltYWdlLmNsYXNzTGlzdC5hZGQoXCJ3LWF1dG9cIixcIm14LWF1dG9cIixcInJvdW5kZWQtZnVsbFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc3RhZmZOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBzdGFmZk5hbWUuY2xhc3NMaXN0LmFkZChcInRleHQteGxcIixcImZvbnQtbWVkaXVtXCIsXCJ0ZXh0LWdyYXktNzAwXCIpO1xyXG4gICAgICAgIHN0YWZmTmFtZS50ZXh0Q29udGVudCA9IFN0YWZmTWVtYmVyLm5hbWU7XHJcblxyXG4gICAgICAgIGxldCBzdGFmZlJvbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3RhZmZSb2xlLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWJsdWUtNTAwXCIsXCJibG9ja1wiLFwibWItNVwiKTtcclxuICAgICAgICBzdGFmZlJvbGUudGV4dENvbnRlbnQgPSBTdGFmZk1lbWJlci5yb2xlO1xyXG5cclxuICAgICAgICBjYXJkaG9sZGVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2Vob2xkZXIpO1xyXG4gICAgICAgIGltYWdlaG9sZGVyLmFwcGVuZENoaWxkKHN0YWZmSW1hZ2UpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3RhZmZOYW1lKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHN0YWZmUm9sZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXJkaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlckNvbnRhY3QoKXtcclxuXHJcbiAgICAgICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QgPSB1bnNlbGVjdGVkVGFiQ2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuICAgICAgICBtZW51QnV0dG9uLmNsYXNzTGlzdCA9IHVuc2VsZWN0ZWRUYWJDbGFzc2VzLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0ID0gc2VsZWN0ZWRUYWJDbGFzc2VzLmpvaW4oXCIgXCIpO1xyXG5cclxuICAgICAgICBjb250ZW50SG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IEhUTUxzdGFmZiA9IGdlbmVyYXRlSFRNTFN0YWZmUGFnZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YWZmTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN0YWZmTGlzdC5jbGFzc0xpc3QuYWRkKFwiZmxleFwiLFwiZmxleC1jb2xcIixcInNtOmZsZXgtcm93XCIpO1xyXG4gICAgICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQoc3RhZmZMaXN0KTtcclxuXHJcbiAgICAgICAgSFRNTHN0YWZmLmZvckVhY2goc3RhZmZlciA9PiB7XHJcbiAgICAgICAgICAgIHN0YWZmTGlzdC5hcHBlbmRDaGlsZChzdGFmZmVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUhUTUxTdGFmZlBhZ2UoKSB7XHJcbiAgICAgICAgbGV0IEhUTUxzdGFmZiA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBsZW9IVE1MID0gY3JlYXRlU3RhZmZNZW1iZXJIVE1MKG5ldyBTdGFmZk1lbWJlcihcIkxlb25hcmRvXCIsIFwiTWFuYWdlclwiLCBsZW9QaWMpKTtcclxuICAgICAgICBjb25zdCBkb25IVE1MID0gY3JlYXRlU3RhZmZNZW1iZXJIVE1MKG5ldyBTdGFmZk1lbWJlcihcIkRvbmF0ZWxsb1wiLCBcIkhlYWQgUGl6emEgQ2hlZlwiLCBkb25QaWMpKTtcclxuICAgICAgICBjb25zdCByYWZIVE1MID0gY3JlYXRlU3RhZmZNZW1iZXJIVE1MKG5ldyBTdGFmZk1lbWJlcihcIlJhZmFlbFwiLCBcIkRlbGl2ZXJ5IERyaXZlclwiLCByYWZQaWMpKTtcclxuICAgICAgICBjb25zdCBtaWNIVE1MID0gY3JlYXRlU3RhZmZNZW1iZXJIVE1MKG5ldyBTdGFmZk1lbWJlcihcIk1pY2hlbGFuZ2Vsb1wiLCBcIlF1YWxpdHkgQ29udHJvbFwiLCBtaWNQaWMpKTtcclxuXHJcbiAgICAgICAgSFRNTHN0YWZmLnB1c2gobGVvSFRNTCwgZG9uSFRNTCwgcmFmSFRNTCwgbWljSFRNTCk7XHJcblxyXG4gICAgICAgIHJldHVybiBIVE1Mc3RhZmY7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVuZGVyQ29udGFjdFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8gc2VsZWN0ZWQgdGFiIGNsYXNzbGlzdCBcclxuLy9jb25zdCBzZWxlY3RlZFRhYkNsYXNzZXMgPSBbXCJ0ZXh0LWdyYXktNjAwXCIsXCJweS00XCIsXCJweC02XCIsXCJibG9ja1wiLFwiaG92ZXI6dGV4dC1ibHVlLTUwMFwiLFwiZm9jdXM6b3V0bGluZS1ub25lXCIsXCJ0ZXh0LWJsdWUtNTAwXCIsXCJib3JkZXItYi0yXCIsXCJmb250LW1lZGl1bVwiLFwiYm9yZGVyLWJsdWUtNTAwXCJdO1xyXG5jb25zdCBzZWxlY3RlZFRhYkNsYXNzZXMgPSBbXCJ0ZXh0LWdyYXktNjAwXCIsXCJweS00XCIsXCJweC02XCIsXCJibG9ja1wiLFwiaG92ZXI6dGV4dC1ibHVlLTUwMFwiLFwiZm9jdXM6b3V0bGluZS1ub25lXCIsXCJ0ZXh0LWJsdWUtNTAwXCIsXCJib3JkZXItYi0yXCIsXCJmb250LW1lZGl1bVwiLFwiYm9yZGVyLWJsdWUtNTAwXCJdO1xyXG5jb25zdCB1bnNlbGVjdGVkVGFiQ2xhc3NlcyA9IFtcInRleHQtd2hpdGVcIixcInB5LTRcIixcInB4LTZcIixcImJsb2NrXCIsXCJob3Zlcjp0ZXh0LWJsdWUtNTAwXCIsXCJmb2N1czpvdXRsaW5lLW5vbmVcIl07XHJcblxyXG4vLyAvLyBUYWIgYmFzZWQgTmF2QmFyXHJcblxyXG5jb25zdCBuYXZCYXJIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2QmFyJyk7XHJcbm5hdkJhckhvbGRlci5jbGFzc0xpc3QuYWRkKFwiYmctc2xhdGUtNTAwXCIpO1xyXG5cclxuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbm5hdkJhci5jbGFzc0xpc3QuYWRkKFwiZmxleFwiLFwiZmxleC1jb2xcIixcInNtOmZsZXgtcm93XCIpO1xyXG5cclxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuaG9tZUJ1dHRvbi5jbGFzc0xpc3QgPSAoc2VsZWN0ZWRUYWJDbGFzc2VzLmpvaW4oXCIgXCIpKTtcclxuaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBIb21lVGFiTW9kdWxlLmxvYWRIb21lUGFnZSk7XHJcblxyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbm1lbnVCdXR0b24uY2xhc3NMaXN0ID0gdW5zZWxlY3RlZFRhYkNsYXNzZXMuam9pbihcIiBcIik7XHJcbm1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgTWVudVRhYk1vZHVsZS5yZW5kZXJNZW51KTtcclxuXHJcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QgPSB1bnNlbGVjdGVkVGFiQ2xhc3Nlcy5qb2luKFwiIFwiKTtcclxuY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xyXG5jb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBDb250YWN0VGFiTW9kdWxlLnJlbmRlckNvbnRhY3QpO1xyXG5cclxubmF2QmFySG9sZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XHJcbm5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcclxubmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG5uYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XHJcblxyXG5Ib21lVGFiTW9kdWxlLmxvYWRIb21lUGFnZSgpO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9