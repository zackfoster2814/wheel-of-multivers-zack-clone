import {
  _decorator,
  Component,
  Node,
  tween,
  Vec3,
  RichText,
  Graphics,
  UITransform,
  Color,
  Vec2,
  Label,
  EditBox,
  native,
} from "cc";
import {
  raceSections,
  allianceSections,
  elfSelections,
  rizzLevelSelections,
  goblinHordeSelections,
  cyborgGoblinHordeSelections,
  humanSkinSelections,
  mythicalBeastSelections,
  dragonSelections,
  cyberFusionSelections,
  primordialBeingSelections,
  spiritSelections,
  werebeastSelections,
  tsukiBlessingSelections,
  demiGodGiftsSelections,
  greekGodGiftsSelections,
  ancientGodGiftsSelections,
  demonSinsSelections,
  hybridTypesSelections,
  godsSelections,
  followerCountsSelections,
  vampireBodyCountSelections,
  dwarfTypesSelections,
  angelRanksSelections,
  reincarnatorsSelections,
  trollTypeSelections,
  reptileTypeSelections,
} from "../Data/WheelData/WheelData";
import { archetypeSections } from "../Data/WheelData/ArchetypeData";
import {
  weaponSections,
  uniqueWeaponSections,
  weaponCountSections,
} from "../Data/WheelData/WeaponData";
import {
  gearSections,
  speacialGearSections,
  gearCountSections,
} from "../Data/WheelData/GearData";
import { powerSections, powerCountSections } from "../Data/WheelData/PowerData";
import { charDevSections } from "../Data/WheelData/CharDevData";
import { statData } from "../Data/WheelData/StatData";
import {
  Character,
  Archetype,
  Reward,
  Gear,
  Weapon,
  Power,
  CharDev,
} from "./Interface/Character";
const { ccclass, property } = _decorator;

@ccclass("RaceWheelComponent")
export class RaceWheelComponent extends Component {
  @property(Node)
  wheel: Node | null = null; // Vòng quay

  @property(RichText)
  resultName: RichText | null = null;
  @property(RichText)
  resultRaceName: RichText | null = null;
  @property(RichText)
  resultSubrace: RichText | null = null;
  @property(RichText)
  resultAlliance: RichText | null = null;
  @property(RichText)
  resultRizz: RichText | null = null;

  @property(RichText)
  resultStr: RichText | null = null;
  @property(RichText)
  resultSpd: RichText | null = null;
  @property(RichText)
  resultIq: RichText | null = null;
  @property(RichText)
  resultBiq: RichText | null = null;
  @property(RichText)
  resultDur: RichText | null = null;
  @property(RichText)
  resultMar: RichText | null = null;

  @property(RichText)
  resultWM: RichText | null = null;

  @property(EditBox)
  nameInput: EditBox | null = null;

  isRolling: boolean = false;
  characterList: { name: string; race: string }[] = []; // Danh sách lưu nhân vật

  private raceSections = raceSections;
  private allianceSections = allianceSections;
  private rizzLevelSelections = rizzLevelSelections;
  private goblinHordeSelections = goblinHordeSelections;
  private humanSkinSelections = humanSkinSelections;
  private elfSelections = elfSelections;
  private cyborgGoblinHordeSelections = cyborgGoblinHordeSelections;
  private mythicalBeastSelections = mythicalBeastSelections;
  private dragonSelections = dragonSelections;
  private cyberFusionSelections = cyberFusionSelections;
  private primordialBeingSelections = primordialBeingSelections;
  private spiritSelections = spiritSelections;
  private werebeastSelections = werebeastSelections;
  private tsukiBlessingSelections = tsukiBlessingSelections;
  private demiGodGiftsSelections = demiGodGiftsSelections;
  private greekGodGiftsSelections = greekGodGiftsSelections;
  private ancientGodGiftsSelections = ancientGodGiftsSelections;
  private demonSinsSelections = demonSinsSelections;
  private hybridTypesSelections = hybridTypesSelections;
  private godsSelections = godsSelections;
  private followerCountsSelections = followerCountsSelections;
  private vampireBodyCountSelections = vampireBodyCountSelections;
  private dwarfTypesSelections = dwarfTypesSelections;
  private angelRanksSelections = angelRanksSelections;
  private reincarnatorsSelection = reincarnatorsSelections;
  private trollTypeSelections = trollTypeSelections;
  private reptileTypeSelections = reptileTypeSelections;
  private archetypeSections = archetypeSections;
  private weaponCountSections = weaponCountSections;
  private normalWeaponSections = weaponSections;
  private uniqueWeaponSections = uniqueWeaponSections;
  private normalGearSections = gearSections;
  private speacialGearSections = speacialGearSections;
  private powerSections = powerSections;
  private charDevSections = charDevSections;
  private gearCountSections = gearCountSections;
  private powerCountSections = powerCountSections;
  private statDataSections = statData;

  private sections = [];
  private wheelNow: number = 0;
  private normalGearNumber: number = 0;
  private speacialGearNumber: number = 0;
  private powerNumber: number = 0;

