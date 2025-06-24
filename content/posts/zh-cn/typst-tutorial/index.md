---
title: Typst 写作入门——基础语法和进阶技巧
date: 2025-06-22
description: "\
    Typst 是一款现代化的排版软件，其语法比于理工科常用的 LaTeX 排版软件简单，而且其利用增量式编译实现了比 LaTeX 快的多的编译速度。\
    本文从 Typst 的环境配置开始，逐步介绍了文本格式化、列表、公式、图片和表格插入等基础语法，并深入了讲解引用系统、文献管理和文件组织等进阶技巧。
    "
draft: false
image: img/typst_logo.svg
links:
    - title: The Raindrop-Blue Book (Typst中文教程)
      description: 本书面向所有Typst用户，按三种方式讲解Typst语言。《教程》等章节循序渐进，讲述了Typst的排版方式和原理；《参考》等章节拓展广度；《专题》等则专注解决具体问题。本书希望缓解Typst相关资料严重缺失的问题，与官方文档相互补充，帮助大家入门和学习Typst。
      url: https://typst-doc-cn.github.io/tutorial/

    - title: "Typst: Compose papers faster"
      description: Focus on your text and let Typst take care of layout and formatting.
      image: https://typst.app/assets/apple-touch-icon.png
      url: https://typst.app/
---

LaTeX 是理工科常用的排版软件，但其语法复杂且编译非常慢。
为解决这些问题，Haug 和 Mädje 创造了 Typst 排版软件 [^typst_about]。
Typst 语法比 LaTeX 简单，而且其利用增量式编译实现了极快的编译速度。
本文将从 Typst 的环境配置开始，逐步介绍文本格式化、列表、公式、图片和表格插入等基础语法，并深入讲解引用系统、文献管理和文件组织等进阶技巧。

## 编辑器配置

