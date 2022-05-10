const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

//module.exports = withPlugins([withCSS, withFonts, withImages]);


require('dotenv').config()
module.exports = withCSS(withImages({
     env: {
        API_BASEURL: process.env.API_BASEURL,
        API_GETREFERALBASEDONSTATUS: "memberapi/getReferalBasedOnStatus"
      },
      webpack(config, options) {

        config.module.rules.push({

            test: /\.(woff2|woff)(\?v=[0-9]\.[0-9]\.[0-9])?(\?#iefix)?$/,

            loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[name].[ext]',

            options: {

                publicPath: './static'

            }

        });

        config.module.rules.push({

            test: /\.(ttf|eot|svg|png|jpg|gif|ico|otf)(\?v=[0-9]\.[0-9]\.[0-9])?(\?#iefix)?$/,

            loader: 'file-loader?name=[name].[ext]',

            options: {

                publicPath: './static'

            }

        });

        return config

    },

}));