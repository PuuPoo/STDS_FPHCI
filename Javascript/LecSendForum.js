document.addEventListener('DOMContentLoaded', () => {
    const flagButton = document.getElementById('flagButton');
    const flagBody = document.getElementById('flagBody');
    const sendbtn = document.querySelector('.send_button');
    const aboutArea = document.querySelector('.about_input');
    const nameArea = document.querySelector('.name_input');
    const textArea = document.querySelector('.opinion_input'); // ⚠️ Fixed: was '.about_input', should be '.opinion_input'

    const states = ['white', 'green', 'red'];
    const colors = {
        'white': '#FFFFFF',
        'green': '#30D738',
        'red': '#D73030' 
    };

    flagButton.addEventListener('click', () => {
        let currentState = flagButton.getAttribute('data-state');
        let currentIndex = states.indexOf(currentState);
        let nextIndex = (currentIndex + 1) % states.length;
        let nextState = states[nextIndex];
        let nextColor = colors[nextState];

        flagButton.setAttribute('data-state', nextState);
        flagBody.setAttribute('fill', nextColor);
    });

    sendbtn.addEventListener('click', () => {
        const name = nameArea.value.trim();
        const about = aboutArea.value.trim();
        const message = textArea.value.trim();
        const currentFlagState = flagButton.getAttribute('data-state');

        if(name === "") {
            alert("Please enter a name!");
            return;
        }

        if(about === "") {
            alert("Please enter a Summary");
            return;
        }

        const newOpinion = {
            lecName: "You",
            lecSubject: "lorem ipsum",
            studentName: name,
            studentAbout: about,
            flagState: currentFlagState,
            studentMessage: message,
        };

        let savedOpinion = JSON.parse(localStorage.getItem("studentOpinion") || "[]");

        console.log(newOpinion);

        savedOpinion.push(newOpinion);
        localStorage.setItem("studentOpinion", JSON.stringify(savedOpinion));
        
        window.location.href = "../Scripts/LecViewForum.html";
    });
});