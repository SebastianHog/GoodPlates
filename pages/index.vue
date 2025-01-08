<template>
  <div class="carousels-container">
    <Carousel :items="freshRecipes" />
    <Carousel :items="popularRecipes" />
    <Carousel :items="items" />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      freshRecipes: [
        {
          title: 'Chicken Parmesan',
          author: 'Steve',
          description: "While developing this recipe, I wondered: Why are we, citizens of the world, so obsessed with chicken Parmesan? After discussing with the food team, testing multiple variations, and summoning various Italian (-American) gods, I realized the reason is simple: It’s fatty,  umami-licious, and has that perfect crispy AND melt-in-your-mouth  texture. Though we’ve done it many different ways here, this classic  recipe is the chosen one, the holy grail. It has everything you want in chicken Parm, full stop—fried cutlets shrieking with crispiness, a perfect blend of mozzarella and Parm, and a sauce that is full of life with basil and just enough sweetness.",
          thumbnail: 'https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg'

        },
        {
          title: 'Mushroom Pizza',
          author: 'Sebastian',
          description: 'Mushroom pizza is classic comfort food that never goes out of style. The earthy flavor of mushrooms pairs perfectly with the cheesy goodness of pizza, making for a meal you’ll love time and again. Make your next pizza night the best one ever!',
          thumbnail: 'https://www.seriouseats.com/thmb/raKxsIKeWQXvmVtgcAoBtRYZ9Gw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150702-mushroom-truffle-pizza-1-0a0355c9cb2142d9a43cd20ee6b8b2b3.jpg'
        },
        {
          title: 'Cheese Burger 1',
          author: 'Melike',
          description: 'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg'
        },
        {
          title: 'Cheese Burger 2',
          author: 'Melike',
          description: 'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg'
        },
        {
          title: 'Cheese Burger 3',
          author: 'Melike',
          description: 'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg'
        },
        {
          title: 'Cheese Burger 4',
          author: 'Melike',
          description: 'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg'
        },
        {
          title: 'Cheese Burger 5',
          author: 'Melike',
          description: 'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg'
        },
        {
          title: 'Cheese Burger 6',
          author: 'Melike',
          description: 'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg'
        },
        {
          title: 'Cheese Burger 7',
          author: 'Melike',
          description: 'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail: 'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg'
        },
      ],
      popularRecipes: [
        {
          title: 'Iskender',
          author: 'Sebastian',
          description: 'Iskender Kebab is one of the most popular tastes in Turkey. So, how did  Iskender Kebab come into existence? How to make Iskender Kebab recipe at home? Let´s take a look together...',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%C4%B0skender_Kebap.jpg/800px-%C4%B0skender_Kebap.jpg'
        }
      ]
    }
  },
}
</script>

<style lang="scss">
.carousels-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
</style>
