---
title: Typst 写作入门——配置、基本语法和技巧
date: 2025-06-21

draft: true
links:
    - title: The Raindrop-Blue Book (Typst中文教程)
      description: 本书面向所有Typst用户，按三种方式讲解Typst语言。《教程》等章节循序渐进，讲述了Typst的排版方式和原理；《参考》等章节拓展广度；《专题》等则专注解决具体问题。本书希望缓解Typst相关资料严重缺失的问题，与官方文档相互补充，帮助大家入门和学习Typst。
      url: https://typst-doc-cn.github.io/tutorial/
---

本文将介绍 Typst 的基础用法。

## VS Code 配置

本文仅介绍 VS Code 的配置，但其中用到的 [Tinymist](https://github.com/Myriad-Dreamin/tinymist) 语言服务器也支持其他编辑器，例如 Neovim、Emacs、Sublime 等。
具体方法可参考 Tinymist 的 [文档](https://myriad-dreamin.github.io/tinymist/frontend/main.html)。

笔者推荐使用 [Tinymist](https://marketplace.visualstudio.com/items?itemName=myriad-dreamin.tinymist) 和 [Typst Companion](https://marketplace.visualstudio.com/items?itemName=CalebFiggers.typst-companion) 插件。
前者提供了 Typst 的语法支持和预览功能，后者改善了 Typst 列表的输入体验，例如在列表中换行时自动添加下一项。

## 基本语法

Typst 的基本语法类似 Markdown，更多语法可参考 Typst 的 [文档](https://typst.app/docs/reference/syntax/)。
以下代码中展示了 Typst 的部分语法，读者可以用编辑器新建一个 `basic.typ` 文件并测试语法。

```typst title="basic.typ"
= 标题

下划线中的内容表示强调，_emph_，通常显示为斜体。
星号中的内容表示着重，*strong*，通常显示为粗体。

段落需用空行（两个换行符）分隔。

反斜杠 \ 用于换行，源代码中的单个换行符将显示为
空格。

== 二级标题

标题前的等于号数量表示标题层级。
```

![Typst 基本语法，字体为 Noto Sans。](img/basic.svg)

如果字体显示不正常，则需要在文件开头设置字体，例如以下代码会将字体设置为 Noto Sans。

```typst
#set text(font: "Noto Sans")
```

此外，笔者建议为文本设置语言，例如设置为中文。

```typst
#set text(lang: "zh")
```

设置完语言后，Typst 就会自动翻译图片名称和目录标题等，以及自动将双引号 `"` 和单引号 `'` 显示为正确的引号（左右引号或其他引号，取决于语言）。
此外，以上几个 `set` 命令可以也合并成一个

```typst
#set text(font: "Noto Sans", lang: "zh")
```

## 代码块

Typst 中代码块语法和 Markdown 一致。
单个反引号 `` `print("Hello world")` `` 表示行内代码。
三个反引号表示代码块，引号后面需要添加语言名称以正确地高亮代码。

````typst
```python
print("Hello world")
```
````

## 公式

文章中公式通常分为行内公式和行间公式。
前者用于较短的公式和符号等，后者则用于需要强调或者比较复杂的公式。
Typst 中行内公式和行间公式都使用美元符号 `$` 区分，但行间公式的 `$` 符号和公式之间需要空格或换行符。
例如 `$a^2=b^2+c^2$` 表示行间公式 $a^2=b^2+c^2$，`$ a^2=b^2+c^2 $` 则表示行间公式
$$
a^2=b^2+c^2
$$

笔者推荐使用换行符来更明显地区分行间和行内公式，例如

```typst
$
a^2=b^2+c^2
$
```

Typst 公式中加减乘除的语法类似与计算器中常用的语法，比 $\LaTeX$ 简单而且不需要在函数名前添加反斜杠 `\`。

```typst
(a+b)/c-d e
```

![加减乘除](img/algebraic_operations.svg)

除法只需要用斜杠 `/` 和括号 `()`，而不是像 $\LaTeX$ 一样使用复杂的 `\frac{a}{b}` 语法。
由于 Typst 不用反斜杠区分命令，省略乘法符号时需要用空格区分变量。

此外，Typst 中内置了许多符号和函数，例如常见的 `sum`、`integral`、`lim`、`sin` 等。
以下代码展示了部分符号和函数，`&` 用于对齐各行的等于号、`^` 和 `_`  与 $\LaTeX$ 一样表示上下标。

```typst
$
  sum_(n=1)^10 n&=1+2+ dots.c +10\
  integral_0^pi cos x dif x&=sin pi-sin 0\
  lim_(x->infinity) x^2&=infinity\
  NN&={z in ZZ | z>=0 }
$
```

![部分 Typst 内置的符号和函数](img/symbols_and_functions.svg)

Typst 的 [文档](https://typst.app/docs/reference/math/) 中更详细地介绍了公式的语法。
此外，[官网](https://typst.app/docs/reference/symbols/sym/) 上还可以搜索各种符号对应的名称。

## 图片和引用

Typst 中图片、表格和代码块等都可以传入 [`figure`](https://typst.app/docs/reference/model/figure/) 函数以添加题注和编号。
具体内容需要使用对应函数、例如用 `image` 导入本地图片或者用 `table` 输出表格。
以下代码展示了一张图片和一个表格。

## 导入第三方包

## 细节
