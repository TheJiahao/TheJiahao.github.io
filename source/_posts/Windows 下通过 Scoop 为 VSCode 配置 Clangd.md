---
categories: 编程
tags: [ Vscode, Windows, Scoop, Clangd, gcc, LLVM, Clang ]
date: 2022-05-12 19:07:05
updated: 2022-05-21 11:00:46
title: Windows 下通过 Scoop 为 VSCode 配置 clangd
---

# Windows 下通过 Scoop 为 VSCode 配置 clangd

## 准备工作

安装 [Scoop](https://scoop.sh/)  
`Invoke-WebRequest get.scoop.sh | Invoke-Expression`

Scoop 添加 `versions` 官方源  
`scoop bucket add versions`

## 安装 Clangd

安装 [Winlibs](https://winlibs.com/) 编译的 MinGW + Clang + clangd，环境变量会自动设置好  
`scoop install gcc-llvm-ucrt`

VScode 安装 [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) 扩展。

## 为什么通过 Scoop 安装？

通过 Scoop 安装 clangd 可以避免 VSCode 找不到 `#include`

## 参考资料

1. https://zhuanlan.zhihu.com/p/508819503
