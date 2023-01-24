---
title: "How to auto delete files in AWS s3 every X times interval in Nodejs"
description: "Here is how you can auto delete files from certain bucker in AWS s3 storage every X times interval in Nodejs, whether less than a day, an hour or any time you choose"
date: 2023-01-24T02:57:00.000Z
topic: [aws]
series: [""]
draft: false
---
Here is how you can auto delete files from certain bucker in AWS s3 storage every X times interval in Nodejs, whether less than a day, an hour or any time you choose

## Raw logic to choose which files to delete
Not like MYSQL query, where we have a `where` clause to run on a query. We have to implement a different strategy for AWS. 

The big picture:
- List all the files
- Collect only where files older than X times
- Put Keys of selected files in an array
- delete objest based on this paramter (array of keys)

## Initalize the AWS S3
Assume you have .env file to store the sensitive informations
```
import AWS from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config()

const s3 = new AWS.S3({
    endpoint: process.env.DO_SPACES_FILE_ENDPOINT,
    accessKeyId: process.env.DO_SPACES_KEY_ID,
    secretAccessKey: process.env.DO_SPACES_SECRET_ACCESS_KEY,
    region: process.env.DO_SPACES_REGION,
})
```

## Collect all keys from selected bucket and folder
List all the files
```
const params = {
    Bucket: process.env.DO_SPACES_BUCKET || '',
    Prefix: 'user-upload-folder/',
}

const data = await s3.listObjectsV2(params).promise()
```
Now we have all files, in selected bucket and folder.
`user-upload-folder` is my sample of folder's name.
If you want to check files in all folders, then you can let prefix empty.

## Filter only items less than X days
Now, we have all the files in `data.Contents`.
```
const keys = data.Contents?.map((item) => {
    // exception for the folder
    if (item.Key === 'user-upload-folder/') {
        return
    }

    const fileTime = item.LastModified?.getTime()
    const currentTime = new Date().getTime()
    console.log('fileTime: ', fileTime)

    // if file is older than 1 hour
    if (fileTime && currentTime - fileTime > 3600000) {
        return { Key: item.Key }
    }
})
```

- we loop with map function
- we exclude the folder name
- check if time older than 1 hour. Feel free to change the time `3600000` based on time you want to checked.
- Collect only items with following structure `{Key: $key_object}`

## Clean up our objects
Since on our loop, we potentially have null values, let's filter it with
```
// remove null from keys array
//  Used for folder name . to not remove the folder
const filteredKeys = keys?.filter((item) => item !== undefined)
```

## Magic part: delete!
Now the moment we've been waiting. Let's delete this keys from cleaned up data

* I use typescript, so you'll see some typed object

```
// prepare the data (correct parameter needed)
const deleteParams = {
    Bucket: process.env.DO_SPACES_BUCKET || '',
    Delete: {
        Objects: filteredKeys,
        Quiet: false,
    },
} as AWS.S3.DeleteObjectsRequest

try {
    const responseDelete = await s3
        .deleteObjects(deleteParams)
        .promise()
    console.log('Successfully deleted files')
    console.log(responseDelete)
    return res.status(200).json({ data: responseDelete })
} catch (error) {
    console.log('Failed to delete files')
    console.log(error)
}
```

## How to auto run ?
You can hit the endpoint where you have all the logics above with a [CRON](https://en.wikipedia.org/wiki/Cron).

Once your endpoint is online, you can use any service you want to hit the endpoint on the interval necessary for your case. For example you can use [cron-job or for free](https://cron-job.org/en/)

That's it!

