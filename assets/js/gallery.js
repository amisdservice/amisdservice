// Gallery names mapped to specific dates and YouTube links
const galleryNames = {
    amisdGallery1: { date: "Jan 01, 2023", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_1" },
    amisdGallery2: { date: "Feb 14, 2023", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_2" },
    amisdGallery3: { date: "Mar 05, 2023", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_3" },
    amisdGallery4: { date: "Apr 10, 2023", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_4" },
    amisdGallery5: { date: "May 15, 2023", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_5" },
    amisdGallery6: { date: "Jun 20, 2023", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_6" },
    amisdGallery7: { date: "Jul 25, 2023", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_7" },
    amisdGallery8: { date: "Aug 15, 2013", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_8" },
    amisdGallery9: { date: "Sep 01, 2013", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_9" },
    amisdGallery10: { date: "Oct 31, 2013", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_10" },
    amisdGallery11: { date: "Nov 11, 2013", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_11" },
    amisdGallery12: { date: "Dec 25, 2013", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_12" },
    amisdGallery13: { date: "Jan 26, 2014", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_13" },
    amisdGallery14: { date: "Feb 14, 2014", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_14" },
    amisdGallery15: { date: "Mar 08, 2014", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_15" },
    amisdGallery16: { date: "Apr 22, 2014", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_16" },
    amisdGallery17: { date: "May 01, 2014", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_17" },
    amisdGallery18: { date: "Jun 15, 2014", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_18" },
    amisdGallery19: { date: "Jul 04, 2014", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_19" },
    amisdGallery20: { date: "Aug 15, 2014", youtubeLink: "https://www.youtube.com/watch?v=VIDEO_ID_20" },
};

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 20; i++) {
        const galleryId = `amisdGallery${i}`;
        const galleryTitle = document.getElementById(`galleryTitle${i}`);
        const youtubeLinkContainer = document.getElementById(`youtubeLink${i}`);

        if (galleryTitle && galleryNames[galleryId]) {
            // Set the date
            galleryTitle.innerText = galleryNames[galleryId].date;

            // Set the YouTube link
            if (youtubeLinkContainer) {
                youtubeLinkContainer.innerHTML = `<a href="${galleryNames[galleryId].youtubeLink}" target="_blank">Watch more photos on YouTube</a>`;
            }
        }
    }
});
