---
categories: 编程
tags:
    - VSCode
    - Windows
    - Scoop
    - clangd
    - gcc
    - LLVM
    - Clang
date: 2022-05-12
updated: 2023-12-22
title: Windows 下通过 Scoop 为 VSCode 配置 clangd
---

## 准备工作

安装 [Scoop](https://scoop.sh/)

```shell
Invoke-WebRequest get.scoop.sh | Invoke-Expression
```

## 安装 Clangd

安装 [Winlibs](https://winlibs.com/) 编译的 MinGW + Clang + clangd

```shell
scoop install mingw-winlibs
```

VScode 安装 [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) 扩展。

## 为什么通过 Scoop 安装？

通过 Scoop 安装 clangd 可以自动配置环境变量，而且还可以避免 VSCode 找不到 `#include`。

## 参考资料

1. <https://zhuanlan.zhihu.com/p/508819503>
