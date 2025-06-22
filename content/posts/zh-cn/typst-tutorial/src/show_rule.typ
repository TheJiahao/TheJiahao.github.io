#let red_text(body) = {
  set text(red)

  body
}

#red_text[
  AAA
]

#let calculate(a, b) = {
  a = a + 1
  a + b
}
#calculate(1, 2)
