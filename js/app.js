var initialMarkers = [
        {
            title: "Honu Coffee",
            position: {lat: 34.380449, lng: -118.531390},
            map: map
        },
        {
            title: "Central Park"
        },
        {
            title: "Vasquez Rocks"
        },
        {
            title: "Mugshot Coffee"
        },
        {
            title: "Westfeild Mall"
        },
        {
            title: "Gogi House"
        },
        {
            title: "Towsely Canyon"
        },
        {
            title: "Placerity Canyon Trail"
        },
        {
            title: "Nike Base"
        },
        {
            title: "Magic Mountain"
        },
        {
            title: "Lazy Dog"
        },
        {
            title: "Guitar Center"
        }
];

var ViewModel = function(){
    this.Heading = ko.observable("Best Locations");

    this.markerList = [];
    this.markerTitles = ko.observableArray([])

    for (i=0; i<initialMarkers.length; i++){
        this.markerTitles.push(initialMarkers[i].title);
        this.markerList.push(new google.maps.Marker(initialMarkers[i]));
    }
}
ko.applyBindings(new ViewModel());