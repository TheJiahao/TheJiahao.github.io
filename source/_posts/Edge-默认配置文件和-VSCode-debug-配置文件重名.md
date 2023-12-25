---
title: Edge 默认配置文件和 VSCode JavaScript Debugger 的 Edge 配置文件重名
tags:
  - VSCode
  - Edge
  - JavaScript Debugger
  - Windows
abbrlink: '313e717'
date: 2023-12-25 09:30:20
---

## 问题

从任务栏新建的 Edge 窗口使用的是其他配置文件。
![从任务栏中新建 Edge 窗口](edge_create_new_window.png)
![新窗口使用不同配置文件](edge_new_window.png)

## 原因

任务栏上的 Edge 启动参数 `--profile-directory=Default` 中的配置文件和 VSCode JavaScript Debugger 调试用的 Edge 配置文件 `%APPDATA%\Code\User\workspaceStorage\...\ms-vscode.js-debug\.profile\Default` 重名。

## 解决方式

1. 将 `%LOCALAPPDATA%\Microsoft\Edge\User Data\Default` 中的 Default 配置文件改名，例如 `Profile 1`
2. 将任务栏中快捷方式的启动参数改为新配置文件的名称，例如 `--profile-directory="Profile 1"`
    ![查看任务栏快捷方式的属性](edge_shortcut_properties.png)
    ![修改启动参数](edge_shortcut_change_properties.png)
