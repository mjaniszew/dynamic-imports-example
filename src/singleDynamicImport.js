export const handleImport = () => {
    const dynamicImportSingle = document.querySelector('#dynamicImportSingle .notify');
    dynamicImportSingle.innerHTML = 'Loaded';
    dynamicImportSingle.className = 'notify loaded';

    document.querySelector('#dynamicImportSingle .importButton').onclick = () => {
        alert('already loaded!');
    }
};