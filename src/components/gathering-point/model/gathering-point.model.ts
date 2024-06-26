export interface GatheringPoint {
  id: string;
  location: {
    posX: number;
    posY: number;
    region: string;
    subRegion: string;
  };
  ressource: {
    itemId: number;
    level: number;
    name: string;
    isCollectionRessource: boolean;
  }[];
  gatheringCategory: string;
  startingHour: number;
  endingHour: number;
}
