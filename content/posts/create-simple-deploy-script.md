---
title: "Create simple deploy script"
description: "Learn how to create a simple deploy script, to automate your code deployment when using git or any other things in command"
date: 2021-07-16T23:09:00.000Z
topic: [bash, productivity, git]
---
How many times a day did you do this

```
git add .
git commit -m "commit msg"
git push origin branchName
```

It's my ritual every time I want to push change on remote git repository. As a developer, we always need to find a way how to make our life easier by using our main principle "Don't Repeat Yourself"

## Create a deploy script

Learn how to create a simple deploy script, to automate your code deployment when using git or any other things in command. Create a file name "deploy.sh"

Then move our commands there
```
git add .
git commit -m "commit msg"
git push origin branchName
```
Now, every time we want to push a message, in command line just type 
```
./depoy.sh
```

## Make our deploy message dynamic

With instruction before, we'll always have the same commit message. We need to accept an argument, to make it dynamic. At our deploy.sh file

```
git add .

msg="update site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi

git commit -m "$msg"

git push origin master
```

We create a $msg variable with current date as default value. But if we want to commit with specific message, now we can just do this 

```
./depoy.sh "our script works!"
```

## Can not execute deploy.sh file?

If you encounter a problem, where you can't execete this deploy.sh file, make sure you have the right permission to execute. In my case, I just normally do
```
chmod +x deploy.sh
```


