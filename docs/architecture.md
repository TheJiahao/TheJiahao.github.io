# Architecture

## UI

```mermaid
classDiagram
direction LR
BaseLayout --> BaseHeader
BaseLayout <|-- HomeLayout
BaseLayout <|-- BlogLayout

HomeLayout --> NavigationBar
HomeLayout --> ToolBar
HomeLayout --> BlogList

BlogLayout --> LinkList
BlogLayout --> CommentCard
BlogLayout --> RelevantBlogList
BlogLayout --> BlogFooter
BlogLayout --> BlogArticle

LinkList --> LinkCard
BlogList --> BlogCard
SocialLinkList --> SocialLink

NavigationBar --> IconComponent
NavigationBar --> SocialLinkList

ToolBar --> SearchButton
ToolBar --> ThemeButton
ToolBar --> LanguageSelector
LanguageSelector --> IconComponent

BackButton --> IconComponent

BlogCard --> BlogDetails
BlogCard --> CoverImage

BlogArticle --> BackButton
BlogArticle --> BlogDetails
BlogArticle --> CoverImage
BlogFooter --> IconComponent

namespace layouts {
    class HomeLayout
    class BlogLayout
    class BaseLayout
}

namespace components {
    class ToolBar
    class NavigationBar
    class IconComponent
    class SocialLink
    class SocialLinkList
    class BlogCard
    class BlogList
    class LinkCard
    class LinkList
    class CommentCard
    class RelevantBlogList
    class SearchButton
    class ThemeButton
    class LanguageSelector
    class BaseHeader {
        +string type
    }
    class BlogFooter
    class BlogDetails
    class CoverImage
    class BackButton
    class BlogArticle
}
```

## Utils

```mermaid
classDiagram

class formatDate {
    +formatDate(date) string
}
class getSchema {
    +getSchema(type) object
}
class translation {
    +languageCodes string[]
    +getTranslation(language) Language
}
class getBlogs {
    +getBlogs() BlogEntry[]
}
```
