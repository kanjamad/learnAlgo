## Data Structures
* Ways of organizing information with optimal ' runtime complexity ' for adding or removing records
* JavaScript natively implements several data structures. 

## 1. Queue

### First In Frist Out
### F-I-F-O

```
            | - - - - - - - - - - - - - - - - - -|
Person -->  |    Person --> Person --> Person -->| Preson --> Ticketing Counter     
            | - - - - - - - - - - - - - - - - - -|
    Enqueuing or adding                             Dequeuing or removing
```

* Can be thought of as like a container of sorts where records or pieces of data enter on one N of this container and then exit on the other 
* Think of like wating in line to buy tickets from some ticking counter
* No skipping or cutting in line

```
 - -        - - - - - - - - - -
| A | --> |                    | --> Nothing ion queue
 - -        - - - - - - - - - -

 - -        - - - - - - - - - -
| B | --> |         A          | --> 'A' added
 - -        - - - - - - - - - -

            - - - - - - - - - -
            |       B  --> A    | --> 'B' added
            - - - - - - - - - -

            - - - - - - - - - -         - -
            |         B         | -->  | A |   'A' removed
            - - - - - - - - - -         - - 

```
* So when working with javaScript we don't have a thing as a rudimentary queue
* We have javaScript Array

```
        Queue                               javaScript Array
---------------------------------------------------------------------        
    Add to queue                              array.unshift();
    Remove from queue                         array.pop();           

```



```
* Make a queue with javaScript array
* Empty array
* Array has all different methods But we use just unshift and pop. we will try to hide access to all these methods that belong to the array


                        Queue Class
         ___________________________________________________
        |   ______________________________                  |
        |  |                |    Shift    |     _ _ _       |
        |  |                |    Unshift -|--> | add |      |
        |  |                |    push     |     - - -       |
        |  |      Array     |    pop    - |--> | remove |   |
        |  |                |    splice   |                 |
        |  |                |    slice    |                 |
        |   ------------------------------                  |
        |___________________________________________________


```

```
Create by making a queue

                    To...                 |               Run this 
        ----------------------------------|-----------------------------------
        Create a new empty queue          |          const q = new Queue();
        ----------------------------------|-----------------------------------
        Add a record to a queue           |             q.add(1);
        ----------------------------------|-----------------------------------
    Remove record at the end of a queue   |             q.remove();
        ----------------------------------|-----------------------------------
```

