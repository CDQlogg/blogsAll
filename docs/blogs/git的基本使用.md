---
title: git的基本使用
date: 2023-3-06
tags:
  - git
# sticky: 1
---

<!-- more -->
<img src='https://img0.baidu.com/it/u=829309475,2841958997&fm=253&fmt=auto&app=138&f=JPG?w=667&h=500'>


>
集中式的版本管理  SVN  --- 版本管理服务器集中存放代码版本信息
分布式的版本管理系统 Git --- 每个开发者电脑上都有一套独立的代码版本信息
>
## 1. 安装

下载![下载路径](https://git-scm.com/downloads)  
默认路径安装

- 设置vscode的默认终端

齿轮--设置--右上角打开json--配置完成后--重启vscode
```js
"terminal.integrated.profiles.windows": {
    "git-bash": {
        "path": "D:\\software\\Git\\bin\\bash.exe",‘
        "args": []
    },
},
"terminal.integrated.defaultProfile.windows": "git-bash",
```
## 在线远程仓库
- gitHub
- 码云

## git跟github的关系？

- git是用来做版本信息管理，只能在本地用
- github、gitee是一个在线的仓库，可以允许我们远程共享git仓库

## 2. 对git进行最小配置  【！！！重要！！！】

- 让git知道，当前进行版本操作的用户是谁？
- 一台电脑只需要至少配置一次
>
- 查看最小配置

git config --global --list

- 配置命令

配置用户名
git config --global user.name 用户名

git config --global user.name yooye

配置用户邮箱
git config --global user.email 用户邮箱
>
## 3. 创建仓库及基本操作  【重要】 
>
  ○  git init       在本地初始化git仓库，一个项目最对需要执行一次 
  ○  添加到暂存区 
    ■ git add 文件名称      将某个指定文件，添加到暂存区
    ■ git add .            将所有被改动过的文件，都纳入暂存区
  ○  git commit -m'版本描述文字'   将最新代码纳入到git版本仓库中 
  ○  git status  查看版本状态 
>
### vscode文件版本状态提示
>
U  未追踪
A  已加入暂存区
M  已修改，未提交
C  发生冲突，并修复
>
## 4. 版本回退
>
谨慎使用
 
- git log    查看commit历史记录id
- git reset --hard dcbc3b    回退至指定的某个commit
- git reset --hard HEAD^    回退至上一次commit   【了解即可】

头指针(HEAD->)  指向当前版本信息位置
>

## 5. 分支概念及使用 【！！重要！！】
>
-  git branch  查看当前分支列表 【！！注意，在写代码前一定保证自己处于自己的分支下】 
-  git checkout -b 分支名称       创建新分支并切换至新分支 
-  git checkout 分支名称          切换到指定分支 
-  git log                       查看git版本提交历史记录 
-  git merge 子分支名称           分支合并 
  ○ git checkout master        先进入主分支
  ○ git merge sanfeng               将sanfeng子分支代码合并到主分支
-  所有子分支都合并到master后，需要在每个子分支再合并一次主分支 
目的是为了形成一个全新起点
>

### 5-1. 在Linux中输入并保存版本描述信息
>
+ 英文输入状态下
+ 按 i  进入编辑状态
+ 输入git操作的动作描述 （可以是中文描述）
+ 按 ESC （或shift+ESC）  退出编辑状态
+ 英文输入状态下
+ :wq  保存退出
>
## 6. 任务
>
- git安装
- git基本配置
- git的基本使用流程
- git分支的概念及其使用方式
>
### 7-1. 创建一个vue项目
一个小组，只需要组长创建一个vue项目，并进行项目基本结构的调整  
尽量大家共用同一个公共文件  
例如：公共文件
>
- components中的公共组件  --- 凡是公共组件，必须交给某个组件开发，其他组件只调用
- views  ----- 文件命名不要冲突
- utils  ----- 组长牵头封装好即可
- api   ---- 一个组员应该独立使用一个.js文件
- store  ------ 必须拆分模块化，index.js中的基本代码，在项目创建时就要准备好
- router ------ 一个组员应该独立使用一个.js路由文件
- main.js  ------ 组件的安装配置，在项目创建时就要准备好 
  ○ vant组件库安装
> 

### 7-2. 本地仓库与远程仓库合并过程

+ 新建gitee远程仓库【只需要设置仓库名称】
+ 在本地仓库目录下，执行命令，将本地仓库与远程仓库进行关联
```
 git remote add origin 【gitee的https地址】

```
+ 执行命令提交本地仓库代码至gitee
```
git push -u origin master
```
+ 输入账号密码【如果不小心输错，可以在电脑 凭据 中修改】

## 8. 本地克隆远程仓库

- 在本地目录下，克隆远程仓库

组员第一次拉取项目仓库

git clone [https仓库地址]

- 拉取远程仓库最新代码

组员需要获取别人的代码

git pull

## 9. 提交代码与拉取代码