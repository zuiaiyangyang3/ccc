"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Main.ts
  var { regClass, property } = Laya;
  var 包裹 = [{ "数量": 0 }];
  var Main = class extends Laya.Script {
    onStart() {
      console.log("Game start");
      Laya.Stat.show();
      this.按钮.on(Laya.Event.CLICK, this, () => {
        console.log(包裹[0]["数量"]);
        包裹[0]["数量"] += 1;
        this.标签.text = "数量：" + 包裹[0]["数量"];
      });
      this.按钮减少.on(Laya.Event.CLICK, this, () => {
        console.log(包裹[0]["数量"]);
        包裹[0]["数量"] -= 1;
        this.标签.text = "数量：" + 包裹[0]["数量"];
      });
    }
  };
  __decorateClass([
    property({ type: Laya.Button })
  ], Main.prototype, "按钮", 2);
  __decorateClass([
    property({ type: Laya.Button })
  ], Main.prototype, "按钮减少", 2);
  __decorateClass([
    property({ type: Laya.Label })
  ], Main.prototype, "标签", 2);
  Main = __decorateClass([
    regClass("e60XQm7tTY2BwFAdxb8D1g")
  ], Main);
})();
