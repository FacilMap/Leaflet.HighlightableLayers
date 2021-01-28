Leaflet.FreieTonne
------------

A Leaflet layer that adds the nautical features overlay from [FreieTonne](https://www.freietonne.de/).

[Demo](https://facilmap.org/#10/53.7259/9.5072/MSfR-FrTo)


Usage
-----

Adding L.FreieTonne:

```JavaScript
var options = {
    /** Since FreieTonne does not allow cross-origin requests, a CORS proxy has to be used.
     * If this option is not specified, a generic CORS wrapper is used (note that it has a rate limit). */
    fetchWrapper: function(url) {
        return fetch("https://cors-anywhere.herokuapp.com/" + resolvedUrl).then((res) => res.text());
    }
};

L.freieTonne(options).addTo(map);
```
