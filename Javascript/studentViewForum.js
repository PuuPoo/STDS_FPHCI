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
        studentName: "John Doe",
        studentSubject: "Applied Physics",
        lecName: "Dr. Evelyn Reed",
        lecAbout: "Boring and repetitive",
        flagState: "red",
        studentMessage: "This teacher has repeatedly covered the exact same topic for 3 meetings straight with the same monotone accent.",
    },
    {
        studentName: "Alice Smith",
        studentSubject: "Calculus I",
        lecName: "Prof. Alan Turing",
        lecAbout: "Classes always go beyond alloted time",
        flagState: "red",
        studentMessage: "The lecturer keeps talking about his material over the class time limit. This makes it so I have so little time to eat my food or lunch before the next class",
    },
    {
        studentName: "Michael Lee",
        studentSubject: "Web Development",
        lecName: "Dr. Evelyn Reed",
        lecAbout: "Excellent lecturer, very analytical",
        flagState: "white",
        studentMessage: "This lecturer nevers skips out on tiny details. She makes sures to answer every and all questions to make us as students understand the material very well.",
    },
    {
        studentName: "Sara Johnson",
        studentSubject: "Organic Chemistry",
        lecName: "Prof. Jane",
        lecAbout: "Chronic Attendance and Punctuality Issues",
        flagState: "red",
        studentMessage: "The lecturer was late to 8 out of 10 lab sessions, often taking significant time from the alloted time schedule to show up. Did not provide valid medical excuses for most absences.",
    },
    {
        studentName: "Chris Williams",
        studentSubject: "Data Structures",
        lecName: "Prof. Alan Turing",
        lecAbout: "Low Communication",
        flagState: "white",
        studentMessage: "The lecturer barely gives any directions or communications into how the work or project should be done or completed. Furthermore, they fail to provide further clarifications if questioned.",
    }];

    console.log("Initial Opinions:", initialOpinions);
    let newOpinion = [];
    
    try {
        const stored = localStorage.getItem("lecturerOpinion");
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
        console.log("Creating opinion for:", data.lecName);

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
                            <p class="student_name">${data.studentName}</p>
                            <p class="student_subject">${data.studentSubject}</p>
                        </div>
                    </div>
                    <div class="forum_title_section">
                        <p style="margin:5px; font-size: 14px; color: gray;">Lecturer: ${data.lecName}</p>                      
                        <p class="forum_content"><strong>About:</strong> ${data.lecAbout}</p>
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