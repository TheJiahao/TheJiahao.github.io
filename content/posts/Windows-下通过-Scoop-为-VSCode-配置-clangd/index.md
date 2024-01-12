---
date: 2022-05-12T00:00:00+02:00
lastmod: 2023-01-09T17:14:00+02:00

slug: 645e20ca

title: Windows 下通过 Scoop 为 VSCode 配置 clangd
categories: 工具
tags:
  - VSCode
  - Windows
  - Scoop
  - clangd
  - gcc
  - LLVM
  - Clang
description:
image: https://repository-images.githubusercontent.com/257710112/84be0900-849d-11ea-855a-6b304dddf63a
license:

hidden: false
math:
comments: true
draft: false

links:
  - title: clangd - Visual Studio Marketplace
    website: https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd
    image: https://raw.githubusercontent.com/clangd/vscode-clangd/eca1e05a39c4e987dca6247d825dfbe92fd5996f/icon.png
    description: C/C++ completion, navigation, and insights
  - title: 如何配置 vscode clangd
    website: https://zhuanlan.zhihu.com/p/508819503
    image: https://www.google.com/s2/favicons?domain=zhihu.com&sz=128
---

使用 Scoop 安装 [clangd](https://clangd.llvm.org/) 可以自动配置环境变量和避免 VSCode 找不到 `#include`。

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

VSCode 安装 [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) 扩展。
