import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  describe("Normal Items", () => {
    it("should decrease quality by 1 before sell by date", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
    });

    it("should decrease sellIn by 1", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it("should decrease quality twice as fast after sell by date", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    });

    it("should not decrease quality below 0", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("should not decrease quality below 0 even after sell by date", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", 0, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("should handle negative sellIn values", () => {
      const gildedRose = new GildedRose([new Item("Normal Item", -5, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-6);
      expect(items[0].quality).toBe(8);
    });
  });

  describe("Aged Brie", () => {
    it("should increase quality by 1 before sell by date", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
    });

    it("should decrease sellIn by 1", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it("should increase quality twice as fast after sell by date", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
    });

    it("should not increase quality above 50", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it("should not increase quality above 50 even after sell by date", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 0, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it("should increase quality from 0", () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
    });
  });

  describe("Sulfuras", () => {
    it("should not change quality", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 10, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });

    it("should not change sellIn", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", 10, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(10);
    });

    it("should not change even with negative sellIn", () => {
      const gildedRose = new GildedRose([
        new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80);
    });
  });

  describe("Backstage Passes", () => {
    it("should increase quality by 1 when more than 10 days left", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
    });

    it("should increase quality by 2 when 10 days or less left", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
    });

    it("should increase quality by 2 when exactly 6 days left", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
    });

    it("should increase quality by 3 when 5 days or less left", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(23);
    });

    it("should increase quality by 3 when 1 day left", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 1, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(23);
    });

    it("should drop quality to 0 after concert (sellIn becomes negative)", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("should decrease sellIn by 1", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it("should not increase quality above 50 when more than 10 days left", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it("should not increase quality above 50 when 10 days or less left", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it("should not increase quality above 50 when 5 days or less left", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it("should remain at 0 quality after concert has passed", () => {
      const gildedRose = new GildedRose([
        new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe("Conjured Items", () => {
    it("should decrease quality twice as fast as normal items before sell by date", () => {
      const gildedRose = new GildedRose([
        new Item("Conjured Mana Cake", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    });

    it("should decrease sellIn by 1", () => {
      const gildedRose = new GildedRose([
        new Item("Conjured Mana Cake", 10, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
    });

    it("should decrease quality 4 times as fast after sell by date (2x conjured, 2x expired)", () => {
      const gildedRose = new GildedRose([
        new Item("Conjured Mana Cake", 0, 20),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(16);
    });

    it("should not decrease quality below 0", () => {
      const gildedRose = new GildedRose([
        new Item("Conjured Mana Cake", 10, 1),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it("should not decrease quality below 0 even after sell by date", () => {
      const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 3)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});
