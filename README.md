# AngularJS PetStore

AngularJS PetStore Client Demo Implementation. 

See live demo at [Julia PetStore](http://ipassynk.github.io/petstore-client)

Implements the following api:
* find pet by id
* delete a pet
* create a pet

The purpose of this application is to show angular capabilities. 
The application does not persist newly created pets but always returns the same mock.

The applications uses:

* route-ui for routing between home and add pages
* mocke2e for mocking all api
* 9 unit tests for controllers, directives
* Accessibility for thumbnail that is controller by search button, hidden areas, busy button 


To run with petstore-server
-------------------------------------

Start petstore-server (see my repository) and run gulp serve that will use it to serve

To run with mockeE2E
-------------------------------------
```
gulp serve --mock
```

To run unit tests in spec html runner
-------------------------------------
```	
gulp serve:specs
```



