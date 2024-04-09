import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const cssLoader = buildCssLoader(isDev);
    const fileLoader = buildFileLoader();

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [fileLoader, svgLoader, typescriptLoader, cssLoader];
}
