import { Item } from "./gilded-rose";

export const ItemTypes = {
  AGED_BRIE: "Aged Brie",
  BACKSTAGE_PASSES: "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS: "Sulfuras, Hand of Ragnaros",
  CONJURED_MANA_CAKE: "Conjured Mana Cake",
};

/**
 * Maximum quality of an item.
 * Legendary items can have a quality higher than this.
 */
export const MAX_QUALITY = 50;

/**
 * Minimum quality of an item
 */
export const MIN_QUALITY = 0;

/**
 * Function to increase the quality of an item by 1.
 * This respects the maximum quality of an item.
 * @param quality - The quality to increase.
 * @returns The increased quality.
 */
export const increaseQuality = (quality: number): number => {
  if (quality < MAX_QUALITY) {
    return quality + 1;
  }

  return quality;
};

/**
 * Function to decrease the quality of an item by 1.
 * This respects the minimum quality of an item.
 * @param quality - The quality to decrease.
 * @returns The decreased quality.
 */
export const decreaseQuality = (quality: number): number => {
  if (quality > MIN_QUALITY) {
    return quality - 1;
  }

  return quality;
};
