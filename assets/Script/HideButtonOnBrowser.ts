import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HideButtonOnBrowser')
export class HideButtonOnBrowser extends Component {
    @property(Node)
    button: Node = null; // Gán button từ Inspector

    start() {
        if (sys.isBrowser) {
            this.button.active = false; // Ẩn button nếu chạy trên browser
        }
    }
}