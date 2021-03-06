/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var stuffSeeds = [
  {name: "Basket", quantity: 3},
  {name: "Bicycle", quantity: 2}
];

/**
 * Initialize the Textbook collection if empty with seed data.
 */
if (Stuff.find().count() === 0) {
  _.each(stuffSeeds,  function(stuff) {
    Stuff.insert(stuff);
  });
}
