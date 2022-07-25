const clanSch = require('../models/clanModel.js').model

const getAllcatalog = async () => {
  try {
    count = await clanSch.countDocuments()
    clan = await clanSch.find() //.skip(skip).limit(limit)
    console.log(clan)
  } catch (error) {
    console.log(error)
  }
}

const addItem = async () => {
  const task = new clanSch({
    foo: 'fdsf',
    bar: 'sdfsd',
  })
  await task.save()
}

module.exports.getAllcatalog = getAllcatalog
module.exports.addItem = addItem
