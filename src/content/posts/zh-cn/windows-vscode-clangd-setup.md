---
date: 2022-05-12

slug: windows-vscode-clangd-setup
aliases:
    - 645e20ca

title: Windows 下通过 Scoop 为 VS Code 配置 clangd
categories: 工具
tags:
    - VS Code
    - Windows
    - Scoop
    - clangd
    - GCC
    - LLVM
    - Clang
description: 本文介绍了通过 Scoop 安装 clangd 的方法。
image: /assets/images/clangd_logo.svg
license:

hidden: false
math:
comments: true
draft: false

sitemap:
    disable: false

links:
    - title: clangd - Visual Studio Marketplace
      website: https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd
      image: https://raw.githubusercontent.com/clangd/vscode-clangd/eca1e05a39c4e987dca6247d825dfbe92fd5996f/icon.png
      description: C/C++ completion, navigation, and insights
    - title: 如何配置 vscode clangd
      website: https://zhuanlan.zhihu.com/p/508819503
      image: https://www.google.com/s2/favicons?domain=zhihu.com&sz=128
---

使用 Scoop 安装 [clangd](https://clangd.llvm.org/) 可以自动配置环境变量和避免 Visual Studio Code 找不到 `#include`。
本文介绍了通过 Scoop 安装 clangd 的方法。

<!--more-->

## 安装方式

安装 [Scoop](https://scoop.sh/)

```powershell
Invoke-WebRequest get.scoop.sh | Invoke-Expression
```

安装 [Winlibs](https://winlibs.com/) 编译的 MinGW + Clang + clangd

```powershell
scoop install mingw-winlibs
```

VS Code 安装 [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) 扩展。
