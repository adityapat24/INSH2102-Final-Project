import React, { useEffect, useRef } from 'react';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function haversineDistance(coord1, coord2) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(coord2.lat - coord1.lat);
  const dLon = toRad(coord2.lng - coord1.lng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(coord1.lat)) *
      Math.cos(toRad(coord2.lat)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}


export default function GoogleMap({ locations, userLocation, favorites = [], reviews = {}}) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;
    script.async = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    function initMap() {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: 42.35, lng: -71.06 },
        zoom: 13,
      });

      if (userLocation) {
        new window.google.maps.Marker({
          position: userLocation,
          map: mapInstance.current,
          title: "Your Location",
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 6,
            fillColor: '#4285F4',
            fillOpacity: 1,
            strokeWeight: 2,
            strokeColor: 'white',
          },
        });
      }

      const service = new window.google.maps.places.PlacesService(mapInstance.current);

      locations.forEach((loc) => {
        const [lat, lng] = loc.coordinates;
        const position = { lat, lng };
        const isFavorite = favorites.includes(loc.name);
        let distanceText = '';

        if (userLocation) {
          const distance = haversineDistance(userLocation, position);
          distanceText = `<br><strong>Distance:</strong> ${distance.toFixed(2)} km`;
        }

        const marker = new window.google.maps.Marker({
          position,
          map: mapInstance.current,
          title: loc.name,
          icon: isFavorite
            ? 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
            : undefined,
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<strong>${loc.name}</strong><br>${loc.address}${distanceText}<br><em>Loading reviews...</em>`,
        });
        
        marker.addListener('click', () => {
          infoWindow.open(mapInstance.current, marker);
        
          if (loc.place_id) {
            service.getDetails(
              {
                placeId: loc.placeId,
                fields: ['name', 'rating', 'reviews'],
              },
              (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK && place.reviews) {
                  const reviewsHTML = place.reviews
                    .slice(0, 3)
                    .map(
                      (rev) =>
                        `<p style="margin:0;"><strong>${rev.author_name}</strong> (${rev.rating}★): ${rev.text}</p>`
                    )
                    .join('');
                  infoWindow.setContent(
                    `<strong>${loc.name}</strong><br>${loc.address}${distanceText}<br><br><strong>Reviews:</strong><br>${reviewsHTML}`
                  );
                } else {
                  infoWindow.setContent(
                    `<strong>${loc.name}</strong><br>${loc.address}${distanceText}<br><br><em>No reviews found.</em>`
                  );
                }
              }
            );
          }
        });
        
      });
    }

    return () => {
      delete window.initMap;
    };
  }, [locations, userLocation, favorites, reviews]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
}
