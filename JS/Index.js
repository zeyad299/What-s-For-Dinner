var meals = [
    {
        name: "Creamy Spaghetti Carbonara",
        description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
        cuisine: "Italian",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        rating: 4.8,
        reviews: 234,
        image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c987e47793-062e728ad4ccc343589c.png",
        ingredients: [
            "400g spaghetti pasta",
            "200g pancetta or guanciale, diced",
            "4 large eggs + 2 egg yolks",
            "100g Pecorino Romano, grated",
            "100g Parmigiano-Reggiano, grated",
            "Freshly ground black pepper",
            "Salt for pasta water"
        ],
        steps: [
            "Bring a large pot of salted water to a boil. Cook spaghetti until al dente, reserving 1 cup of pasta water before draining.",
            "While pasta cooks, fry pancetta in a large skillet over medium heat until crispy, about 5-7 minutes. Remove from heat.",
            "Whisk together eggs, yolks, and grated cheeses in a bowl. Season generously with black pepper.",
            "Add drained pasta to the skillet with pancetta. Off the heat, pour the egg mixture over, tossing quickly and adding pasta water a splash at a time to create a silky sauce.",
            "Serve immediately with extra cheese and black pepper on top."
        ],
        nutrition: { calories: "520 kcal", protein: "28g", carbs: "62g", fat: "18g", fiber: "3g", sodium: "680mg" },
        tips: [
            "Never add the eggs over direct heat — the residual heat from the pasta is enough to cook them into a creamy sauce.",
            "Use freshly grated cheese rather than pre-packaged for a much smoother result.",
            "Reserve more pasta water than you think you need; starch is your friend here."
        ]
    },
    {
        name: "Beef Kofta with Tahini",
        description: "Juicy spiced ground beef skewers served with creamy tahini sauce and warm pita",
        cuisine: "Middle Eastern",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 15,
        servings: 4,
        rating: 4.7,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
        ingredients: [
            "500g ground beef (20% fat)",
            "1 onion, grated",
            "3 garlic cloves, minced",
            "2 tsp ground cumin",
            "1 tsp ground coriander",
            "1 tsp paprika",
            "Half tsp cinnamon",
            "Salt and pepper to taste",
            "Fresh parsley, chopped",
            "4 tbsp tahini",
            "Juice of 1 lemon",
            "Warm pita bread to serve"
        ],
        steps: [
            "Combine ground beef, grated onion, garlic, and all spices in a bowl. Knead well for 2 minutes until the mixture holds together.",
            "Divide into 8 equal portions and shape each around a skewer into a sausage shape about 12cm long.",
            "Grill over high heat for 6-8 minutes, turning every 2 minutes until charred and cooked through.",
            "Whisk tahini with lemon juice and 3-4 tbsp water until smooth and pourable. Season with salt.",
            "Serve kofta with tahini sauce, fresh parsley, and warm pita bread."
        ],
        nutrition: { calories: "440 kcal", protein: "32g", carbs: "28g", fat: "22g", fiber: "2g", sodium: "520mg" },
        tips: [
            "Squeeze the grated onion through a cloth to remove excess moisture — this stops the kofta from falling apart.",
            "Chill the shaped kofta for 30 minutes before grilling so they hold their shape better.",
            "A squeeze of pomegranate molasses over the finished dish adds a great tangy depth."
        ]
    },
    {
        name: "Chicken Tikka Masala",
        description: "Tender marinated chicken in a rich, aromatic tomato-cream curry sauce",
        cuisine: "Indian",
        difficulty: "Medium",
        prepTime: 30,
        cookTime: 35,
        servings: 4,
        rating: 4.9,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
        ingredients: [
            "700g boneless chicken thighs, cubed",
            "200ml plain yogurt",
            "2 tsp garam masala",
            "1 tsp turmeric",
            "1 tsp ground cumin",
            "4 garlic cloves, minced",
            "1 tbsp fresh ginger, grated",
            "400g canned tomatoes",
            "200ml heavy cream",
            "1 large onion, finely diced",
            "2 tbsp butter",
            "Fresh cilantro and rice to serve"
        ],
        steps: [
            "Marinate chicken in yogurt, garam masala, turmeric, cumin, half the garlic and ginger, and salt. Refrigerate at least 2 hours.",
            "Thread chicken onto skewers and grill or broil at high heat until charred, about 10 minutes. Set aside.",
            "Melt butter in a deep skillet over medium heat. Saute onion until golden, 8-10 minutes. Add remaining garlic and ginger, cook 2 more minutes.",
            "Add canned tomatoes and simmer 10 minutes until sauce thickens. Blend smooth with an immersion blender.",
            "Stir in cream, return chicken to the pan, and simmer 5 more minutes. Garnish with cilantro and serve with basmati rice."
        ],
        nutrition: { calories: "610 kcal", protein: "42g", carbs: "18g", fat: "38g", fiber: "3g", sodium: "740mg" },
        tips: [
            "Longer marination means more tender, flavourful chicken — overnight makes a real difference.",
            "Charring the chicken before adding to the sauce is what gives tikka masala its signature smoky flavour.",
            "Balance richness with a squeeze of lemon just before serving."
        ]
    },
    {
        name: "Shakshuka",
        description: "Eggs poached in a spiced tomato and pepper sauce — a North African classic",
        cuisine: "North African",
        difficulty: "Easy",
        prepTime: 10,
        cookTime: 25,
        servings: 2,
        rating: 4.6,
        reviews: 301,
        image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?w=800&q=80",
        ingredients: [
            "6 large eggs",
            "2 cans (800g) crushed tomatoes",
            "2 red bell peppers, sliced",
            "1 onion, diced",
            "4 garlic cloves, minced",
            "2 tsp cumin",
            "1 tsp paprika",
            "Half tsp chili flakes",
            "Salt and pepper",
            "Feta cheese, fresh parsley, crusty bread to serve"
        ],
        steps: [
            "Heat olive oil in a wide oven-safe skillet over medium heat. Saute onion and peppers for 8 minutes until softened.",
            "Add garlic, cumin, paprika, and chili flakes. Cook 1 minute until fragrant.",
            "Pour in crushed tomatoes. Season and simmer 10 minutes, stirring occasionally, until sauce thickens.",
            "Create 6 small wells in the sauce with a spoon. Crack one egg into each well. Cover and cook on low heat 6-8 minutes until whites are set but yolks are still runny.",
            "Crumble feta over the top, scatter fresh parsley, and serve directly from the pan with crusty bread."
        ],
        nutrition: { calories: "310 kcal", protein: "18g", carbs: "22g", fat: "16g", fiber: "5g", sodium: "590mg" },
        tips: [
            "Keep the yolks runny — they mix into the sauce as you eat and create a richer experience.",
            "A dollop of harissa stirred into the sauce adds a fiery depth if you like heat.",
            "Serve straight from the skillet for a dramatic presentation your family will love."
        ]
    },
    {
        name: "Koshari",
        description: "Egypt's beloved street food — lentils, rice, and pasta with spiced tomato sauce and crispy onions",
        cuisine: "Egyptian",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 45,
        servings: 6,
        rating: 4.7,
        reviews: 158,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
        ingredients: [
            "200g brown lentils",
            "200g long-grain rice",
            "200g elbow pasta",
            "400g canned tomatoes, crushed",
            "2 large onions, thinly sliced",
            "6 garlic cloves, minced",
            "2 tsp cumin",
            "1 tsp coriander",
            "Half tsp cayenne",
            "4 tbsp white vinegar",
            "Oil for frying",
            "Salt and pepper"
        ],
        steps: [
            "Cook lentils in salted water until just tender, about 20 minutes. Drain. Cook pasta separately until al dente. Drain.",
            "Fry sliced onions in oil over medium heat, stirring often, for 20-25 minutes until deep golden and crispy. Drain on paper towels.",
            "In the onion oil, saute garlic 1 minute. Add tomatoes, cumin, coriander, cayenne, and vinegar. Simmer 15 minutes until thick. Season well.",
            "Cook rice in the lentil water with a little oil and salt for about 18 minutes until fluffy.",
            "Layer in bowls: rice and lentils, then pasta, then ladle tomato sauce over generously. Top with crispy onions."
        ],
        nutrition: { calories: "490 kcal", protein: "18g", carbs: "84g", fat: "10g", fiber: "12g", sodium: "410mg" },
        tips: [
            "The crispy onions are non-negotiable — make extra because everyone will want more.",
            "Add a splash of white vinegar directly to your bowl for extra tang, like Cairenes do.",
            "Koshari tastes even better the next day once all the flavors meld together."
        ]
    }
];


