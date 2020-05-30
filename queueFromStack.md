
# Implement a Queue datastructure using two stacks
## First thing is create 2 stack. When ever we create an instance of this Queue

Stack1 + Stack2 = Queue

## Add method
```
         ________________                ___________________   
Green   |                |              |                   |
Blue    |                |              |                   |
Red     |                |              |                   |
        |                |              |                   |
         ----------------                -------------------
            Stack A                             Stack B

         ________________                ___________________   
        |                |              |                   |
        |      Red       |              |                   |
        |      Blue      |              |                   |
        |     Green      |              |                   |
         ----------------                -------------------
            Stack A                             Stack B


            Remember, we want a Queue, so follow
                    'First In First Out'

```
## Remove method
- pop out from Stack A
- push to Stack B
- peek to see if there are any records left that we can manipulate
- pop (Green) out from Stack B one time And there is our record.
- To get ready for our next operation because who knows it might be a remove operation again in whichcase we will want to move everything over to stack B again.
- So before we return Green we will call peak
- peek to see if any thing left in Stack B
- Then pop out from Stack B push to Stack A
- peek to see if any thing left in Stack B
- return from the Remove method.
```
         ________________                ___________________   
        |                |              |                   |
        |      Red       |              |                   |
        |      Blue      |              |                   |
        |     Green      |              |                   |
         ----------------                -------------------
            Stack A                             Stack B

         ________________                ___________________   
        |                |              |                   |
        |                |              |      Green        |
        |                |              |       Blue        |
        |                |              |        Red        |
         ----------------                -------------------
            Stack A                             Stack B


                                                            Green
                                                          ^   
                                                         /   
                                                        / pop
         ________________                ___________________   
        |                |              |                   |
        |                |              |                   |
        |                |              |       Blue        |
        |                |              |        Red        |
         ----------------                -------------------
            Stack A                             Stack B

            Remember, we want a Queue, so follow
                    'First In First Out'
```