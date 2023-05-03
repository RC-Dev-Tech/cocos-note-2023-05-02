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
1.首先，我們要先在cocos creator專案中的root位置新增一個名叫import maps.json文件. <br>
```typescript
// import-map.json
{
    "imports": {
        "socket.io-client": "./node_modules/socket.io-client/dist/socket.io.js"
    }
}
```

![](https://drive.google.com/uc?id=1cKeKLErG4dnPn97iVP1t4krt6cnJ3mdT)

<br>

待續...

---
<br>

## 參考資料
* [cocos - Import Maps (experimental)](https://docs.cocos.com/creator/3.3/manual/en/scripting/modules/import-map.html) <br>
* [yufang.wu - Cocos Creator v3.0 and NPM Modules](https://discuss.cocos2d-x.org/t/cocos-creator-v3-0-and-npm-modules/52742/11) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
