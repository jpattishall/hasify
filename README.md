# hasify

## Overview

`hasify` is a utility function that extends an object with a `has` method, allowing to easily check for nested child elements. So, instead of this:

    if (obj && obj.child && obj.child.property && obj.child.property.value) {
        // do stuff!
    }

You get this:

    if (obj.has('child.property.value')) {
        // do stuff!
    }

In addition, you can use `hasify` as a standalone utility function.

    if (hasify(obj, 'child.property.value')) {
        // do stuff!
    }

## Usage

As a standalone function, hasify allows you to pass an object and string to determine if the object has nested children.

    var has = require('hasify');
    var obj = {};

    obj.name = {};
    obj.name.value = 1;

    console.log(has(obj, 'name')); // logs 'true'
    console.log(has(obj, 'name.value')); // logs 'true'
    console.log(has(obj, 'name.value.nope')); logs 'false'

If preferred, `hasify` can extend an object with a `has` method, as shown below:

    var hasify = require('hasify');
    var restful = require('our-totally-cool-service');

    restful.make('user', 'password', function(err, res) {
        if (!err) {
            hasify(res);
            
            if (res.has('user.last.accessed')) {
                // continue
            } else {
                // new instance
            }
        }
    });

Finally, `hasify` also allows object instantiation with a helper `has` method.

    var token = hasify();
    token.user = syncLogUserIn(userAuthObj);

    if (token.has('user.isLoggedIn')) {
        // Do stuff...
    }

## Installation

`hasify` can easily be installed via npm.

    npm install hasify --save

