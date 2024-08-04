# Architecture

The UI architecture mostly follows [atomic design](https://bradfrost.com/blog/post/atomic-web-design/):

- atoms: Non-divisible component
- molecules: Combination of atoms
- organisms: Self-contained, functional part
- layouts: Template for a page or larger part of a page
- pages: Invidual page or non-HTML file, passes data/content to layouts

Logic is divided to:

- utils: Stateless, mostly server-side
- hooks: Stateful, client-side, for React components

```mermaid
graph TB
pages --> layouts
pages --> utils

layouts --> components
layouts --> utils

components --> utils
components --> hooks

subgraph UI
pages
layouts
components
end

subgraph components
    molecules --> atoms
    organisms --> molecules
    organisms --> atoms
end

subgraph logic
    utils
    hooks
end
```

## Layouts

```mermaid
graph TB
NavigationBarLayout --> BaseLayout

HomeLayout --> NavigationBarLayout
HomeLayout --> ContentLayout

PortfolioLayout --> NavigationBarLayout
PortfolioLayout --> ContentLayout

AboutLayout --> NavigationBarLayout
AboutLayout --> ContentLayout

BlogLayout --> BaseLayout
BlogLayout --> ContentLayout
```
