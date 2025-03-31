import { _decorator, Component, Node, tween, Vec3, RichText, Graphics, UITransform, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RaceWheelComponent')
export class RaceWheelComponent extends Component {
    @property(Node)
    wheel: Node | null = null;  // Vòng quay

    @property(RichText)
    resultText: RichText | null = null; // Nhãn hiển thị kết quả

    isRolling: boolean = false;

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

        const totalWeight = this.sections.reduce((sum, sec) => sum + sec.weight, 0);
        let startAngle = 0;
        let i: number = 1;
        for (const section of this.sections) {
            
            const angleStep = (section.weight / totalWeight) * 360;
            const endAngle = startAngle + angleStep;

            this.drawSection(graphics, startAngle, endAngle, section.color, i);
            i++
            startAngle = endAngle;
        }
    }

    drawSection(graphics: Graphics, startAngle: number, endAngle: number, color: string, count: number) {
        const radius = this.wheel!.getComponent(UITransform)?.contentSize.width / 2 || 200;
        const centerX = 0, centerY = 0;

        // Chuyển đổi góc sang radian
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;

        // Bắt đầu vẽ
        graphics.fillColor = new Color().fromHEX(color);
        graphics.moveTo(centerX, centerY);
        graphics.arc(centerX, centerY, radius, startRad, endRad, false);
        graphics.lineTo(centerX, centerY);
        graphics.fill();
        console.log(count)
        console.log(color)
    }

    spinWheel() {
        if (this.isRolling){
            return;
        }
        if (!this.wheel || !this.resultText) return;
        this.isRolling = true;
        const randomAngle = Math.random() * 360;  // Góc ngẫu nhiên
        const extraRotations = 5; // Quay thêm 5 vòng để tạo hiệu ứng
        const finalAngle = 360 * extraRotations + randomAngle; // Tổng góc quay (luôn dương)

        // Reset góc quay về 0 trước khi xoay
        this.wheel.eulerAngles = new Vec3(0, 0, 0);

        // Dùng tween để quay trong 2 giây và chậm dần
        tween(this.wheel)
            .to(2, { eulerAngles: new Vec3(0, 0, -finalAngle) }, { easing: 'quartOut' }) // quartOut giúp chậm dần
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
                this.resultText.string = `<color=#FF4500>${section.name}</color>`; // Dùng mã HEX (#FF4500)
                this.isRolling = false;
                break;
            }
        }
    }
}
