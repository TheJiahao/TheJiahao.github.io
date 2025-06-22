#let config(title: none, author: none, lang: "zh", body) = {
  set text(font: "Noto Sans", lang: lang, size: 1em)

  align(center)[
    #text(size: 2em)[*#title*]

    #author
  ]

  body
}
