import { BuildOptions } from './types/config';
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    } 

    const babelLoader = {
        test: /\.(tsx|jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    const stylesLoader =  {
      test: /\.s[ac]ss$/i,
      use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  modules: {
                      auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                      localIdentName: isDev 
                      ? '[path][name]__[local]--[hash:base64:5]' 
                      : '[hash:base64:8]'
                  },
              }
          },
          'sass-loader',
      ]
  }


    
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        stylesLoader
    ]
}