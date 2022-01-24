const Safe = require('./safe');

let safe  = new Safe('safe.dat', '0705814794');

let data = {
    private_keys:[
        '398r2hr48y8hnhriueruerhiuhihiugfigegv',
        'fdhjdfihjdfhuyuyuyueriuegfiuerugyergyuer',
        'dfjhrhuerbhufbhfvubhfbubuerbhufvbhuhvfbhuefbhu'
    ]
}

safe.encryptAsynch(data).then(result=> {
    return safe.descryptAsynch()
}).catch(eror=> console.log(eror))