Typst 有官方的 [Web 应用](https://typst.app/)，其支持从模板生成文档、云同步和多人协作等功能。
但本段仅介绍 VS Code 的配置，其中用到的 [Tinymist](https://github.com/Myriad-Dreamin/tinymist) 语言服务器也支持其他编辑器，例如 Neovim、Emacs、Sublime 等。
具体方法可参考 Tinymist 的 [文档](https://myriad-dreamin.github.io/tinymist/frontend/main.html)。

笔者推荐使用 [Tinymist](https://marketplace.visualstudio.com/items?itemName=myriad-dreamin.tinymist) 和 [Typst Companion](https://marketplace.visualstudio.com/items?itemName=CalebFiggers.typst-companion) 插件。
前者提供了 Typst 的语法支持、实时预览和 PDF 导出等功能。
后者改善了 Typst 列表的输入体验，例如在列表中换行时自动添加下一项。

## 基础语法

Typst 的基础语法类似 Markdown。
以下代码中展示了 Typst 的部分语法，更多语法可参考 Typst 的 [文档](https://typst.app/docs/reference/syntax/)。
读者可以用编辑器新建一个 `basic.typ` 文件并测试这些语法。

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

![Typst 基础语法，字体为 Noto Sans。](img/basic.svg)

如果字体显示不正常，则需要在文件开头设置字体，例如以下代码会将字体设置为 Noto Sans。

```typst
#set text(font: "Noto Sans")
```

此外，笔者建议为文本设置语言，例如设置为中文。

```typst
#set text(lang: "zh")
```

设置完语言后，Typst 就会自动翻译图片名称和目录标题等，以及自动将双引号 `"` 和单引号 `'` 显示为正确的引号（左右引号或其他引号，取决于语言）。
> [!TIP/合并 set 命令]
> 以上两个 [`set`](https://typst.app/docs/tutorial/advanced-styling/#set-rules) 命令可以也合并成一个：
>
> ```typst
> #set text(font: "Noto Sans", lang: "zh")
> ```

### 代码块

Typst 中代码块语法和 Markdown 一致。
单个反引号 `` `print("Hello world")` `` 表示行内代码。
三个反引号表示代码块，引号后面需要添加语言名称以正确地高亮代码。
示例中展示了一段简单的 “Hello world” 程序。

````typst
```python
if True:
  print("Hello world")
```
````

![会输出 “Hello world” 的 Python 程序](img/codeblock.svg)

### 列表

Typst 中列表分为有序列表（[`enum`](https://typst.app/docs/reference/model/enum/)）和无序列表（[`list`](https://typst.app/docs/reference/model/enum/)），前者列表项前面有编号，后者只有统一的标记。
有序列表用加号 `+` 标记，无序列表用减号 `-`。
以下示例中展示了两种不同的列表。

```typst
以下为太阳系中离太阳最近的三颗行星：
+ 水星
+ 金星
+ 地球

地球上存在以下几种常见水果：
- 苹果
- 橘子
- 西瓜
```

![有序和无序列表](img/lists.svg)

### 公式

文章中公式通常分为行内公式和行间公式。
前者用于较短的公式和符号等，后者则用于需要强调或者比较复杂的公式。
Typst 中行内公式和行间公式都使用美元符号 `$` 区分，但行间公式的 `$` 符号和公式之间需要空格或换行符。
例如 `$a^2=b^2+c^2$` 表示行内公式 $a^2=b^2+c^2$，`$ a^2=b^2+c^2 $` 则表示行间公式
$$
a^2=b^2+c^2
$$

笔者推荐使用换行符来更明显地区分行间和行内公式，例如

```typst
$
a^2=b^2+c^2
$
```

Typst 公式中加减乘除的语法类似于计算器中常用的语法，比 LaTeX 简单而且不需要在函数名前添加反斜杠 `\`。

```typst
$
(a+b)/c-d e
$
```

$$
(a+b)/c-d e
$$

除法只需要用斜杠 `/` 和括号 `()`，而不是像 LaTeX 一样使用复杂的 `\frac{a}{b}` 语法。
由于 Typst 不用反斜杠区分命令，省略乘法符号时需要用空格区分变量。

此外，Typst 中内置了许多符号和函数，例如常见的 `sum`、`integral`、`lim`、`sin` 等。
以下代码展示了部分符号和函数，`&` 用于对齐各行的等于号、`^` 和 `_`  与 LaTeX 一样表示上下标。

```typst
$
  sum_(n=1)^10 n&=1+2+ dots.c +10\
  integral_0^pi cos x dif x&=sin pi-sin 0\
  lim_(x->infinity) x^2&=infinity\
  NN&={z in ZZ | z>=0 }
$
```

$$
  sum_(n=1)^10 n&=1+2+ dots.c +10\
  integral_0^pi cos x dif x&=sin pi-sin 0\
  lim_(x->infinity) x^2&=infinity\
  NN&={z in ZZ | z>=0 }
$$

> [!TIP/拆分公式]
> 默认情况下，Typst 不会将太长的公式拆分到不同页，所以太长的公式可能会被推到下一页并在上一页留下大片空白。
> 在文件开头添加以下代码即可允许 Typst 拆分公式：
>
> ```typst
> #show math.equation: set block(breakable: true)
> ```

Typst 的 [文档](https://typst.app/docs/reference/math/) 中更详细地介绍了公式的语法。
此外，[官网](https://typst.app/docs/reference/symbols/sym/) 上还可以搜索各种符号对应的名称。

## 引用

Typst 也可以像 LaTeX 一样交叉引用图片、公式、文献等。
本章介绍了 Typst 的引用语法，以及如何调整引用风格。

### 图片和表格

Typst 中图片、表格和代码块等都可以传入 [`figure`](https://typst.app/docs/reference/model/figure/) 函数以添加题注和编号。
具体内容需要使用对应函数、例如用 [`image`](https://typst.app/docs/reference/visualize/image/) 导入本地图片或者用 [`table`](https://typst.app/docs/reference/model/table/) 输出表格。
以下代码展示了一张图片和一个表格。

```typst
@figure_test 中展示了 "TEST"。
@table_f 中列出了函数 $f$ 的值。

#figure(
  image("../img/test.svg", width: 60%),
  caption: [图片展示了 "TEST" 怎么写。],
)<figure_test>

#figure(
  table(
    columns: 2,
    [$x$], [$f(x)$],
    [$1$], [$3$],
    [$2$], [$7$],
  ),
  caption: [函数 $f$ 的值。],
)<table_f>
```

![一张图片和一个表格](img/figure.svg)

`figure` 的参数 `caption` 的内容将显示为题注。
`figure` 后面用 `<>` 包围的是用于引用的标签（[`label`](https://typst.app/docs/reference/foundations/label/)）。
例如，在 `figure` 后面添加 `<figure_test>` 就可以在文中使用 `@figure_test` 来引用图片。
如果读者需要自定义引用前缀，则可以在引用后面用方括号 `[]` 添加前缀，例如 `@figure_text[图片]` 会显示为 “图片 1”。
同样的语法也可以引用公式和文献。

> [!TIP/图片位置]
> 默认情况下，图片（`figure`）显示位置和 Typst 文件位置中一致，但这样可能会出现大片空白。
> 如果想要让 Typst 自动决定图片显示位置，可以将参数 `placement` 设置为 `auto`，例如 `figure(..., placement: auto)`。
> 读者也可以用 `set` 命令将所有图片位置都设置为 `auto`：
>
> ```typst
> #set figure(placement: auto)
> ```

### 公式

本段将通过示例讲解 Typst 的公式引用。

```typst
#set text(font: "Noto Sans", lang: "zh")

#math.equation(
  $norm((x_1,x_2))=sqrt(x_1^2+x_2^2)$,
  block: true,
  numbering: "(1)",
)<norm>

@norm 定义了二维向量的范数。
注意到
$
  norm((0,0))=0。
$

也可以用 `set` 命令为所有公式添加编号。
@commutativity 定义了交换律。

#set math.equation(numbering: "(1)")
$
  a+b=b+a
$<commutativity>
```

![引用公式和文献](img/cite_equation.svg)

Typst 的公式的 `$$` 语法是 `math.equation(...)` 的 [语法糖](https://zh.wikipedia.org/zh-hans/%E8%AF%AD%E6%B3%95%E7%B3%96)，所以也可以直接调用 [`math.equation`](https://typst.app/docs/reference/math/equation/) 以显示公式。
这种方式可以往函数里传入额外参数，例如示例中传入的 `block: true` 代表行间公式，`numbering: "(1)"` 代表公式编号格式为 “(1)”、“(2)” 等。
编号规则的细节可以参考 Typst 的 [文档](https://typst.app/docs/reference/model/numbering/)。

默认情况下，Typst 的公式没有编号，所以可以用 `set` 命令为所有（之后的）公式添加编号。
但是这样不方便添加无编号的公式，所以笔者推荐单独为有编号的公式定义一个函数。

```typst
#let numbered_equation(content) = math.equation(
  block: true,
  numbering: "(1)",
  content,
)

// 用法
#numbered_equation($a+b=b+a$)<commutativity>
```

> [!TIP/提示]
> 除了函数以外，[`let`](https://typst.app/docs/reference/scripting/#bindings) 语法也可以定义变量。

如果读者想在引用公式时在编号前后添加括号，例如 “式 (1)”，可以在文件开头添加以下代码：

```typst
#show ref: x => {
  let element = x.element

  if element != none and element.func() == math.equation {
    link(element.location())[#element.supplement~#numbering(
        element.numbering,
        ..counter(math.equation).at(element.location()),
      )]
  } else {
    x
  }
}
```

代码修改自官网上的示例，但其除了在编号前后添加括号外，还额外保留了公式引用的前缀，例如 “式”。
[`show`](https://typst.app/docs/tutorial/advanced-styling/) 语法类似于 `set` 语法，但不同之处在于其可以用函数修改选中的元素。
这段代码中修改了 [`ref`](https://typst.app/docs/reference/model/ref/)，即 `@` 语法实际调用的函数。

### 文献

Typst 的文献引用和图片一样使用 `@` 语法。
以下示例展示了文献引用的用法。

```typst wrap
#set text(font: "Noto Sans", lang: "zh")

Typst 的其中一位创始人 #cite(<madje_typst>, form: "author") 于 #cite(<madje_typst>, form: "year") 年在其硕士论文中介绍了 Typst 的语法 @madje_typst。
另一位创始人 #cite(<haug_fast_typesetting>, form: "author") 则在其硕士论文中介绍了 Typst 增量式编译的原理 @haug_fast_typesetting。

#bibliography("bibliography.bib", style: "ieee")
```

![文献引用的不同用法](img/cite_bibliography.svg)

示例中的 [`bibliography`](https://typst.app/docs/reference/model/bibliography/) 函数可以导入 [BibTeX](https://www.bibtex.org/) 或 [Hayagriva](https://github.com/typst/hayagriva/blob/main/docs/file-format.md) 格式的文件并生成参考文献列表。
以下是示例中用到的 BibTeX 文件。

```bibtex title="bibliography.bib"
@phdthesis{haug_fast_typesetting,
    author = {Martin E. Haug},
    doi    = {10.13140/RG.2.2.15606.88642},
    school = {Technical University of Berlin},
    title  = {Fast Typesetting with Incremental Compilation},
    year   = {2022}
}

@phdthesis{madje_typst,
    author = {Laurenz Mädje},
    school = {Technical University of Berlin},
    title  = {Typst -- A Programmable Markup Language for Typesetting},
    year   = {2022}
}
```

文献引用的 `@` 语法实际调用的 [`cite`](https://typst.app/docs/reference/model/cite/) 函数也可以像 LaTeX 的 `\citeauthor` 和 `\citeyear` 一样输出文献作者和年份。
`form` 参数决定了 `cite` 的输出，`"author"` 对应作者、`"year"` 对应年份，默认情况下输出和直接用 `@` 语法一致。
引用风格则可以通过 `bibliography` 的 `style` 参数调整，例如 `"ieee"`、`"apa"` 等，其他常用格式可以参考 Typst 的 [文档](https://typst.app/docs/reference/model/bibliography/#parameters-style)。

## 导入文件和包

由于文档太长时修改会变得非常困难，笔者认为排版软件应该提供导入文件的功能。
例如 LaTeX 中可以用 `\input` 或 `\include` 导入文件内容，而 Typst 中则可以用 [`include`](https://typst.app/docs/reference/scripting/#modules) 语法导入其他文件中的内容。
以下代码中展示了 Typst 的文件导入语法。

```typst
= Typst 的用法
== 引言
...

#include "路径/方法.typ"
#include "路径/总结.typ"

其他内容
```

`include` 的内容会按导入顺序出现在结果里，例如示例中导入的 `方法.typ` 中的内容会出现在 “引言” 和 “其他内容” 之间。

Typst 的导入与 LaTeX 最大的不同在于 `\input` 或 `\include` 中定义的宏都是全局的，而 Typst 的导入文件时不会导入其中定义的函数和变量。
但 Typst 并非不能导入函数和变量，Typst 导入这些需要用 `import` 语法。
例如以下代码在 `main.typ` 文件中导入并使用了 `utils.typ` 文件中定义的 `numbered_equation` 函数。

```typst title="utils.typ"
#let numbered_equation(content) = math.equation(
  block: true,
  numbering: "(1)",
  content,
)
```

```typst title="main.typ"
#import "./utils.typ": numbered_equation

