---
date: {{ .Date }}
lastmod: {{ .Date }}

slug: "{{ now.UnixNano | crypto.FNV32a }}"

title: "{{ replace .File.ContentBaseName "-" " " | title }}"
categories:
tags:
description:
image:
license:

hidden: false
math:
comments: true
draft: true
---
