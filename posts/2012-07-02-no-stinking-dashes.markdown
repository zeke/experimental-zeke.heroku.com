---
layout: post
title: "No Stinking Dashes"
date: 2012-07-02 14:48
comments: true
categories:
---

jQuery (as of 1.7.2) doesn't allow dashes in HTML `data-` attribute names, so you're better off
using underscores instead. Check out [this jsfiddle](http://jsfiddle.net/xhSPQ/) for evidence.

**Update**: The dashes are not the problem: there's a [bug in jQuery 1.7.2](http://zeke.heroku.com/blog/2012/07/02/no-stinking-dashes/#comment-576000854)
regarding attributes that contain a digit after a dash.

<a href="http://jsfiddle.net/xhSPQ/">
  <img src="/images/extra/no-stinking-dashes.png" class="no-border">
</a>

And while we're on the topic, I discovered today that Haml now supports a `:data` attribute.
Give it a (flat) ruby Hash and each of the key/value pairs will be transformed into a custom HTML5 data attribute.
[Huzzah!](http://haml.info/docs/yardoc/file.HAML_REFERENCE.html#html5_custom_data_attributes)