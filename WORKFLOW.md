\### Task 1
!\[Task 1 - Push from Clone A](screenshots/Task1.png)



\### Task 2: Diverge from Clone B — rejected push

!\[Task 2](screenshots/Task2.png)



\### Task 3: Reconcile with a merge

!\[Task 3](screenshots/Task3.png)

!\[Task 3](screenshots/Task3.1.png)



\### Task 4: Diverge again — reconcile with a rebase

!\[Task 4](screenshots/Task4.png)



\### Task 5: Merge into main

!\[Task 5](screenshots/Task5.png)



\### Task 6: Tag and push

!\[Task 6](screenshots/Task6.png)

!\[Task 6](screenshots/Task6.1.png)



\### Questions
1. What did the rejected push error message tell you, and why did it happen?
The rejected push error messages told me that my local branch had missing work, and that clone a pushed overtime pay first with clone b pushing another version of it.

2\. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?
Merge helped me merge commit with two new parents, rebase basically pasted/replanted it on top of the updated remote branch.

3\. What one habit would have avoided both rejected pushes in this lab?
Running git fetch before starting a new work on a shared branch.

4\. Which approach — merge or rebase — would you default to on a shared team branch, and why?

I'd choose merge, since it won't rewrite commit history. 

