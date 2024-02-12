let menu = document.querySelector('select');
let btnFlag = document.querySelector('#btnFlag');

for (currCode in countryList) {
    let newOption = document.createElement('option');
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (currCode == 'INR') {
        newOption.selected = 'selected';
    }
    menu.append(newOption);
    menu.addEventListener('change', (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    btnFlag.addEventListener('click', () => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = document.querySelector('.images img');
        img.src = newSrc;
    });
}

