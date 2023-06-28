import gql from 'graphql-tag';

export const typeDefs = gql`
  enum Freezability {
    GOOD
    OK
    BAD
  }

  enum Macros {
    CARBOHYDRATE
    PROTEIN
    FAT
  }

  enum CookingMethod {
    INSTANT_POT
    STEAM
    GRILL
    BAKE
    PAN
    NONE
  }

  type Meal {
    id: ID!
    name: String!
    imageSrc: String
    maxServings: Int
    maxRefrigerationDays: Int!
    freezability: Freezability!
    minutes: Int!
    primaryMacros: [Macros!]
    taste: Int
    cookingMethod: CookingMethod!
    recipes: [Recipe!]
  }

  type Recipe {
    link: String
    notes: String
    meal: Meal!
  }

  type Query {
    meals: [Meal!]!
  }
`;
