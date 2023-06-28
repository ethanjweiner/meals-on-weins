import { CookingMethod, Freezability, Macros } from './generated/graphql.ts';

const mocks = {
  Meal: () => ({
    id: () => '9bf2f097-59c9-4a00-a38a-17c6905e6b7b',
    name: () => 'Monster Mash',
    imageSrc: () =>
      'https://ifoodreal.com/wp-content/uploads/2019/08/fg-instant-pot-ground-turkey-quinoa-bowls.jpg',
    maxServings: () => 10,
    maxRefrigerationDays: () => 5,
    freezability: () => Freezability.Bad,
    minutes: () => 30,
    primaryMacros: () => [Macros.Carbohydrate, Macros.Protein],
    taste: () => 3,
    cookingMethod: () => CookingMethod.InstantPot,
    recipes: () => [
      {
        link: 'https://ifoodreal.com/instant-pot-ground-turkey-quinoa-bowls/',
        notes: 'This one burns easily. Be careful!',
      },
    ],
  }),
};

export default mocks;