  private race: string;
  private subrace: string;
  private alliance: string;
  private rizz: string;
  private rizzPoint: number;
  private rizzler: boolean;

  private character: Character = {};

  start() {
    this.drawWheel();
  }

  drawWheel() {
    if (!this.wheel) return;

    this.wheel.removeAllChildren();

    // Race wheel
    if (this.wheelNow == 0) {
      this.sections = this.raceSections;
    }
    // ---- END Race wheel ----

    // Sub race wheel
    // Goblin
    else if (this.wheelNow === 10001) {
      this.sections = this.goblinHordeSelections;
    }
    // Human
    else if (this.wheelNow === 10003) {
      this.sections = this.humanSkinSelections;
    }
    // Dwarf
    else if (this.wheelNow === 10004) {
      this.sections = this.dwarfTypesSelections;
    }
    // Bone Lineage
    else if (this.wheelNow === 10006) {
      const excludedIds = ["06", "12", "16", "23"];
      this.sections = this.raceSections.filter(
        (race) => excludedIds.indexOf(race.id) === -1
      );
    }

    // Troll type
    else if (this.wheelNow === 10007) {
      this.sections = this.trollTypeSelections;
    }

    // Reptile type
    else if (this.wheelNow === 10008) {
      this.sections = this.reptileTypeSelections;
    }

    // Elf type
    else if (this.wheelNow === 10011) {
      this.sections = this.elfSelections;
    }

    // Spirit type
    else if (this.wheelNow === 10012) {
      this.sections = this.spiritSelections;
    }

    // Werebeast type
    else if (this.wheelNow === 10013) {
      this.sections = this.werebeastSelections;
    }

    // Vampire body count
    else if (this.wheelNow === 10014) {
      this.sections = this.vampireBodyCountSelections;
    }

    // Hybrid type
    else if (this.wheelNow === 10015) {
      this.sections = this.hybridTypesSelections;
    }

    // Cyber Fusion
    else if (this.wheelNow === 10016) {
      this.sections = this.cyberFusionSelections;
    }

    // Cyborg Goblin Horde
    else if (this.wheelNow === 100161) {
      this.sections = this.cyborgGoblinHordeSelections;
    }

    // Dragon type
    else if (this.wheelNow === 10018) {
      this.sections = this.dragonSelections;
    }

    // Angel Ranks
    else if (this.wheelNow === 10020) {
      this.sections = this.angelRanksSelections;
    }

    // Demi-god gift
    else if (this.wheelNow === 10021) {
      this.sections = this.demiGodGiftsSelections;
    } else if (this.wheelNow === 100211) {
      this.sections = this.greekGodGiftsSelections;
    } else if (this.wheelNow === 100212) {
      this.sections = this.ancientGodGiftsSelections;
    }

    // Primordial Being element type
    else if (this.wheelNow === 10022) {
      this.sections = this.primordialBeingSelections;
    }

    // Reincarnators
    else if (this.wheelNow === 10023) {
      this.sections = this.reincarnatorsSelection;
    }

    // Mythical Beast
    else if (this.wheelNow === 10024) {
      this.sections = this.mythicalBeastSelections;
    }

    // Demon Sins
    else if (this.wheelNow === 10025) {
      this.sections = this.demonSinsSelections;
    }
    // Tsuki blessing
    else if (this.wheelNow === 100251) {
      this.sections = this.tsukiBlessingSelections;
    }

    // God name
    else if (this.wheelNow === 10026) {
      this.sections = this.godsSelections;
    }
    // god following
    else if (this.wheelNow === 100261) {
      this.sections = this.followerCountsSelections;
    }

    // ---- End Sub race wheel ----

    // Trait
    // Alliance
    else if (this.wheelNow === 2) {
      this.sections = this.allianceSections;
    }
    // Archetype
    else if (this.wheelNow === 3) {
      this.sections = this.archetypeSections;
    }
    // stat
    // Strength
    else if (this.wheelNow === 4) {
      this.sections = this.statWheel(this.character.raceId, this.wheelNow);
    }
    // Speed
    else if (this.wheelNow === 5) {
      this.sections = this.statWheel(this.character.raceId, this.wheelNow);
    }
    // IQ
    else if (this.wheelNow === 6) {
      this.sections = this.statWheel(this.character.raceId, this.wheelNow);
    }
    // BIQ
    else if (this.wheelNow === 7) {
      this.sections = this.statWheel(this.character.raceId, this.wheelNow);
    }
    // Durability
    else if (this.wheelNow === 8) {
      this.sections = this.statWheel(this.character.raceId, this.wheelNow);
    }
    // Martial Arts
    else if (this.wheelNow === 9) {
      this.sections = this.statWheel(this.character.raceId, this.wheelNow);
    }
    // Weapon Mastery
    else if (this.wheelNow === 10) {
      this.sections = this.statWheel(this.character.raceId, this.wheelNow);
    }
    // Rizz level
    else if (this.wheelNow === 11) {
      this.sections = this.rizzLevelSelections;
    }
    // Weapon
    else if (this.wheelNow === 12) {
      this.sections = this.weaponCountSections;
    } else if (this.wheelNow === 12001) {
      this.sections = this.normalWeaponSections;
    } else if (this.wheelNow === 12002) {
      this.sections = this.uniqueWeaponSections;
    }
    // else if (this.wheelNow === 12003) {
    //   // this.sections = this.uniqueWeaponSections;
    // }

    // Gear
    else if (this.wheelNow === 13) {
      this.sections = this.gearCountSections;
    } else if (this.wheelNow === 13001) {
      this.sections = this.normalGearSections;
    } else if (this.wheelNow === 13002) {
      this.sections = this.speacialGearSections;
    }
    // Power count
    else if (this.wheelNow === 14) {
      this.sections = this.powerCountSections;
    }
    // Power
    else if (this.wheelNow === 14001) {
      this.sections = this.powerSections;
    }

    // Char dev
    else if (this.wheelNow === 15) {
      this.sections = this.charDevSections;
    }

    const graphics =
      this.wheel.getComponent(Graphics) || this.wheel.addComponent(Graphics);
    graphics.clear();

    const radius = this.wheel.getComponent(UITransform)?.width / 1.3 || 300;
    const center = new Vec2(0, 0);

    const totalWeight = this.sections.reduce((sum, sec) => sum + sec.weight, 0);
    let startAngle = 0; // Bắt đầu từ góc 90 độ

    for (const section of this.sections) {
      const angleStep = (section.weight / totalWeight) * 360;
      const endAngle = startAngle + angleStep;

      // Vẽ phần của vòng quay
      const color = this.hexToColor(section.color);
      graphics.fillColor = color;
      graphics.moveTo(center.x, center.y);
      this.drawArc(graphics, center, radius, startAngle, endAngle);
      graphics.lineTo(center.x, center.y);
      graphics.close();
      graphics.fill();

      // Tính toán vị trí để đặt tên
      this.drawTextOnSection(
        section.name,
        (startAngle + endAngle) / 2,
        radius * 0.6
      );

      startAngle = endAngle; // Cập nhật góc bắt đầu
    }
  }

