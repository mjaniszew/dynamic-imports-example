const staticImportLoader = document.querySelector('#staticImportSingle .notify');
staticImportLoader.innerHTML = 'Loaded';
staticImportLoader.className = 'notify loaded';

export default () => {
    document.querySelector('#staticImportSingle .importButton').onclick = () => {
        alert('already loaded');
    };
};