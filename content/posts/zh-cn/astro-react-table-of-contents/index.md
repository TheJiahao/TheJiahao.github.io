---
date: 2025-01-11

title: 使用 React 为 Astro 博客实现动态文章目录
description: 本文介绍了如何为 Astro 博客实现自动高亮当前段落的目录。

draft: true
---

本文将介绍如何为 Astro 博客实现自动高亮当前段落的目录组件。
实现主要分为三步：

1. 将 Astro 的标题对象嵌套
1. 当前标题计算逻辑
1. 用 React 实现目录和标题组件

## Astro

### 渲染流程

### 标题处理

### 用 `<section/>` 分隔章节

Remark 插件

## 获取当前标题

### 可见标题

使用浏览器的 [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 来决定那些标题可见。
Intersection Observer 可能会同时更新多个标题的可见性，所以使用 [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)（散列表）以高效地储存和更新可见标题。

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
