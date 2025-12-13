document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded - Script is running");

    const forumContainer = document.getElementById("forumContainer");
    console.log("Forum Container:", forumContainer); // Should not be null

    if (!forumContainer) {
        console.error("forumContainer not found!");
        return;
    }

    const colors = {
        'white': '#FFFFFF',
        'green': '#30D738',
        'red': '#D73030' 
    };

    const initialOpinions = [{
        lecName: "Dr. Evelyn Reed",
        lecSubject: "Applied Physics",
        studentName: "John Doe",
        studentAbout: "Repeated Cheating Incidents",
        flagState: "red",
        studentMessage: "John was caught using unauthorized materials during the Midterm exam, resulting in a score of 0. Previously warned about collaboration that exceeded ethical bounds on HW2. Requires close supervision during testing.",
    },
    {
        lecName: "Prof. Alan Turing",
        lecSubject: "Calculus I",
        studentName: "Alice Smith",
        studentAbout: "Disruptive Behavior in Class",
        flagState: "red",
        studentMessage: "Student is frequently argumentative when corrected on technical points, causing unnecessary delays and tension in the tutorial sessions. Has been unresponsive to private mediation attempts.",
    },
    {
        lecName: "Dr. Evelyn Reed",
        lecSubject: "Web Development",
        studentName: "Michael Lee",
        studentAbout: "Excellent Student / Highly Engaged",
        flagState: "white",
        studentMessage: "Michael is an exceptionally organized and proactive student. He frequently assists classmates and delivers high-quality work. Highly recommend for any advanced projects. (Note: Not a warning, but positive feedback for easy dealing.)",
    },
    {
        lecName: "Prof. Jane Austen",
        lecSubject: "Organic Chemistry",
        studentName: "Sara Johnson",
        studentAbout: "Chronic Attendance and Punctuality Issues",
        flagState: "red",
        studentMessage: "Sara was late to 8 out of 10 lab sessions, often requiring significant time from the TA to catch up. Did not provide valid medical excuses for most absences.",
    },
    {
        lecName: "Prof. Alan Turing",
        lecSubject: "Data Structures",
        studentName: "Chris Williams",
        studentAbout: "High Maintenance Communication",
        flagState: "white",
        studentMessage: "The student sends 5-10 emails per day on minor issues and expects immediate responses. Requires firm boundaries regarding email frequency and appropriate topics for communication.",
    }];

    console.log("Initial Opinions:", initialOpinions);
    let newOpinion = [];
    
    try {
        const stored = localStorage.getItem("studentOpinion");
        console.log("localStorage data:", stored);
        if (stored) {
            newOpinion = JSON.parse(stored);
        }
    } catch (e) {
        console.error("Error parsing localStorage:", e);
    }

    const allOpinion = [...initialOpinions, ...newOpinion];
    console.log("Total opinions to display:", allOpinion.length);

    forumContainer.innerHTML = "";

    function createOpinion(data) {
        console.log("Creating opinion for:", data.studentName);

        const flagColor = colors[data.flagState] || colors['white'];
        
        const card = document.createElement('div');
        card.classList.add('opinion_card');

        card.innerHTML = `
            <div class="forum_header">
                <div class="forum_left">
                    <div class="lec_profile">
                        <div class="lec_pic">
                            <img src="../Assets/Icon.png" alt="profile" class="lecturer_img">
                        </div>
                        <div class="Lec_info">
                            <p class="lec_name">${data.lecName}</p>
                            <p class="lec_subject">${data.lecSubject}</p>
                        </div>
                    </div>
                    <div class="forum_title_section">
                        <p style="margin:5px; font-size: 14px; color: gray;">Student: ${data.studentName}</p>                      
                        <p class="forum_content"><strong>About:</strong> ${data.studentAbout}</p>
                    </div>
                </div>
                <div class="flag_wrapper">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="flagPole" d="M8 30C8 30 10 28 16 28C22 28 26 32 32 32C38 32 40 30 40 30V6C40 6 38 8 32 8C26 8 22 4 16 4C10 4 8 6 8 6V30ZM8 30V44" stroke="#1E1E1E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="flagBody" d="M9.81445 6.53613C12.9156 5.29568 17.5553 4.97922 21.1973 6.54004H21.1963L26.1807 8.53418L26.5459 8.66699C28.3987 9.30557 30.6619 9.52182 32.7402 9.48047C34.9656 9.43618 36.8949 9.09921 37.8125 8.72852L38.5 8.4502V29.2207L38.208 29.3545C34.5574 31.0234 30.4242 30.4966 28.3789 29.9854L28.3604 29.9805L28.3418 29.9746C27.9432 29.8417 27.2605 29.5484 26.4395 29.2031C25.6048 28.8521 24.5969 28.4336 23.5137 28.0312C21.3299 27.2201 18.9029 26.5 17 26.5H16.9873L16.9746 26.499C15.0215 26.4014 13.3108 26.5975 12.0889 26.8174C11.4787 26.9272 10.9916 27.0423 10.6592 27.1299C10.493 27.1737 10.365 27.2109 10.2803 27.2363C10.238 27.249 10.2061 27.2591 10.1855 27.2656C10.1754 27.2688 10.1677 27.271 10.1631 27.2725L10.1582 27.2744L9.5 27.4941V6.66113L9.81445 6.53613Z" 
                            fill="${flagColor}" stroke="#1E1E1E"/>
                    </svg>
                </div>
            </div>
            <div class="forum_body">
                <p><strong>Message:</strong></p>
                <p>${data.studentMessage}</p>
            </div>
        `;

        const header = card.querySelector('.forum_header');
        header.addEventListener('click', () => {
            const isOpened = card.classList.contains('active');
            document.querySelectorAll('.opinion_card').forEach(c => c.classList.remove('active'));
            if (!isOpened) {
                card.classList.add('active');
            }
        });

        forumContainer.appendChild(card);
        console.log("Card appended to container");
    }

    allOpinion.forEach(data => {
        createOpinion(data);
    });

    console.log("All cards created. Container children:", forumContainer.children.length);
});