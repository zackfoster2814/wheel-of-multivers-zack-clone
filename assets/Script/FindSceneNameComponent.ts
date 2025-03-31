import { _decorator, Component, director } from 'cc';
const { ccclass } = _decorator;

@ccclass('FindSceneNameComponent')
export class FindSceneNameComponent extends Component {
    startEvent() {
        console.log("Scene hiện tại: ", director.getScene().name);
    }
}
