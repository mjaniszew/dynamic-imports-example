export const handleImport = () => {
    import(/* webpackChunkName: "dynamicBundle" */ './bundleDynamicImport2')
        .then(module => module.handleImport());
};