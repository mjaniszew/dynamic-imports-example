const dynamicImportBundle1 = document.querySelector('#dynamicImportBundle1 .notify');
const dynamicImportBundle2 = document.querySelector('#dynamicImportBundle2 .notify');
dynamicImportBundle1.innerHTML = 'Loaded';
dynamicImportBundle1.className = 'notify loaded';
dynamicImportBundle2.innerHTML = 'Loaded';
dynamicImportBundle2.className = 'notify loaded';

export default () => {
    document.querySelector('#dynamicImportBundle1 .importButton').onclick = () => {
        alert('Whole bundle already loaded!');
    };
    document.querySelector('#dynamicImportBundle2 .importButton').onclick = () => {
        alert('Whole bundle already loaded!');
    };
};