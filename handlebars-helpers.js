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