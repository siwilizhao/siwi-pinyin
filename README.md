[![Build Status](https://www.travis-ci.org/siwilizhao/siwi-pinyin.svg?branch=master)](https://www.travis-ci.org/siwilizhao/siwi-pinyin)
[![npm](https://img.shields.io/npm/v/siwi-pinyin.svg)](https://www.npmjs.com/package/siwi-pinyin)
[![npm](https://img.shields.io/npm/dt/siwi-pinyin.svg)](https://www.npmjs.com/package/siwi-pinyin)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-pinyin/lib/index.js.svg)](https://github.com/siwilizhao/siwi-pinyin/lib/index.js)
# siwi-pinyin

Hanzi to pinyin

# 安装

> yarn add siwi-pinyin

> npm install siwi-pinyin

```js

const Pinyin = require('siwi-pinyin')

class Test{
    constructor() {
        this.test()
    }
    async test () {
        let str = "你大爷的二愣子"
        
        let res = await Pinyin.convert(str)
        console.log(res)
    }
}

module.exports = new Test()
```