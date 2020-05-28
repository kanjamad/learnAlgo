# Stack
we are dealing with an order list of records and can imagine that those records are living inside of some container
# First In Last Out
# FILO

```
 ______                  ______
|Record|                |Record|
 ------                  ------  
   |                      ^
    \                     |
     |                   /
Push V                  /   Pop
     --------------------
    |                    |
    |                    |
    |                    |
    |       ______       |
    |      |Record|      |
    |       ------       |
    |       ______       |
    |      |Record|      |
    |       ------       |
    |       ______       |
    |      |Record|      |
    |       ------       |
    ----------------------
```
# Stack Methods
* push --> Add a record to the stack
* pop ---> Remove the "top" record in the stack
* peek --> Return the "top" record without popping it

```
 _______    _______              
|   D   |  |   E   |       
 -------    -------                
   |                      
    \                     
     |                   
Push V                  
     --------------------
    |                    |
    |                    |
    |                    |
    |       ______       |
    |      |  C   |      |
    |       ------       |
    |       ______       |
    |      |  B   |      |
    |       ------       |
    |       ______       |
    |      |  A   |      |
    |       ------       |
    ----------------------



                     _______
                    |   C   |
                     -------  
                       ^
                       |
                       /
                      /   Pop
     --------------------
    |                    |
    |                    |
    |                    |
    |                    |
    |                    |
    |       ______       |
    |      |  B   |      |
    |       ------       |
    |       ______       |
    |      |  A   |      |
    |       ------       |
    ----------------------
```
#### Last record in the last one to come out