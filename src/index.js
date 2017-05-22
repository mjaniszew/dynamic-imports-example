import staticImport from './staticImport';
staticImport();

const dynamicImportSingleBtn = document.querySelector('#dynamicImportSingle .importButton');
const dynamicImportBundleBtn = document.querySelector('#dynamicImportBundle1 .importButton');
const dynamicImportBundleBtn2 = document.querySelector('#dynamicImportBundle2 .importButton');

dynamicImportSingleBtn.onclick = () => {
    import('./singleDynamicImport')
        .then(module => module.handleImport());
}

dynamicImportBundleBtn.onclick = () => {
    import(/* webpackChunkName: "dynamicBundle" */ './bundleDynamicImport')
        .then(module => module.handleImport());
}

dynamicImportBundleBtn2.onclick = () => {
    import(/* webpackChunkName: "dynamicBundle" */ './bundleDynamicImport2')
        .then(module => module.handleImport());
}
