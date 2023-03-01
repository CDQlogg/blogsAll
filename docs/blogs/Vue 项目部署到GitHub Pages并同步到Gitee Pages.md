---
title: Vue 项目部署到GitHub Pages并同步到Gitee Pages🔥
date: 2023-2-21
categories:
  - 部署
tags:
  - github
  - gitee
---

## 一、部署github项目
### 1、在项目目录下，创建内容如下的 deploy.sh 文件
>
    # 当发生错误时中止脚本
    set -e

    # 构建
    npm run build

    # cd 到构建输出的目录下 
    cd dist

    git init
    git add -A
    git commit -m 'deploy'

    # 部署到 https://<USERNAME>.github.io/<REPO>
    git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

    cd -
>

### 2、运行该文件
选择 Git Bash执行该命令
>
    sh deploy.sh
>

运行后，会将打包后的代码上传到仓库中的 gh-pages 分支（自动生成）。
在你的github项目的 Settings - Options 下的 GitHub Pages项里，可以看到你的项目线上网站地址。
示例：[https://cdqlogg.github.io/blogs/](https://cdqlogg.github.io/blogs/)

## 二、同步到gitee
### 1、导入github项目

- 登录Gitee官网，在右上角 “+” 中选择“从GitHub导入仓库”。
- 进入到导入Github仓库页，选择你要导入的项目。

### 2、开启Gitee Pages服务
- 点击项目上方的 服务-Gitee Pages，进入Gitee Pages 服务配置页。
- 部署分支选择 gh-pages，部署目录不填，勾选强制使用HTTPS，点击启动，随后会进行部署。
- 部署成功后，会在当前页面看到你的Gitee Pages网站地址，打开地址即可看到你的项目网站，和GitHub Pages的一模一样，而且Gitee Pages网站加载会快很多。 示例：kincar.gitee.io/vue-manage

## 三、项目更新
- 往后项目的更新，首先还是先将代码push到github上面，待GitHub Pages部署成功后，再在gitee的项目中，点击更新按钮，将github项目的代码强制同步到gitee中即可。  

![](http://file.cqcdq.top/Ra4nBipCifJ0mtGbs3K4r9xNyWPGCjSf/update.png)