#numbered_equation($1+1=2$)<sum_of_ones>
```

为了避免重新造轮子，Typst 有大量的 [第三方包](https://typst.app/universe) 可导入。
例如以下几个 Typst 包对应了常用的 LaTeX 包：

- [cetz](https://typst.app/universe/package/cetz/)：类似 TikZ，可用于画图、制作图表等
- [unify](https://typst.app/universe/package/unify/)：类似 siunitx 包，用于为数值添加 SI 单位
- [touying](https://typst.app/universe/package/touying/)：类似 Beamer，用于制作幻灯片

导入第三方包的语法和导入文件类似。
以 cetz 为例，以下代码导入了 cetz 0.4.0 版本中的 `canvas` 函数。

```typst
#import "@preview/cetz:0.4.0": canvas
```

> [!NOTE/备注]
> 由于 Typst 的包管理系统还不成熟，导入时需要添加 `@preview` 前缀 [^typst_preview_prefix]。
> 前缀以后可能会改变。

## 模板

> [!NOTE/备注]
> 本章假设读者有一定的编程基础。
> 不过就算不会编程也可以直接复制粘贴和测试。

读者在用 Typst 写了几篇文章后，可能会发现文件开头的各种配置都是一样的。
这时就可以利用导入功能将重复代码拆分到不同文件中，并制作可复用的 [模板](https://typst.app/docs/tutorial/making-a-template/)。
笔者推荐将模板拆分为三部分：

- `utils.typ`：常量和函数，例如光速 $c$、带编号公式 `numbered_equation`、缩写等
- `template.typ`：各种 `set` 和 `show` 配置
- `document.typ`：文档本身

`template.typ` 文件中可以定义 `config` 函数并将所有 `set` 和 `show` 配置都放到其中。

### 示例

接下来笔者将通过示例演示模板的制作。
假设我们的需求是让文章开头居中显示标题和作者，并为部分公式编号。

首先从最简单的 `utils.typ` 开始。
以下代码块定义了光速 `c` 和 函数 `numbered_equation`，前者使用了 unify 包中的 `qty` 函数。

```typst title="utils.typ"
#import "@preview/unify:0.7.1": qty

