---
date: 2025-01-11

title: 使用 React 为 Astro 博客实现动态文章目录
description: 本文介绍了如何为 Astro 博客实现自动高亮当前段落的目录。

draft: true
---

本文将介绍如何为 Astro 博客实现自动高亮当前段落的目录组件。
实现主要分为三步：

1. 将 Astro 的标题对象嵌套
1. 根据可见章节计算当前标题
1. 用 React 实现目录和标题组件

## Astro

### 渲染流程

### 标题处理

## 获取当前标题

### 检测可见章节

为了检测可见章节，需要用 [remark-sectionize](https://www.npmjs.com/package/remark-sectionize) 插件分隔章节。
首先需要安装插件，笔者使用 `pnpm`，但也可以使用 `npm`、`yarn` 或者其他包管理器。

```shell
pnpm add remark-sectionize
```

接着将插件添加到 Astro 设置文件。

```ts title="astro.config.ts"
import remarkSectionize from "remark-sectionize";
import { defineConfig } from "astro/config";

export default defineConfig({
    ...
    remarkPlugins: [remarkSectionize],
})
```

现在，Astro 生成的 HTML 文件中章节会按标题分隔到 `<section/>` 标签内，例如以下 Markdown 内容

```markdown
# 如何实现目录
## 安装插件
...
## React 组件
...
```

会变成：

```html
<section>
  <h1>如何实现目录</h1>
  <section>
    <h2>安装插件</h2>
    <p>...</p>
  </section>
  <section>
    <h2>React 组件</h2>
    <p>...</p>
  </section>
</section>
```

分隔完章节后就可以用浏览器的 [Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API) 检测可见章节和对应的标题。
因为 Intersection Observer 可能会同时更新多个标题的可见性，所以使用 [Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)（散列表）以高效地储存和更新可见标题。

### 当前标题

本文中将要高亮的标题称为当前标题。
当前标题可以用不同方式定义，比如可以把所有可见标题都定义为当前标题。
笔者将当前标题定义为从文章开头数第一个层级最深的标题。
例如以下可见标题中当前标题为 “二级标题1” 和 “三级标题1”。

```txt {3}
一级标题1
一级标题2
    二级标题1
```

```txt {3}
一级标题1
    二级标题1
        三级标题1
一级标题2
    二级标题2
        三级标题2
```

```typescript title="getCurrentHeading.ts" collapse={1-4}
const getHeadingDepth = (heading: HTMLHeadingElement): number => {
    return Number(heading.tagName.replace(/h/i, ""));
};

export const getCurrentHeading = (
    headings: HTMLHeadingElement[],
    visibleHeadings: Set<string>,
): string | undefined => {
    let current = null;

    for (const heading of headings) {
        if (!visibleHeadings.has(heading.id)) {
            continue;
        }

        if (!current) {
            current = heading;
            continue;
        }

        if (getHeadingDepth(heading) <= getHeadingDepth(current)) {
            break;
        }

        current = heading;
    }

    return current?.id;
};

```

## React 组件

## 效果
