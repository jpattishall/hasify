#hasify

## Overview

`hasify` is a utility that extends an object with a `has` method, allowing to easily check for nested child elements. So, instead of this:

    if (obj && obj.child && obj.child.property && obj.child.property.value) {
        // do stuff!
    }

You get this:

    if (obj.has('child.property.value')) {
        // do stuff!
    }

##Usage

    var hasify = require('hasify');
    var restful = require('our-totally-cool-service');

    restful.make('user', 'password', function(err, res) {
        hasify(res);
        
        if (res.has('user.last.accessed')) {
            // continue
        } else {
            // new instance
        }
    });

`hasify` also allows object declaration with a helper has method.

    var objectBeingPassed = hasify();
    objectBeingPassed.has('this.will.return.false'); // It's a new object!

