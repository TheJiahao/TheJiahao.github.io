---
date: 2024-05-06T14:03:48+03:00

title: Starship 配置⸺在终端上显示 Git 状态、Python 虚拟环境、命令运行时间等
categories:
    - 工具
tags:
    - 终端
    - Shell
    - Zsh
    - Nushell
description: >-
    Starship 是跨 shell 的主题管理器，其支持 Zsh、Nushell、PowerShell 等。
    本文介绍了如何配置 Starship，并分享了笔者使用的主题。
image: img/starship_logo.svg

hidden: false
math:
comments: true
draft: true
sitemap:
    disable: false

links:
    - title: Starship
      description: 轻量、迅速、客制化的高颜值终端！
      url: https://starship.rs/zh-CN/
      image: https://raw.githubusercontent.com/starship/starship/2eb5e7e73451a8113b32fdbeca8e0c684b776e05/media/icon.svg
---

## 安装 Starship

Starship [官网](https://starship.rs/zh-CN/guide/) 上列出了不同安装方式。
本文仅介绍其中两种。

### Windows

用 Scoop 安装：

```sh
scoop install starship
```

### Linux/macOS

用 Cargo 编译并安装：

```sh
cargo install starship --locked
```

此外还需要将 Cargo 编译的二进制文件添加到 `PATH`，在 `~/.bashrc`（Bash）或 `~/.zshenv`（Zsh）中添加：

```sh
export PATH = "$HOME/.cargo/bin:$PATH"
```

## 配置

### 安装 Nerd Font

Starship 的许多主题都需要 [Nerd Font](https://www.nerdfonts.com/) 中的符号。
所以需要安装带有 Nerd Font 补丁的[字体](https://www.nerdfonts.com/font-downloads)。

{{% callout warning 注意 %}}
安装字体后还需要在终端中使用字体。
如果使用 [Windows 终端](https://github.com/microsoft/terminal)，字体可于 `设置 > 配置文件 > 外观 > 字体` 中设置。
{{% /callout %}}

#### Windows

Scoop 的 [`nerd-fonts`](https://github.com/matthewjberger/scoop-nerd-fonts/tree/master/bucket) 源中包含了许多字体的 Nerd Font 版本。
所以首先添加该源：

```sh
scoop bucket add nerd-fonts
```

之后选择一款心仪的字体，例如 JetBrains Mono，并安装：

```sh
scoop install jetbrainsmono-nf-mono
```

{{% callout info 字体后缀 %}}

- `nf`：Nerd Fonts 字体
- `mono`：等宽字体

具体含义可参考 Nerd Fonts 的 [README](https://github.com/ryanoasis/nerd-fonts?tab=readme-ov-file#features)。

{{% /callout %}}

#### Ubuntu (Linux)

从 Nerd Fonts [官网](https://www.nerdfonts.com/font-downloads) 上下载心仪的字体，然后将其中字体文件解压到 `~/.local/share/fonts` 即可 [^ubuntu-font-install]。
带 `Mono` 后缀的为等宽字体。

### Shell 配置

安装 Starship 后还需要配置 shell，[官网](https://starship.rs/zh-CN/guide/) 上介绍了不同 shell 的设置，本文仅介绍 Nushell 和 Zsh 的配置。

#### Nushell

Nushell 的情况下需要在 `$nu.env-path` 环境文件中添加以下内容来生成 Starship 初始化脚本：

```nu
mkdir ~/.cache/starship
starship init nu | save -f ~/.cache/starship/init.nu
```

之后还需要在 `$nu.config-path` 配置文件中加载脚本：

```nu
use ~/.cache/starship/init.nu
```

`~/.cache/starship/init.nu` 可以更改为任意路径。

#### Zsh

在 `~/.zshrc` 中添加：

```sh
eval "$(starship init zsh)"
```

### Starship 配置

默认情况下，Starship 的配置文件位于 `~/.config/starship.toml`。
Starship 提供了许多预设主题。

[Nerd Font](https://www.nerdfonts.com/cheat-sheet) 的网站里可以按关键词搜索符号。

## 跨设备同步

[^ubuntu-font-install]: How do I install fonts? https://askubuntu.com/a/3706
