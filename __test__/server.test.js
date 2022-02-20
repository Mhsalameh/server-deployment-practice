`use strict`

const supertest = require('supertest');
const server = require(`../server.js`)

const request = supertest(server.app);

describe("Starting test", ()=>{

    it('testing /', async()=>{
        const response = await request.get('/');
        expect(response.status).toEqual(200);
    })


    it('testing /data', async()=>{
        const response = await request.get('/data')
        expect(typeof response.body).toEqual('object')
    })
})