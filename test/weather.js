const chai = require('chai');
const expect = require('chai').expect;
const weather = require('openweather-apis');
const assert = require('assert');
const cmd = require('../cmd');

const myAPPID = '05008d950a0652216170b875a4545719';

describe('Settings :', function(){
    it('Should set the APPID', function(){
        weather.setAPPID(myAPPID);
        chai.assert.equal(myAPPID, weather.getAPPID());
    })

    it('Should pass a city', async function(){
        const cliProcess = cmd.create('../bin/index.js');

        const response = await cliProcess.execute(
            `${cliProcess}`,
            ['--c', 'Ceiba']
        );

        console.log(response);
    })
})

