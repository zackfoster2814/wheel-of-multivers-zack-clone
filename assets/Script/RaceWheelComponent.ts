import { _decorator, Component, Node, tween, Vec3, RichText, Graphics, UITransform, Color, Vec2, Label, EditBox, native } from 'cc';
import { raceSections, allianceSections, rizzLevelSelections, goblinHordeSelections, humanSkinSelections } from '../Data/WheelData/WheelData';
const { ccclass, property } = _decorator;

@ccclass('RaceWheelComponent')
export class RaceWheelComponent extends Component {
    @property(Node)
    wheel: Node | null = null;  // Vòng quay

    @property(RichText)
    resultName: RichText | null = null; // Nhãn hiển thị kết quả
    @property(RichText)
    resultSubrace: RichText | null = null; // Nhãn hiển thị kết quả
    @property(RichText)
    resultAlliance: RichText | null = null; // Nhãn hiển thị kết quả
    @property(RichText)
    resultRizz: RichText | null = null; // Nhãn hiển thị kết quả
    
    @property(EditBox)
    nameInput: EditBox | null = null; // Ô nhập tên nhân vật

    isRolling: boolean = false;
    characterList: { name: string, race: string }[] = []; // Danh sách lưu nhân vật

    private raceSections = raceSections;
    private allianceSections = allianceSections;
    private rizzLevelSelections = rizzLevelSelections;
    private goblinHordeSelections = goblinHordeSelections;
    private humanSkinSelections = humanSkinSelections;
    private sections = [];
    private wheelNow: number = 0;

    private race: string;
    private subrace: string;
    private alliance: string;
    private rizz: string;
    private rizzPoint: number;

    start() {
        this.drawWheel();
    }

    drawWheel() {   
        if (!this.wheel) return;

        this.wheel.removeAllChildren();

        if (this.wheelNow == 0) {
            this.sections = this.raceSections;
        } else if (this.wheelNow === 1) {
            this.sections = this.allianceSections;
        } else if (this.wheelNow === 10001) {
            this.sections = this.goblinHordeSelections;
        } else if (this.wheelNow === 10002) {
            this.sections = this.humanSkinSelections;
        } else if (this.wheelNow ===     10008) {
            this.sections = this.rizzLevelSelections;
        }
        const graphics = this.wheel.getComponent(Graphics) || this.wheel.addComponent(Graphics);
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
            this.drawTextOnSection(section.name, (startAngle + endAngle) / 2, radius * 0.6);
    
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
        label.fontSize = 150; 
        label.lineHeight = 100;
        label.color = new Color(0, 0, 0); // Màu đen
    
        textNode.setPosition(x, y);
        textNode.angle = angle ; // Xoay chữ theo hướng từ tâm
    
        this.wheel.addChild(textNode);
    }
    

    drawArc(graphics: Graphics, center: Vec2, radius: number, startAngle: number, endAngle: number) {
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
        if (this.isRolling){
            return;
        }
        if (!this.wheel || !this.resultName) return;
        this.isRolling = true;
        const randomAngle = Math.random() * 360;
        const extraRotations = 5;
        const finalAngle = 360 * extraRotations + randomAngle;

        this.wheel.eulerAngles = new Vec3(0, 0, 0);

        tween(this.wheel)
            .to(2, { eulerAngles: new Vec3(0, 0, -finalAngle) }, { easing: 'quartOut' })
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
                let rolledResult = section.name;
                let resultId = section.id;

                switch (this.wheelNow) {
                    case 0:
                        this.resultName.string = `<color=#FF4500>${rolledResult}</color>`;
                        this.race = rolledResult;

                        this.wheelNow = 10008;
                        this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        this.drawWheel();

                        // if (resultId === '01') {
                        //     this.wheelNow = 10001;
                        //     this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        //     this.drawWheel();
                        // } else if (resultId === '03') {
                        //     this.wheelNow = 10002;
                        //     this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        //     this.drawWheel();
                        // } else if (resultId === '11') {
                        //     this.wheelNow = 10008;
                        //     this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        //     this.drawWheel();
                        // } else  {
                        //     this.wheelNow = 1;
                        //     this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        //     this.drawWheel();
                        // }
                        break;
                    case 1:
                        this.resultAlliance.string = `<color=#FF4500>${rolledResult}</color>`;
                        this.alliance = rolledResult;
                        this.wheelNow = 2;
                        this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        this.drawWheel();
                        const enteredName = this.nameInput?.string || "GUEST";
                        if (enteredName) {
                            this.saveCharacter(enteredName, this.race, this.alliance, this.subrace, this.rizzPoint);
                            this.nameInput.string = ""; 
                            this.resetWheel();
                        }
                        break;
                    case 10001:
                        this.resultSubrace.string = `<color=#FF4500>${rolledResult}</color>`;
                        this.subrace = rolledResult;
                        this.wheelNow = 1;
                        this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        this.drawWheel();
                    case 10002:
                        this.resultSubrace.string = `<color=#FF4500>${rolledResult}</color>`;
                        this.subrace = rolledResult;
                        this.wheelNow = 1;
                        this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        this.drawWheel();
                    case 10008:
                        this.resultRizz.string = `<color=#FF4500>${rolledResult}</color>`;
                        this.rizz = rolledResult;
                        this.rizzPoint = section.point;
                        this.wheelNow = 1;
                        this.wheel.eulerAngles = new Vec3(0, 0, 0);
                        this.drawWheel();
                    default: 
                        break;
                }
    
     
                this.isRolling = false;
                break;
            }
        }
    }

    saveCharacter(name: string, race: string, alliance: string, subrace: any, rizz?: number) {
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
