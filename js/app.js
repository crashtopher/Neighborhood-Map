var initialMarkers = [
        {
            title: "Honu Coffee",
            address: "22722 Lyons Ave, Newhall, CA 91321",
            link: "<a href='https://m.facebook.com/HonuCoffeeNewhall/'>Website</a>",
            lat: 34.380449,
            lng: -118.531390,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'


        },
        {
            title: "Central Park",
            address: "27150 Bouquet Canyon Rd, Santa Clarita, CA 91350",
            link: "<a href='http://www.santa-clarita.com/Home/Components/FacilityDirectory/FacilityDirectory/36/1386'>Website</a>",
            lat: 34.434208,
            lng: -118.520902,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Vasquez Rocks",
            address: "10700 Escondido Canyon Rd, Agua Dulce, CA 91350",
            link: "<a href='http://parks.lacounty.gov/wps/portal/dpr/Parks/Vasquez_Rocks_Natural_Area'>Website</a>",
            lat: 34.489530,
            lng: -118.320125,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Mugshot Coffee",
            address: "18727 Vía Princessa, Santa Clarita, CA 91387",
            link: "<a href='http://www.mugshotcoffeehouse.com/#overview'>Website</a>",
            lat: 34.405160,
            lng: -118.463339,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Westfeild Mall",
            address: "24201 West Valencia Blvd, Valencia, CA 91355",
            link: "<a href='https://www.westfield.com/valencia'>Website</a>",
            lat: 34.415899,
            lng: -118.557637,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Gogi House",
            address: "26524 Bouquet Canyon Rd, Santa Clarita, CA 91350",
            link: "No Website Listed",
            lat: 34.427300,
            lng: -118.535088,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Towsely Canyon",
            address: "24255 The Old Rd, Newhall, CA 91321",
            link: "No Website Listed",
            lat: 34.357811,
            lng: -118.555466,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Placerity Canyon Trail",
            address: "19152 Placerita Canyon Rd, Newhall, CA 91321",
            link: "<a href='http://www.placerita.org/'>Website</a>",
            lat: 34.377952,
            lng: -118.466969,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Nike Base",
            address: "Santa Clara Truck Trail, Newhall, CA 91321",
            link: "<a href='http://www.themilitarystandard.com/missile/nike/la-94.php'>Website</a>",
            lat: 34.347661,
            lng: -118.408558,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Magic Mountain",
            address: "26101 Magic Mountain Pkwy, Valencia, CA 91355",
            link: "<a href=''https://www.sixflags.com/magicmountain>Website</a>",
            lat: 34.425428,
            lng: -118.596854,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Lazy Dog",
            address: "24201 Valencia Blvd, Santa Clarita, CA 91355",
            link: "<a href='http://www.lazydogrestaurants.com/location'>Website</a>",
            lat: 34.414762,
            lng: -118.557990,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        },
        {
            title: "Guitar Center",
            address: "24961 Pico Canyon Rd, Stevenson Ranch, CA 91381",
            link: "<a href='https://stores.guitarcenter.com/stevenson-ranch?source=4SOSWXXN'>Website</a>",
            lat: 34.383393,
            lng: -118.572813,
            share: '<div class="fb-share-button" data-href="file:///Users/christophershaw/Desktop/neighbor_map/index.html" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>'
        }
];

var ViewModel = function(){
    var self = this;

    this.Heading = ko.observable("Best Locations");

    this.filteredMarkers = ko.observableArray([]);

    this.AvailableOptions = ko.observableArray(["All", "Shopping", "Entertainment", "Outdoors", "Dining"]);

    if (self.AvailableOptions){
        for (i=0; i<initialMarkers.length; i++) {
            self.filteredMarkers.push(initialMarkers[i]);
        }
    } else{
        self.filteredMarkers = ko.observableArray([{title: "foo"}])
    };

    this.filteredMarkers().forEach(function (location) {
        var marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(location.lat, location.lng),
            title: location.title,
            animation: google.maps.Animation.DROP,
        });

        location.marker = marker;

        var infowindow = new google.maps.InfoWindow({
            content: location.title + "<br>" + location.address + "<br>" + location.link + "<br>" + location.share
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        })

        marker.addListener('click', function() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        });

        location.openWindow = function(){
            infowindow.open(map, marker);
        }
    })

    $(document).ready(function() {
      $.ajaxSetup({ cache: true });
      $.getScript('http://connect.facebook.net/en_US/sdk.js', function(){
        FB.init({
          appId: '{your-app-id}',
          version: 'v2.7' // or v2.1, v2.2, v2.3, ...
        });
        $('#loginbutton,#feedbutton').removeAttr('disabled');
      });
    });
}

var initMap = function() {
   map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 34.417984, lng: -118.440217}
        });

   ko.applyBindings(new ViewModel());
};