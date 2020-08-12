#!/bin/bash
# Script to create a new folder called 'week of ${inputted date}' and create subfolders and a file

#Default Value
WEEK=${1:-"test"}

#Make base folder structure
mkdir -p current-work/week-of-$WEEK/{ds-and-algo-practice,mock-interviews,technical-questions}

#Copy initial.js into work folder
cp misc/base-files/initial.js current-work/week-of-$WEEK/ds-and-algo-practice/initial.js

#Make mock interview folder structure
mkdir -p current-work/week-of-$WEEK/mock-interviews/{interview-notes,question-attempts}
#Copy filler file to mock interview subfolders
cp misc/base-files/filler.txt current-work/week-of-$WEEK/mock-interviews/interview-notes/filler.txt
cp misc/base-files/filler.txt current-work/week-of-$WEEK/mock-interviews/question-attempts/filler.txt

#Make technical questions folder structure
mkdir -p current-work/week-of-$WEEK/technical-questions/{leetcode,codewars}
#Copy filler file to technical-questions folder
cp misc/base-files/filler.txt current-work/week-of-$WEEK/technical-questions/leetcode/filler.txt
cp misc/base-files/filler.txt current-work/week-of-$WEEK/technical-questions/codewars/filler.txt