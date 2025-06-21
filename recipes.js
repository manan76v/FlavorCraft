const recipes = [
    {
        id: 1,
        title: "Mediterranean Salmon Bowl",
        image: "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "Fresh salmon with quinoa, avocado, and Mediterranean vegetables",
        cookTime: "25 min",
        servings: "4 servings",
        rating: "4.9",
        category: "Healthy",
        fullDescription: `
            <h2>Mediterranean Salmon Bowl</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 25 minutes</span>
                <span><i class="fas fa-users"></i> 4 servings</span>
                <span><i class="fas fa-star"></i> 4.9 rating</span>
            </div>
            
            <h3>Ingredients:</h3>
            <ul>
                <li>4 salmon fillets (6 oz each)</li>
                <li>2 cups cooked quinoa</li>
                <li>2 ripe avocados, sliced</li>
                <li>2 cups cherry tomatoes, halved</li>
                <li>1 cucumber, diced</li>
                <li>1 red onion, thinly sliced</li>
                <li>1 cup kalamata olives</li>
                <li>1 cup feta cheese, crumbled</li>
                <li>Fresh dill and parsley for garnish</li>
            </ul>

            <h3>For the Dressing:</h3>
            <ul>
                <li>¼ cup extra virgin olive oil</li>
                <li>2 tablespoons lemon juice</li>
                <li>1 tablespoon honey</li>
                <li>2 cloves garlic, minced</li>
                <li>1 teaspoon dried oregano</li>
                <li>Salt and pepper to taste</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>Season salmon fillets with salt, pepper, and oregano.</li>
                <li>Pan-sear salmon for 4-5 minutes per side until cooked through.</li>
                <li>Whisk together dressing ingredients in a small bowl.</li>
                <li>In serving bowls, arrange quinoa, vegetables, and olives.</li>
                <li>Top with salmon and crumbled feta.</li>
                <li>Drizzle with dressing and garnish with fresh herbs.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 520</li>
                    <li>Protein: 34g</li>
                    <li>Carbohydrates: 28g</li>
                    <li>Fat: 32g</li>
                    <li>Fiber: 8g</li>
                </ul>
            </div>
        `
    },
    {
        id: 2,
        title: "Truffle Mushroom Risotto",
        image: "https://images.pexels.com/photos/6287523/pexels-photo-6287523.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "Creamy arborio rice with wild mushrooms and truffle oil",
        cookTime: "45 min",
        servings: "6 servings",
        rating: "4.8",
        category: "Italian",
        fullDescription: `
            <h2>Truffle Mushroom Risotto</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 45 minutes</span>
                <span><i class="fas fa-users"></i> 6 servings</span>
                <span><i class="fas fa-star"></i> 4.8 rating</span>
            </div>
            
            <h3>Ingredients:</h3>
            <ul>
                <li>2 cups Arborio rice</li>
                <li>8 cups mushroom or vegetable stock, heated</li>
                <li>1 lb mixed mushrooms (porcini, shiitake, cremini), sliced</li>
                <li>1 onion, finely diced</li>
                <li>4 cloves garlic, minced</li>
                <li>1 cup white wine</li>
                <li>½ cup grated Parmesan cheese</li>
                <li>2 tablespoons truffle oil</li>
                <li>4 tablespoons butter</li>
                <li>Fresh thyme</li>
                <li>Salt and pepper to taste</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>In a large pan, sauté mushrooms until golden. Set aside.</li>
                <li>In the same pan, sauté onions and garlic until translucent.</li>
                <li>Add rice and toast for 2-3 minutes.</li>
                <li>Add wine and stir until absorbed.</li>
                <li>Gradually add hot stock, stirring constantly until rice is creamy and al dente.</li>
                <li>Fold in mushrooms, butter, and Parmesan.</li>
                <li>Finish with truffle oil and fresh thyme.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 480</li>
                    <li>Protein: 12g</li>
                    <li>Carbohydrates: 65g</li>
                    <li>Fat: 18g</li>
                    <li>Fiber: 3g</li>
                </ul>
            </div>
        `
    },
    {
        id: 3,
        title: "Thai Green Curry",
        image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "Authentic Thai curry with coconut milk and fresh herbs",
        cookTime: "35 min",
        servings: "4 servings",
        rating: "4.7",
        category: "Asian",
        fullDescription: `
            <h2>Thai Green Curry</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 35 minutes</span>
                <span><i class="fas fa-users"></i> 4 servings</span>
                <span><i class="fas fa-star"></i> 4.7 rating</span>
            </div>

            <h3>Ingredients:</h3>
            <ul>
                <li>2 cans coconut milk</li>
                <li>4 tablespoons green curry paste</li>
                <li>2 chicken breasts, sliced</li>
                <li>1 cup bamboo shoots</li>
                <li>1 cup Thai eggplant</li>
                <li>1 red bell pepper, sliced</li>
                <li>4 kaffir lime leaves</li>
                <li>2 tablespoons fish sauce</li>
                <li>1 tablespoon palm sugar</li>
                <li>Thai basil leaves</li>
                <li>Bird's eye chilies (optional)</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>Heat coconut cream until it splits and becomes fragrant.</li>
                <li>Add curry paste and fry until aromatic.</li>
                <li>Add chicken and cook until nearly done.</li>
                <li>Add remaining coconut milk and vegetables.</li>
                <li>Season with fish sauce and palm sugar.</li>
                <li>Simmer until vegetables are tender.</li>
                <li>Garnish with Thai basil and chilies.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 450</li>
                    <li>Protein: 28g</li>
                    <li>Carbohydrates: 15g</li>
                    <li>Fat: 32g</li>
                    <li>Fiber: 4g</li>
                </ul>
            </div>
        `
    },
    {
        id: 4,
        title: "Chocolate Lava Cake",
        image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "Decadent molten chocolate cake with vanilla ice cream",
        cookTime: "30 min",
        servings: "2 servings",
        rating: "4.9",
        category: "Desserts",
        fullDescription: `
            <h2>Chocolate Lava Cake</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 30 minutes</span>
                <span><i class="fas fa-users"></i> 2 servings</span>
                <span><i class="fas fa-star"></i> 4.9 rating</span>
            </div>

            <h3>Ingredients:</h3>
            <ul>
                <li>4 oz dark chocolate</li>
                <li>½ cup butter</li>
                <li>2 eggs</li>
                <li>2 egg yolks</li>
                <li>¼ cup sugar</li>
                <li>2 tablespoons flour</li>
                <li>Pinch of salt</li>
                <li>Vanilla ice cream for serving</li>
                <li>Berries for garnish</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>Preheat oven to 425°F (220°C).</li>
                <li>Melt chocolate and butter together.</li>
                <li>Whisk eggs, yolks, and sugar until light and fluffy.</li>
                <li>Fold in chocolate mixture and flour.</li>
                <li>Pour into greased ramekins.</li>
                <li>Bake for 12-14 minutes until edges are set but center is soft.</li>
                <li>Serve immediately with ice cream and berries.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 680</li>
                    <li>Protein: 10g</li>
                    <li>Carbohydrates: 45g</li>
                    <li>Fat: 52g</li>
                    <li>Fiber: 3g</li>
                </ul>
            </div>
        `
    },
    {
        id: 5,
        title: "Beef Wellington",
        image: "https://images.pexels.com/photos/5638531/pexels-photo-5638531.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "Classic British dish with tender beef in flaky pastry",
        cookTime: "2 hours",
        servings: "8 servings",
        rating: "4.6",
        category: "Main Course",
        fullDescription: `
            <h2>Beef Wellington</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 2 hours</span>
                <span><i class="fas fa-users"></i> 8 servings</span>
                <span><i class="fas fa-star"></i> 4.6 rating</span>
            </div>

            <h3>Ingredients:</h3>
            <ul>
                <li>2 lb beef tenderloin</li>
                <li>1 lb mushrooms, finely chopped</li>
                <li>4 slices prosciutto</li>
                <li>2 sheets puff pastry</li>
                <li>2 egg yolks (for egg wash)</li>
                <li>2 tablespoons Dijon mustard</li>
                <li>2 shallots, minced</li>
                <li>4 cloves garlic, minced</li>
                <li>Fresh thyme</li>
                <li>Salt and pepper</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>Sear beef on all sides. Cool and brush with mustard.</li>
                <li>Sauté mushrooms with shallots and garlic until dry.</li>
                <li>Layer prosciutto and mushroom mixture.</li>
                <li>Wrap beef in prosciutto-mushroom layer.</li>
                <li>Encase in puff pastry and brush with egg wash.</li>
                <li>Score pastry and chill for 30 minutes.</li>
                <li>Bake at 400°F for 40-45 minutes.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 720</li>
                    <li>Protein: 45g</li>
                    <li>Carbohydrates: 28g</li>
                    <li>Fat: 48g</li>
                    <li>Fiber: 2g</li>
                </ul>
            </div>
        `
    },
    {
        id: 6,
        title: "Caprese Salad",
        image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
        cookTime: "10 min",
        servings: "4 servings",
        rating: "4.8",
        category: "Salads",
        fullDescription: `
            <h2>Caprese Salad</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 10 minutes</span>
                <span><i class="fas fa-users"></i> 4 servings</span>
                <span><i class="fas fa-star"></i> 4.8 rating</span>
            </div>

            <h3>Ingredients:</h3>
            <ul>
                <li>4 large ripe tomatoes</li>
                <li>1 lb fresh mozzarella</li>
                <li>Fresh basil leaves</li>
                <li>Extra virgin olive oil</li>
                <li>Balsamic glaze</li>
                <li>Flaky sea salt</li>
                <li>Freshly ground black pepper</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>Slice tomatoes and mozzarella evenly.</li>
                <li>Arrange alternating slices on a platter.</li>
                <li>Tuck fresh basil leaves between slices.</li>
                <li>Drizzle with olive oil and balsamic glaze.</li>
                <li>Season with salt and pepper.</li>
                <li>Serve immediately at room temperature.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 320</li>
                    <li>Protein: 18g</li>
                    <li>Carbohydrates: 8g</li>
                    <li>Fat: 24g</li>
                    <li>Fiber: 2g</li>
                </ul>
            </div>
        `
    },
    {
         id:7,
        title: "Spicy Tuna Tartare",
        image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "Tuna, avocado, and jalapeno in a spicy sauce",
        cookTime: "20 min",
        servings: "2 servings",
        rating: "4.7",
        category: "Seafood",
        fullDescription: `
            <h2>Spicy Tuna Tartare</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 20 minutes</span>
                <span><i class="fas fa-users"></i> 2 servings</span>
                <span><i class="fas fa-star"></i> 4.7 rating</span>
            </div>

            <h3>Ingredients:</h3>
            <ul>
                <li>1/2 lb cooked tuna</li>
                <li>1 avocado</li>
                <li>1 jalapeno</li>
                <li>Spicy sauce</li>
                <li>Extra virgin olive oil</li>
                <li>Flaky sea salt</li>
                <li>Freshly ground black pepper</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>Place cooked tuna on a platter.</li>
                <li>Slice avocado and jalapeno.</li>
                <li>Drizzle with olive oil and spicy sauce.</li>
                <li>Season with salt and pepper.</li>
                <li>Serve with sliced avocado and jalapeno on the side.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 320</li>
                    <li>Protein: 18g</li>
                    <li>Carbohydrates: 8g</li>
                    <li>Fat: 24g</li>
                    <li>Fiber: 2g</li>
                </ul>
            </div>
        `
    },
    {
        id: 8,
        title: "Classic Beef Tacos",
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "Ground beef, cheese, and fresh toppings in a crispy shell",
        cookTime: "30 min",
        servings: "4 servings",
        rating: "4.6",
        category: "Mexican",
        fullDescription: `
            <h2>Classic Beef Tacos</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 30 minutes</span>
                <span><i class="fas fa-users"></i> 4 servings</span>
                <span><i class="fas fa-star"></i> 4.6 rating</span>
            </div>

            <h3>Ingredients:</h3>
            <ul>
                <li>1 lb ground beef</li>
                <li>1 packet taco seasoning</li>
                <li>8 taco shells</li>
                <li>1 cup shredded lettuce</li>
                <li>1 cup diced tomatoes</li>
                <li>1 cup shredded cheese</li>
                <li>1/2 cup sour cream</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>In a skillet, cook ground beef over medium heat until browned.</li>
                <li>Drain excess fat and add taco seasoning.</li>
                <li>Prepare taco shells according to package instructions.</li>
                <li>Assemble tacos with beef, lettuce, tomatoes, cheese, and sour cream.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 250</li>
                    <li>Protein: 15g</li>
                    <li>Carbohydrates: 20g</li>
                    <li>Fat: 12g</li>
                    <li>Fiber: 3g</li>
                </ul>
            </div>
        `
    },
    {
        id: 9,
        title: "Vegetable Stir Fry",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        shortDescription: "A colorful mix of fresh vegetables sautéed in a savory sauce",
        cookTime: "15 min",
        servings: "4 servings",
        rating: "4.5",
        category: "Vegetarian",
        fullDescription: `
            <h2>Vegetable Stir Fry</h2>
            <div class="recipe-meta mb-4">
                <span><i class="fas fa-clock"></i> 15 minutes</span>
                <span><i class="fas fa-users"></i> 4 servings</span>
                <span><i class="fas fa-star"></i> 4.5 rating</span>
            </div>

            <h3>Ingredients:</h3>
            <ul>
                <li>2 cups mixed vegetables (bell peppers, broccoli, carrots)</li>
                <li>2 tbsp soy sauce</li>
                <li>1 tbsp sesame oil</li>
                <li>2 cloves garlic, minced</li>
                <li>1 tsp ginger, grated</li>
                <li>Cooked rice or noodles for serving</li>
            </ul>

            <h3>Instructions:</h3>
            <ol>
                <li>Heat sesame oil in a large skillet over medium-high heat.</li>
                <li>Add garlic and ginger, sauté for 30 seconds.</li>
                <li>Add mixed vegetables and stir-fry for 5-7 minutes.</li>
                <li>Pour in soy sauce and toss to coat.</li>
                <li>Serve over cooked rice or noodles.</li>
            </ol>

            <h3>Nutrition Information:</h3>
            <div class="nutrition-info">
                <p>Per Serving:</p>
                <ul>
                    <li>Calories: 180</li>
                    <li>Protein: 5g</li>
                    <li>Carbohydrates: 30g</li>
                    <li>Fat: 7g</li>
                    <li>Fiber: 4g</li>
                </ul>
            </div>
        `
    }
];
