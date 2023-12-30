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
title: Windows 下通过 Scoop 为 VSCode 配置 clangd
thumbnail: https://clangd.llvm.org/logo.svg
slug: 645e20ca
date: 2022-05-12T00:00:00+02:00
lastmod: 2023-12-26T00:00:00+02:00

references:
  - title: 如何配置 vscode clangd
    url: https://zhuanlan.zhihu.com/p/508819503

---

使用 Scoop 安装 [clangd](https://clangd.llvm.org/) 可以自动配置环境变量和避免 VSCode 找不到 `#include`。

<!-- more -->

## 安装方式

1. 安装 [Scoop](https://scoop.sh/)

    ```shell
    Invoke-WebRequest get.scoop.sh | Invoke-Expression
    ```

1. 安装 [Winlibs](https://winlibs.com/) 编译的 MinGW + Clang + clangd

    ```shell
    scoop install mingw-winlibs
    ```

1. VSCode 安装 [clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) 扩展。

{% link
clangd - Visual Studio Marketplace
::https://marketplace.visualstudio.com/itemsitemName=llvm-vs-code-extensions.vscode-clangd
::https://llvm-vs-code-extensions.gallerycdn.vsassets.io/extensions/llvm-vs-code-extensions/vscode-clangd/0.1.26/1703134180510/Microsoft.VisualStudio.Services.Icons.Default
%}
