export function buildFileLoader() {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        use: "file-loader",
    };
};
