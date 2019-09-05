const names = require('../modles/names')

const filter = personName => {
    const namesObj = new Set();

    names.forEach(person => {
        if(person.name.toLowerCase().startsWith(personName.toLowerCase())){
            namesObj.add(person.name)
        }
    });
    return Array.from(namesObj)
}

module.exports = filter;