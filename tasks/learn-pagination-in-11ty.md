---
title: Learn pagination in 11ty
date: 2020-05-30
---


By using `pagination` configure in the page that lists data.

```
---
pagination:
  data: collections.task
  size: 3
  alias: tasks
  reverse: true
---
```