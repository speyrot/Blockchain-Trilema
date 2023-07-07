// declare variables

const toggles = document.querySelectorAll('.toggle');
const decentral = document.querySelector('#decentral');
const scale = document.querySelector('#scale');
const secure = document.querySelector('#secure');

// Function

function trilemma(theClickedOne) {
    if(decentral.checked && scale.checked && secure.checked) {
        if (decentral === theClickedOne) {
            secure.checked = false;
        }

        if (scale === theClickedOne) {
            decentral.checked = false;
        }

        if (secure === theClickedOne) {
            scale.checked = false;
        }
    };
};

//Run it up

toggles.forEach(toggle => toggle.addEventListener('change', (e) => trilemma(e.target)));