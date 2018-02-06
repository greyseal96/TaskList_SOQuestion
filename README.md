# TaskList
This is a simple TaskList web application which was based on the Aurelia ContactManager tutorial.

The purpose of the code in this repository is to demonstrate a [question asked on StackOverflow](https://stackoverflow.com/questions/48467362/aurelia-help-understanding-some-binding-behavior-that-im-seeing "SO question link").

This demo code was using node 7.7.4.

To see the issue referenced in the question:
1. Run `au run --watch`
2. Select any task by clicking on its row in the table.
    - For the purpose of this demo, just select the first task.
3. Look at the task detail view which comes up on the right hand side.
    - In the task detail view, beneath the Description text box, there is some text in the following form: "Dates: | < some date > | < another date >"
        * e.g. "Dates: | 12/25/2017 | 1/25/2018".
    
        Pay attention to that text while performing the next step.
4. Select any other task by clicking on its row in the table.
5. Look at the task detail view on the right hand side.
    - In the task detail view, look at the "Dates" text beneath the Description text box.  Now, it has something like:
    
        "Date: | | "
6. Make a note of which task is selected and then click the <kbd>Cancel</kbd> button at the bottom of the task detail view.
    - This will clear out the current task detail view and replace it with another component.
7. Click the task which was previously selected.
    - In the task detail view, look at the "Dates" text beneath the Description text box.  It one again has dates in it.