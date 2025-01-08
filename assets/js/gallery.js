// Gallery names mapped to specific dates, YouTube links, and descriptions
const galleryNames = {
    amisdGallery1: { 
        date: "Jan 01, 2023", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_1", 
        description: "This gallery showcases the events and activities from the start of the year 2023."
    },
    amisdGallery2: { 
        date: "Feb 14, 2023", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_2", 
        description: "Mother Teresa Birthday Celebrations:-On 25/8/13. The organisation celebrated Mother Teresa's Birthday by distributing sarees, fruits, bread blankets etc., at Aruna old age home and Mamatha Orphanage. Volunteers shared their time and happiness with old people and with orphans by providing lunch for that day."
    },
    amisdGallery3: { 
        date: "Mar 05, 2023", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_3", 
        description: "Highlights from our March event, capturing memorable moments."
    },
    // Add descriptions for the other galleries similarly
    amisdGallery4: { 
        date: "Apr 10, 2023", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_4", 
        description: "Spring-themed activities and community engagement events."
    },
    amisdGallery5: { 
        date: "May 15, 2023", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_5", 
        description: "May event gallery filled with joy and collaboration."
    },
    amisdGallery6: { 
        date: "Jun 20, 2023", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_6", 
        description: "A vibrant gallery depicting summer festival activities."
    },
    amisdGallery7: { 
        date: "Jul 25, 2023", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_7", 
        description: "Celebrating community spirit during the mid-year event."
    },
    amisdGallery8: { 
        date: "Aug 15, 2013", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_8", 
        description: "Independence Day celebrations with inspiring moments."
    },
    amisdGallery9: { 
        date: "Sep 01, 2013", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_9", 
        description: "The September gallery showcasing our community outreach."
    },
    amisdGallery10: { 
        date: "Oct 31, 2013", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_10", 
        description: "Halloween-themed gallery full of spooky fun and activities."
    },
    amisdGallery11: { 
        date: "Nov 11, 2013", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_11", 
        description: "A gallery capturing the warmth and unity of November."
    },
    amisdGallery12: { 
        date: "Dec 25, 2013", 
        youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_12", 
        description: "Holiday season celebrations and festive moments."
    },
    // Continue for the rest of the galleries...
};

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 20; i++) {
        const galleryId = `amisdGallery${i}`;
        const galleryTitle = document.getElementById(`galleryTitle${i}`);
        const youtubeLinkContainer = document.getElementById(`youtubeLink${i}`);
        const descriptionContainer = document.getElementById(`galleryDescription${i}`); // Added element for description

        if (galleryTitle && galleryNames[galleryId]) {
            // Set the date
            galleryTitle.innerText = galleryNames[galleryId].date;

            // Set the YouTube link
            if (youtubeLinkContainer) {
                youtubeLinkContainer.innerHTML = `<a href="${galleryNames[galleryId].youtubeLink}" target="_blank">Watch more photos on YouTube</a>`;
            }

            // Set the description
            if (descriptionContainer) {
                descriptionContainer.innerText = galleryNames[galleryId].description;
            }
        }
    }
});
