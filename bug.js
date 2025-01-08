```javascript
//Incorrect usage of $in operator with ObjectId
db.collection.find({ _id: { $in: ["123", "456"] } });
```