#let c = qty("299792458","m/s")

#let numbered_equation(content) = math.equation(
  block: true,
  numbering: "(1)",
  content,
)
```

然后是最复杂的 `template.typ` 文件，其中定义了 `config` 函数并用到了许多 Typst 的进阶语法。

```typst title="template.typ"
#let config(title: none, author: none, lang: "zh", body) = {
  set text(font: "Noto Sans", lang: lang, size: 1em)

  align(center)[
    #text(size: 2em)[*#title*]

    #author
  ]

  body
}
```

首先可以注意到，`config` 函数中有很多参数，而且部分参数后面跟着 `none` 或字符串 `"zh"`，这些是参数的默认值。
最后一个参数 `body` 代表文档内容。

`config` 函数的返回值为 [`align`](https://typst.app/docs/reference/layout/align/) 函数和 `body` 连起来产生的内容。
`align` 函数的返回值是传入值居中后产生的内容。
此外，`align` 函数利用了 Typst 的语法糖，其后面的方括号里的内容将作为参数 `body` 传入 `align`。

> [!NOTE/Typst 的三种模式]
> 好奇的读者可能已经注意到了某些情况下 `set` 语句前面有井号 `#`，某些情况下没有，以及 “字符串” 有时候用引号 `"`，有时候用方括号 `[]` 包围。
> `#`、`[]` 和 `$$` 分别对应了 Typst 的标记、脚本和公式模式 [^typst_syntax]。
> 其中标记模式是默认模式。
>
> 用了井号 `#` 后就进入了脚本模式，在其中可以调用函数、使用 `set` 关键词等。
> 例如在语句 `#set text(lang: "zh")` 中井号之后就进入了脚本模式。
> 通常，使用 `set`、`show` 和 `let` 等关键词时脚本模式仅限同一行。
> 但是如果井号后只有函数调用或者变量，例如 `#helloworld()` 和 `#c`，则脚本模式会直接结束。
> 此外，如果井号后有括号（普通括号 `()` 或花括号 `{}`），则整个括号包围的范围都处于脚本模式。
> 例如以下整段函数定义都处于脚本模式中。
>
> ```typst
> #let calculate(a,b) = {
>   a = a + 1
>   a + b
> }
> ```
>

