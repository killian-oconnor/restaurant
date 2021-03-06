import kitchenPic from './kitchen.jpg';
import margheritaPic from './margherita.png';
import pepperoniPic from './pepperoni.png';
import veggiePic from './veggie.png';
import bbqchickenPic from './bbq chicken.png';
import leoPic from './leonardo.png';
import donPic from './donatello.png';
import rafPic from './raphael.png';
import micPic from './michelangelo.png';

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
    pizzaBlurb.textContent += " I guess you could say that pizza appeals to all of your senses, there isn’t much to dislike about it.";
    pizzaBlurb.classList.add("text-lg","text-white","leading-tight");
    blurbHolder.appendChild(pizzaBlurb);

    const kitchenBlurbHolder = document.createElement("div");
    kitchenBlurbHolder.classList = "grid grid-cols-2 gap-4 m-5";

    const kitchenBlurbTextHolder = document.createElement("div");
    //kitchenBlurbTextHolder.classList = "col-span-2";

    const kitchenBlurbText = document.createElement("p");
    //kitchenBlurbText.textContent = "Whisk together the water, yeast, olive oil, and salt. Let the yeast foam for 5 minutes. Add in 3 cups of flour and use your dough hook to knead. Knead for a minimum of 5 minutes, until the dough is smooth and just slightly tacky, but not sticky. Add the additional ½ cup of flour, if needed, and knead until smooth.Place the dough in a large, well oiled bowl. Cover with plastic wrap and put in a warm place to proof for 1 hour, or wrap the dough in plastic wrap and store in your refrigerator until you're ready to use it. If using the dough from the refrigerator, let it come to room temperature before working with it."
    kitchenBlurbText.innerHTML = `<p style='margin-right:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:10.0pt;line-height:115%;'>The <strong>history of pizza</strong> begins in antiquity, when various ancient cultures produced basic flatbreads with several toppings.</p>
    <p style='margin-right:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:10.0pt;line-height:115%;'>A precursor of pizza was probably the focaccia, a flatbread known to the Romans as <em>panis focacius</em>, to which toppings were then added. Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century.</p>
    <p style='margin-right:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:10.0pt;line-height:115%;'>The word <em>pizza</em> was first documented in 997 AD in Gaeta and successively in different parts of Central and Southern Italy. Pizza was mainly eaten in Italy and by emigrants from there. This changed after World War II when Allied troops stationed in Italy came to enjoy pizza along with other Italian foods.</p>
    <p style='margin-right:0cm;margin-left:0cm;font-size:15px;font-family:"Calibri",sans-serif;margin-top:0cm;margin-bottom:10.0pt;line-height:115%;'>&nbsp;</p>`
    kitchenBlurbText.classList = pizzaBlurb.classList;
    kitchenBlurbTextHolder.appendChild(kitchenBlurbText);

    const kitchenImageHolder = document.createElement("div");
    const kitchenImage = new Image();
    kitchenImage.src = kitchenPic;
    kitchenImage.classList.add("w-auto","mx-auto");
    kitchenImageHolder.appendChild(kitchenImage);

    kitchenBlurbHolder.appendChild(kitchenBlurbTextHolder);
    kitchenBlurbHolder.appendChild(kitchenImageHolder);
    blurbHolder.appendChild(kitchenBlurbHolder);



    
    // <div class="grid grid-cols-3 gap-4">
    //     <div class="...">01</div>
    //     <div class="col-span-2 ...">04</div>
    // </div>


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

    // function to calculate pizza price
    function calculatePrice(MenuItem) {

        let basePrice = 10;
        let toppingsPrice = 0;
        MenuItem.ingredients.forEach(ingredient => {
            toppingsPrice += 1;
        });
        let totalPrice = basePrice + toppingsPrice;

        return totalPrice;
    }

    // function to create a HTML card element from a menu item
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

    // function to remove existing page opened and render menu items 
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

    // function to generate an HTML menu object. Additional menu items should be created within this function
    function generateHTMLmenu() {
        let HTMLmenu = [];

        const margheritaHTML = createMenuItemHTML(new MenuItem("Margherita", ["Mozzarella", "Tomato Sauce", "Basil"], margheritaPic));
        const pepperoniHTML = createMenuItemHTML(new MenuItem("Pepperoni", ["Mozzarella", "Tomato Sauce", "Pepperoni Slices"], pepperoniPic));
        const veggieiHTML = createMenuItemHTML(new MenuItem("Veggie Supreme", ["Mozzarella", "Tomato Sauce", "Peppers", "Onions", "Sweetcorn"], veggiePic));
        const bbqChickenHTML = createMenuItemHTML(new MenuItem("BBQ Chicken", ["Mozzarella", "BBQ Sauce", "Chicken Pieces"], bbqchickenPic));

        HTMLmenu.push(margheritaHTML, pepperoniHTML, veggieiHTML, bbqChickenHTML);

        return HTMLmenu;
    }

    function addMenuItem(title, ingredients, image) {

        const newMenuItemHTML = createMenuItemHTML(new MenuItem(title, ingredients, image));
        HTMLmenu.push(newMenuItemHTML);

    }
    
    return {
        calculatePrice,
        renderMenu,
        addMenuItem
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

        const leoHTML = createStaffMemberHTML(new StaffMember("Leonardo", "Manager", leoPic));
        const donHTML = createStaffMemberHTML(new StaffMember("Donatello", "Head Pizza Chef", donPic));
        const rafHTML = createStaffMemberHTML(new StaffMember("Rafael", "Delivery Driver", rafPic));
        const micHTML = createStaffMemberHTML(new StaffMember("Michelangelo", "Quality Control", micPic));

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

