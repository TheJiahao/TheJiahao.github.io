---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
tags:
draft: true

slug: "{{ now.UnixNano | crypto.FNV32a }}"

date: {{ .Date }}
lastmod: {{ .Date }}
---
