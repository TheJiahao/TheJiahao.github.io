---
date: {{ .Date }}

slug: {{ .File.ContentBaseName }}

title: {{ replace .File.ContentBaseName "-" " " | title }}
categories:
tags:
description:
image:
license:

hidden: false
math:
comments: true
draft: true
sitemap:
    disable: false
---
