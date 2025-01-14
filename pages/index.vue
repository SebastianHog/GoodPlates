<template>
  <div class="carousels-container">
    <Carousel
      :items="freshRecipes"
      emptyLabel="There are no recent uploads"
      carouselLabel="Fresh out of the oven"
    />
    <Carousel
      :items="popularRecipes"
      carouselLabel="Popular this week"
      emptyLabel="There doesn't seem to be anything here..."
    />
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
          description:
            'While developing this recipe, I wondered: Why are we, citizens of the world, so obsessed with chicken Parmesan?',
          thumbnail:
            'https://assets.bonappetit.com/photos/5ea8f0df16738800085ad5d2/1:1/w_2560%2Cc_limit/Chicken-Parmesean-Recipe-Lede.jpg',
          post_id: 'a1',
        },
        {
          title: 'Mushroom Pizza',
          author: 'Sebastian',
          description:
            'Mushroom pizza is classic comfort food that never goes out of style. The earthy flavor of mushrooms pairs perfectly with the cheesy goodness of pizza, making for a meal you’ll love time and again. Make your next pizza night the best one ever!',
          thumbnail:
            'https://www.seriouseats.com/thmb/raKxsIKeWQXvmVtgcAoBtRYZ9Gw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150702-mushroom-truffle-pizza-1-0a0355c9cb2142d9a43cd20ee6b8b2b3.jpg',
          post_id: 'a2',
        },
        {
          title: 'Cheese Burger 1',
          author: 'Melike',
          description:
            'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail:
            'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg',
          post_id: 'a3',
        },
        {
          title: 'Cheese Burger 2',
          author: 'Melike',
          description:
            'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail:
            'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg',
          post_id: 'a4',
        },
        {
          title: 'Cheese Burger 3',
          author: 'Melike',
          description:
            'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail:
            'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg',
          post_id: 'a5',
        },
        {
          title: 'Cheese Burger 4',
          author: 'Melike',
          description:
            'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail:
            'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg',
          post_id: 'a6',
        },
        {
          title: 'Cheese Burger 5',
          author: 'Melike',
          description:
            'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail:
            'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg',
          post_id: 'a7',
        },
        {
          title: 'Cheese Burger 6',
          author: 'Melike',
          description:
            'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail:
            'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg',
          post_id: 'a8',
        },
        {
          title: 'Cheese Burger 7',
          author: 'Melike',
          description:
            'These juicy homemade cheeseburgers are worth  staying home for! A perfectly seasoned beef patty, covered with melted  cheese and topped with pickles, onion, ketchup and mustard- all encased  in a soft brioche bun. Who wants a cheeseburger that tastes better than  your favourite takeaway version?! Perfect for family burger night- or  any time.',
          thumbnail:
            'https://www.sargento.com/assets/Uploads/Recipe/Image/GreatAmericanBurger__FillWzExNzAsNTgzXQ.jpg',
          post_id: 'a9',
        },
      ],
      popularRecipes: [
        {
          title: 'Iskender',
          author: 'Sebastian',
          description:
            'Iskender Kebab is one of the most popular tastes in Turkey. So, how did  Iskender Kebab come into existence? How to make Iskender Kebab recipe at home? Let´s take a look together!',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/%C4%B0skender_Kebap.jpg/800px-%C4%B0skender_Kebap.jpg',
          post_id: 'b1',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.carousels-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}
</style>
