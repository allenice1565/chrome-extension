/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        popup: './src/pages/popup/index.tsx',
        backendManagement: './src/pages/backend-management/index.tsx',
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@constant': path.resolve(__dirname, 'src/constantTypes/'),
        },
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'compiled-pages'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            // template: `./popup.html`, //设置打包后的文件,插入到的模板html文件是哪个(以来的模板文件)
            filename: `popup.html`, //输出文件的名称(打包后的html文件名,可以自己设置,最好不要变动)
            chunks: ['popup'], //代表指定的入口文件是哪个)
        }),
        new HtmlWebpackPlugin({
            // template: `./popup.html`, //设置打包后的文件,插入到的模板html文件是哪个(以来的模板文件)
            filename: `backend-management.html`, //输出文件的名称(打包后的html文件名,可以自己设置,最好不要变动)
            chunks: ['backendManagement'], //代表指定的入口文件是哪个)
        }),
    ],
};
