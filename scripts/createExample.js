
import fs from "fs";
// 快速生成一个 md 模版
function createExample() {
  const content = `
---
title: The title of the post
author: your name
pubDatetime: ${new Date().toISOString()}
slug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
ogImage: ../../assets/images/example.png # src/assets/images/example.png
# ogImage: "https://example.org/remote-image.png" # remote URL
description: This is the example description of the example post.
canonicalURL: https://example.org/my-article-was-already-posted-here
---
`;
  fs.writeFileSync(`./src/data/blog/example.md`, content);
}

createExample();
