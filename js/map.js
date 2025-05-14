document.addEventListener('DOMContentLoaded', function() {
  // This is a simplified representation of an interactive map
  // In a real implementation, you would use a library like Leaflet or Google Maps
  
  const worldMap = document.getElementById('world-map');
  
  // Create a simple SVG map (in a real app, this would be more complex)
  worldMap.innerHTML = `
      <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
          <!-- Simplified world map shapes -->
          <path class="europe" d="M300,100 L350,120 L340,150 L380,160 L370,200 L320,190 L300,160 Z" fill="#3498db" stroke="#fff" stroke-width="2" data-region="europe"></path>
          <path class="asia" d="M450,80 L550,90 L580,150 L600,200 L550,220 L500,180 L480,130 Z" fill="#e74c3c" stroke="#fff" stroke-width="2" data-region="asia"></path>
          <path class="americas" d="M100,150 L150,180 L140,220 L180,250 L150,300 L100,280 L80,230 Z" fill="#2ecc71" stroke="#fff" stroke-width="2" data-region="americas"></path>
          <path class="africa" d="M350,250 L400,270 L380,320 L330,310 L320,280 Z" fill="#f39c12" stroke="#fff" stroke-width="2" data-region="africa"></path>
          
          <!-- Destination markers -->
          <circle cx="330" cy="150" r="8" fill="#fff" stroke="#2c3e50" stroke-width="2" data-destination="italy" class="map-marker"></circle>
          <circle cx="520" cy="150" r="8" fill="#fff" stroke="#2c3e50" stroke-width="2" data-destination="japan" class="map-marker"></circle>
          <circle cx="130" cy="220" r="8" fill="#fff" stroke="#2c3e50" stroke-width="2" data-destination="peru" class="map-marker"></circle>
          <circle cx="360" cy="120" r="8" fill="#fff" stroke="#2c3e50" stroke-width="2" data-destination="france" class="map-marker"></circle>
          <circle cx="360" cy="280" r="8" fill="#fff" stroke="#2c3e50" stroke-width="2" data-destination="south-africa" class="map-marker"></circle>
          <circle cx="550" cy="200" r="8" fill="#fff" stroke="#2c3e50" stroke-width="2" data-destination="thailand" class="map-marker"></circle>
      </svg>
  `;
  
  // Add interactivity to map markers
  const markers = document.querySelectorAll('.map-marker');
  
  markers.forEach(marker => {
      marker.addEventListener('mouseover', function() {
          const destination = this.getAttribute('data-destination');
          // Highlight corresponding destination card
          const cards = document.querySelectorAll('.destination-card');
          cards.forEach(card => {
              if (card.getAttribute('data-category') === 'europe' && destination === 'italy') {
                  card.style.transform = 'scale(1.05)';
                  card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
              }
              // Add similar conditions for other destinations
          });
      });
      
      marker.addEventListener('mouseout', function() {
          const cards = document.querySelectorAll('.destination-card');
          cards.forEach(card => {
              card.style.transform = '';
              card.style.boxShadow = '';
          });
      });
      
      marker.addEventListener('click', function() {
          const destination = this.getAttribute('data-destination');
          // In a real implementation, you might show more details about the destination
          alert(`You clicked on ${destination.replace('-', ' ').toUpperCase()}. In a real app, this would show more details.`);
      });
  });
  
  // Add click event to regions
  const regions = document.querySelectorAll('path[data-region]');
  
  regions.forEach(region => {
      region.addEventListener('click', function() {
          const regionName = this.getAttribute('data-region');
          // Filter destinations by region
          const filterBtn = document.querySelector(`.filter-btn[data-filter="${regionName}"]`);
          if (filterBtn) {
              filterBtn.click();
          }
      });
  });
});