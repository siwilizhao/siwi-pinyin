/**
 * @author [siwi]
 * @email [siwi@siwi.me]
 * @create date 2017-09-06 11:14:14
 * @modify date 2017-09-06 11:14:14
 * @desc [description]
*/
const Load = require('siwi-json')
const path = require('path')

const dicts = {
    path: path.join(__dirname, 'dict2'),
    one: path.join(__dirname, 'dict2', 'word_1.json'),
    two: path.join(__dirname, 'dict2', 'word_2.json'),
    three: path.join(__dirname, 'dict2', 'word_2.json'),
    four: path.join(__dirname, 'dict2', 'word_4.json')
}
class Pinyin {
    constructor() {
    }
    async convert(str) {
        let length = str.length
        if (length == 4) {
            let res = await this.fourWordMap(str)
            if (res) return res
            
            let pinyin = ''
            for (let key in str) {
                pinyin += await this.oneWordMap(str[key])
            }
            return pinyin
        }
        if (length == 3) {
            let res = await this.threeWordMap(str)
            if (res) return res
            let pinyin = ''
            for (let key in str) {
                pinyin += await this.oneWordMap(str[key])
            }
            return pinyin
        }
        if (length == 2) {
            let res = await this.twoWordMap(str)
            if (res) return res
                
            let pinyin = ''
            for (let key in str) {
                pinyin += await this.oneWordMap(str[key])
            }
            return pinyin
        }
        if (length == 1) {
            let res = await this.oneWordMap(str)
            if (res) return res
        }
        let pinyin = ''
        for (let key in str) {
            pinyin += await this.oneWordMap(str[key])
        }
        return pinyin
    }
    async fourWordMap(str) {
        const dictionary = Load.getJson(dicts.four)
        const myMap = new Map(dictionary)

        if (myMap.has(str)) {
            return myMap.get(str)
        } else {
            return false
        }
    }
    async threeWordMap(str) {
        const dictionary = Load.getJson(dicts.three)
        const myMap = new Map(dictionary)

        if (myMap.has(str)) {
            return myMap.get(str)
        } else {
            return false
        }
    }
    async twoWordMap(str) {
        const dictionary = Load.getJson(dicts.two)
        const myMap = new Map(dictionary)

        if (myMap.has(str)) {
            return myMap.get(str)
        } else {
            return false
        }
    }
    async oneWordMap(str) {
        const dictionary = Load.getJson(dicts.one)
        const myMap = new Map(dictionary)

        if (myMap.has(str)) {
            return myMap.get(str)
        } else {
            return str
        }
    }

}

module.exports = new Pinyin()