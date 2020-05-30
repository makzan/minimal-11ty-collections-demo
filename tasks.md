---
layout: layout
---

<h1>All Tasks</h1>
<ul>
{% for task in collections.task reversed %}
  <li class="is-done-{{task.data.is_done}}">
    <h2>
      {{ task.date toISOString }}
      {{ task.data.title }}
    </h2>
    {{ task.templateContent }}
  </li>
{% endfor %}
</ul>