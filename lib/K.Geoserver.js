
/*
    Leaflet GeoServer
    WMS Layer and Legend
*/

L.Geoserver = L.Geoserver || {};

// WMS Layer
L.Geoserver.wms = function (baseLayerUrl, options) {

    var layer = L.tileLayer.wms(baseLayerUrl, options);

    return layer;

};


// Legend
L.Geoserver.legend = function (baseLayerUrl, options) {

    var legend = L.control({
        position: "bottomleft"
    });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create("div", "info legend");

        var url = baseLayerUrl +
            "?REQUEST=GetLegendGraphic" +
            "&VERSION=1.1.1" +
            "&FORMAT=image/png" +
            "&LAYER=" + encodeURIComponent(options.layers);

        var img = L.DomUtil.create("img", "", div);

        img.src = url;
        img.alt = "Map Legend";

        return div;

    };

    return legend;

};
