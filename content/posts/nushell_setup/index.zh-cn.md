---
date: 2024-05-04T09:34:35+03:00

slug: nushell-setup

title: Windows 下使用 Nushell 替代 PowerShell⸺语法高亮、自动补全和性能
categories: 工具
tags:
    - Windows
    - Nushell
    - PowerShell
    - Shell
    - 终端
description: >-
    Nushell 是一款跨平台的 shell，其支持 Linux、macOS、BSD 和 Windows，
    主要特点为结构化数据和较快的速度。
    本文介绍了如何配置 Nushell 的语法高亮和自动补全。
image: img/nushell_logo.svg
license:

hidden: false
math:
comments: true
draft: false

build:
    publishResources: false
---

本文中使用 Scoop 的部分也可以用其他包管理器替代。
配置部分除了 Windows 特有的 `%APPDATA%` 和 `%USERPROFILE%` 环境变量以外也适用于其他平台。

## 功能展示

### 语法高亮 + 自动补全

{{< video src="img/nushell_completion.webm" autoplay="true" >}}

### Nushell 管道

```console
> ls | select name type size | where size > 1KB
╭────┬─────────────────────┬──────┬──────────╮
│  # │        name         │ type │   size   │
├────┼─────────────────────┼──────┼──────────┤
│  0 │ .github             │ dir  │   4.1 KB │
│  1 │ CODE_OF_CONDUCT.md  │ file │   3.4 KB │
│  2 │ CONTRIBUTING.md     │ file │  11.4 KB │
│  3 │ Cargo.lock          │ file │ 168.3 KB │
│  4 │ Cargo.toml          │ file │   9.1 KB │
│  5 │ LICENSE             │ file │   1.1 KB │
│  6 │ README.md           │ file │  12.2 KB │
│  7 │ crates              │ dir  │  12.3 KB │
│  8 │ rust-toolchain.toml │ file │   1.1 KB │
│  9 │ scripts             │ dir  │   4.1 KB │
│ 10 │ src                 │ dir  │   4.1 KB │
│ 11 │ tests               │ dir  │   4.1 KB │
│ 12 │ toolkit.nu          │ file │  17.6 KB │
╰────┴─────────────────────┴──────┴──────────╯
```

## 安装 Nushell

安装 Nushell：

```sh
scoop install nu
```

Nushell 的默认配置文件目录为 `%APPDATA%/nushell`，但可通过设置环境变量 `XDG_CONFIG_HOME` 来改变 [^nushell_config]。
笔者偏好将配置文件集中到 `~/.config` 并通过 Git 管理，所以将 `XDG_CONFIG_HOME` 设置为 `%USERPROFILE%/.config`。
Nushell 的配置文件路径可通过 `$nu.config-path` 确定：

```console
> $nu.config-path
C:\Users\<user>\.config\nushell\config.nu
```

Nushell 的配置保存在 `$env.config` 变量中。
启动时，Nushell 会加载 `config.nu` 配置文件，所以可以在其中修改 `$env.config`。
例如，以下设置可以隐藏 Nushell 启动时的欢迎文本：

```sh
$env.config.show_banner = false
```

为避免覆盖之前的配置，笔者推荐单独给 `$env.config` 中的每一项赋值，而不是重新给 `$env.config` 赋值：

```nu
$env.config = {
    show_banner: false
}
```

