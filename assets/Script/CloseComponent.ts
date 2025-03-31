import { _decorator, Component, sys, game } from 'cc';
const { ccclass } = _decorator;

@ccclass('ChangeSceneComponent')
export class ChangeSceneComponent extends Component {
    exitApp() {
        if (sys.isBrowser) {
            console.log('browser');
        } else if (sys.isNative) {
            console.log('Native');
            game.end();
        } else {
            console.log('Other');
        }
    }
}