  drawTextOnSection(text: string, angle: number, distance: number) {
    if (!this.wheel) return;

    const radian = (Math.PI / 180) * angle;
    const x = Math.cos(radian) * distance;
    const y = Math.sin(radian) * distance;

    const textNode = new Node();
    const label = textNode.addComponent(Label);
    label.string = text;
    label.fontSize = 180;
    label.lineHeight = 150;
    label.color = new Color(0, 0, 0); // Màu đen

    textNode.setPosition(x, y);
    textNode.angle = angle; // Xoay chữ theo hướng từ tâm

    this.wheel.addChild(textNode);
  }

  drawArc(
    graphics: Graphics,
    center: Vec2,
    radius: number,
    startAngle: number,
    endAngle: number
  ) {
    const segments = 15;
    const radStart = (Math.PI / 180) * startAngle;
    const radEnd = (Math.PI / 180) * endAngle;

    for (let i = 0; i <= segments; i++) {
      const angle = radStart + (i / segments) * (radEnd - radStart);
      const x = center.x + Math.cos(angle) * radius;
      const y = center.y + Math.sin(angle) * radius;

      if (i === 0) {
        graphics.moveTo(x, y);
      } else {
        graphics.lineTo(x, y);
      }
    }
  }

  hexToColor(hex: string): Color {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return new Color(r, g, b);
  }

  spinWheel() {
    if (this.isRolling) {
      return;
    }
    if (!this.wheel || !this.resultName) return;
    this.isRolling = true;
    const randomAngle = Math.random() * 360;
    const extraRotations = 5;
    const finalAngle = 360 * extraRotations + randomAngle;

    this.wheel.eulerAngles = new Vec3(0, 0, 0);

    tween(this.wheel)
      .to(
        2,
        { eulerAngles: new Vec3(0, 0, -finalAngle) },
        { easing: "quartOut" }
      )
      .call(() => {
        this.showResult(randomAngle);
      })
      .start();
  }

