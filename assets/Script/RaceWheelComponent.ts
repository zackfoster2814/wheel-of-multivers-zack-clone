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
  resultSubrace: RichText | null = null;
  @property(RichText)
  resultAlliance: RichText | null = null;
  @property(RichText)
  resultRizz: RichText | null = null;

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
      this.sections = this.raceSections;
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

    // Dragon type
    else if (this.wheelNow === 10018) {
      this.sections = this.dragonSelections;
    }

    // Angel Ranks
    else if (this.wheelNow === 10020) {
      this.sections = this.angelRanksSelections;
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

    // God name
    else if (this.wheelNow === 10026) {
      this.sections = this.godsSelections;
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
      // this.sections = this.speedWeightData(race);
    }
    // Speed
    else if (this.wheelNow === 5) {
    }
    // IQ
    else if (this.wheelNow === 6) {
    }
    // BIQ
    else if (this.wheelNow === 7) {
    }
    // Durability
    else if (this.wheelNow === 8) {
    }
    // Martial Arts
    else if (this.wheelNow === 9) {
    }
    // Weapon Mastery
    else if (this.wheelNow === 10) {
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
            // Bone Lineage Wheel
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
          case 10006:
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
            this.wheelNow = 2;
            this.drawWheel();
            break;
          case 10026:
            this.character.subraceId = resultId;
            this.character.subraceName = resultName;
            this.resultSubrace.string = `<color=#FF4500>${this.character.subraceName}</color>`;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.wheelNow = 2;
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
            this.character.archetype = resultId;
            this.character.alliance.allianceName = resultName;
            this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            this.wheelNow = 11; // return 4 is true
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 4:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 5;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 5:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 6;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 6:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 7;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 7:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 8;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 8:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 9;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 9:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 10;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 10:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            if (this.rizzler) {
              this.wheelNow = 11;
            } else {
              this.wheelNow = 12;
            }
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 11:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
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
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            if (resultId === "GCS001") {
              this.wheelNow = 14;
            } else if (resultId === "GCS002") {
              this.wheelNow = 13001;
            } else if (resultId === "GCS003") {
              this.wheelNow = 13001;
            } else if (resultId === "GCS004") {
              this.wheelNow = 13001;
            } else if (resultId === "GCS005") {
              this.wheelNow = 13002;
            } else if (resultId === "GCS006") {
              this.wheelNow = 13002;
            } else if (resultId === "GCS007") {
              this.wheelNow = 13002;
            }
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 13001:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            this.alliance = resultName;
            this.wheelNow = 14;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 13002:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 14;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 14:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.wheelNow = 15;
            this.wheel.eulerAngles = new Vec3(0, 0, 0);
            this.drawWheel();
            break;
          case 15:
            // this.resultAlliance.string = `<color=#FF4500>${resultName}</color>`;
            // this.alliance = resultName;
            this.resetWheel();
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
    name: string,
    race: string,
    alliance: string,
    subrace: any,
    rizz?: number
  ) {
    const character = { name, race, alliance, subrace, rizz };

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
    this.wheelNow = 0;
    this.drawWheel();
    if (this.resultName) {
      this.resultName.string = "";
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
  }
}
