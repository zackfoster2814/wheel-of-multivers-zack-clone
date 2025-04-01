import { _decorator, Component, Node, tween, Vec3, RichText, Graphics, UITransform, Color, Vec2, Label, EditBox, native } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RaceWheelComponent')
export class RaceWheelComponent extends Component {
    @property(Node)
    wheel: Node | null = null;  // Vòng quay

    @property(RichText)
    resultText: RichText | null = null; // Nhãn hiển thị kết quả
    
    @property(EditBox)
    nameInput: EditBox | null = null; // Ô nhập tên nhân vật

    isRolling: boolean = false;
    characterList: { name: string, race: string }[] = []; // Danh sách lưu nhân vật

    private sections = [
        { name: 'Goblin', weight: 5, color: "#FF0000" },      // Đỏ
        { name: 'Gnome', weight: 5, color: "#FFA500" },       // Cam
        { name: 'Human', weight: 5, color: "#FFFF00" },       // Vàng
        { name: 'Dwarf', weight: 5, color: "#008000" },       // Xanh lá
        { name: 'Merfolk', weight: 4, color: "#00FFFF" },     // Xanh dương nhạt
        { name: 'Skeleton', weight: 4, color: "#800080" },    // Tím
        { name: 'Troll', weight: 5, color: "#FFC0CB" },       // Hồng
        { name: 'Reptile', weight: 5, color: "#A52A2A" },     // Nâu
        { name: 'Orc', weight: 4.5, color: "#0000FF" },       // Xanh dương
        { name: 'Dryad', weight: 4, color: "#2E8B57" },       // Xanh lục đậm
        { name: 'Elf', weight: 4, color: "#4682B4" },         // Xanh thép
        { name: 'Spirit', weight: 3.5, color: "#9400D3" },    // Tím đậm
        { name: 'Werebeast', weight: 3.5, color: "#FF69B4" }, // Hồng đậm
        { name: 'Vampire', weight: 3.5, color: "#C71585" },   // Hồng mận
        { name: 'Hybrid', weight: 3, color: "#8B4513" },      // Nâu đất
        { name: 'Cyborg', weight: 4, color: "#708090" },      // Xám xanh
        { name: 'Giant', weight: 4, color: "#B22222" },       // Đỏ nâu
        { name: 'Dragon', weight: 4, color: "#FF4500" },      // Cam đỏ
        { name: 'Moon-touched', weight: 3.5, color: "#FFD700" }, // Vàng kim
        { name: 'Angel', weight: 3.5, color: "#E6E6FA" },     // Tím nhạt
        { name: 'Demi-God', weight: 2.5, color: "#D2691E" },  // Nâu sẫm
        { name: 'Primordial Being', weight: 3, color: "#DC143C" }, // Đỏ tươi
        { name: 'Reincarnator', weight: 3.5, color: "#ADFF2F" }, // Xanh lá sáng
        { name: 'Mythical Beasts', weight: 3, color: "#6495ED" }, // Xanh dương sáng
        { name: 'Demon', weight: 2.5, color: "#4B0082" },     // Chàm
        { name: 'God', weight: 2.5, color: "#FFFFFF" }        // Trắng
    ];

    start() {
        this.drawWheel();
    }

    drawWheel() {
        if (!this.wheel) return;
    
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
        if (!this.wheel || !this.resultText) return;
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
                const rolledRace = section.name;
                this.resultText.string = `<color=#FF4500>${rolledRace}</color>`;

                 const enteredName = this.nameInput?.string || "GUEST";
                 if (enteredName) {
                     this.saveCharacter(enteredName, rolledRace);
                     this.nameInput.string = ""; 
                 }
 
                 this.resetWheel();
                 this.isRolling = false;
                 break;
            }
        }
    }

    saveCharacter(name: string, race: string) {
        const character = { name, race };
    
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
        if (this.resultText) {
            this.resultText.string = "";
        }
    }
}
