import { _decorator, Component, Node } from 'cc';
import io from 'socket.io-client';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {
    start() {
        console.log("Starting connection to socket.io server");
        let socket = io("http://192.168.1.104:3000");

        // client-side
        socket.on("connect", () => {
            console.log(`Socket.ID: ${socket.id}`); // x8WIv7-mJelg7on_ALbx
        });
    }

    update(deltaTime: number) {
        
    }
}

