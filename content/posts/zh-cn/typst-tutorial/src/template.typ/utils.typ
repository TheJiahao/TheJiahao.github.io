#import "@preview/unify:0.7.1": qty

#let c = qty("299792458","m/s")

#let numbered_equation(content) = math.equation(
  block: true,
  numbering: "(1)",
  content,
)