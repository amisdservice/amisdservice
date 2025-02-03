// Gallery names mapped to specific dates, YouTube links, and descriptions
const galleryNames = {
    amisdGallery1: { 
        date: "Independence day Celebrations 2013", 
        youtubeLink: "https://youtu.be/uRfMNZC_S_0", 
        description: "0.1 On 15-8-13 Celebrated Independence day @ C.S.I School"
    },
    amisdGallery2: { 
        date: "Aug 25, 2013", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Mother Teresa Birthday Celebrations:- On 25/8/13. The organisation celebrated Mother Teresa's Birthday by distributing sarees, fruits, bread blankets etc., at Aruna old age home and Mamatha Orphanage. Volunteers shared their time and happiness with old people and with orphans by providing lunch for that day."
    },
    amisdGallery3: { 
        date: "Mar 05, 2023", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Highlights from our March event, capturing memorable moments."
    },
    // Add descriptions for the other galleries similarly
    amisdGallery4: { 
        date: "Apr 10, 2023", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Spring-themed activities and community engagement events."
    },
    amisdGallery5: { 
        date: "May 15, 2023", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "May event gallery filled with joy and collaboration."
    },
    amisdGallery6: { 
        date: "Jun 20, 2023", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "A vibrant gallery depicting summer festival activities."
    },
    amisdGallery7: { 
        date: "Jul 25, 2023", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Celebrating community spirit during the mid-year event."
    },
    amisdGallery8: { 
        date: "Aug 15, 2013", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Independence Day celebrations with inspiring moments."
    },
    amisdGallery9: { 
        date: "Sep 01, 2013", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "The September gallery showcasing our community outreach."
    },
    amisdGallery10: { 
        date: "Oct 31, 2013", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Halloween-themed gallery full of spooky fun and activities."
    },
    amisdGallery11: { 
        date: "Nov 11, 2013", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "A gallery capturing the warmth and unity of November."
    },
    amisdGallery12: { 
        date: "Dec 25, 2013", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Holiday season celebrations and festive moments."
    },
    amisdGallery13: { 
        date: "Jan 01, 2014", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "New Year's Day celebrations to kick off 2014."
    },
    amisdGallery14: { 
        date: "Feb 14, 2014", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Valentine's Day event filled with love and joy."
    },
    amisdGallery15: { 
        date: "Mar 17, 2014", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "St. Patrick's Day celebrations with a touch of green."
    },
    amisdGallery16: { 
        date: "Apr 22, 2014", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Earth Day activities promoting environmental awareness."
    },
    amisdGallery17: { 
        date: "May 05, 2014", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Cinco de Mayo celebrations with vibrant cultural displays."
    },
    amisdGallery18: { 
        date: "Jun 21, 2014", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Summer solstice event marking the longest day of the year."
    },
    amisdGallery19: { 
        date: "Jul 04, 2014", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Independence Day celebrations with fireworks and festivities."
    },
    amisdGallery20: { 
        date: "Aug 15, 2014", 
        youtubeLink: "https://www.youtube.com/@AMISDOfficial", 
        description: "Mid-August community gathering and celebrations."
    }
};
    
    // Continue for the rest of the galleries...

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
