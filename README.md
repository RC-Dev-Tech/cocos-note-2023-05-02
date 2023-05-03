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

關於這個問題，官方在cocos creator v3.3版本中，新增了一項功能，叫做***import maps***. <br>
透過映射的方式，直接跳過package.json，直接導入想要使用的套件位置. <br>

---
<br>

## 解決方式
1.首先，我們要先在cocos creator專案中的root位置新增一個名叫import maps.json文件
安裝***socket.io-client***
```typescript
npm install socket.io-client
```

<br>

2.在cocos creator的專案中新增ts檔案，這邊我們可以命名成socket.io-client.d.ts***，並且在裡面新增以下代碼.
```typescript
declare module "socket.io-client/dist/socket.io.js" {
    export * from "socket.io-client";
}
```
> 上面的代碼主要是調整指向於套件的位置. <br>
> 當我們在import "socket.io-client" 導入專用於 Node.js 的套件，其主要模塊需要Node.js內置包才能工作。<br>
> 如果要在cocos Creator 中使用它，那我們應該要使用編譯後的版本，<br>
> import io from 'socket.io-client/dist/socket.io.js';<br>

<br>

3. 當上述檔案創建完畢後，即可切回cocos creator，會看見cocos會自動創建meta檔案，好讓專案可以順利的include.<br>
接下來我們就可以直接import使用，如下：
```typescript
import { io } from 'socket.io-client/dist/socket.io.js';
```

<br>

4. import 完之後，接下來就可以直接使用，其用法就跟socket.io的用法一樣，這邊就不多敘述.

<br>

---
<br>

## 參考資料
* [cocos - Standard network interface](https://docs.cocos.com/creator/2.4/manual/en/scripting/network.html) <br>
* [V3.0 and Socket.io-client NPM module](https://discuss.cocos2d-x.org/t/v3-0-and-socket-io-client-npm-module/52910) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
