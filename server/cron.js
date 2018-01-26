const Op = require('sequelize').Op;
const {Event} = require('./db/models');

/* the inner function (closure) is supposed to set maxVal based on the maximum
id in the SQL table; and if the maxVal is higher than currMaxIdx, then I 
would reset currMaxIdx and do another query (shown as commented out below) that would only
return new rows in my SQL table - which will be the rows that have id higher
than previous currMaxIdx

But as you can see, I ran into trouble doing the query to the SQL table

*/

async function cronFunc() {
    let currMaxIdx = -1;
    return function() {
        let maxVal = await Event.max('id');
        console.log('max ', maxVal)
    }
//         Event.findAll({
//             attributes: ['id', 'name', 'location'],
//             where: {
//                 id: {
//                     [Op.gt]: currMaxIdx
//                 }
//             }
//           })
//             .then(events => JSON.parse(JSON.stringify(events)))
//             .then(myEvents => {
// PSEUDO-CODE: myEvents would be an array containing rows with new events
// that would be sent to EventBrite or any of Pulsd other vendors
//                 })
//             })
//             .catch(err => console.log(err))
//     }
}

module.exports = cronFunc;