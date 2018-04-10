@ECHO OFF & REM turn off automatic printing to console.
SETLOCAL ENABLEEXTENSIONS & REM SET local scope--don't preserve overwritten global variables--and turn on processor extenions
REM the following are user defined "constants" but are mutable, increment by power of 2 for bitwise or multiple error numbers
SET /A ERROR_HELP_SCREEN=1
SET /A ERROR_FILE_NOT_FOUND=2
SET /A ERROR_FILE_READ_ONLY=4
SET /A ERROR_UNKNOWN=8
REM End boiler code

REM Start main program - Looping

REM Oldschool style to loop: commented out because of endless loop
REM :args
REM SET arg=%~1
REM ECHO %arg%
REM SHIFT
REM GOTO :args

REM Looping through files:
SET thisParentDirectory=%~dp0
FOR %%I IN (%thisParentDirectory%\*) DO @ECHO %%I

REM Looping through directories:
FOR /D %%I IN ("C:\"\*) DO @ECHO %%I

REM Recursively loop through files in all folders and subfolders:
FOR /R "C:\" %%I IN (*) DO @ECHO %%I

REM Recursively loop through all subfolders
FOR /R "C:\" /D %%I IN (*) DO @ECHO %%I