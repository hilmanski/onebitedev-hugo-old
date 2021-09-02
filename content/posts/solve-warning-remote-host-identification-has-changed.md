---
title: "Solve Warning: REMOTE HOST IDENTIFICATION HAS CHANGED"
description: "You can't access your remote host? and the error WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED or IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY shows up? this is how to solve it"
date: 2021-09-02T00:51:00.000Z
topic: [unix,shell]
series: [""]
draft: false
---
Do you got an error that remote host can't be accessed? like this?
"It is also possible that a host key has just been changed."
```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:XXXX.
Please contact your system administrator.
...
ECDSA host key for XXXX has changed and you have requested strict checking.
Host key verification failed....
```

To solve this,
We can delete the offending key from the known_hosts
```
ssh-keygen -R "HOST IP ADDRESS"
```



