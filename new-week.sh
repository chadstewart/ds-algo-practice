#!/bin/bash
# Script to create a new folder called 'week of ${inputted date}' and create subfolders and a file

#Make base folder structure
mkdir -p current-work/week-of-$1/{ds-and-algo-practice,mock-interviews,technical-questions}

#Copy initial.js into work folder
cp misc/base-files/initial.js current-work/week-of-$1/ds-and-algo-practice/initial.js

#Make mock interview folder structure
mkdir -p current-work/week-of-$1/mock-interviews/{interview-notes,question-attempts}
#Copy filler file to mock interview subfolders
cp misc/base-files/filler.txt current-work/week-of-$1/mock-interviews/interview-notes/filler.txt
cp misc/base-files/filler.txt current-work/week-of-$1/mock-interviews/question-attempts/filler.txt

#Copy filler file to technical-questions folder
cp misc/base-files/filler.txt current-work/week-of-$1/technical-questions/filler.txt