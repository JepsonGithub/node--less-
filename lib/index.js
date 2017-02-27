const fs = require( 'fs' )      // 引入 fs 文件读写模块
const less = require( 'less' )  // 引入 less 模块
const path = require( 'path' )  // 引入 path 路径模块

// 当前文件绝对目录 __dirname : C:\Users\54721\Desktop\node\less编译工具\node--less-\lib

// readFile 第二个参数，可以指定编码类型
// 指定编码类型后，得到的数据会自动转换
fs.readFile( path.join(__dirname, '../demo/src/main.less'), 'utf8', ( err, data ) => {
    // data.toString()
    if ( err ) {
        throw err
    }
    console.log( data )
})
