# less 自动编译工具

## 实现思路
1. 先简单实现，将一个 less 文件编译成 css 文件
2. 再实现，通过监视自动将 less 文件编译成 css 文件·
3. 最后实现，将这个程序作为一个命令行工具

## 项目结构

- lib 源码

## 开发流程

- npm init -y 生成 package.json 文件
- 在 package.json 文件中的 scripts 节点下添加一个 start 节点
    + `"start": "node ./lib/index"`
- 将 less 安装到当前项目中，并且添加到依赖项中 
    + `npm install --save less`