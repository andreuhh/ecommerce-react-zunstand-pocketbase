/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // add field
  collection.fields.addAt(3, new Field({
    "exceptDomains": [],
    "help": "",
    "hidden": false,
    "id": "url3746958336",
    "name": "tmb",
    "onlyDomains": [],
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "exceptDomains": [],
    "help": "",
    "hidden": false,
    "id": "url3150104748",
    "name": "img",
    "onlyDomains": [],
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4092854851")

  // remove field
  collection.fields.removeById("url3746958336")

  // remove field
  collection.fields.removeById("url3150104748")

  return app.save(collection)
})
