---
date: 2023-12-25T09:30:20+02:00

aliases:
    - 810811296
    - 313e717
    - 313e717.html

title: 解决任务栏新建的 Edge 窗口使用不同配置文件的问题
categories:
tags:
    - VS Code
    - Edge
    - JavaScript Debugger
    - Windows
image: img/edge_logo.svg
license:

hidden: false
math:
comments: true
draft: false
sitemap:
    disable: false
---

Visual Studio Code 内置的 JavaScript Debugger 调试用的 Edge 配置文件和 Edge 默认的配置文件冲突导致任务栏新建的 Edge 窗口使用的是调试用配置文件。
本文为此提供了一种解决方式。

<!--more-->

## 问题

从任务栏新建的 Edge 窗口使用的是其他配置文件。

![从任务栏中新建 Edge 窗口](img/edge_create_new_window.webp)

![新窗口使用不同配置文件](img/edge_new_window.webp)

## 原因

任务栏上的 Edge 启动参数 `--profile-directory=Default` 中的配置文件和 VSCode JavaScript Debugger 调试用的 Edge 配置文件 `%APPDATA%\Code\User\workspaceStorage\...\ms-vscode.js-debug\.profile\Default` 重名。

## 解决方式

1. 将 `%LOCALAPPDATA%\Microsoft\Edge\User Data\Default` 中的 Default 配置文件改名，例如 `Profile 1`
2. 将任务栏中快捷方式的启动参数改为新配置文件的名称，例如 `--profile-directory="Profile 1"`

    ![查看任务栏快捷方式的属性](img/edge_shortcut_properties.webp)

    ![修改启动参数](img/edge_shortcut_change_properties.webp)
