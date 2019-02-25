[![Build Status](https://www.travis-ci.org/siwilizhao/siwi-pinyin.svg?branch=master)](https://www.travis-ci.org/siwilizhao/siwi-pinyin)
[![npm](https://img.shields.io/npm/v/siwi-pinyin.svg)](https://www.npmjs.com/package/siwi-pinyin)
[![npm](https://img.shields.io/npm/dt/siwi-pinyin.svg)](https://www.npmjs.com/package/siwi-pinyin)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-pinyin/lib/index.js.svg)](https://github.com/siwilizhao/siwi-pinyin/lib/index.js)
# siwi-pinyin

hanzi to pinyin for nodejs 

## install

> yarn add siwi-pinyin

> npm install siwi-pinyin

## test

```js
const expect = require('chai').expect
describe('/lib/index.js', () => {
    it('convert',async () => {
        const pinyin = require('../index')
        const hanzi = '还好，欢迎光临';
        const res = await pinyin.convert(hanzi)
        console.log(res)
        expect(res).to.be.equal('hái hǎo ，huān yíng guāng lín ')
    });
});
```