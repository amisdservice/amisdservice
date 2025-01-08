// Map of gallery IDs to their respective names
const galleryNames = {
    gallery3: "Jul102013",
    gallery4: "Aug152013",
    gallery5: "Sep202013",
    gallery6: "Oct052013",
    gallery7: "Nov122013",
    gallery8: "Dec252013",
    gallery9: "Jan152014",
    gallery10: "Feb202014",
    gallery11: "Mar152014",
    gallery12: "Apr182014",
    gallery13: "May052014",
    gallery14: "Jun152014",
    gallery15: "Jul202014",
    gallery16: "Aug182014",
    gallery17: "Sep102014",
    gallery18: "Oct152014",
    gallery19: "Nov102014",
    gallery20: "Dec182014"
  };
  
  // Dynamically update gallery titles
  document.addEventListener('DOMContentLoaded', () => {
    Object.keys(galleryNames).forEach(galleryId => {
      const galleryTitle = document.getElementById(`galleryTitle${galleryId.slice(7)}`);
      if (galleryTitle) {
        galleryTitle.innerText = galleryNames[galleryId];
      }
    });
  
    populateGalleries(); // Call the function to populate images
  });
  
  // Populate images in galleries
  function populateGalleries() {
    Object.keys(galleryNames).forEach((galleryId, index) => {
      const galleryContainer = document.getElementById(galleryId);
      const galleryNumber = index + 3; // Assuming galleries start from 3
  
      if (galleryContainer) {
        for (let imgNum = 1; imgNum <= 8; imgNum++) { // Add 8 images per gallery
          const anchor = document.createElement('a');
          anchor.href = `assets/images/gallery/${galleryId}_img${imgNum}.jpg`;
          anchor.className = "col-md-3 col-sm-4 gallery-item lightbox";
  
          const img = document.createElement('img');
          img.src = `assets/images/gallery/thumb/${galleryId}_img${imgNum}.jpg`;
          img.alt = `${galleryNames[galleryId]} Image ${imgNum}`;
  
          const hoverSpan = document.createElement('span');
          hoverSpan.className = "on-hover";
  
          const captionSpan = document.createElement('span');
          captionSpan.className = "hover-caption";
          captionSpan.innerText = `${galleryNames[galleryId]} Image ${imgNum}`;
  
          hoverSpan.appendChild(captionSpan);
          anchor.appendChild(img);
          anchor.appendChild(hoverSpan);
          galleryContainer.appendChild(anchor);
        }
      }
    });
  }
  