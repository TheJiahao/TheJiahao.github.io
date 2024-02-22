---
date: 2024-02-22T19:43:26+02:00

slug: 54972536

title: Visual Studio Code extensions.experimental.affinity 兼容性问题
categories:
tags:
    - VS Code
    - Markdown
    - Git
description:
image: vscode_logo.svg
license:

hidden: false
math:
comments: true
draft: false
---

本文汇总了 Visual Studio Code 实验性设置 `extensions.experimental.affinity` 的兼容性问题。
<!--more-->

## `vscode.markdown-language-features`

- Markdown Footnotes 无法显示脚注
- Markdown 预览中颜色主题失效

## `vscode.git` 和 `vscode.git-base`

- GitLens Add Co-authors 和 Issue/PR 补全失效
- Convetional Commits 找不到 Git：`Extension vscode.git not found!`

## `bierner.markdown-mermaid`

- Mermaid 图表有时不显示
