/* Map Section */
var map;

function initMap() {
   	map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7831, lng: -122.4039},
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
   	});

   	var locations = [
	  {
	    lat: 32.589720,
	    lng: -116.466988,
	    ele: 889.3, 
	    mm: 0,
	    title: 'US-Mexico Border',
	    desc: 'Southern Terminus of the PCT',
	  },
	  {
	    lat: 36.768131,
	    lng: -118.411467,
	    ele: 3207.9, 
	    mm: 798,
	    title: 'Kearsarge Pass',
	    desc: 'Annie exits the PCT',
	  },
	  {
	    lat: 49.0002890,
	    lng: -120.802121,
	    ele: 1297.9, 
	    mm: 2652,
	    title: 'US-Canada Border',
	    desc: 'Northern Terminus of the PCT',
	  },
	];

	var infowindow = new google.maps.InfoWindow({
    		content: location.title,
  		});

/* 
'function processLocation' is blocking the infowindow from working. 
if i replace the 'function processLocation' with raw data, 
	the infowindow displays.
if i put the infowindow listener above the var marker, 
	the markers do not display at all. 

ANNIE - look at this for guidance on next steps https://developers.google.com/maps/documentation/javascript/examples/rectangle-event

Alternative to 'function processLocation' that works, 
	but i want to use array. 
	
	var marker = new google.maps.Marker({
	    position: {
		    lat: 32.589720,
	    	lng: -116.466988,
		    },
	    map: map,
	    title: 'titlehere'
	  });
	
	marker.addListener('click', function() {
    	infowindow.open(map, marker);
  	});
}

*/
	locations.forEach(processLocation);

	function processLocation (location) {
		var marker = new google.maps.Marker({
		    position: {
		      lat: location.lat,
		      lng: location.lng,
		    },
		    title: location.title,
		    map: map,
		  });
		}

	marker.addListener('click', function() {
    	infowindow.open(map, marker);
  	});
}
	





