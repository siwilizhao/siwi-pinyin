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