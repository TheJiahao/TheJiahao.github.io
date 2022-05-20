---
categories: 编程
tags: [ Vscode, Windows, Scoop, Clangd, gcc, LLVM, Clang ]
date: 2022-05-12 19:07:05
updated: 2022-05-20 19:44:33
title: Windows 下通过 Scoop 为 VSCode 配置 Clangd
---

# Windows 下通过 Scoop 为 VSCode 配置 Clangd

1. `Invoke-WebRequest get.scoop.sh | Invoke-Expression` 安装 [Scoop](https://scoop.sh/)
2. `scoop bucket add versions` 给 Scoop 添加 `versions` 官方源
3. `scoop install gcc-llvm-ucrt` 安装 [Winlibs](https://winlibs.com/) 编译的 MinGW + Clang + clangd，环境变量会自动设置好。
4. Vscode 安装 [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) 扩展

通过这种方式安装 clangd 可以避免 VSCode 找不到 `#include`

## 参考资料

1. https://zhuanlan.zhihu.com/p/508819503
