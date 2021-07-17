---
date: "2019-08-29T16:00:00+00:00"
description: "Learn How to get random collection /data in firebase firestore"
topic: ["firebase"]
title: "How to get random collection /data in firebase firestore"
--- 
Firebase has a bunch of feature that really help us, but it still lack some of minor things, like how to get a random collection in your data when you are using firebase firestore. Let's learn how to get random collection /data in firebase firestore with a _hacky way_

```
const ref = db.collection(COLLECTION_NAME).doc();
var items = []
db.collection(COLLECTION_NAME).where(admin.firestore.FieldPath.documentId(), '>', ref.id)
    .get().then(snapshot => {
            snapshot.forEach(doc => { items.push({  
                    data: doc.data()  
            });

                console.log(items) 
        })
```

notes:  
//admin is from firebase admin  
admin   = require('firebase-admin'),