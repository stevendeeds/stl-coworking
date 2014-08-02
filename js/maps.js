
//GOOGLE MAPS STUFF
function initialize() {
      
      	//define the basic color of your map, plus a value for saturation and brightness
	var	main_color = '#ff9c3b',
		saturation_value= -20,
		brightness_value= 5;

	//we define here the style of the map
	var style = [ 
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: saturation_value}
			]
		},  
	    {	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{ 	
			//don't show local road lables on the map
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 
			//don't show arterial road lables on the map
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 
		//style different elements on the map
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
			
		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: main_color },
				{ visibility: "on" }, 
				{ lightness: brightness_value }, 
				{ saturation: saturation_value }
			]
		},
		{
		    featureType: "administrative.city",
		    elementType: "labels",
		    stylers: [
		        { visibility: "off" }
		    ]
		}
	];
      
        var mapOptions = {
          center: new google.maps.LatLng(38.5967431,-90.3046143),
          zoom: 12, 
          styles: style,
          scrollwheel: false,
          panControl: false,
		  zoomControl: true,
		  mapTypeControl: false,
		  streetViewControl: false
          
				
        }
        
        
        var nebulaicon = 'i/nebulalogo_small_simple2.png';
        var claimicon = 'i/claimlogo_small_simple1.png';
        var lab1500icon = 'i/lablogo_small_simple2.png';
        var techartistaicon = 'i/talogo_small_simple1.png';
        var thehiveicon = 'i/hivelogo_small_simple3.png'; 
        
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            
            
            
        var marker = new google.maps.Marker({ //Nebula
	        position: {lat: 38.5930323, lng: -90.225859}, 
	        map: map,
	        icon: nebulaicon,
	        title: "Hello World!"     
        });
        var marker = new google.maps.Marker({ //Claim STL
	        position: {lat: 38.628183, lng: -90.189745},
	        map: map,
	        icon: claimicon,
	        title: "Hello World!"
        });
        var marker = new google.maps.Marker({ //Lab 1500
	        position: {lat: 38.632384, lng: -90.201238},
	        map: map,
	        icon: lab1500icon,
	        title: "Hello World!"
        });
        var marker = new google.maps.Marker({ //Tech Artista
	        position: {lat: 38.6501716, lng: -90.2599864},
	        map: map,
	        icon: techartistaicon,
	        title: "Hello World!"
        });
        var marker = new google.maps.Marker({ //The Hive
	        position: {lat: 38.539425, lng: -90.448362},
	        map: map,
	        icon: thehiveicon,
	        title: "Hello World!"
        });
        
        
        
       /*
 var networkCoordinates = [
	    new google.maps.LatLng(38.5930323,-90.225859),
	    new google.maps.LatLng(38.628183, -90.189745),
	    new google.maps.LatLng(38.632384, -90.201238),
	    new google.maps.LatLng(38.650171, -90.259986),
	    new google.maps.LatLng(38.539425, -90.448362),
	    new google.maps.LatLng(38.5930323,-90.225859)
	    
	  ];
	  
	  
	  
	  var networkPath = new google.maps.Polyline({
	    path: networkCoordinates,
	    geodesic: true,
	    strokeColor: '#a17200',
	    strokeOpacity: 0.8,
	    strokeWeight: 5
	  });
	
	  networkPath.setMap(map);
*/
        
        
        
      }
      
      

      
      google.maps.event.addDomListener(window, 'load', initialize);
      