Nushell 的默认配置文件可以从 [GitHub 仓库](https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_config.nu) 中找到，其更新的比 [官方文档](https://www.nushell.sh/book/configuration.html) 及时。

### 语法高亮

以下设置可以高亮外部命令，颜色仿照 Zsh 的语法高亮插件 [F-Sy-H](https://github.com/z-shell/F-Sy-H) 的默认配置。
`$PATH` 环境变量中路径很多时，语法高亮可能有明显延迟 [^syntax_highlight_performance]。

```sh
$env.config.highlight_resolved_externals = true
$env.config.color_config = {
        shape_external_resolved: green
        shape_internalcall: green
        shape_external: white
        shape_externalarg: white

        shape_string: white
        shape_directory: purple_underline
        shape_filepath: purple_underline
}
```

### 自动补全

许多命令的自动补全都可以用 [Argc-completions](https://github.com/sigoden/argc-completions) 实现，其支持多种 shell 和 [上千种命令](https://github.com/sigoden/argc-completions/blob/main/MANIFEST.md)。

1. 安装 Git 并重启终端

    ```sh
    scoop install git
    ```

1. 克隆 Git 仓库，笔者偏好将 Git 仓库集中至 `~/repositories` 目录中

    ```sh
    git clone https://github.com/sigoden/argc-completions.git
    ```

1. 进入 argc-completions 目录

   ```sh
   cd argc-completions
   ```

1. 安装依赖

   ```sh
   bash ./scripts/download-tools.sh
   ```

1. 将以下命令生成的配置（用\`\`\`围起来的部分）复制到 `$nu.config-path`

   ```sh
   bash ./scripts/setup-shell.sh nushell
   ```

由于 Argc-completions 的 Git 补全非常慢，笔者推荐使用 [nu_scripts](https://github.com/nushell/nu_scripts) 仓库中的 [Git 补全脚本](https://github.com/nushell/nu_scripts/blob/main/custom-completions/git/git-completions.nu)。

下载 Git 补全脚本并保存到任意路径，例如 `~/.config/nushell/completions/git-completions.nu` 并在 `config.nu` 中 Argc-completions 配置之后添加以下命令以导入 Git 补全：

```nu
# Argc-completions 配置...

use ~/.config/nushell/completions/git-completions.nu *
```

以上配置必须在 Argc-completions 之后，不然无法取代 Argc-completions 的 Git 补全。

如果自动补全很慢，可以在 `$nu.config-path` 中限制补全结果数量，例如限制为 20（默认为 100）。

```sh
$env.config.completions.external.max_results = 20
```

#### Argc 1.17.0 补全失效的临时解决办法

Argc 1.17.0 版本生成的 `argc-completions.nu` 文件有问题，导致补全失效。
该问题已在 [PR#325](https://github.com/sigoden/argc/pull/325) 中修复，但作者还没发布新版本。

手动将 Argc-completions 中的 `argc --argc-completions nushell ...` 注释掉，并将 `argc-completions/tmp/argc-completions.nu` 替换为以下内容即可临时解决问题：

```nu
def _argc_completer [args: list<string>] {
    argc --argc-compgen nushell "" ...$args
        | split row "\n"
        | each { |line| $line | split column "\t" value description }
        | flatten 
}

let external_completer = {|spans| 
    _argc_completer $spans
}
$env.config.completions.external.enable = true
$env.config.completions.external.completer = $external_completer
```

### 其他配置

以下为笔者的其他配置：

```sh
$env.config.show_banner = false # 隐藏欢迎文本
$env.config.shell_integration = true # VS Code 集成
$env.config.filesize.metric = true # 使用公制单位 1 KB = 1000 B、1 MB = 1e6 B 等

$env.config.history.max_size = 10000
$env.config.history.file_format = "sqlite" # 将历史记录保存到数据库，而不是 txt 文件
```

## 测速

配置好后依然使用 [hyperfine](https://github.com/sharkdp/hyperfine) 测速，测试环境为 Windows 11 23H2。

### Nushell

```console
> hyperfine --warmup 3 "nu -l -i -c exit"
Benchmark 1: nu -l -i -c exit
  Time (mean ± σ):      46.2 ms ±   1.5 ms    [User: 13.4 ms, System: 8.9 ms]
  Range (min … max):    43.4 ms …  51.2 ms    42 runs
```

参数与 [Zim 配置文章]({{< relref "/posts/zsh_zim_setup/index.md" >}}) 中一致。

### PowerShell 7.4.2（不读取配置）

```console
> hyperfine --warmup 3 "pwsh -NoProfile -l -i -c exit"
Benchmark 1: pwsh -NoProfile -l -i -c exit
  Time (mean ± σ):     190.0 ms ±   2.3 ms    [User: 2.7 ms, System: 2.5 ms]
  Range (min … max):   187.2 ms … 195.1 ms    14 runs
```

注意到，Nushell 启动速度比 PowerShell 7 快了一个数量级。

[^nushell_config]: Configuration | Nushell, https://www.nushell.sh/book/configuration.html
[^syntax_highlight_performance]: add shape ExternalResolved to show found externals via syntax highlighting in the repl, https://github.com/nushell/nushell/pull/11135
