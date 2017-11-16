json.extract! @pokemon, :name, :attack, :defense, :poke_type, :moves, :image_url; 

json.items @pokemon.items do |item|
  json.id item.id
  json.pokemon_id item.pokemon_id
  json.name item.name
  json.price item.price
  json.happiness item.happiness
  json.image_url item.image_url
end