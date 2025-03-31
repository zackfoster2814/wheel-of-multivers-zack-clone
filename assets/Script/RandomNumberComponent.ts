import { _decorator, Component, RichText } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('RandomNumberComponent')
export class RandomNumberComponent extends Component {
    @property(RichText)
    displayRichText: RichText | null = null; // Thay Label bằng RichText

    start() {
        this.updateRandomNumber();
    }

    randomNumber(race?: number): number {
        if (!!!race){
            console.log('race is not null');
        }
        return Math.floor(getRandomInt(10)) + 1;
    }

    updateRandomNumber() {
        const randomValue = this.randomNumber();
        console.log(randomValue)
        if (this.displayRichText) {
            this.displayRichText.string = `${randomValue}`;
        }
    }

    
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}