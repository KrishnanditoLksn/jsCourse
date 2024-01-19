import {promisify} from 'util';

function getProvinces(countryId, callback) {
    setTimeout(() => {
        if (countryId === 'id') {
            callback(null, [
                {id: 'id-jk', name: 'Jakarta'},
                {id: 'id-bt', name: 'Banten'},
                {id: 'id-jr', name: 'Jawa Barat'},
            ]);
            return;
        }

        callback(new Error('Country not found'), null);
    }, 1000);
}

const getProvincesPromise = promisify(getProvinces)

getProvincesPromise("id")
    .then((provinces) => {
        console.log(provinces)
    })
    .catch((err) => {
        console.log(err.message)
    });

module.exports = {getProvinces: getProvincesPromise}