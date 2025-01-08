```javascript
//Correct usage of $in operator with ObjectId
const ObjectID = require('mongodb').ObjectID;
db.collection.find({ _id: { $in: [new ObjectID("123"), new ObjectID("456")] } });
```