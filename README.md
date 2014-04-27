# handlebars

Since I'm a Ruby-on-Rails fan! I'm creating my own Handlebars helpers in rails flavor!


## Methods


**I**	[image_tag](#image_tag)



<a name="image_tag"/>
##### **image_tag**(source, {options})

## Source

```javascript
Handlebars.registerHelper('image_tag', function(src, attr, options) {
    var attr = JSON.parse(attr);
    var img = new Image();
    src!=null? img.src = src : img.src = 'http://placehold.it/48x48';
    if (attr.height!=null) img.height = attr.height;
    if (attr.width!=null) img.width = attr.width;
    if (attr.cssClass!=null) img.className = attr.cssClass;
    if (attr.alt!=null) img.alt = attr.alt;
    return img.outerHTML;
});
```

### Usage

{{{image_tag '/assets/icon.png' '{"height": 48, "width": 48, "cssClass": "business-logo", "alt": "Edit Entry"}'}}}


```
<img src="/assets/icon.png" height="48" width="48" class="business-logo" alt="Edit Entry">
```

### What's Next?

**A**	[audio_tag](#audio_tag), [auto_discovery_link_tag](#auto_discovery_link_tag)

**F**	[favicon_link_tag](#favicon_link_tag)

**J**	[javascript_include_tag](#javascript_include_tag)

**S**	[stylesheet_link_tag](#stylesheet_link_tag)

**V**	[video_tag](#video_tag)