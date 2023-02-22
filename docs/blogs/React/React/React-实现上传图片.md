---
title: React/JS-实现上传图片🔥
date: 2023-2-22
categories:
  - 前端
tags:
  - JavaScript
  - React
# sticky: 1
---

## 代码片段

- uploadWorks.jsx
```js
'use strict';

import React from 'react';
import { observer } from 'mobx-react';
import { _throttle, fileToBase64 } from '@src/utils/utils'; // 引入方法：节流 和 file对象转换成base64
import { Toast } from '@spark/ui';
import store from '@src/store';
import './uploadWorks.less';

@observer
class UploadWorks extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        base64Url: '', // 上传的照片base64【正常的base64是这样开头滴：'data:image/jpg;base64,'】
        imgUrl: '', // 后端回显的照片url
    }

    async componentDidMount() {
        await store.productIndex(); // 请求页面接口

        // 处理后端回显的照片url
        // eslint-disable-next-line
        const worksImg = '//yun.test.com.cn/aurora/assets/test.jpg'; // 这里测试写死，实际取后端返的数据
        if (worksImg != '' && worksImg != null) {
            this.setState({
                imgUrl: worksImg,
            })
        }
    }

    // 上传照片（_throttle: 防连点）
    handlePhoto = _throttle(async (event) => {
        event.persist(); // 解决react异步访问或者打印event时，显示的属性值均是null值
        console.log('事件池',event);
        // 找到event下的target下的files
        const files = [...event.target.files];
        if (files.length === 0) return;
        if (files.length > 1) {
            Toast('只可上传一张图片哦~');
            return;
        }
        if (files[0].size > 10 * 1024 * 1024) {
            // 照片大小不超过10MB
            Toast('照片大小不可超过10MB哦~');
            return;
        }

        // file对象转换成base64
        const result = await fileToBase64(files[0]);
        console.log('上传照片的base64',result);

        this.setState({
            base64Url: result,
        })
    })

    render() {
        const {
            // 上传的照片base64
            base64Url,
            // 后端回显的照片url
            imgUrl,
        } = this.state;
        console.log('上传的照片base64', base64Url);
        console.log('后端回显的照片url', imgUrl);
        return (
            <div className="uploadWorks">
                    {/* 单独划分个区域，做点击事件——上传照片 */}
                    <div className="uploadArea">
                        {/* 用type为file的input实现上传照片 */}
                        <input
                            type="file"
                            ref={this.fileInputEl}  // 挂载ref
                            accept=".jpg,.jpeg,.png"  // 限制文件类型
                            onChange={(event) => this.handlePhoto(event)}
                        />
                    </div>
                    {/* 照片 */}
                    <div className="photo_img">
                        {/* img里的src既可是base64形式【正常的base64是这样开头滴：'data:image/jpg;base64,'】，也可是url形式。若还未上传照片时 后端返了照片地址imgUrl，则直接展示后端返的url */}
                        {(imgUrl != '' || base64Url != '') && <img src={imgUrl != '' ? imgUrl : base64Url} alt="" />}
                    </div>
            </div>
        );
    }
}
export default UploadWorks;
```

- uploadWorks.less
```css
.uploadWorks {
  width: 694px;
  height: 937px;
  /** 上传照片的点击区域 */
  .uploadArea {
    width: 566px;
    height: 187px;
    left: 32px;
    top: 27px;
    position: absolute;
    z-index: 99;
    input{
        width: 100%;
        height: 100%;
        /** 把input透明度设置为0，隐藏掉type为file时自带滴选择框 */
        opacity: 0;
    }
  }
  /** 照片 */
  .photo_img {
    width: 566px;
    height: 187px;
    left: 32px;
    top: 27px;
    position: absolute;
    /* 注意：背景图片的位置和背景图片的宽高之间要加'/'哟 */
    background: url('@/assets/common/photoImgBg.png') no-repeat center/cover;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
}
```

- utils/utils.js
```js
/**
 * @description: 函数节流，普通防连点
 * @param {(Function, number?)}
 * @return {Function}
 */
export const _throttle = (fun, delay = 2000) => {
  let last, deferTimer;
  return function () {
    const now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(() => {
        last = now;
      }, delay);
    } else {
      last = now;
      fun.apply(this, arguments);
    }
  };
};

/**
 * file文件转换成Base64
 */
export function fileToBase64(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  const pro = new Promise((resolve)=>{
    reader.onload = function (e) {
      resolve(e.target.result)
    }
  })
  return pro 
}
```
---
- 本文为CSDN博主「小呀小萝卜儿」的原创文章。原文链接：[小呀小萝卜儿](https://blog.csdn.net/weixin_48850734/article/details/128391421)