USE [WorldCuisine];
GO

set identity_insert [User] on;
INSERT INTO "User" ("Id", "FirstName", "LastName", "FirebaseUserId", "Email") VALUES (1, 'Lucas', 'Cher', '2ltjmoUCEbUuiyJwMqdJysjiR6E3', 'cher@luc.com'),
(2, 'Haley', 'Hickey', 'ev5a4bHfobhRe44qFZadsn9Qq7F3', 'hay@lee.com'),
(3, 'Reuben', 'Ira', 'AprSIu8ZrlfG2ZcMPPfa2CkyJsq1', 'reu@ben.com'),
(4, 'Moses', 'Sanches', 'pMdbzb6RD7cQ4VD2xoavE8TJzkp2', 'moses@sanches.com'),
(5, 'Zerach', 'Zuriel', 'rEUqdCSg8adnQgvy7ULbVJpcyA43', 'zereal@zuriel.com'),
(6, 'Ruth', 'Ezra', 'DeGQnlQmoPfTxWeFs522oZrDyZ43', 'ruth@ezra.com'),
(7, 'Wednesday', 'Jareth', 'ge2RcYBDwoXxO6yvtekhE3ocZ542', 'wednes@day.com'),
(8, 'Spock', 'Indy', 'rvKp21VVx2Vfsuxcd12VK3EYNOS2', 'sp@ck.com'),
(9, 'Merida', 'Xena', 'OhI4StfCBzV5Yc7lgvAtVwNq8dt1', 'merida@xena.com'),
(10, 'Zorro', 'Sango', 'ZLmqHe6D3AhgLvWUQ6Vwxvwlkkx2', 'z@rro.com'),
(11, 'Cindy', 'Sue', 'TigGX2jLMeZ3fWVdGt0F5luM0bd2', 'cindy@sue.com');
set identity_insert [User] off;

