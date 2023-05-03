# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) How to import NPM Modules on cocos creator (v3.3+)

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [解決方式](#解決方式)
* [參考資料](#參考資料)
<!--te-->

---
<br>

## 簡介
在NPM眾多套件中，並不是每個套件，都有支援在原生ESM模組系統上執行， <br>
所以即使npm install後，並寫入package.json，也是會有找不到的問題. <br>

關於這個問題，官方在cocos creator v3.3版本中，新增了一項功能，叫做 ***import maps***. <br>
透過映射的方式，直接跳過package.json，直接導入想要使用的套件位置. <br>

---
<br>

## 解決方式
1. 安裝想要導入的NPM套件，如下: <br>
> npm install socket.io-client --save

<br>

2. 接下來，我們要先在cocos creator專案中的root位置新增一個名叫 ***import maps.json*** 文件，內容如下. <br>
```typescript
// import-map.json
{
    "imports": {
        "socket.io-client": "./node_modules/socket.io-client/dist/socket.io.js"
    }
}
```
![](https://drive.google.com/uc?id=1gnAFekQodjmx9RigPn2ez-msAuhmPZvW)

<br>

3. 然後返回編輯器，單擊項目 → 項目設置 → 腳本，然後在Import maps選項中指定您剛剛創建的 ***import-map.json*** 文件. <br>
<img src="https://drive.google.com/uc?id=1Hh6V9W8Ydi_OSPM9eRNDY4FBZEoPDmxy" width=50% height=50%/>
<img src="https://drive.google.com/uc?id=109ttdQYowWTpzi2kl_LXOHGh-ahEj-9J" width=70% height=70%/>

<br>

4. 重新啟動編輯器（設置Import maps後需要重新啟動）
5. 設置後，就可以直接引入，使用方式如下:
> import io from 'socket.io-client'; <br>
> let socket = io("http://localhost:3000"); <br>

<br>

***範例代碼:***
```typescript
import { _decorator, Component, Node } from 'cc';
import io from 'socket.io-client';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {
    start() {
        console.log("Starting connection to socket.io server");
        let socket = io("http://localhost:3000");

        // client-side
        socket.on("connect", () => {
            console.log(`Socket.ID: ${socket.id}`); // x8WIv7-mJelg7on_ALbx
        });
    }

    update(deltaTime: number) {
        
    }
}
```

---
<br>

## 參考資料
* [cocos - Import Maps (experimental)](https://docs.cocos.com/creator/3.3/manual/en/scripting/modules/import-map.html) <br>
* [yufang.wu - Cocos Creator v3.0 and NPM Modules](https://discuss.cocos2d-x.org/t/cocos-creator-v3-0-and-npm-modules/52742/11) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