var currentIndex = 0;

function getRandomIndex(current) {
    var newIndex;
    do {
        newIndex = Math.floor(Math.random() * meals.length);
    } while (newIndex === current);
    return newIndex;
}

function getTotalTime(meal) {
    return meal.prepTime + meal.cookTime;
}

function displayMeal(index) {
    var meal = meals[index];

    document.getElementById("recipe-image").src = meal.image;
    document.getElementById("recipe-image").alt = meal.name;
    document.getElementById("recipe-name").textContent = meal.name;
    document.getElementById("recipe-description").textContent = meal.description;
    document.getElementById("difficulty-badge").textContent = meal.difficulty;
    document.getElementById("category-badge").textContent = meal.cuisine;
    document.getElementById("rating-average").textContent = meal.rating;
    document.getElementById("rating-quantity").textContent = "(" + meal.reviews + " reviews)";
    document.getElementById("prep-time-display").textContent = meal.prepTime + " min";
    document.getElementById("cook-time-display").textContent = meal.cookTime + " min";
    document.getElementById("servings-display").textContent = meal.servings + " people";

    document.getElementById("calories-value").textContent = meal.nutrition.calories;
    document.getElementById("protein-value").textContent = meal.nutrition.protein;
    document.getElementById("carbs-value").textContent = meal.nutrition.carbs;
    document.getElementById("fat-value").textContent = meal.nutrition.fat;
    document.getElementById("fiber-value").textContent = meal.nutrition.fiber;
    document.getElementById("sodium-value").textContent = meal.nutrition.sodium;

    var warning = document.getElementById("time-warning");
    if (getTotalTime(meal) > 45) {
        warning.classList.add("show");
    } else {
        warning.classList.remove("show");
    }

    var ingList = document.getElementById("ingredients-list");
    ingList.innerHTML = "";
    for (var i = 0; i < meal.ingredients.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = '<div class="ing-num">' + (i + 1) + '</div><span>' + meal.ingredients[i] + '</span>';
        ingList.appendChild(li);
    }

    var stepList = document.getElementById("instructions-list");
    stepList.innerHTML = "";
    for (var i = 0; i < meal.steps.length; i++) {
        var div = document.createElement("div");
        div.className = "step-item";
        div.innerHTML = '<div class="step-num">' + (i + 1) + '</div><p class="step-text">' + meal.steps[i] + '</p>';
        stepList.appendChild(div);
    }

    var tipList = document.getElementById("tips-list");
    tipList.innerHTML = "";
    for (var i = 0; i < meal.tips.length; i++) {
        var div = document.createElement("div");
        div.className = "tip-item";
        div.innerHTML = '<i class="fa-solid fa-check-circle"></i><p>' + meal.tips[i] + '</p>';
        tipList.appendChild(div);
    }

    switchTab("ingredients");
}

function switchTab(tabName) {
    var buttons = document.querySelectorAll(".tab-btn");
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute("data-tab") === tabName) {
            buttons[i].classList.add("active");
        } else {
            buttons[i].classList.remove("active");
        }
    }
    var panels = document.querySelectorAll(".tab-panel");
    for (var i = 0; i < panels.length; i++) {
        if (panels[i].id === tabName + "-tab") {
            panels[i].classList.add("active");
        } else {
            panels[i].classList.remove("active");
        }
    }
}

var tabButtons = document.querySelectorAll(".tab-btn");
for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
        switchTab(this.getAttribute("data-tab"));
    });
}

document.getElementById("try-another-btn").addEventListener("click", function () {
    currentIndex = getRandomIndex(currentIndex);
    displayMeal(currentIndex);
});

displayMeal(currentIndex);