---
layout: post
title:  "The one with Cucumber DataTables"
date:   2016-10-03 10:09:45 +0300
author: "Oleksandr Romanov"
summary: "In the following post I will explain what are the possible representations of DataTables in Cucumber"
description: "In the following post I will explain what are the possible representations of DataTables in Cucumber"
tags: [scala, cucumber, bdd]
categories: [automation]
lang: ua
---

_In the following post I will explain what are the possible representations of DataTables in Cucumber_  

Intellij IDEA 2016.2 CE is used as IDE

**Target audience:** QA Automation engineers / developers

DISCLAIMER: It is assumed that reader has some experience with [Cucumber][cucumber-site] test tool.

### The problem

As test scenarios in Gherkin become bigger and bigger, it is reasonable to use tables in order to represent complex test data.

### How Cucumber handles tables?

Tables in Cucumber feature files are represented by using the pipeline "|" sign.
You can for any type for tables: with multiple rows and multiple columns.  
Here is the example scenario with different forms of table:

``` gherkin
  @wip
  Scenario: Should manipulate with table parameters
      Then I have the table with two rows and multiple columns
      | column1| column2| column3| column4|
      | value1 |value2  |value3  |value4  |
      |value5  |value6  |value7  |value8  |
    And I have the table with only two rows and tow columns
      | column1| column2|
      | value1 |value2  |
      And I have the table with multiple rows and one column
      |columnName|
      |row1      |
      |row2      |
      |row3      |
```

### What about tables in steps?
When Cucumber tool is parsing the feature file, it converts all tables in special data type - [DataTable][cucumber datatable]. As it can be seen below - input parameter for the step definitions is DataTable.  

```scala
  Then("""^I have the table with multiple rows and one column$"""){ (table:DataTable) =>
    val asMaps = table.asMaps(classOf[String], classOf[String])
    val asLists = table.asLists(classOf[String])
    val asList = table.asList(classOf[String])
  }

  Then("""^I have the table with two rows and multiple columns$"""){ (table:DataTable) =>
    val asMaps = table.asMaps(classOf[String], classOf[String])
    val asLists = table.asLists(classOf[String])
    val asList = table.asList(classOf[String])
  }

  Then("""^I have the table with only two rows and tow columns$"""){ (table:DataTable) =>
    val asMap = table.asMap(classOf[String], classOf[String])
    val asMapTransposed = table.transpose().asMap(classOf[String], classOf[String])
  }
```

### How to use custom properties?
Take a closer look at possible ways to convert DataTable into more useful data types: Lists or Maps.  

 - **asMaps()** converts table into list of maps, where columns (from the first row) are mapped to values in each row  


For example the following table:

``` gherkin
| column1| column2| column3| column4|
| value1 |value2  |value3  |value4  |
|value5  |value6  |value7  |value8  |
```

will be converted to:

``` scala
[{column1=value1, column2=value2, column3=value3, column4=value4}, {column1=value5, column2=value6, column3=value7, column4=value8}]
```

or another example table:

``` gherkin
      |columnName|
      |row1      |
      |row2      |
      |row3      |
```

can be represented as:  

``` scala
[{columnName=row1}, {columnName=row2}, {columnName=row3}]
```   
  
 - **asLists()** converts table to a simple list of lists (rows with values)  

For example: 

``` gherkin
| column1| column2| column3| column4|
| value1 |value2  |value3  |value4  |
|value5  |value6  |value7  |value8  |
```

it will be converted to:

``` scala
[[column1, column2, column3, column4], [value1, value2, value3, value4], [value5, value6, value7, value8]]
```

or in other sample:

``` gherkin
      |columnName|
      |row1      |
      |row2      |
      |row3      |
```

the result will be:  

``` scala
[[columnName], [row1], [row2], [row3]]
```

 - **asList()** converts all table elements into a list  

Consider the following table: 

``` gherkin
| column1| column2| column3| column4|
| value1 |value2  |value3  |value4  |
|value5  |value6  |value7  |value8  |
```

and result will be:  

``` scala
[column1, column2, column3, column4, value1, value2, value3, value4, value5, value6, value7, value8]
```

or another sample:  

``` gherkin
      |columnName|
      |row1      |
      |row2      |
      |row3      |
```

will be converted to:

``` scala
[columnName, row1, row2, row3]
```

The **asMap()** works only two column tables and converts data table to map.   

E.g.: 

``` gherkin
      | column1| column2|
      | value1 |value2  |
```

it will be converted to:

``` gherkin
{column1=column2, value1=value2}
```

But if in our example column should be mapped to value - table can be modified using transpose() method.  

``` scala
  Then("""^I have the table with only two rows and tow columns$"""){ (table:DataTable) =>
    val asMapTransposed = table.transpose().asMap(classOf[String], classOf[String])
  }
```

As a result: 

``` scala
{column1=value1, column2=value2}
```

### Conclusion
As it can be seen - tables in cucumber can be represented in the various ways. It's up to the user of the Cucumber to choose which way is best. From my practice I can recommend to use tables as maps - as it more flexible solution.  

[cucumber-site]: https://cucumber.io/
[cucumber datatable]: https://cucumber.github.io/api/cucumber/jvm/javadoc/cucumber/api/DataTable.html
