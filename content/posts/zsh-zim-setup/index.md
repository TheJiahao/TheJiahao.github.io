---
date: 2024-01-05T21:09:00+02:00

slug: zsh-zim-setup
aliases:
    - 1345558699

title: 使用 Zim 配置称手且快速的 Zsh
categories: 工具
tags:
    - Zim
    - Zsh
    - Linux
    - MacOS
    - Unix
    - Shell
    - 终端
description: >-
    Zim 是 Zsh 的插件管理器，其主要特点为极快的速度。
    本文介绍了如何配置 Zim 以及推荐了几款笔者使用的 Zsh 插件。
image: img/zimfw_logo.svg
license: >-
    内容遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)。
    封面中的 [Logo](https://zimfw.sh) 由 Derek Mohr 创作，并以 [CC BY NC SA 4.0 协议](https://creativecommons.org/licenses/by-nc-sa/4.0/) 发布，修改了背景颜色和图标位置。

links:
    - title: Zim
      description: Modular, customizable, and blazing fast Zsh framework
      website: https://zimfw.sh/
      image: https://zimfw.sh/images/favicons/apple-touch-icon.png

hidden: false
math:
comments: true
draft: false
---

## 安装 Zim

笔者偏好将配置整理到不同文件并在 `.zshrc` 中 `source`，而 Zim 的自动安装脚本会在 `.zshrc` 添加一大段内容，所以选择手动安装。

创建 `init_zim.zsh` 用于存放 Zim 配置，并添加以下内容[^zim_installation]：

```shell
zstyle ':zim:zmodule' use 'degit'

ZIM_HOME=~/.zim

# 安装 Zim
if [[ ! -e ${ZIM_HOME}/zimfw.zsh ]]; then
  curl -fsSL --create-dirs -o ${ZIM_HOME}/zimfw.zsh \
      https://github.com/zimfw/zimfw/releases/latest/download/zimfw.zsh
fi

# 自动安装缺失插件 + 更新 Zim 初始化脚本
if [[ ! ${ZIM_HOME}/init.zsh -nt ${ZDOTDIR:-${HOME}}/.zimrc ]]; then
  source ${ZIM_HOME}/zimfw.zsh init -q
fi

# 加载插件
source ${ZIM_HOME}/init.zsh
```

文件的第一行配置了 {{< link "degit" "https://github.com/Rich-Harris/degit >}} 来安装插件。
degit 只下载 Git 仓库的最新版本，所以比直接使用 `git clone` 下载整个仓库历史快。

接着在 `.zshrc` 中添加导入配置文件，笔者将所有 Zsh 相关配置文件都放在 `~/.config/zsh` 目录下：

```shell
source ~/.config/zsh/init_zim.zsh

# ...
```

## 安装插件

Zim 的插件需要在 `~/.zimrc` 中配置。
添加插件的基本命令为 `zmodule 插件`（内置插件）或者 `zmodule 作者/仓库`，如果插件在子目录下则为`zmodule 作者/仓库 --root 插件相对路径`。
具体用法可以参考 [文档](https://github.com/zimfw/zimfw?tab=readme-ov-file#zmodule)。
Zim 内置插件可以参考官网上的 [列表](https://zimfw.sh/docs/modules/)，第三方插件可以参考 [awesome-zsh-plugins](https://github.com/unixorn/awesome-zsh-plugins)。

## 推荐插件

### 必要

- {{< link "input" "https://github.com/zimfw/input" >}}，配置按键，例如 <kbd>home</kbd> 键移动到当前行的开头
- {{< link "F-Sy-H" "https://github.com/z-shell/F-Sy-H" >}}，语法高亮
  - 也可以选择 {{< link "fast-syntax-highlighting" "https://github.com/zdharma-continuum/fast-syntax-highlighting" >}} 或 {{< link "zsh-syntax-highlighting" "https://github.com/zsh-users/zsh-syntax-highlighting" >}}，区别不大
- {{< link "zsh-autosuggestions" "https://github.com/zsh-users/zsh-autosuggestions" >}}，在终端显示命令建议
- {{< link "zsh-completions" "https://github.com/zsh-users/zsh-completions" >}}，许多外部命令的自动补全
- {{< link "zsh-history-substring-search" "https://github.com/zsh-users/zsh-history-substring-search" >}}，使用方向键搜索命令历史记录

### 可选

- {{< link "history" "https://github.com/sorin-ionescu/prezto/tree/master/modules/history" >}}，命令历史相关设置，比直接使用 `setopt` 方便和快速
- {{< link "command-not-found" "https://github.com/sorin-ionescu/prezto/tree/master/modules/command-not-found" >}}，输入不存在的命令时提示安装命令
- {{< link "sudo" "https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/sudo" >}}，双击 <kbd>esc</kbd> 时在命令前添加 `sudo`
- {{< link "completion" "https://github.com/zimfw/completion" >}}，自动补全相关设置
- {{< link "utility" "https://github.com/zimfw/utility" >}}，命令缩写以及为 `ls`、`grep` 和 `less` 命令输出上色
- {{< link "termtitle" "https://github.com/zimfw/termtitle" >}}，设置终端标题，例如设置为当前路径

`.zimrc` 内容如下：

```shell
zmodule z-shell/F-Sy-H
zmodule zsh-users/zsh-history-substring-search
zmodule zsh-users/zsh-autosuggestions
zmodule sorin-ionescu/prezto --root modules/history --no-submodules

zmodule termtitle
zmodule utility
zmodule input
zmodule sorin-ionescu/prezto --root modules/command-not-found --no-submodules
zmodule ohmyzsh/ohmyzsh --root plugins/sudo

zmodule zsh-users/zsh-completions --fpath src
zmodule completion
```

安装太多插件可能会拖慢 Zsh 速度，所以建议读者只安装必要的插件。

## 插件设置

在 `init_zim.zsh` 最后添加插件设置：

```shell
# ...
source ${ZIM_HOME}/init.zsh

# 加载后才能设置这些插件

# 命令建议的匹配顺序：上一命令、命令补全
ZSH_AUTOSUGGEST_STRATEGY=(match_prev_cmd completion)

# 模糊搜索命令历史
HISTORY_SUBSTRING_SEARCH_FUZZY=true

# 配置上下方向键搜索命令历史
bindkey "$terminfo[kcuu1]" history-substring-search-up
bindkey "$terminfo[kcud1]" history-substring-search-down
```

## 测速

配置好后使用 [hyperfine](https://github.com/sharkdp/hyperfine) 测试 Zsh 启动速度。
测试环境为 WSL Ubuntu 22.04 LTS。

### 启用 Zim

```console
> hyperfine --warmup 3 "zsh -l -i -c exit"
Benchmark 1: zsh -l -i -c exit
  Time (mean ± σ):      30.3 ms ±   1.0 ms    [User: 14.5 ms, System: 5.9 ms]
  Range (min … max):    28.1 ms …  32.9 ms    85 runs
```

- `hyperfine` 的参数 `--warmup 3` 用于在测速前运行几遍命令以避免冷启动影响结果。
- Zsh 的参数 `-l` 和 `-i` 用于模拟用户启动 Zsh，具体可参考 [文档](https://zsh.sourceforge.io/Guide/zshguide02.html)。
- `-c` 用于执行 `exit` 命令以结束 Zsh。

### 禁用 Zim（不读取 `.zshrc`）

```console
> hyperfine --warmup 3 "zsh --no-rcs -l -i -c exit"
Benchmark 1: zsh --no-rcs -l -i -c exit
  Time (mean ± σ):       6.8 ms ±   0.9 ms    [User: 1.1 ms, System: 0.1 ms]
  Range (min … max):     5.1 ms …  12.0 ms    244 runs
```

注意到，Zim 还是比较快的，仅增加了约 20 毫秒的启动时间。

## 更新 Zim 和插件

在终端中输入命令 `zimfw help` 就可以看到所有 Zim 提供的命令，其中常用的：

- `zimfw upgrade`：更新 Zim
- `zimfw update`：更新所有插件

## 解决 WSL 下语法高亮的延迟

在 `/etc/wsl.conf` 中添加以下内容以取消加载 Windows 的 `PATH` 环境变量[^github_wsl_syntax_highlight]。

```toml
[interop]
appendWindowsPath = false
```

这同时也会导致 WSL 下无法直接运行 Windows 中的程序。
如果需要在 WSL 中运行 Windows 中的程序，可以将路径以 WSL 下的 [格式](https://learn.microsoft.com/zh-cn/windows/wsl/filesystems) 添加到 Zsh 的 `PATH` 环境变量。

[^zim_installation]: Installation, https://zimfw.sh/docs/install/

[^github_wsl_syntax_highlight]: syntax highlighting is super slow in WSL2, https://github.com/zsh-users/zsh-syntax-highlighting/issues/790#issuecomment-1385406603
