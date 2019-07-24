# Deloitte_JS_Training

To run any of these ise
`node filename`


__Inheritance in JS__
    
    JS is loosely typed, 
    what matters about an object is what it can do, not where it came from."
    Objects inherit from other objects


    Important words are `prototype`
     - New function Object
         - Is given a prototype property
             - whose value is an object
                 - containing a constructor property
                     - whose value is the new function object

    The prototype object is the place where the inherited traits are to be deposited
    The constructor 

    var PrototypeObject = function () {
        this.name = 'Prototype Name';
        this.behaviour = 'Prototype Behaviour';
   
    }
    PrototypeObject.prototype.getName = function () {
        console.log(this.name);
    } 

    var prototypeInstance = new PrototypeObject;
    prototypeInstance.getName();
    
    -----------------------------------------------
