
export const notesChapters = [
  {
    id: "collections",
    number: "01",
    title: "Data Structures & Memory",
    pages: "1",
    summary: "Lists, tuples, indexing, mutability and object references.",
    lessons: [
      {
        title: "Lists and Tuples",
        pages: "1",
        description:
          "We started with lists and tuples and discussed how both store collections of values. The interesting difference was that a list can be changed after creation, while a tuple cannot.",
        points: [
          "Lists use square brackets; tuples usually use parentheses.",
          "Both support indexing and preserve element order.",
          "Lists are mutable, so append() can add a new element.",
          "Tuples do not provide an append() method.",
        ],
        codeLabel: "Reconstructed from classroom example",
        code: `x = [1, 2, 3]
y = (1, 2, 3)

x.append(100)

print(x)
print(y)
print(x[1])`,
        output: `[1, 2, 3, 100]
(1, 2, 3)
2`,
        takeaway:
          "I understood why choosing the right data structure matters when values may need to change.",
      },
      {
        title: "Indexing and References",
        pages: "1, 15",
        description:
          "We discussed accessing elements using indexes and how Python variables refer to objects in memory.",
        points: [
          "Indexing starts from zero.",
          "Negative indexes access values from the end.",
          "Two names can refer to the same list object.",
          "Changing a shared mutable object can be visible through both names.",
        ],
        codeLabel: "Clarified example based on notebook concepts",
        code: `x = [10, 20, 30]
y = x

y[0] = 99

print(x)
print(y)
print(x is y)`,
        output: `[99, 20, 30]
[99, 20, 30]
True`,
        takeaway:
          "Assigning one list to another variable does not automatically create an independent copy.",
      },
    ],
  },
  {
    id: "functions",
    number: "02",
    title: "Functions & Functional Python",
    pages: "2–5",
    summary:
      "Functions, arguments, lambda, map, filter, reduce and sorting.",
    lessons: [
      {
        title: "Functions and Arguments",
        pages: "2–3",
        description:
          "We learned to organize reusable instructions using functions, then explored different ways to pass values to them.",
        points: [
          "Parameters are named in the function definition.",
          "Arguments are supplied when calling the function.",
          "Default values are used when an optional argument is omitted.",
          "Keyword arguments allow values to be passed by name.",
          "*args collects extra positional arguments.",
        ],
        codeLabel: "Cleaned classroom examples",
        code: `def display(name, age=35):
    print("Name:", name)
    print("Age:", age)

display(name="pallu")

def total(*numbers):
    return sum(numbers)

print(total(2, 4, 6))`,
        output: `Name: pallu
Age: 35
12`,
        takeaway:
          "I liked how default and keyword arguments made functions easier to reuse.",
      },
      {
        title: "Lambda Functions",
        pages: "4",
        description:
          "A lambda is a small anonymous function written using a single expression. We connected it with conditions and higher-order functions.",
        points: [
          "A lambda is written using the lambda keyword.",
          "It can take multiple arguments.",
          "It contains one expression rather than a block of statements.",
        ],
        codeLabel: "Reconstructed short example",
        code: `square = lambda x: x ** 2

print(square(5))

check_age = lambda age: age >= 18
print(check_age(20))`,
        output: `25
True`,
        takeaway:
          "A short operation can sometimes be expressed without a full def block.",
      },
      {
        title: "map(), filter() and reduce()",
        pages: "4–5",
        description:
          "These functions introduced different ways of processing values in an iterable.",
        points: [
          "map() transforms each element.",
          "filter() keeps elements that satisfy a condition.",
          "reduce() combines values into one accumulated result.",
          "map() and filter() produce iterators in Python 3.",
        ],
        codeLabel: "Runnable reconstruction of notebook concepts",
        code: `from functools import reduce

numbers = [1, 2, 3, 4, 5]

squares = list(map(lambda x: x * x, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
product = reduce(lambda x, y: x * y, numbers)

print(squares)
print(evens)
print(product)`,
        output: `[1, 4, 9, 16, 25]
[2, 4]
120`,
        takeaway:
          "I learned the difference between transforming, selecting and combining elements.",
      },
      {
        title: "sorted() and reversed()",
        pages: "5",
        description:
          "We explored how elements can be arranged or visited in a different order.",
        points: [
          "sorted() creates a new sorted list.",
          "reversed() returns a reverse iterator for a sequence.",
          "Both can be used without changing the original list.",
        ],
        codeLabel: "Illustrative example from notebook topic",
        code: `values = [5, 1, 4, 2]

print(sorted(values))
print(list(reversed(values)))
print(values)`,
        output: `[1, 2, 4, 5]
[2, 4, 1, 5]
[5, 1, 4, 2]`,
        takeaway:
          "Sorting values and reversing their existing order are not the same thing.",
      },
    ],
  },
  {
    id: "iterators",
    number: "03",
    title: "Iterators, Itertools & Generators",
    pages: "9–14",
    summary:
      "iter(), next(), itertools, combinations, permutations and yield.",
    lessons: [
      {
        title: "Iterable vs Iterator",
        pages: "9",
        description:
          "We discussed how a for loop gets values one by one from an iterable and how iterators keep track of progress.",
        points: [
          "An iterable can provide an iterator.",
          "iter() creates or retrieves an iterator.",
          "next() requests the next available value.",
          "StopIteration signals that no more values remain.",
        ],
        codeLabel: "Clarified classroom example",
        code: `numbers = [10, 20, 30]

it = iter(numbers)

print(next(it))
print(next(it))
print(next(it))`,
        output: `10
20
30`,
        takeaway:
          "An iterator remembers which values have already been produced.",
      },
      {
        title: "itertools: count(), cycle() and accumulate()",
        pages: "10–12",
        description:
          "The itertools module gives us ready-made iterator tools, including some that can continue indefinitely.",
        points: [
          "count() produces numbers in a sequence.",
          "cycle() repeats values from an iterable.",
          "accumulate() gives running accumulated results.",
          "Infinite iterators need a stopping condition when used in loops.",
        ],
        codeLabel: "Completed demonstration",
        code: `import itertools

counter = itertools.count(1)

for _ in range(3):
    print(next(counter))

values = [1, 2, 3, 4]
print(list(itertools.accumulate(values)))`,
        output: `1
2
3
[1, 3, 6, 10]`,
        takeaway:
          "Iterator tools can help us express repetitive operations more clearly.",
      },
      {
        title: "Combinations and Permutations",
        pages: "12",
        description:
          "We explored how itertools can generate arrangements and selections from a set of values.",
        points: [
          "Permutations consider order.",
          "Combinations select values without considering order.",
          "Both return iterators.",
        ],
        codeLabel: "Reconstructed example",
        code: `from itertools import permutations, combinations

letters = ["A", "B", "C"]

print(list(permutations(letters, 2)))
print(list(combinations(letters, 2)))`,
        output: `[('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]
[('A', 'B'), ('A', 'C'), ('B', 'C')]`,
        takeaway:
          "The same values can produce different outcomes depending on whether order matters.",
      },
      {
        title: "More Itertools Functions",
        pages: "13",
        description:
          "My notes mention chain(), compress(), dropwhile(), filterfalse() and starmap().",
        points: [
          "chain() combines multiple iterables into one sequence.",
          "compress() selects values using a Boolean selector.",
          "dropwhile() skips initial values while a condition remains true.",
          "starmap() calls a function using unpacked argument tuples.",
        ],
        codeLabel: "Small runnable examples",
        code: `import itertools

print(list(itertools.chain([1, 2], [3, 4])))

print(list(itertools.compress(
    ["A", "B", "C"],
    [True, False, True]
)))

print(list(itertools.starmap(
    lambda a, b: a + b,
    [(1, 2), (3, 4)]
)))`,
        output: `[1, 2, 3, 4]
['A', 'C']
[3, 7]`,
        takeaway:
          "These utilities can reduce the need for manually written loops.",
      },
      {
        title: "Generators and yield",
        pages: "14",
        description:
          "We wrote about generators and how yield produces a value while allowing a function to resume later.",
        points: [
          "A generator function contains yield.",
          "Calling it returns a generator object.",
          "Values are produced as iteration proceeds.",
          "Local state is preserved between yields.",
        ],
        codeLabel: "Illustrative completion; original sequence is faint",
        code: `def my_generator(n):
    for value in range(n):
        yield value

for item in my_generator(3):
    print(item)`,
        output: `0
1
2`,
        takeaway:
          "Generators were interesting because values can be produced one at a time.",
      },
    ],
  },
  {
    id: "oop",
    number: "04",
    title: "Classes & Objects",
    pages: "15–16",
    summary:
      "Instances, self, constructors, copying objects and method overloading.",
    lessons: [
      {
        title: "Classes, Objects and self",
        pages: "15",
        description:
          "We looked at how a class acts as a blueprint and how different objects can store their own data.",
        points: [
          "A class groups data and related methods.",
          "An object is an instance of a class.",
          "self refers to the current instance in instance methods.",
          "__init__() initializes object attributes.",
        ],
        codeLabel: "Reconstructed Student example",
        code: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def display(self):
        print(self.name, self.age)

student1 = Student("Soumya", 20)
student1.display()`,
        output: `Soumya 20`,
        takeaway:
          "I understood how each object can hold its own information.",
      },
      {
        title: "Copying Objects",
        pages: "15–16",
        description:
          "We discussed object references and copying. The notebook also mentions a custom copy-constructor idea.",
        points: [
          "Assignment can create another reference to the same object.",
          "copy.copy() creates a shallow copy.",
          "copy.deepcopy() recursively copies nested objects when appropriate.",
          "A custom copying method can define how objects are duplicated.",
        ],
        codeLabel: "Corrected conceptual example",
        code: `import copy

original = [[1, 2], [3, 4]]

shallow = copy.copy(original)
deep = copy.deepcopy(original)

original[0][0] = 99

print(shallow[0][0])
print(deep[0][0])`,
        output: `99
1`,
        takeaway:
          "This connected nicely with our classroom quiz about shallow copy and deep copy.",
      },
      {
        title: "Method Overloading with Default Values",
        pages: "16",
        description:
          "The notebook uses optional parameters to demonstrate how a method can accept different numbers of values.",
        points: [
          "Python does not overload methods by signature in the traditional Java-style way.",
          "Default parameters can support multiple calling patterns.",
          "A later definition with the same method name replaces the earlier one.",
        ],
        codeLabel: "Corrected runnable method example",
        code: `class MathOperations:
    def add(self, a, b, c=0):
        return a + b + c

obj = MathOperations()

print(obj.add(5, 10))
print(obj.add(5, 10, 15))`,
        output: `15
30`,
        takeaway:
          "Optional parameters are one useful way to handle different input counts.",
      },
    ],
  },
  {
    id: "concurrency",
    number: "05",
    title: "Multiprocessing & Multithreading",
    pages: "6–8, 17–19",
    summary:
      "Processes, thread pools, futures, timing, priority queues and locks.",
    lessons: [
      {
        title: "Starting Processes",
        pages: "6–8",
        description:
          "We explored multiprocessing and the roles of start() and join(). My notes also include examples measuring execution time.",
        points: [
          "Process() creates a process object.",
          "start() begins execution.",
          "join() waits for a process to finish.",
          "Separate processes generally have separate memory spaces.",
        ],
        codeLabel: "Completed Windows-compatible example",
        code: `from multiprocessing import Process
import time

def do_something():
    time.sleep(1)
    print("Done sleeping")

if __name__ == "__main__":
    p1 = Process(target=do_something)
    p2 = Process(target=do_something)

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    print("Finished")`,
        output: `Done sleeping
Done sleeping
Finished`,
        takeaway:
          "start() begins the processes and join() makes the main process wait.",
      },
      {
        title: "ThreadPoolExecutor and Futures",
        pages: "17–18",
        description:
          "We used concurrent.futures to understand how tasks can be submitted and how their results are collected.",
        points: [
          "ThreadPoolExecutor manages a group of worker threads.",
          "submit() schedules a callable and returns a Future.",
          "future.result() waits for and retrieves the result.",
          "as_completed() yields futures as they finish.",
        ],
        codeLabel: "Completed classroom-style example",
        code: `from concurrent.futures import ThreadPoolExecutor

def square(n):
    return n * n

with ThreadPoolExecutor(max_workers=2) as executor:
    future1 = executor.submit(square, 4)
    future2 = executor.submit(square, 5)

    print(future1.result())
    print(future2.result())`,
        output: `16
25`,
        takeaway:
          "I found it interesting that futures represent results which may not be ready immediately.",
      },
      {
        title: "PriorityQueue and Synchronization",
        pages: "19",
        description:
          "These were quick points in the notebook, and we also explained them through our kitchen-themed storyboard.",
        points: [
          "PriorityQueue retrieves the lowest-priority-number entry first by default.",
          "Queue operations are thread-safe.",
          "Locks can protect additional shared state.",
          "Task priority is different from the operating system's thread priority.",
        ],
        codeLabel: "Short conceptual demonstration",
        code: `from queue import PriorityQueue

tasks = PriorityQueue()

tasks.put((3, "Low priority task"))
tasks.put((1, "High priority task"))
tasks.put((2, "Medium priority task"))

while not tasks.empty():
    priority, task = tasks.get()
    print(priority, task)
    tasks.task_done()`,
        output: `1 High priority task
2 Medium priority task
3 Low priority task`,
        takeaway:
          "The kitchen storyboard made priority-based task processing easier for me to visualize.",
      },
    ],
  },
  {
    id: "numpy",
    number: "06",
    title: "NumPy & Array Processing",
    pages: "20–22",
    summary:
      "NumPy basics, dimensions, shapes, array creation and reshaping.",
    lessons: [
      {
        title: "Creating NumPy Arrays",
        pages: "20",
        description:
          "We started NumPy by comparing arrays with Python lists and learning how to create arrays from lists and tuples.",
        points: [
          "NumPy supports multidimensional arrays.",
          "np.array() creates an ndarray.",
          "Array elements commonly share a single data type.",
          "NumPy supports efficient numerical operations.",
        ],
        codeLabel: "Combined notebook examples",
        code: `import numpy as np

a = np.array([1, 2, 3, 4, 5])
b = np.array((1, 2, 3, 4, 5))

print(a)
print(b)`,
        output: `[1 2 3 4 5]
[1 2 3 4 5]`,
        takeaway:
          "NumPy provides a different way to store and process numerical data.",
      },
      {
        title: "Dimensions, Shape and Size",
        pages: "20–21",
        description:
          "These attributes helped us understand how a multidimensional array is organized.",
        points: [
          "ndim tells the number of dimensions.",
          "shape gives the length of each axis.",
          "size gives the total number of elements.",
          "dtype gives the array element type.",
        ],
        codeLabel: "Reconstructed from array examples",
        code: `import numpy as np

arr = np.array([
    [1, 2, 3],
    [4, 5, 6]
])

print(arr.ndim)
print(arr.shape)
print(arr.size)`,
        output: `2
(2, 3)
6`,
        takeaway:
          "The shape describes the array layout, while size counts all elements.",
      },
      {
        title: "Array Creation and Reshaping",
        pages: "22",
        description:
          "The notebook covers zeros, ones, full, arange, linspace, reshape and flatten.",
        points: [
          "zeros() and ones() initialize arrays with fixed values.",
          "full() creates an array filled with a chosen value.",
          "arange() generates evenly spaced values by step.",
          "linspace() generates a chosen number of evenly spaced values.",
          "reshape() changes dimensions without changing the number of elements.",
        ],
        codeLabel: "Completed runnable examples",
        code: `import numpy as np

print(np.zeros((2, 2)))
print(np.ones((2, 2)))
print(np.full((2, 2), 6))

values = np.arange(6)
matrix = values.reshape(2, 3)

print(matrix)
print(matrix.flatten())`,
        output: `[[0. 0.]
 [0. 0.]]
[[1. 1.]
 [1. 1.]]
[[6 6]
 [6 6]]
[[0 1 2]
 [3 4 5]]
[0 1 2 3 4 5]`,
        takeaway:
          "Reshaping changes how the same elements are arranged into dimensions.",
      },
    ],
  },
  {
    id: "wrangling",
    number: "07",
    title: "Data Wrangling & Joins",
    pages: "23–24",
    summary:
      "Cleaning data, missing values, outliers, joins and Cartesian products.",
    lessons: [
      {
        title: "Data Wrangling",
        pages: "23",
        description:
          "My notes list common data preparation tasks such as cleaning, handling missing values and removing duplicates.",
        points: [
          "Inspect data before using it for analysis.",
          "Identify missing or inconsistent values.",
          "Check duplicates and possible outliers.",
          "Prepare a consistent structure for later processing.",
        ],
        codeLabel: "Supplementary example; no complete code in notebook",
        code: `import pandas as pd

df = pd.DataFrame({
    "name": ["A", "B", "B"],
    "score": [80, None, None]
})

df = df.drop_duplicates()
print(df.isna().sum())`,
        output: `name     0
score    1
dtype: int64`,
        takeaway:
          "Data preparation matters before analysis or machine learning.",
      },
      {
        title: "Inner Join and Left Join",
        pages: "23–24",
        description:
          "We drew join diagrams to understand how records from two tables can be connected using common columns.",
        points: [
          "An inner join keeps matching keys from both tables.",
          "A left join retains all left-table rows.",
          "Unmatched right-side values appear as missing.",
          "A Cartesian product combines every left row with every right row.",
        ],
        codeLabel: "Illustrative Pandas completion",
        code: `import pandas as pd

students = pd.DataFrame({
    "id": [1, 2, 3],
    "name": ["A", "B", "C"]
})

marks = pd.DataFrame({
    "id": [1, 3],
    "score": [80, 90]
})

print(pd.merge(students, marks, on="id", how="inner"))
print(pd.merge(students, marks, on="id", how="left"))`,
        output: `   id name  score
0   1    A     80
1   3    C     90

   id name  score
0   1    A   80.0
1   2    B    NaN
2   3    C   90.0`,
        takeaway:
          "The join diagrams made it easier to see which rows would remain in the result.",
      },
    ],
  },
  {
    id: "extras",
    number: "08",
    title: "Classroom Extras & Open Notes",
    pages: "1–24",
    summary:
      "Short reminders, partial snippets and topics to revisit.",
    lessons: [
      {
        title: "Exception Handling",
        pages: "2, 10–11",
        description:
          "My notebook mentions TypeError, IndexError, ValueError, ZeroDivisionError and finally. Some of these were recorded as quick reminders.",
        points: [
          "An exception interrupts ordinary program execution.",
          "try contains the code being attempted.",
          "except handles a matching exception.",
          "finally executes whether or not an exception was raised.",
        ],
        codeLabel: "Supplementary example; notebook code is incomplete",
        code: `try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("Finished checking")`,
        output: `Cannot divide by zero
Finished checking`,
        takeaway:
          "Exception handling makes errors easier to manage intentionally.",
      },
      {
        title: "Topics I Want to Revisit",
        pages: "4, 12–14, 19, 24",
        description:
          "A few notebook portions were written quickly or are too faint to reproduce as exact programs.",
        points: [
          "The complete lambda-based age validation program.",
          "Some itertools iterator examples and outputs.",
          "The original generator's numerical sequence.",
          "Shared memory and race-condition examples.",
          "The final SQL and data-wrangling notes.",
        ],
        codeLabel: null,
        code: null,
        output: null,
        takeaway:
          "I'll keep these as open notes instead of presenting guessed code as my original work.",
      },
    ],
  },
];

/* ============================================
   NOTEBOOK REVISION — GENERATORS
   Original notebook: Page 14
   ============================================ */

const generatorChapter = notesChapters.find(
  (chapter) => chapter.id === "iterators"
);

if (generatorChapter) {
  generatorChapter.lessons = generatorChapter.lessons.filter(
    (lesson) => lesson.title !== "Generators and yield"
  );

  generatorChapter.lessons.push(
    {
      title: "Generators and the yield Keyword",
      pages: "14",
      description:
        "In class, we learned that a generator uses yield instead of returning all values at once. The important point I wrote down was that the state of the function is maintained between yields.",
      points: [
        "A generator function contains the yield keyword.",
        "Calling the function creates a generator object.",
        "yield produces one value and pauses the function.",
        "The function resumes from where it stopped when the next value is requested.",
        "A generator can be used directly inside a for loop.",
      ],
      codeLabel:
        "Cleaned version of my handwritten my_generator(n) example — page 14",
      code: `def my_generator(n):
    value = 0

    while value < n:
        yield value
        value += 1

for value in my_generator(3):
    print(value)`,
      output: `0
1
2`,
      takeaway:
        "What I found interesting was that yield doesn't end the function permanently. It pauses and remembers where to continue.",
    },
    {
      title: "Fibonacci Numbers Using a Generator",
      pages: "14",
      description:
        "My notebook has a Fibonacci example using two variables, x and y. The sequence is generated by updating the values after each yield, instead of storing all the numbers in a list.",
      points: [
        "Start with x = 0 and y = 1.",
        "yield x produces the current Fibonacci number.",
        "x, y = y, x + y updates both variables together.",
        "Each iteration continues from the previously stored values.",
        "We can generate only as many Fibonacci numbers as needed.",
      ],
      codeLabel:
        "Completed from my handwritten Fibonacci generator — page 14",
      code: `def fibonacci_numbers(nums):
    x, y = 0, 1

    for i in range(nums):
        x, y = y, x + y
        yield x

for num in fibonacci_numbers(5):
    print(num)`,
      output: `1
1
2
3
5`,
      takeaway:
        "This example helped me see how a generator remembers previous values and produces a sequence step by step.",
    },
    {
      title: "Square Generator and Generator Chaining",
      pages: "14",
      description:
        "At the bottom of my notebook, we used a square generator along with the Fibonacci generator. This showed how the output of one generator can be passed directly to another function.",
      points: [
        "The square generator receives an iterable.",
        "It produces the square of each incoming number.",
        "The Fibonacci generator provides the numbers.",
        "The two generators can be used together.",
        "sum() consumes the generated values to calculate the total.",
      ],
      codeLabel:
        "Completed from my handwritten square(Fibonacci) example — page 14",
      code: `def fibonacci_numbers(nums):
    x, y = 0, 1

    for i in range(nums):
        x, y = y, x + y
        yield x

def square(nums):
    for num in nums:
        yield num ** 2

print(sum(fibonacci_numbers(5)))

print(sum(square(fibonacci_numbers(5))))`,
      output: `12
40`,
      takeaway:
        "I liked how one generator could provide values to another. We could square the Fibonacci numbers and find their sum without first creating a complete list.",
    }
  );
}

/* ============================================
   NOTEBOOK REVISION — CONCURRENCY
   Original notebook: Pages 6–8, 17–19
   ============================================ */

const concurrencyChapter = notesChapters.find(
  (chapter) => chapter.id === "concurrency"
);

if (concurrencyChapter) {
  concurrencyChapter.title =
    "Sequential, Multiprocessing & Multithreading";

  concurrencyChapter.summary =
    "Sequential execution, parallel processes, threads, futures, thread pools and priority queues.";

  concurrencyChapter.lessons = [
    {
      title: "Sequential vs Concurrent vs Parallel Execution",
      pages: "6–8, 17",
      description:
        "We first discussed the difference between completing tasks one after another and allowing multiple tasks to make progress during the same time period. We used functions with sleep() to understand the execution flow.",
      points: [
        "Sequential execution finishes one task before starting the next.",
        "Concurrent execution allows multiple tasks to make progress during overlapping periods.",
        "Parallel execution means tasks actually execute at the same time.",
        "Threads are useful for many I/O-bound tasks.",
        "Separate processes can execute CPU-bound Python code in parallel.",
      ],
      codeLabel:
        "Sequential version of the do_something() classroom example",
      code: `import time

start = time.perf_counter()

def do_something():
    print("Sleeping 1 second")
    time.sleep(1)
    print("Done sleeping")

do_something()
do_something()

finish = time.perf_counter()

print(f"Finished in {round(finish - start, 2)} seconds")`,
      output: `Sleeping 1 second
Done sleeping
Sleeping 1 second
Done sleeping
Finished in approximately 2 seconds`,
      takeaway:
        "Calling a function twice normally means the second call waits until the first one finishes.",
    },
    {
      title: "Multiprocessing with Process, start() and join()",
      pages: "6–8",
      description:
        "Next, we used multiprocessing.Process to run the same sleeping function in separate processes. My notes highlight start() for beginning execution and join() for waiting until completion.",
      points: [
        "multiprocessing.Process() creates a process object.",
        "target specifies the function to execute.",
        "start() launches the process.",
        "join() makes the main process wait for it to finish.",
        "time.perf_counter() can measure elapsed execution time.",
        "The __main__ guard is important when running multiprocessing programs on Windows.",
      ],
      codeLabel:
        "Completed classroom multiprocessing example — pages 6–8",
      code: `import multiprocessing
import time

def do_something():
    print("Sleeping 1 second")
    time.sleep(1)
    print("Done sleeping")

if __name__ == "__main__":
    start = time.perf_counter()

    p1 = multiprocessing.Process(
        target=do_something
    )
    p2 = multiprocessing.Process(
        target=do_something
    )

    p1.start()
    p2.start()

    p1.join()
    p2.join()

    finish = time.perf_counter()

    print(
        f"Finished in {round(finish - start, 2)} seconds"
    )`,
      output: `Sleeping 1 second
Sleeping 1 second
Done sleeping
Done sleeping
Finished in approximately 1 second
(actual time varies)`,
      takeaway:
        "The biggest difference was that we started both processes before calling join(). That allowed their sleep periods to overlap.",
    },
    {
      title: "Multiprocessing with a List of Processes",
      pages: "6–7",
      description:
        "My notebook also has a variation using a list and a for loop to create multiple processes instead of writing p1, p2, p3 separately.",
      points: [
        "A list can store process objects.",
        "Each process can be created inside a loop.",
        "Start all processes first to allow overlapping execution.",
        "Use a second loop to join all processes.",
      ],
      codeLabel:
        "Completed from the process-list example in my notes",
      code: `import multiprocessing
import time

def do_something():
    time.sleep(1)
    print("Done sleeping")

if __name__ == "__main__":
    processes = []

    for i in range(3):
        p = multiprocessing.Process(
            target=do_something
        )
        p.start()
        processes.append(p)

    for p in processes:
        p.join()

    print("All processes completed")`,
      output: `Done sleeping
Done sleeping
Done sleeping
All processes completed`,
      takeaway:
        "Using a loop makes it easier to create several processes and manage them together.",
    },
    {
      title: "Introduction to Multithreading",
      pages: "17",
      description:
        "After multiprocessing, we explored threading. My notes particularly mention I/O-bound tasks and how multiple threads can be useful when programs spend time waiting.",
      points: [
        "Threads execute within the same process.",
        "Threads share the memory of their process.",
        "A thread can perform work while another thread waits for I/O.",
        "Threading can improve responsiveness for suitable I/O-bound tasks.",
        "ThreadPoolExecutor helps manage a pool of worker threads.",
      ],
      codeLabel:
        "Runnable threading example based on the notebook discussion",
      code: `import threading
import time

def do_something(seconds):
    print(f"Sleeping {seconds} second(s)")
    time.sleep(seconds)
    print("Done sleeping")

start = time.perf_counter()

t1 = threading.Thread(
    target=do_something,
    args=(1,)
)

t2 = threading.Thread(
    target=do_something,
    args=(1,)
)

t1.start()
t2.start()

t1.join()
t2.join()

finish = time.perf_counter()

print(
    f"Finished in {round(finish - start, 2)} seconds"
)`,
      output: `Sleeping 1 second
Sleeping 1 second
Done sleeping
Done sleeping
Finished in approximately 1 second
(actual time and print order vary)`,
      takeaway:
        "The examples showed how separate threads can perform waiting tasks concurrently.",
    },
    {
      title: "ThreadPoolExecutor and submit()",
      pages: "17–18",
      description:
        "We then learned about concurrent.futures.ThreadPoolExecutor. In my notebook, the function is submitted to an executor and the returned Future object is stored in variables such as f1 and f2.",
      points: [
        "ThreadPoolExecutor manages worker threads.",
        "submit() schedules a function to run.",
        "submit() returns a Future object.",
        "A Future represents a result that may become available later.",
        "result() retrieves the result, waiting if necessary.",
        "Using with automatically shuts down the executor after its work is finished.",
      ],
      codeLabel:
        "Completed from the f1, f2 and submit() example — page 18",
      code: `import concurrent.futures
import time

def do_something(seconds):
    time.sleep(seconds)
    return f"Done sleeping {seconds} second(s)"

with concurrent.futures.ThreadPoolExecutor() as executor:

    f1 = executor.submit(do_something, 1.5)
    f2 = executor.submit(do_something, 1.5)

    print(f1.result())
    print(f2.result())`,
      output: `Done sleeping 1.5 second(s)
Done sleeping 1.5 second(s)`,
      takeaway:
        "I understood that submit() gives us a Future object, and result() is how we fetch the function's return value.",
    },
    {
      title: "Collecting Results with as_completed()",
      pages: "18",
      description:
        "My notes also use a list of submitted futures and concurrent.futures.as_completed(). This helps retrieve results as individual tasks finish.",
      points: [
        "Store the Future objects in a list.",
        "as_completed() yields futures after they finish.",
        "Results are retrieved in completion order.",
        "The finish order may differ from submission order.",
      ],
      codeLabel:
        "Completed from the as_completed() notebook example",
      code: `import concurrent.futures
import time

def do_something(seconds):
    time.sleep(seconds)
    return f"Completed after {seconds} second(s)"

with concurrent.futures.ThreadPoolExecutor() as executor:

    results = [
        executor.submit(do_something, seconds)
        for seconds in [3, 1, 2]
    ]

    for future in concurrent.futures.as_completed(results):
        print(future.result())`,
      output: `Typical output:
Completed after 1 second(s)
Completed after 2 second(s)
Completed after 3 second(s)

Completion order can vary.`,
      takeaway:
        "This was interesting because we didn't have to fetch every result in the same order the tasks were submitted.",
    },
    {
      title: "Using ThreadPoolExecutor.map()",
      pages: "18",
      description:
        "At the bottom of page 18, we noted executor.map() using a list of seconds. This is another way of submitting multiple inputs to the same function.",
      points: [
        "executor.map() applies a function to each input.",
        "It returns an iterator of results.",
        "The results are yielded in input order, even when tasks finish in another order.",
        "It is convenient when we want to call the same function with many values.",
      ],
      codeLabel:
        "Completed from the executor.map() example — page 18",
      code: `import concurrent.futures
import time

def do_something(seconds):
    time.sleep(seconds)
    return f"Done after {seconds} second(s)"

seconds = [5, 4, 3, 2, 1]

with concurrent.futures.ThreadPoolExecutor() as executor:

    results = executor.map(
        do_something,
        seconds
    )

    for result in results:
        print(result)`,
      output: `Done after 5 second(s)
Done after 4 second(s)
Done after 3 second(s)
Done after 2 second(s)
Done after 1 second(s)`,
      takeaway:
        "I learned that map() and as_completed() are different: map() gives results in input order, while as_completed() gives them in completion order.",
    },
    {
      title: "PriorityQueue, Locks and Race Conditions",
      pages: "19",
      description:
        "Our class notes end this topic with PriorityQueue, locks and race conditions. We also represented priority-based multithreading using the kitchen-themed storyboard.",
      points: [
        "PriorityQueue holds tasks along with priority values.",
        "Smaller numeric priorities are retrieved first by default.",
        "queue.PriorityQueue handles its queue operations safely across threads.",
        "A Lock can protect additional shared state.",
        "A race condition occurs when an outcome depends on the timing of concurrent operations.",
        "A priority queue doesn't assign operating-system priorities to threads.",
      ],
      codeLabel:
        "Corrected short PriorityQueue example",
      code: `from queue import PriorityQueue

task_queue = PriorityQueue()

task_queue.put((3, "Low priority"))
task_queue.put((1, "High priority"))
task_queue.put((2, "Medium priority"))

while not task_queue.empty():
    priority, task = task_queue.get()
    print(priority, task)
    task_queue.task_done()`,
      output: `1 High priority
2 Medium priority
3 Low priority`,
      takeaway:
        "The kitchen storyboard made the idea memorable: the main thread supplies tasks, worker threads handle them and the queue organizes their priority.",
    },
  ];
}