  showResult(randomAngle: number) {
    let cumulativeAngle = 0;
    const totalWeight = this.sections.reduce((sum, sec) => sum + sec.weight, 0);

    for (const section of this.sections) {
      const angleStep = (section.weight / totalWeight) * 360;
      cumulativeAngle += angleStep;
      if (randomAngle <= cumulativeAngle) {
        let resultName = section.name;
        let resultId = section.id;
        switch (this.wheelNow) {
          case 0:
            this.character.raceName = section.name;
            this.character.raceId = section.id;
            this.resultName.string = `<color=#FF4500>${this.character.raceName}</color>`;

            // Goblin Horde Wheel.
            if (this.character.raceId === "01") {
              this.wheelNow = 10001;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Human Skin wheel
            else if (this.character.raceId === "03") {
              this.wheelNow = 10003;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Dwarf type Wheel
            else if (this.character.raceId === "04") {
              this.wheelNow = 10004;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Bone Lineage Wheel - Skeleton
            else if (this.character.raceId === "06") {
              this.wheelNow = 10006;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Troll type Wheel
            else if (this.character.raceId === "07") {
              this.wheelNow = 10007;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Reptile type Wheel
            else if (this.character.raceId === "08") {
              this.wheelNow = 10008;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Elf type Wheel
            else if (this.character.raceId === "11") {
              this.rizzler = true;
              this.wheelNow = 10011;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Spirit type Wheel
            else if (this.character.raceId === "12") {
              this.wheelNow = 10012;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Werebeast type Wheel
            else if (this.character.raceId === "13") {
              this.wheelNow = 10013;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Body count Wheel
            else if (this.character.raceId === "14") {
              this.wheelNow = 10014;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // hybrid type Wheel
            else if (this.character.raceId === "15") {
              this.wheelNow = 10015;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Cybord type Wheel
            else if (this.character.raceId === "16") {
              this.wheelNow = 10016;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Dragon type Wheel
            else if (this.character.raceId === "18") {
              this.wheelNow = 10018;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Angle Wheel
            else if (this.character.raceId === "20") {
              this.wheelNow = 10020;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Demi-god Wheel
            else if (this.character.raceId === "21") {
              this.wheelNow = 10021;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Primordial Being elemental Wheel
            else if (this.character.raceId === "22") {
              this.wheelNow = 10022;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Reincarnator Wheel
            else if (this.character.raceId === "23") {
              this.wheelNow = 10023;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Mythical Beasts Wheel
            else if (this.character.raceId === "24") {
              this.wheelNow = 10024;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // Demon sins Wheel
            else if (this.character.raceId === "25") {
              this.wheelNow = 10025;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            // God Name wheel
            else if (this.character.raceId === "26") {
              this.wheelNow = 10026;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            } else {
              this.wheelNow = 2;
              this.wheel.eulerAngles = new Vec3(0, 0, 0);
              this.drawWheel();
            }
            break;
          // const enteredName = this.nameInput?.string || "GUEST";
          // if (enteredName) {
          //   this.saveCharacter(
          //     enteredName,
          //     this.race,
          //     this.alliance,
          //     this.subrace,
          //     this.rizzPoint
          //   );
          //   this.nameInput.string = "";
          //   // this.resetWheel();
          // }
          // break;
          case 10001:
            this.character.subraceId = resultId;
            this.character.subraceName = "Goblin Horde: " + resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10003:
            this.character.subraceId = resultId;
            {
              if (this.character.subraceId === "HSK002") {
                this.character.subraceName = "Ching Chong";
              } else if (this.character.subraceId === "HSK003") {
                this.character.subraceName = "Nigga";
              } else {
                this.character.subraceName = "Skin: " + resultName;
              }
            }
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10004:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10006: // skeleton
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10007:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10008:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10011:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10012:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10013:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10014:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10015:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10016:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            if (this.character.subraceId === "CFS002") {
              this.wheelNow = 100161;
            } else {
              this.wheelNow = 2;
            }
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 100161:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10018:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheelNow = 2;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10020:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10021: // Demi-god Gif
            // this.character.subraceId = resultId;
            // this.character.subraceName = resultName;
            // this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            if (resultId === "DGS001") {
              this.wheelNow = 100211;
            } else if (resultId === "DGS002") {
              this.wheelNow = 100212;
            }
            this.drawWheel();
            break;
          case 100211: // greek god
            // this.character.subraceId = resultId;
            // this.character.subraceName = resultName;
            // this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 100212: // Acient God
            // this.character.subraceId = resultId;
            // this.character.subraceName = resultName;
            // this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10022:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10023:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10024:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10025:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 100251;
            this.drawWheel();
            break;
          case 100251:
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10026:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 100261;
            this.drawWheel();
            break;
          case 100261:
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 100262;
            this.drawWheel();
            break;
          case 2:
            if (!this.character.alliance) {
              this.character.alliance = {};
            }
            this.character.alliance.allianceId = resultId;
            this.character.alliance.allianceName = resultName;
            this.resultAlliance.string = `<color=#FF4500>${this.character.alliance.allianceName}</color>`;
            this.wheelNow = 3;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 3:
            // this.character.archetype = resultId;
            // this.character.archetype = resultName;
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            this.wheelNow = 4; // return 4 is true
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 4:
            if (!this.character.stat) {
              this.character.stat = {}; // Khởi tạo nếu chưa có
            }
            this.character.stat.str = section.point;
            this.resultStr.string = `<color=#FF4500>${this.character.stat.str}</color>`;
            this.wheelNow = 5;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 5:
            if (!this.character.stat) {
              this.character.stat = {}; // Khởi tạo nếu chưa có
            }
            this.character.stat.spd = section.point;
            this.resultSpd.string = `<color=#FF4500>${this.character.stat.spd}</color>`;
            this.wheelNow = 6;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 6:
            if (!this.character.stat) {
              this.character.stat = {}; // Khởi tạo nếu chưa có
            }
            this.character.stat.iq = section.point;
            this.resultIq.string = `<color=#FF4500>${this.character.stat.iq}</color>`;
            this.wheelNow = 7;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 7:
            if (!this.character.stat) {
              this.character.stat = {}; // Khởi tạo nếu chưa có
            }
            this.character.stat.biq = section.point;
            this.resultBiq.string = `<color=#FF4500>${this.character.stat.biq}</color>`;
            this.wheelNow = 8;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 8:
            if (!this.character.stat) {
              this.character.stat = {}; // Khởi tạo nếu chưa có
            }
            this.character.stat.dur = section.point;
            this.resultDur.string = `<color=#FF4500>${this.character.stat.dur}</color>`;
            this.wheelNow = 9;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 9:
            if (!this.character.stat) {
              this.character.stat = {}; // Khởi tạo nếu chưa có
            }
            this.character.stat.mar = section.point;
            this.resultMar.string = `<color=#FF4500>${this.character.stat.mar}</color>`;
            this.wheelNow = 10;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10:
            if (!this.character.stat) {
              this.character.stat = {}; // Khởi tạo nếu chưa có
            }
            this.character.stat.wm = section.point;
            this.resultWM.string = `<color=#FF4500>${this.character.stat.wm}</color>`;
            if (this.rizzler) {
              this.wheelNow = 11;
            } else {
              this.wheelNow = 12;
            }
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 11:
            if (!this.character.stat) {
              this.character.stat = {}; // Khởi tạo nếu chưa có
            }
            this.character.stat.rizz = section.point;
            this.resultRizz.string = `<color=#FF4500>${this.character.stat.rizz}</color>`;
            this.wheelNow = 12;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 12: // weapon
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            if (resultId === "WCS001") {
              this.wheelNow = 13;
            } else if (resultId === "WCS002") {
              this.wheelNow = 12001;
            } else if (resultId === "WCS003") {
              this.wheelNow = 12002;
            }
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 12001:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 13;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 12002:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 13;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 13: // Gear
            if (resultId === "GCS001") {
              this.wheelNow = 14; // Không roll gear
            } else if (resultId === "GCS002") {
              this.normalGearNumber = 1;
              this.wheelNow = 13001;
            } else if (resultId === "GCS003") {
              this.normalGearNumber = 2;
              this.wheelNow = 13001;
            } else if (resultId === "GCS004") {
              this.normalGearNumber = 3;
              this.wheelNow = 13001;
            } else if (resultId === "GCS005") {
              this.speacialGearNumber = 1;
              this.wheelNow = 13002;
            } else if (resultId === "GCS006") {
              this.normalGearNumber = 1;
              this.speacialGearNumber = 1;
              this.wheelNow = 13001; // Bắt đầu bằng normal gear
            } else if (resultId === "GCS007") {
              this.speacialGearNumber = 2;
              this.wheelNow = 13002;
            }
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;

          case 13001: // Đang xử lý normal gear
            if (this.normalGearNumber > 1) {
              this.normalGearNumber--;
              this.wheelNow = 13001;
            } else if (this.speacialGearNumber > 0) {
              this.wheelNow = 13002; // Chuyển sang special nếu còn
            } else {
              this.wheelNow = 14; // Kết thúc
            }
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;

          case 13002: // Đang xử lý special gear
            if (this.speacialGearNumber > 1) {
              this.speacialGearNumber--;
              this.wheelNow = 13002;
            } else {
              this.wheelNow = 14; // Kết thúc
            }
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 14:
            // Xử lý theo resultId để xác định số lần roll power
            if (resultId === "PCS001") {
              this.powerNumber = 0;
            } else if (resultId === "PCS002") {
              this.powerNumber = 1;
            } else if (resultId === "PCS003") {
              this.powerNumber = 2;
            } else if (resultId === "PCS004") {
              this.powerNumber = 3;
            } else if (resultId === "PCS005") {
              this.powerNumber = 4;
            }

            if (this.powerNumber > 0) {
              this.wheelNow = 15; // Chuyển sang case 15 để roll power
            } else {
              this.resetWheel(); // Không cần roll
            }

            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;

          case 15:
            // Roll power cho đến khi hết số lượt
            this.powerNumber--;
            if (this.powerNumber > 0) {
              this.wheelNow = 15; // Tiếp tục roll power
            } else {
              this.resetWheel(); // Kết thúc
            }

            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          default:
            break;
        }

        this.isRolling = false;
        break;
      }
    }
  }

  saveCharacter(
    id: string,
    name: string,
    race: string,
    alliance: string,
    subrace: any,
    rizz?: number
  ) {
    const character = { id, name, race, alliance, subrace, rizz };

    console.log("Saved Character:", character);

    const filePath = "C:/Users/tuank/NewProject/assets/Data/userdata.txt";

    let existingData = [];
    if (native.fileUtils.isFileExist(filePath)) {
      const fileContent = native.fileUtils.getStringFromFile(filePath);
      try {
        existingData = JSON.parse(fileContent);
      } catch (e) {
        console.error("Failed to parse existing data:", e);
      }
    }

    existingData.push(character);

    const newContent = JSON.stringify(existingData, null, 2);
    native.fileUtils.writeStringToFile(newContent, filePath);
  }

  resetWheel() {
    if (this.wheel) {
      this.wheel.eulerAngles = new Vec3(0, 0, 0);
    }
    this.rizzler = false;
    this.wheelNow = 0;
    this.drawWheel();
    if (this.resultName) {
      this.resultName.string = "";
    }
    if (this.resultRaceName) {
      this.resultRaceName.string = "";
    }
    if (this.resultAlliance) {
      this.resultAlliance.string = "";
    }

    if (this.resultSubrace) {
      this.resultSubrace.string = "";
    }

    if (this.resultRizz) {
      this.resultRizz.string = "";
    }

    if (this.resultStr) {
      this.resultStr.string = "";
    }
    if (this.resultSpd) {
      this.resultSpd.string = "";
    }
    if (this.resultIq) {
      this.resultIq.string = "";
    }
    if (this.resultBiq) {
      this.resultBiq.string = "";
    }
    if (this.resultDur) {
      this.resultDur.string = "";
    }
    if (this.resultMar) {
      this.resultMar.string = "";
    }
    if (this.resultWM) {
      this.resultWM.string = "";
    }
    if (this.nameInput) {
      this.nameInput.string = "";
    }
  }

  statWheel(raceId: String, statNow: Number): any[] {
    console.log("RaceId: " + raceId + " || Stat now: " + statNow);
    switch (statNow) {
      case 4: {
        // str
        switch (raceId) {
          case "01": {
            return this.statDataSections.Goblin.str;
          }
          case "02": {
            return this.statDataSections.Gnome.str;
          }
          case "03": {
            return this.statDataSections.Human.str;
          }
          case "04": {
            return this.statDataSections.Dwarf.str;
          }
          case "05": {
            return this.statDataSections.Merfolk.str;
          }
          case "06": {
            return this.statDataSections.Skeleton.str;
          }
          case "07": {
            return this.statDataSections.Troll.str;
          }
          case "08": {
            return this.statDataSections.Reptile.str;
          }
          case "09": {
            return this.statDataSections.Orc.str;
          }
          case "10": {
            return this.statDataSections.Dryad.str;
          }
          case "11": {
            return this.statDataSections.Elf.str;
          }
          case "12": {
            return this.statDataSections.Spirit.str;
          }
          case "13": {
            return this.statDataSections.Werebeast.str;
          }
          case "14": {
            return this.statDataSections.Vampire.str;
          }
          case "15": {
            return this.statDataSections.Hybrid.str;
          }
          case "16": {
            return this.statDataSections.Cyborg.str;
          }
          case "17": {
            return this.statDataSections.Giant.str;
          }
          case "18": {
            return this.statDataSections.Dragon.str;
          }
          case "19": {
            return this.statDataSections.MoonTouched.str;
          }
          case "20": {
            return this.statDataSections.Angel.str;
          }
          case "21": {
            return this.statDataSections.DemiGod.str;
          }
          case "22": {
            return this.statDataSections.PrimordialBeing.str;
          }
          case "23": {
            return this.statDataSections.Reincarnator.str;
          }
          case "24": {
            return this.statDataSections.MythicalBeasts.str;
          }
          case "25": {
            return this.statDataSections.Demon.str;
          }
          case "26": {
            return this.statDataSections.God.str;
          }
        }
      }
      case 5: {
        // spd
        switch (raceId) {
          case "01": {
            return this.statDataSections.Goblin.spd;
          }
          case "02": {
            return this.statDataSections.Gnome.spd;
          }
          case "03": {
            return this.statDataSections.Human.spd;
          }
          case "04": {
            return this.statDataSections.Dwarf.spd;
          }
          case "05": {
            return this.statDataSections.Merfolk.spd;
          }
          case "06": {
            return this.statDataSections.Skeleton.spd;
          }
          case "07": {
            return this.statDataSections.Troll.spd;
          }
          case "08": {
            return this.statDataSections.Reptile.spd;
          }
          case "09": {
            return this.statDataSections.Orc.spd;
          }
          case "10": {
            return this.statDataSections.Dryad.spd;
          }
          case "11": {
            return this.statDataSections.Elf.spd;
          }
          case "12": {
            return this.statDataSections.Spirit.spd;
          }
          case "13": {
            return this.statDataSections.Werebeast.spd;
          }
          case "14": {
            return this.statDataSections.Vampire.spd;
          }
          case "15": {
            return this.statDataSections.Hybrid.spd;
          }
          case "16": {
            return this.statDataSections.Cyborg.spd;
          }
          case "17": {
            return this.statDataSections.Giant.spd;
          }
          case "18": {
            return this.statDataSections.Dragon.spd;
          }
          case "19": {
            return this.statDataSections.MoonTouched.spd;
          }
          case "20": {
            return this.statDataSections.Angel.spd;
          }
          case "21": {
            return this.statDataSections.DemiGod.spd;
          }
          case "22": {
            return this.statDataSections.PrimordialBeing.spd;
          }
          case "23": {
            return this.statDataSections.Reincarnator.spd;
          }
          case "24": {
            return this.statDataSections.MythicalBeasts.spd;
          }
          case "25": {
            return this.statDataSections.Demon.spd;
          }
          case "26": {
            return this.statDataSections.God.spd;
          }
        }
      }
      case 6: {
        // iq
        switch (raceId) {
          case "01": {
            return this.statDataSections.Goblin.iq;
          }
          case "02": {
            return this.statDataSections.Gnome.iq;
          }
          case "03": {
            return this.statDataSections.Human.iq;
          }
          case "04": {
            return this.statDataSections.Dwarf.iq;
          }
          case "05": {
            return this.statDataSections.Merfolk.iq;
          }
          case "06": {
            return this.statDataSections.Skeleton.iq;
          }
          case "07": {
            return this.statDataSections.Troll.iq;
          }
          case "08": {
            return this.statDataSections.Reptile.iq;
          }
          case "09": {
            return this.statDataSections.Orc.iq;
          }
          case "10": {
            return this.statDataSections.Dryad.iq;
          }
          case "11": {
            return this.statDataSections.Elf.iq;
          }
          case "12": {
            return this.statDataSections.Spirit.iq;
          }
          case "13": {
            return this.statDataSections.Werebeast.iq;
          }
          case "14": {
            return this.statDataSections.Vampire.iq;
          }
          case "15": {
            return this.statDataSections.Hybrid.iq;
          }
          case "16": {
            return this.statDataSections.Cyborg.iq;
          }
          case "17": {
            return this.statDataSections.Giant.iq;
          }
          case "18": {
            return this.statDataSections.Dragon.iq;
          }
          case "19": {
            return this.statDataSections.MoonTouched.iq;
          }
          case "20": {
            return this.statDataSections.Angel.iq;
          }
          case "21": {
            return this.statDataSections.DemiGod.iq;
          }
          case "22": {
            return this.statDataSections.PrimordialBeing.iq;
          }
          case "23": {
            return this.statDataSections.Reincarnator.iq;
          }
          case "24": {
            return this.statDataSections.MythicalBeasts.iq;
          }
          case "25": {
            return this.statDataSections.Demon.iq;
          }
          case "26": {
            return this.statDataSections.God.iq;
          }
        }
      }
      case 7: {
        // biq
        switch (raceId) {
          case "01": {
            return this.statDataSections.Goblin.biq;
          }
          case "02": {
            return this.statDataSections.Gnome.biq;
          }
          case "03": {
            return this.statDataSections.Human.biq;
          }
          case "04": {
            return this.statDataSections.Dwarf.biq;
          }
          case "05": {
            return this.statDataSections.Merfolk.biq;
          }
          case "06": {
            return this.statDataSections.Skeleton.biq;
          }
          case "07": {
            return this.statDataSections.Troll.biq;
          }
          case "08": {
            return this.statDataSections.Reptile.biq;
          }
          case "09": {
            return this.statDataSections.Orc.biq;
          }
          case "10": {
            return this.statDataSections.Dryad.biq;
          }
          case "11": {
            return this.statDataSections.Elf.biq;
          }
          case "12": {
            return this.statDataSections.Spirit.biq;
          }
          case "13": {
            return this.statDataSections.Werebeast.biq;
          }
          case "14": {
            return this.statDataSections.Vampire.biq;
          }
          case "15": {
            return this.statDataSections.Hybrid.biq;
          }
          case "16": {
            return this.statDataSections.Cyborg.biq;
          }
          case "17": {
            return this.statDataSections.Giant.biq;
          }
          case "18": {
            return this.statDataSections.Dragon.biq;
          }
          case "19": {
            return this.statDataSections.MoonTouched.biq;
          }
          case "20": {
            return this.statDataSections.Angel.biq;
          }
          case "21": {
            return this.statDataSections.DemiGod.biq;
          }
          case "22": {
            return this.statDataSections.PrimordialBeing.biq;
          }
          case "23": {
            return this.statDataSections.Reincarnator.biq;
          }
          case "24": {
            return this.statDataSections.MythicalBeasts.biq;
          }
          case "25": {
            return this.statDataSections.Demon.biq;
          }
          case "26": {
            return this.statDataSections.God.biq;
          }
        }
      }
      case 8: {
        // dur
        switch (raceId) {
          case "01": {
            return this.statDataSections.Goblin.dur;
          }
          case "02": {
            return this.statDataSections.Gnome.dur;
          }
          case "03": {
            return this.statDataSections.Human.dur;
          }
          case "04": {
            return this.statDataSections.Dwarf.dur;
          }
          case "05": {
            return this.statDataSections.Merfolk.dur;
          }
          case "06": {
            return this.statDataSections.Skeleton.dur;
          }
          case "07": {
            return this.statDataSections.Troll.dur;
          }
          case "08": {
            return this.statDataSections.Reptile.dur;
          }
          case "09": {
            return this.statDataSections.Orc.dur;
          }
          case "10": {
            return this.statDataSections.Dryad.dur;
          }
          case "11": {
            return this.statDataSections.Elf.dur;
          }
          case "12": {
            return this.statDataSections.Spirit.dur;
          }
          case "13": {
            return this.statDataSections.Werebeast.dur;
          }
          case "14": {
            return this.statDataSections.Vampire.dur;
          }
          case "15": {
            return this.statDataSections.Hybrid.dur;
          }
          case "16": {
            return this.statDataSections.Cyborg.dur;
          }
          case "17": {
            return this.statDataSections.Giant.dur;
          }
          case "18": {
            return this.statDataSections.Dragon.dur;
          }
          case "19": {
            return this.statDataSections.MoonTouched.dur;
          }
          case "20": {
            return this.statDataSections.Angel.dur;
          }
          case "21": {
            return this.statDataSections.DemiGod.dur;
          }
          case "22": {
            return this.statDataSections.PrimordialBeing.dur;
          }
          case "23": {
            return this.statDataSections.Reincarnator.dur;
          }
          case "24": {
            return this.statDataSections.MythicalBeasts.dur;
          }
          case "25": {
            return this.statDataSections.Demon.dur;
          }
          case "26": {
            return this.statDataSections.God.dur;
          }
        }
      }
      case 9: {
        // mar
        switch (raceId) {
          case "01": {
            return this.statDataSections.Goblin.mar;
          }
          case "02": {
            return this.statDataSections.Gnome.mar;
          }
          case "03": {
            return this.statDataSections.Human.mar;
          }
          case "04": {
            return this.statDataSections.Dwarf.mar;
          }
          case "05": {
            return this.statDataSections.Merfolk.mar;
          }
          case "06": {
            return this.statDataSections.Skeleton.mar;
          }
          case "07": {
            return this.statDataSections.Troll.mar;
          }
          case "08": {
            return this.statDataSections.Reptile.mar;
          }
          case "09": {
            return this.statDataSections.Orc.mar;
          }
          case "10": {
            return this.statDataSections.Dryad.mar;
          }
          case "11": {
            return this.statDataSections.Elf.mar;
          }
          case "12": {
            return this.statDataSections.Spirit.mar;
          }
          case "13": {
            return this.statDataSections.Werebeast.mar;
          }
          case "14": {
            return this.statDataSections.Vampire.mar;
          }
          case "15": {
            return this.statDataSections.Hybrid.mar;
          }
          case "16": {
            return this.statDataSections.Cyborg.mar;
          }
          case "17": {
            return this.statDataSections.Giant.mar;
          }
          case "18": {
            return this.statDataSections.Dragon.mar;
          }
          case "19": {
            return this.statDataSections.MoonTouched.mar;
          }
          case "20": {
            return this.statDataSections.Angel.mar;
          }
          case "21": {
            return this.statDataSections.DemiGod.mar;
          }
          case "22": {
            return this.statDataSections.PrimordialBeing.mar;
          }
          case "23": {
            return this.statDataSections.Reincarnator.mar;
          }
          case "24": {
            return this.statDataSections.MythicalBeasts.mar;
          }
          case "25": {
            return this.statDataSections.Demon.mar;
          }
          case "26": {
            return this.statDataSections.God.mar;
          }
        }
      }
      case 10: {
        // wm
        switch (raceId) {
          case "01": {
            return this.statDataSections.Goblin.wm;
          }
          case "02": {
            return this.statDataSections.Gnome.wm;
          }
          case "03": {
            return this.statDataSections.Human.wm;
          }
          case "04": {
            return this.statDataSections.Dwarf.wm;
          }
          case "05": {
            return this.statDataSections.Merfolk.wm;
          }
          case "06": {
            return this.statDataSections.Skeleton.wm;
          }
          case "07": {
            return this.statDataSections.Troll.wm;
          }
          case "08": {
            return this.statDataSections.Reptile.wm;
          }
          case "09": {
            return this.statDataSections.Orc.wm;
          }
          case "10": {
            return this.statDataSections.Dryad.wm;
          }
          case "11": {
            return this.statDataSections.Elf.wm;
          }
          case "12": {
            return this.statDataSections.Spirit.wm;
          }
          case "13": {
            return this.statDataSections.Werebeast.wm;
          }
          case "14": {
            return this.statDataSections.Vampire.wm;
          }
          case "15": {
            return this.statDataSections.Hybrid.wm;
          }
          case "16": {
            return this.statDataSections.Cyborg.wm;
          }
          case "17": {
            return this.statDataSections.Giant.wm;
          }
          case "18": {
            return this.statDataSections.Dragon.wm;
          }
          case "19": {
            return this.statDataSections.MoonTouched.wm;
          }
          case "20": {
            return this.statDataSections.Angel.wm;
          }
          case "21": {
            return this.statDataSections.DemiGod.wm;
          }
          case "22": {
            return this.statDataSections.PrimordialBeing.wm;
          }
          case "23": {
            return this.statDataSections.Reincarnator.wm;
          }
          case "24": {
            return this.statDataSections.MythicalBeasts.wm;
          }
          case "25": {
            return this.statDataSections.Demon.wm;
          }
          case "26": {
            return this.statDataSections.God.wm;
          }
        }
      }
    }
  }
}
