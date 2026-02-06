// Recipe Database - Family Favorites
const recipes = [
  {
    id: 'grandmas-chicken-soup',
    title: "Grandma's Chicken Soup",
    description: "A soul-warming classic that's been in the family for generations. Nothing beats this on a cold day.",
    emoji: '🍲',
    prepTime: '20 min',
    cookTime: '1 hour',
    servings: 6,
    difficulty: 'Easy',
    categories: ['dinner', 'quick'],
    ingredients: [
      '1 whole chicken (about 4 lbs)',
      '8 cups water',
      '4 carrots, sliced',
      '4 celery stalks, sliced',
      '1 large onion, diced',
      '3 cloves garlic, minced',
      '2 bay leaves',
      '1 tsp dried thyme',
      '2 cups egg noodles',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Place the whole chicken in a large pot and cover with water. Bring to a boil, then reduce heat and simmer for 45 minutes until chicken is cooked through.',
      'Remove chicken from pot and let cool. Strain the broth and return to pot.',
      'Shred the chicken meat, discarding skin and bones.',
      'Add carrots, celery, onion, garlic, bay leaves, and thyme to the broth. Simmer for 15 minutes.',
      'Add egg noodles and cook for 8 minutes until tender.',
      'Return shredded chicken to the pot. Season with salt and pepper.',
      'Remove bay leaves and serve hot, garnished with fresh parsley.'
    ],
    tips: [
      'Make extra and freeze portions for quick meals later',
      'Add a squeeze of lemon juice just before serving for brightness',
      'For richer broth, roast the chicken bones first'
    ]
  },
  {
    id: 'fluffy-pancakes',
    title: 'Fluffy Buttermilk Pancakes',
    description: 'The fluffiest pancakes you\'ll ever make. A weekend breakfast tradition the whole family loves.',
    emoji: '🥞',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 4,
    difficulty: 'Easy',
    categories: ['breakfast', 'quick', 'vegetarian'],
    ingredients: [
      '2 cups all-purpose flour',
      '2 tbsp sugar',
      '2 tsp baking powder',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '2 cups buttermilk',
      '2 eggs',
      '1/4 cup melted butter',
      '1 tsp vanilla extract',
      'Butter and maple syrup for serving'
    ],
    instructions: [
      'In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.',
      'In another bowl, whisk buttermilk, eggs, melted butter, and vanilla.',
      'Pour wet ingredients into dry ingredients and stir until just combined. Don\'t overmix - some lumps are fine!',
      'Let batter rest for 5 minutes while you heat a griddle or pan over medium heat.',
      'Lightly butter the griddle. Pour 1/4 cup batter for each pancake.',
      'Cook until bubbles form on surface and edges look set, about 2-3 minutes.',
      'Flip and cook another 1-2 minutes until golden brown.',
      'Serve immediately with butter and warm maple syrup.'
    ],
    tips: [
      'The secret to fluffy pancakes is not overmixing the batter',
      'Let the batter rest - this allows the gluten to relax',
      'Keep finished pancakes warm in a 200°F oven while cooking the rest'
    ]
  },
  {
    id: 'classic-meatloaf',
    title: 'Mom\'s Classic Meatloaf',
    description: 'Comfort food at its finest. This meatloaf is juicy, flavorful, and topped with a tangy glaze.',
    emoji: '🍖',
    prepTime: '15 min',
    cookTime: '1 hour',
    servings: 6,
    difficulty: 'Easy',
    categories: ['dinner'],
    ingredients: [
      '2 lbs ground beef',
      '1 cup breadcrumbs',
      '1/2 cup milk',
      '1 small onion, finely diced',
      '2 eggs, beaten',
      '2 cloves garlic, minced',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tsp Worcestershire sauce',
      '1/2 cup ketchup (for glaze)',
      '2 tbsp brown sugar (for glaze)',
      '1 tbsp mustard (for glaze)'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'In a small bowl, soak breadcrumbs in milk for 5 minutes.',
      'In a large bowl, combine ground beef, soaked breadcrumbs, onion, eggs, garlic, salt, pepper, and Worcestershire sauce. Mix with your hands until just combined.',
      'Shape mixture into a loaf and place on a lined baking sheet or in a loaf pan.',
      'Mix together ketchup, brown sugar, and mustard for the glaze.',
      'Spread half the glaze over the meatloaf.',
      'Bake for 45 minutes, then spread remaining glaze on top.',
      'Continue baking for 15 more minutes until internal temperature reaches 160°F.',
      'Let rest 10 minutes before slicing.'
    ],
    tips: [
      'Don\'t overwork the meat or it will become tough',
      'Use a meat thermometer to ensure perfect doneness',
      'Leftovers make amazing sandwiches!'
    ]
  },
  {
    id: 'chocolate-chip-cookies',
    title: 'Perfect Chocolate Chip Cookies',
    description: 'Crispy edges, chewy centers, loaded with chocolate. The cookie recipe everyone asks for.',
    emoji: '🍪',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: 24,
    difficulty: 'Easy',
    categories: ['dessert', 'vegetarian'],
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups semi-sweet chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.',
      'Whisk together flour, baking soda, and salt in a bowl.',
      'In a large bowl, cream butter and both sugars until light and fluffy, about 3 minutes.',
      'Beat in eggs one at a time, then add vanilla.',
      'Gradually mix in flour mixture until just combined.',
      'Fold in chocolate chips.',
      'Chill dough for 30 minutes (or overnight for best results).',
      'Drop rounded tablespoons of dough onto prepared baking sheets, spacing 2 inches apart.',
      'Bake 9-12 minutes until edges are golden but centers still look slightly underdone.',
      'Let cool on baking sheet 5 minutes before transferring to a wire rack.'
    ],
    tips: [
      'Chilling the dough is the secret to thick, chewy cookies',
      'Use a mix of chocolate chips and chopped chocolate for variety',
      'Add a sprinkle of flaky sea salt on top before baking'
    ]
  },
  {
    id: 'vegetable-stir-fry',
    title: 'Quick Vegetable Stir-Fry',
    description: 'A colorful, healthy dinner ready in under 20 minutes. Customize with your favorite veggies!',
    emoji: '🥦',
    prepTime: '10 min',
    cookTime: '8 min',
    servings: 4,
    difficulty: 'Easy',
    categories: ['dinner', 'quick', 'vegetarian'],
    ingredients: [
      '2 tbsp vegetable oil',
      '3 cloves garlic, minced',
      '1 tbsp fresh ginger, minced',
      '2 cups broccoli florets',
      '1 red bell pepper, sliced',
      '1 cup snap peas',
      '2 carrots, sliced thin',
      '1 cup mushrooms, sliced',
      '3 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tsp cornstarch mixed with 2 tbsp water',
      'Cooked rice for serving',
      'Sesame seeds and green onions for garnish'
    ],
    instructions: [
      'Prep all vegetables before you start cooking - stir-frying goes fast!',
      'Heat vegetable oil in a wok or large skillet over high heat.',
      'Add garlic and ginger, stir for 30 seconds until fragrant.',
      'Add broccoli and carrots first (they take longest). Stir-fry 2 minutes.',
      'Add bell pepper, snap peas, and mushrooms. Stir-fry another 2-3 minutes.',
      'Add soy sauce and sesame oil, toss to coat.',
      'Pour in cornstarch mixture and stir until sauce thickens slightly.',
      'Serve immediately over rice, garnished with sesame seeds and green onions.'
    ],
    tips: [
      'Have all ingredients prepped and ready before heating the wok',
      'Don\'t overcrowd the pan - cook in batches if needed',
      'Add protein like tofu or chicken if desired'
    ]
  },
  {
    id: 'banana-bread',
    title: 'Best-Ever Banana Bread',
    description: 'Moist, tender, and perfectly sweet. The best way to use up those overripe bananas.',
    emoji: '🍌',
    prepTime: '15 min',
    cookTime: '60 min',
    servings: 10,
    difficulty: 'Easy',
    categories: ['breakfast', 'dessert', 'vegetarian'],
    ingredients: [
      '3 very ripe bananas, mashed',
      '1/3 cup melted butter',
      '3/4 cup sugar',
      '1 egg, beaten',
      '1 tsp vanilla extract',
      '1 tsp baking soda',
      '1/4 tsp salt',
      '1 1/2 cups all-purpose flour',
      '1/2 cup walnuts, chopped (optional)'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease a 9x5 inch loaf pan.',
      'In a large bowl, mash the bananas with a fork until smooth.',
      'Mix in melted butter.',
      'Add sugar, beaten egg, and vanilla. Mix well.',
      'Sprinkle in baking soda and salt, stir to combine.',
      'Gently fold in flour until just combined. Don\'t overmix!',
      'Fold in walnuts if using.',
      'Pour batter into prepared pan.',
      'Bake 55-65 minutes until a toothpick inserted in center comes out clean.',
      'Let cool in pan for 10 minutes, then turn out onto a wire rack.'
    ],
    tips: [
      'The riper the bananas, the sweeter and more flavorful your bread',
      'Freeze overripe bananas for future baking',
      'Add chocolate chips for an extra treat'
    ]
  },
  {
    id: 'caesar-salad',
    title: 'Classic Caesar Salad',
    description: 'Crisp romaine, homemade croutons, and creamy dressing. A perfect side or light lunch.',
    emoji: '🥗',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: 4,
    difficulty: 'Medium',
    categories: ['lunch', 'vegetarian'],
    ingredients: [
      '2 heads romaine lettuce, chopped',
      '1 cup Parmesan cheese, shaved',
      'For the croutons:',
      '3 cups cubed bread',
      '3 tbsp olive oil',
      '1/2 tsp garlic powder',
      'For the dressing:',
      '1/2 cup mayonnaise',
      '2 tbsp lemon juice',
      '2 cloves garlic, minced',
      '1 tsp Worcestershire sauce',
      '1/2 cup grated Parmesan',
      'Salt and pepper to taste'
    ],
    instructions: [
      'For croutons: Preheat oven to 375°F. Toss bread cubes with olive oil and garlic powder. Bake 10 minutes until golden, stirring halfway.',
      'For dressing: Whisk together mayonnaise, lemon juice, garlic, Worcestershire, and grated Parmesan. Season with salt and pepper.',
      'Place chopped romaine in a large bowl.',
      'Add desired amount of dressing and toss to coat evenly.',
      'Top with croutons and shaved Parmesan.',
      'Serve immediately.'
    ],
    tips: [
      'Make dressing ahead - it gets better as flavors meld',
      'Add grilled chicken for a complete meal',
      'For traditional anchovy flavor, add 1-2 anchovy fillets to the dressing'
    ]
  },
  {
    id: 'homemade-pizza',
    title: 'Easy Homemade Pizza',
    description: 'Better than delivery! Make pizza night a family tradition with this foolproof recipe.',
    emoji: '🍕',
    prepTime: '30 min',
    cookTime: '15 min',
    servings: 8,
    difficulty: 'Medium',
    categories: ['dinner', 'vegetarian'],
    ingredients: [
      'For the dough:',
      '2 1/4 tsp active dry yeast',
      '1 cup warm water (110°F)',
      '3 cups all-purpose flour',
      '2 tbsp olive oil',
      '1 tsp sugar',
      '1 tsp salt',
      'For toppings:',
      '1 cup pizza sauce',
      '2 cups mozzarella cheese, shredded',
      'Your favorite toppings (pepperoni, vegetables, etc.)'
    ],
    instructions: [
      'Dissolve yeast in warm water with sugar. Let sit 5 minutes until foamy.',
      'In a large bowl, combine flour and salt. Add yeast mixture and olive oil.',
      'Knead for 5-7 minutes until smooth and elastic.',
      'Place in oiled bowl, cover, and let rise 1 hour until doubled.',
      'Preheat oven to 475°F (245°C) with a pizza stone if you have one.',
      'Punch down dough and roll out on floured surface to desired thickness.',
      'Transfer to oiled baking sheet or pizza peel.',
      'Spread sauce, add cheese and toppings.',
      'Bake 12-15 minutes until crust is golden and cheese is bubbly.'
    ],
    tips: [
      'For crispier crust, preheat your baking sheet or pizza stone',
      'Don\'t overload with toppings or the center will be soggy',
      'Dough can be made ahead and refrigerated overnight'
    ]
  },
  {
    id: 'beef-tacos',
    title: 'Easy Beef Tacos',
    description: 'Taco Tuesday made simple! Seasoned beef with all the fixings for a crowd-pleasing dinner.',
    emoji: '🌮',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: 6,
    difficulty: 'Easy',
    categories: ['dinner', 'quick'],
    ingredients: [
      '1 lb ground beef',
      '1 small onion, diced',
      '2 cloves garlic, minced',
      '2 tbsp chili powder',
      '1 tsp cumin',
      '1/2 tsp paprika',
      '1/4 tsp cayenne pepper',
      '1/2 cup water',
      '12 taco shells',
      'Toppings: shredded lettuce, diced tomatoes, cheese, sour cream, salsa'
    ],
    instructions: [
      'Heat a large skillet over medium-high heat.',
      'Add ground beef and onion. Cook, breaking up meat, until browned.',
      'Drain excess fat if needed.',
      'Add garlic and all spices. Stir and cook 1 minute.',
      'Add water and simmer 5 minutes until slightly thickened.',
      'Warm taco shells according to package directions.',
      'Spoon meat into shells and top with your favorite toppings.',
      'Serve immediately with extra salsa and lime wedges.'
    ],
    tips: [
      'Make extra taco meat for burrito bowls or nachos later',
      'For crispy shells, bake upside down on a rack at 350°F for 5 minutes',
      'Swap beef for turkey or chicken for a lighter option'
    ]
  },
  {
    id: 'apple-pie',
    title: 'Classic Apple Pie',
    description: 'A slice of American tradition. Buttery crust filled with cinnamon-spiced apples.',
    emoji: '🥧',
    prepTime: '45 min',
    cookTime: '55 min',
    servings: 8,
    difficulty: 'Medium',
    categories: ['dessert', 'vegetarian'],
    ingredients: [
      'For the crust:',
      '2 1/2 cups all-purpose flour',
      '1 tsp salt',
      '1 tsp sugar',
      '1 cup cold butter, cubed',
      '6-8 tbsp ice water',
      'For the filling:',
      '6 cups sliced apples (about 6 medium)',
      '3/4 cup sugar',
      '2 tbsp flour',
      '1 tsp cinnamon',
      '1/4 tsp nutmeg',
      '1 tbsp lemon juice',
      '2 tbsp butter',
      '1 egg beaten with 1 tbsp water (for egg wash)'
    ],
    instructions: [
      'For crust: Mix flour, salt, and sugar. Cut in cold butter until mixture resembles coarse crumbs.',
      'Add ice water 1 tablespoon at a time, mixing until dough just comes together.',
      'Divide in half, flatten into disks, wrap, and refrigerate at least 1 hour.',
      'Preheat oven to 425°F (220°C).',
      'Mix apples with sugar, flour, cinnamon, nutmeg, and lemon juice.',
      'Roll out one crust and fit into 9-inch pie dish.',
      'Add apple filling and dot with butter.',
      'Roll out second crust and place on top. Crimp edges and cut vents.',
      'Brush with egg wash.',
      'Bake 20 minutes at 425°F, then reduce to 350°F and bake 35-40 more minutes.',
      'Cool at least 2 hours before slicing.'
    ],
    tips: [
      'Use a mix of apple varieties for best flavor (Granny Smith + Honeycrisp is great)',
      'Keep ingredients cold for the flakiest crust',
      'Serve warm with vanilla ice cream'
    ]
  },
  {
    id: 'tomato-soup',
    title: 'Creamy Tomato Soup',
    description: 'Velvety smooth and deeply flavorful. Perfect paired with grilled cheese sandwiches!',
    emoji: '🍅',
    prepTime: '10 min',
    cookTime: '30 min',
    servings: 4,
    difficulty: 'Easy',
    categories: ['lunch', 'quick', 'vegetarian'],
    ingredients: [
      '2 tbsp butter',
      '1 medium onion, diced',
      '3 cloves garlic, minced',
      '1 can (28 oz) crushed tomatoes',
      '2 cups vegetable broth',
      '1/2 cup heavy cream',
      '2 tbsp fresh basil, chopped',
      '1 tsp sugar',
      'Salt and pepper to taste',
      'Croutons for serving'
    ],
    instructions: [
      'Melt butter in a large pot over medium heat.',
      'Add onion and cook until softened, about 5 minutes.',
      'Add garlic and cook 1 minute more.',
      'Pour in crushed tomatoes and vegetable broth. Bring to a simmer.',
      'Cook for 15-20 minutes to develop flavors.',
      'Use an immersion blender to puree until smooth (or carefully blend in batches).',
      'Stir in cream, basil, and sugar. Season with salt and pepper.',
      'Simmer 5 more minutes.',
      'Serve hot topped with croutons and extra basil.'
    ],
    tips: [
      'For deeper flavor, use fire-roasted tomatoes',
      'Make it dairy-free by using coconut cream',
      'This soup freezes beautifully for easy lunches'
    ]
  },
  {
    id: 'oatmeal',
    title: 'Warm Cinnamon Oatmeal',
    description: 'A hearty, healthy breakfast that keeps you full all morning. Endless topping possibilities!',
    emoji: '🥣',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: 2,
    difficulty: 'Easy',
    categories: ['breakfast', 'quick', 'vegetarian'],
    ingredients: [
      '1 cup old-fashioned oats',
      '2 cups water or milk',
      '1/4 tsp salt',
      '1 tbsp brown sugar or maple syrup',
      '1/2 tsp cinnamon',
      'Pinch of nutmeg',
      'Toppings: fresh berries, sliced banana, nuts, honey, nut butter'
    ],
    instructions: [
      'Bring water or milk to a boil in a saucepan with salt.',
      'Stir in oats and reduce heat to medium-low.',
      'Cook 5 minutes, stirring occasionally, until oats are creamy and liquid is absorbed.',
      'Remove from heat and stir in brown sugar, cinnamon, and nutmeg.',
      'Divide into bowls and add your favorite toppings.',
      'Serve immediately while warm.'
    ],
    tips: [
      'Use milk instead of water for creamier oatmeal',
      'Add a tablespoon of chia or flax seeds for extra nutrition',
      'Make overnight oats for grab-and-go mornings'
    ]
  }
];

// Helper function to create recipe card HTML
function createRecipeCard(recipe) {
  return `
    <article class="recipe-card">
      <a href="recipe.html?id=${recipe.id}">
        <div class="recipe-image">${recipe.emoji}</div>
        <div class="recipe-content">
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
          <div class="recipe-meta-small">
            <span>⏱️ ${recipe.prepTime} + ${recipe.cookTime}</span>
            <span>👥 ${recipe.servings} servings</span>
          </div>
        </div>
      </a>
    </article>
  `;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { recipes, createRecipeCard };
}
