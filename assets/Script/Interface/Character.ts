export interface Character {
  name?: String;
  raceName?: String;
  raceId?: String;
  alliance?: Alliance;
  subraceId?: String;
  subraceName?: String;
  archetype?: Archetype[];
  reward?: Reward[];
  gear?: Gear[];
  weapon?: Weapon[];
  power?: Power[];
  charDev?: CharDev[];
  stat?: Stat;
}

interface Alliance {
  allianceId?: String;
  allianceName?: String;
}

export interface Archetype {
  archetypeId?: String;
  archetypeName?: String;
}

export interface Reward {
  rewardId?: String;
  rewarnName?: String;
}

export interface Gear {
  gearId?: String;
  gearName?: String;
  effect?: String;
}

export interface Weapon {
  weaponId?: String;
  weaponName?: String;
}

export interface Power {
  powerId?: String;
  powerName?: String;
  effect?: String;
}

export interface CharDev {
  charDevId?: String;
  charDevName?: String;
  effect?: String;
}

interface Stat {
  str?: Number;
  spd?: Number;
  iq?: Number;
  biq?: Number;
  dur?: Number;
  mar?: Number;
  rizz?: Number;
}