>
> 在脚本模式中用方括号 `[]` 即可进入标记模式，但标记模式只在方括号范围内生效。
> 标记模式中就可以正常使用 Typst 的基础语法，例如强调、列表、公式等。
> 标记模式里的内容（[`content`](https://typst.app/docs/reference/foundations/content/)）和字符串（[`str`](https://typst.app/docs/reference/foundations/str/)）不同，后者需要用双引号 `"` 包围且不支持 Typst 语法。
>
> 公式模式就是用美元符号 `$` 包围的内容，用法可参考前面的段落。

最后是文档本身，代码如下：

```typst title="document.typ"
#import "./template.typ": config
#import "./utils.typ": numbered_equation, c

#show: config.with(lang: "zh", title: [论光速], author: [沃兹基])

= 引言

#lorem(100)

= 光速的定义

光速 $c$ 被定义为
#numbered_equation($c=#c$)<sum>

#lorem(200)

= 总结

#lorem(40)
```

![基于模板的文档](img/template.svg)

文件中用 [`lorem`](https://typst.app/docs/reference/text/lorem/) 函数生成了占位用的文本。
此外，文件中还用到了 `show` 语法的语法糖和 [`with`](https://typst.app/docs/reference/foundations/function/#definitions-with) 函数。
`config.with` 函数会把参数传入 `config` 函数并返回一个只有参数 `body` 的函数。
之后 `show` 的语法糖就能自动将文档剩余内容作为 `body` 传入前面的单个参数的函数。

> [!TIP/show 的用法]
> `show` 语法类似 CSS 的选择器，但其支持函数。
> 例如以下代码会将所有标题（[`heading`](https://typst.app/docs/reference/model/heading/)）的内容替换成字符 “A”。
>
> ```typst
> #show heading: h => { "A" }
> ```
>
> 所以可以注意到，Typst 会将 `show` 选中的元素传入冒号 `:` 后面的函数并将其替换为函数返回值。
>
> 如果函数只有一行且返回了传入的参数，则可以省略函数语法。
> 例如以下两种写法是等效的。
>
> ```typst
> #show math.equation: set block(breakable: true)
> ```
>
> ```typst
> #show math.equation: eq => {
>   set block(breakable: true)
>   eq
> }
> ```
>
> 代码中选中了公式，并将其中 [`block`](https://typst.app/docs/reference/layout/block/) 元素的 `breakable` 参数设置为 `true`。
>
> 如果函数只有单个参数且没有选中任何元素，则 `show` 语法会将文档剩余内容当作参数传入函数。
> 例如以下两种写法是等效的。
>
> ```typst
> #show: red_text
> 所有内容
> ```
>
> ```typst
> #red_text[所有内容]
> ```
>
> `red_text` 函数定义如下：
>
> ```typst
> #let red_text(body) = {
>   set text(red)
>
>   body
> }
>
> ```
>
> 此外，多个同一元素的 `show` 语句可能会冲突，从而导致某些语句不生效。
> 所以读者应将多个 `show` 语句的函数合并成一个。

除了自己制作模板外，读者也可以在 Typst 的 [官网](https://typst.app/universe/search/?kind=templates) 上搜索并使用其他人做的模板。
其中能找到简历模板和部分大学的论文模板等。

### 代码片段

本段收集了用于调整 Typst 排版细节或者添加功能的代码片段。
读者可以将这些代码片段自行添加到模板中

#### 将公式拆分到不同页

```typst
#show math.equation: set block(breakable: true)
```

#### 为引用的公式编号添加括号

```typst
#show ref: x => {
  let element = x.element

  if element != none and element.func() == math.equation {
    link(element.location())[#element.supplement~#numbering(
        element.numbering,
        ..counter(math.equation).at(element.location()),
      )]
  } else {
    x
  }
}
```

#### 断字

```typst
#set par(justify: true)
```

这段主要适用于西文排版，设置后 Typst 会像 LaTeX 一样将过长的单词添加 [连字号](https://zh.wikipedia.org/zh-cn/%E8%BF%9E%E5%AD%97%E5%8F%B7) `-` 后拆分到下一行。
需要同时用 `set text(lang: ...)` 设置文本语言。

#### 数学函数定义中的冒号

```typst
#show sym.colon: $class("fence", colon)$
```

设置后函数 `f: A->B` 中的冒号就会保留前后空格，例如 $f": " A-> B$ 而不是 $f:A->B$。

#### 圆的空集符号

```typst
#show sym.nothing: set text(font: "Fira Sans")
```

设置后空集符号 `emptyset` 会显示为圆形加斜线 ∅ 而不是 LaTeX 的默认字体 [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern) 中的零加斜线 $emptyset$。
GitHub 上也有人提出了其他解决方法 [^github_varnothing]。

#### 禁用合字

```typst
#set text(ligatures: false)
```

默认情况下，西文排版中会使用 [合字](https://zh.wikipedia.org/zh-hans/%E5%90%88%E5%AD%97)，即部分字母会连起来，例如 “ff” 会变成 “ﬀ”。
禁用后就不会出现合字。

#### 附录

```typst
#let appendix(title, body) = {
  set heading(numbering: "A.1", supplement: title)
  counter(heading).update(0)

  heading(title)

  body
}
```

这段代码会将其中的标题格式改为 “A.1”、“A.2”、“B.1” 等。
用法为

```typst
#appendix("附录")[
  == 某个章节的补充内容
  ...
  == 某个公式的证明
]
```

## 总结

本文系统地介绍了 Typst 排版工具的核心功能，例如代码块、公式、图片、引用等。
此外，本文还介绍了 Typst 的导入功能，并用示例展示了如何将常用代码做成可复用的模板。

虽然 Typst 相对 LaTeX 有语法简单和速度快的优势，但是 LaTeX 目前还是理工科主流的排版软件。
Typst 很难在短期内取代 LaTeX，现在几乎没有出版社接受 Typst 格式的投稿，也没有几所大学提供 Typst 格式的论文模板。

[^typst_syntax]: Syntax, https://typst.app/docs/reference/syntax
[^typst_preview_prefix]: Typst Packages, https://github.com/typst/packages/?tab=readme-ov-file#published-packages
[^github_varnothing]: varnothing used by LaTeX, https://github.com/johanvx/typst-undergradmath/issues/10
[^typst_about]: A hobby project turned into a business, typst.app, https://typst.app/about/, 见于 2025-06-22