set identity_insert [Recipe] on;
INSERT INTO "Recipe" ("Id", "Name", "Description", "ImageUrl", "UserId", "Ingredient", "Instruction") VALUES (1, 'Slow-cooked Beef Goulash', 'A Hungarian-style beef goulash recipe that is cooked in the slow-cooker with fresh herbs
and spices. This allows the traditional style dish to develop beautiful, rich flavours.', NULL,
8,
'1kg round beef steak, 2 tbsp plain flour, 1/2 tsp paprika, 1 bay leaf, 3 tsp thyme, 1/4 tsp parsley shopped fresh,
1 beef stock cube, 2 pinches salt and pepper, 2 fresh basil leaves, 1 garlic clove crushed, 1 onion chopped, 1 cup canned chopped tomatoes, 1 cup sour cream.',
'1) Coat the steak in flour and brown with the onions and garlic in a fry pan with a little butter.
2) Once browned, place in the slow cooker and add all remaining ingredients, except the sour cream.
3) Stir well, cover and cook on low for 6-8 hours or on high for 5 to 6 hours.
4) Half an hour before serving, thoroughly stir in the sour cream.'),
(2, 'Makovnjaca', 'Makovnjaca or poppyseed roll is actually a traditional Croatian dessert that does not have an actual historical story.', NULL, 7,
'4 cups all-purpose flour, 2 1/3 tbsp of fresh yeast, 1/2 cup sugar, 8 1/2 tbsp softened butter, 1 1/8 cup milk,
2 eggs, salt, powdered sugar,
The filling: 1 1/2 cups poppy seeds, 1/3 cup sugar, 3/4 hot milk.',
'1) Mix the yeast with half of warm milk and sugar. Let it rise a little.
2) In a separate large bowl add the flour, sugar, salt, softened butter and eggs. Mix well and then add the rest of the warm milk and the yeast mixture.
3) Knead it by hand until smooth and soft.
4) Cover the dough with a towel to rest for one hour.
5) Roll out the dough in a square shape, approx 1 cm thick.
6) For the filling take a medium bowl, and mix the poppyseeds and sugar and cover them with heated milk. Mix it well.
7) Spread out the poppyseed filling evenly onto the rolled out dough, and then roll the dough into a loaf, starting from the wider side.
8) Brush the roll with melted butter and place to a pre-heated oven at 350 degrees fahrenheit for 40 minutes.
9) Once cooled, dust the roll with powdered sugar and serve.'),
(3, 'Pasta Fazol', 'Pasta Fazol (pasta and bean soup) really is a wonderful Croatian recipe that is great for the colder months of the year.',
NULL, 7, '2 cups dried white beans or red kidney beans, 3.5 oz smoked pork bones, 3 Kranski sausages,
5 L of water, 2 carrots, cut into 2 cm chunks, 2 medium potatoes, cut into 2 cm cubes,
olive oil, 1 large diced onion, 2/3 cup pancetta, coarsely chopped, 1 tsp smoked paprika, 4 cloves of garlic, finely diced,
1/4 bunch of parsley finely diced, 1 tsp tomato paste, 2/3 cup shell pasta, salt and pepper to taste.',
'1) The night before you plan to cook this dish you need to place the kidney beans in some water to soak overnight. Soaking will rehydrate the beans and soften them.
2) Place some olive oil into a pot and fry the onion and pancetta on medium heat. As the onions start to change colour, add the strained beans along with the smoked bones and sausage.
3) Fill with cold water and cook over medium heat for 30 minutes.
4) Add the potatoes, carrots, garlic, parsley, tomato paste & paprika.
5) Continue to cook the beans until they are soft. The time is variable based on your choice of beans.
6) Add the pasta and season and cook until the pasta is ready.'),
(4, 'Shepherds Pie', 'A traditional dish in both the UK and Ireland', NULL, 3,
'2 lbs Yukon gold potatoes, 1.5 lbs lean ground lamb or beef, 2 tbsp extra-virgin olive oil,
1 medium sweet diced onion, 2 large diced carrots, 1/2 tsp kosher salt, pepper,
2 cloves garlic, 1 tsp chopped thyme, 3 tbsp tomato paste, 1 tbsp Worcestershire sauce,
3/4 cup red wine, 1 cup low-sodium beef broth, 1 cup frozen peas, 4 tbsp butter,
2/3 cup half n half, 1 tbsp dijon mustard, 2 scallions diced, 3/4 cup grated sharp cheddar cheese',
'1) Cover the potatoes with cold water in a large pot; season with salt and bring to a boil. Reduce heat to a simmer and cook until tender; 15-20 minutes.
2) In the meantime, heat the olive oil in a large skillet over medium heat; stir in the onion and carrots. Season with salt and pepper. Cook, stirring, until tender, about 6 minutes.
3) Increase heat to medium-high and add in the lamb. Cook, breaking it up with a wooden spoon until no pink remains; about 5 minutes. Drain fat and season with 1/2 teaspoon kosher salt and a few grinds of pepper.
4) Stir in the garlic and thyme; cook until fragrant.
5) Make space in the center; add the tomato paste and cook for 1 minute. Stir in the Worcestershire and wine; simmer until skillet is nearly dry, about 2 minutes.
6) Add the beef broth and simmer until the mixture is saucy, 4-5 minutes.
7) Stir in 1/2 cup frozen peas.
8) Transfer to a greased 3-quart baking dish.
9) Drain the potatoes and return to pot; add the butter and half n half; mash well. Season with salt and pepper and add in the mustard, scallions, and cheddar cheese.
10) Spread the potatoes over the meat with the back of a spoon, then make ridges with the tines of a fork.
11) Bake at 425 degrees F until the toping is golden, about 20-25 minutes.
12) Let cool at least 10 minutes before serving (If you cut into it too soon, everything will collapse. It needs a little time to set.)'),
(5, 'Jamaican Curry Chicken', 'Jamaican Chicken Curry is a favorite standby in Jamaican cuisine. It is a chicken dish that is cooked low and slow to get all the amazing flavors infused in the chicken and vegetables. Using your Instant Pot you can achieve the same flavor profile and all the rich flavor in less than 30 minutes. This Jamaican curried chicken makes an ideal dinner if you are craving some Caribbean flare.',
NULL, 5, '2 tbsp oil, 1 tbsp minced ginger, 1 tbsp minced garlic, 1 cup onioins, 1.5 tbsp jamaican curry powder,
1 scotch bonnet pepper(sliced), 1/2 tsp dried thyme, 1 tsp kosher salt, 1/2 tsp ground Allspice,
1 lb boneless skinless chicken thighs(cut into 3 pieces each),
1 potatoe chopped, 1 cup water',
'1) Heat the Instant Pot on Sauté and once it is hot, add the oil. When the oil is hot, add ginger and garlic, and stir for 20 seconds.
2) Add chopped onion and mix well (about 1-2 minutes).
3) Add the Jamaican curry powder, the sliced scotch bonnet pepper, thyme, salt and allspice and mix well.
4) At this point, if you have any browning or sticking that has occurred, use 1/4-1/3 cup of water to deglaze, scraping well, and allowing the water to evaporate.
5) Add chicken, potato, and 1 cup of water and set your Instant Pot to cook on high pressure for 6 minutes. If you are NOT using potatoes, reduce water to 1/2 cup.
6) Allow the pot to sit undisturbed for 10 minutes and then release all remaining pressure. Stir and serve.'),
(6, 'Brazillian Cheese Bread', 'Brazillian Cheese Bread is a delicious breaded snack (or appetizer) that you are going to LOVE! It is traditionally called Pao de Queijo and is a favorite bread roll of Brazil.',
NULL, 10,
'1/3 cup extra-virgin olive oil, 2/3 cup milk, 1 1/2 cup tapioca flour, 1 egg, 1 tsp salt, 1 cup sharp cheddar cheese',
'1) Preheat oven to 400 degrees.
2) In a blender add milk, olive oil and egg and blend to combine.
3) Add flour, salt and cheese.
4) Blend ingredients scraping down sides of blender as needed.
5) Pour mixture into greased mini muffin tins leaving 1/8 inch.
6) Bake for 13-15 minutes until golden brown.'),
(7, 'Russian Borscht Soup', 'Borscht is a healthy and filling soup that comes from the former Russian Empire. With beets being the main ingredient in this soup, it has a distinctive red color. There are many different variations of this soup but it is mainly made from beets, cabbage, potatoes, carrots, and spices.',
NULL, 1, '6 cups vegetable stock, 2 1/2 diced potato, 4 cups shredded cabbage, 2 bay leaves, 2 tbsp vegetable oil, 1 cup diced onion, 2 cups grated carrot,
4 cups grated beets, 2 tbsp tomato paste, 2 cloves garlic, 1 tsp salt, 1 tsp granulated sugar, 1 tsp white vinegar.',
'1) In a large pot, add water and boil the potatoes for 5 minutes then add the cabbage and bay leaves. Cook until the potatoes and cabbage are tender but not overcooked.
2) In a pan, heat oil and saute the onion with grated carrot and beets. Cook for 2-3 minutes on medium heat then add a little bit of water and cover with a lid. Cook until the beet is tender.
3) Add half of the sauteed onion, carrot, and beet to the potato and cabbage.
4) Season with salt, and add sugar and white vinegar. Give it a quick mix and cook for a couple of minutes.
5) Add the rest of the onion, carrot, and beet mixture to the soup. Remove from heat, and add crushed garlic. Cover with a lid and let it sit for 10 minutes before serving.
6) Serve with crusty bread, and a dollop of Smetana, sour cream, or Greek yogurt.'),
(8, 'Pork Schnitzel', 'Pork Schnitzel is a traditional German dish made with thin slices of pork that are lightly fried in a flour, egg, and breadcrumb coating.',
NULL, 6, '1.5 lbs pork loin chops, 1 cup flour, 1 cup bread crumbs, 2 eggs, salt and pepper,
3 cups vegetable oil, lemon slices.',
'1) Add eggs, flour and bread crumbs to three separate shallow dishes and set aside.
2) Add oil to a large skillet and heat oil to 340-350 degrees (I used a candy thermometer to check temperature).
3) Pound pork with a flat side of the mallet until the meat is 1/4 inch thick. Sprinkle both sides of pork with salt and pepper. Lightly dip into flour, then egg and finally the bread crumbs.
When all pieces are coated fry without crowding the schnitzel. Fry until golden brown. A total of three minutes is all that is required. Remove from skillet and place on a baking sheet with a cooling rack placed on top to let any excess oil drip off the schnitzel. Serve immediately.'),
(9, 'Shopska Salad', 'Shopska salad is one of Bulgaria, North Macedonia simplest and most flavorsome salads.', NULL, 11,
'2-3 large vine tomatoes, 1 english cucumber, 1/2 cup crumbled white cheese, 1/2 white onion,
1 tbsp choppped parsley, 1 tbsp olive oil, 1/2 lime, salt and pepper to taste.',
'1) Peel and dice the cucumber, chop the tomatoes, and add them to a salad bowl.
2) Add the chopped parsley and diced onion.
3) Combine the olive oil, lime juice, salt, and pepper, and add the resulting salad dressing to the salad.
4) Toss the salad and top with the crumbled white cheese.'),
(10, 'Deviled Eggs', 'Best go-to party appetizer', NULL, 2,
'12 large eggs, 1/3 cup mayonnaise, 1 tbsp yellow mustard, 1 tsp apple cider vinegar,
salt, pepper and garlic powder to taste, paprika for garnish.',
'1) Cut your eggs in half lengthwise and place all of the yolks into a small bowl; set the egg whites aside onto a plate.
2) Smash the egg yolks with a fork and mix well with the mayo, mustard and vinegar (start off with 1/3 cup of mayo and add more if desired).
3) Season to taste with salt, pepper and garlic. Go easy on the salt! You don’t need much.
4) Fill each egg white with equal amounts of the mixture (you can use a piping bag to make them pretty, or simply slop it on there with a small spoon).
5) Sprinkle with paprika for the finishing touch.');
set identity_insert [Recipe] off;

set identity_insert [Country] on;
INSERT INTO "Country" ("Id", "Name") VALUES (1, 'Hungary'),
(2, 'Croatia'),
(3, 'United Kingdom'),
(4, 'Ireland'),
(5, 'Jamaica'),
(6, 'Brazil'),
(7, 'Russia'),
(8, 'Germany'),
(9, 'Bulgaria'),
(10, 'USA'),
(11, 'Macedonia');
set identity_insert [Country] off;

set identity_insert [CountryRecipe] on;
INSERT INTO "CountryRecipe" ("Id", "CountryId", "RecipeId") VALUES (1, 1, 1),
(2, 2, 2),
(3, 2, 3),
(4, 3, 4),
(5, 4, 4),
(6, 5, 5),
(7, 6, 6),
(8, 7, 7),
(9, 8, 8),
(10, 2, 9),
(11, 9, 9),
(12, 11, 9),
(13, 10, 10);
set identity_insert [CountryRecipe] off;
