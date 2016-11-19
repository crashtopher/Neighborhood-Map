var initialMarkers = (
    honu = ({
          position: {lat: 34.380449, lng: -118.531390},
          map: map
        })
);

var ViewModel = function(){
    this.Heading = ko.observable("Best Locations");

    markerList = ko.observable([]);
}
ko.applyBindings(new ViewModel());