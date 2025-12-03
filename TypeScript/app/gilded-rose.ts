import { ItemTypes } from "./utils";

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
  if (
    item.name != "Aged Brie" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }
};

const updateAgedBrie = (item: Item) => {
  if (
    item.name != "Aged Brie" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }
};

const updateBackstagePasses = (item: Item) => {
  if (
    item.name != "Aged Brie" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }
};

const updateSulfuras = (item: Item) => {
  if (
    item.name != "Aged Brie" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1;
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
  }
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1;
  }
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        item.quality = item.quality - item.quality;
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
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
          updateSulfuras(item);
          continue;
        default:
          updateNormalItem(item);
          continue;
      }
    }

    return this.items;
  }
}
