const path = require('path');
//引入插件
//配置插件v-loader
const VueLoaderPlugin = require('vue-loader/lib/plugin');


//导入在内存中生成 HTML 页面的插件
//只要是插件，都一定要 放到 plugins 节点中去
// 这个插件的两个作用
// 1，自动在内存根据指定页面生成一个内存页面
// 2 ，自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口 表示，要使用 webpack 打包那个文件
    output: { //输出相关的配置
        path: path.join(__dirname, './dist'), //指定 把包好的文件，输出到哪个目录中去
        filename: 'bundle.js' //指定 输出文件的名称
    },
    plugins: [ //配置插件的节点
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML 页面的插件
            template: path.join(__dirname, './src/index.html'), //指定 模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html'
        }),

        new VueLoaderPlugin() //配置插件v-loader 在v1.5之后的版本都需要在配置文文件配置一下
    ],
    module: { //这个节点，用于配置 所有 第三方模块 加载器
        rules: [ //所有第三方模块 匹配规则
            //配置处理 。css文件的 第三方loader规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //配置处理 。less文件的 第三方loader规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //配置处理 。scss文件的 第三方loader规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            //处理图片路径的loader
            { test: /\.(jpg|png|gif|jpeg|bmp)$/, use: 'url-loader?limit=25549&name=[hash:8]-[name].[ext]' },
            //limit 给定的值，是图片的大小，如果我们引入的图片，大于或等于给定的值会被转为base64，如果小于则不会被转为base64

            //处理字体文件的loader bootstrap
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },

            //配置Babel 来转换高级Es语法
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },

            //处理.vue文件的loader
            { test: /\.vue$/, use: 'vue-loader' }

        ]

    },
    resolve: { //修改 Vue 被导入的包的路径
        alias: {
            // "vue$": "vue/dist/vue.js"
        }
    }

}


//当我们在控制台, 直接输入 webpack命执行的时候, webpack做了以下几步:

//1.首先, webpack发现,我们并没有过命令的形式,给它指定入口和出口
//2webpack就会去项目的根目录, 查找一个叫做 webpack.config.的配置文件
//3.当找到配置文件后, webpack会去析执行这个配置文件,当解析执行完配置文件后,就得到了配置文件中, 导出的配置对象
//4当 webpack拿到配置对象后, 就到了配置对象中, 指定的入口和出口, 然后进行打包构建;