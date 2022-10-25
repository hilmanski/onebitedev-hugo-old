---
title: "removing page in PDF-lib show error index must be at least x"
description: "removing page in PDF-lib show error index must be at least x and at most x , but actually... assertRange error. Here is how to solve this"
date: 2022-10-24T21:12:00.000Z
topic: [pdf-lib]
series: [""]
draft: false
---
Here is how to solve error when [removing a page in PDF-lib](https://pdf-lib.js.org/docs/api/classes/pdfdocument#removepage) show error 
```
index must be at least x and at most x , but actually... assertRange error. 
```

Even though your PDF pages is correct and removed Index is correct, we can still meet this issue.

**Why?**
Because, when removing a page, PDFlib will shift the index number. It's a problem when removing a smaller page. Since PDFlib will change all the index number on next pages.

**Solution**  
If we're removing multiple pages, then start ordering the removal from bigger number. So it didn't shift.

Here's an example
```
const pages [4 , 1 , 3, 2]
const sortedPages = pages.sort((a: number, b: number) => b - a)
sortedPages.forEach((page: any) => {
    const pageIndex = page - 1
    PDF_DOC.removePage(pageIndex)
})
```

Hope it can solve your PDF lib problem too!
