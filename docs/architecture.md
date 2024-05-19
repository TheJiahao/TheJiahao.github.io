# Architecture

## UI

```mermaid
classDiagram
direction LR
BaseLayout --> BaseHeader
BaseLayout <|-- HomeLayout
BaseLayout <|-- BlogLayout

BaseHeader --> getSchema

HomeLayout --> NavigationBar
HomeLayout --> ToolBar
HomeLayout --> BlogList

BlogLayout --> formatDate
BlogLayout --> LinkList
BlogLayout --> CommentCard
BlogLayout --> RelevantBlogList

LinkList --> LinkCard

BlogList --> BlogCard
BlogCard --> formatDate

NavigationBar --> NavigationLink
NavigationBar --> SocialLinkList
SocialLinkList --> SocialLink

ToolBar --> SearchButton
ToolBar --> ThemeButton
ToolBar --> LanguageButton

namespace layouts {
    class HomeLayout
    class BlogLayout
    class BaseLayout
}

namespace components {
    class ToolBar
    class NavigationBar
    class NavigationLink
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
    class LanguageButton
    class BaseHeader {
        +string type
    }
}

namespace utils {
    class formatDate {
    +formatDate(date) string
    }
    class getSchema {
    +getSchema(type) object
    }
}
```
