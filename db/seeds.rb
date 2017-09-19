35.times do
  Dish.create{
    name: Faker::Food.dish,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price_to_f,
  }
end