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
