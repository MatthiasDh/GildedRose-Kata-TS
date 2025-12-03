import { decreaseQuality, increaseQuality, ItemTypes } from "./utils";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const updateNormalItem = (item: Item) => {
  item.quality = decreaseQuality(item.quality);

  item.sellIn -= 1;

  if (item.sellIn < 0) {
    item.quality = decreaseQuality(item.quality);
  }
};

const updateAgedBrie = (item: Item) => {
  item.quality = increaseQuality(item.quality);

  item.sellIn -= 1;

  if (item.sellIn < 0) {
    item.quality = increaseQuality(item.quality);
  }
};

const updateBackstagePasses = (item: Item) => {
  item.quality = increaseQuality(item.quality);

  if (item.sellIn < 11) {
    item.quality = increaseQuality(item.quality);
  }

  if (item.sellIn < 6) {
    item.quality = increaseQuality(item.quality);
  }

  item.sellIn -= 1;

  if (item.sellIn < 0) {
    item.quality = 0;
  }
};

const updateConjuredItem = (item: Item) => {
  // Conjured items degrade in quality twice as fast as normal items
  item.quality = decreaseQuality(item.quality);
  item.quality = decreaseQuality(item.quality);

  item.sellIn -= 1;

  if (item.sellIn < 0) {
    // After the sell by date, degrade in quality twice as fast
    item.quality = decreaseQuality(item.quality);
    item.quality = decreaseQuality(item.quality);
  }
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    for (const item of this.items) {
      switch (item.name) {
        case ItemTypes.AGED_BRIE:
          updateAgedBrie(item);
          continue;
        case ItemTypes.BACKSTAGE_PASSES:
          updateBackstagePasses(item);
          continue;
        case ItemTypes.SULFURAS:
          // Sulfuras is a legendary item and does not change quality or sellIn
          continue;
        case ItemTypes.CONJURED_MANA_CAKE:
          updateConjuredItem(item);
          continue;
        default:
          updateNormalItem(item);
          continue;
      }
    }

    return this.items;
  }
}
