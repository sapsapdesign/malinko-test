const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should return the sellIn and quality for Conjured items", function() {
    const gildedRoseConjured = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRoseConjured.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(3);
  });
  it("should return the right sellIn and quality for Sulfuras", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(80);
  });
});
