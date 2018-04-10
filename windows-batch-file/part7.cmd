@ECHO OFF & REM turn off automatic printing to console.
SETLOCAL ENABLEEXTENSIONS & REM SET local scope--don't preserve overwritten global variables--and turn on processor extenions
REM the following are user defined "constants" but are mutable, increment by power of 2 for bitwise or multiple error numbers
SET /A ERROR_HELP_SCREEN=1
SET /A ERROR_FILE_NOT_FOUND=2
SET /A ERROR_FILE_READ_ONLY=4
SET /A ERROR_UNKNOWN=8
REM End boiler code

REM Start main program - Functions

REM script global variables
SET me=%~n0
SET parent=%~dp0
ECHO parent = %parent%
SET log=%parent%%me%.log

ECHO log = %log%

REM The "main" logic of the script:
IF EXIST "%log%" DEL /Q %log% >NUL

REM Do something cool, then log it:
CALL :tee "%me%: Hello, world!"

ECHO Code continues!

REM Force execution to quit at the end of the "main" logic
EXIT /B %ERRORLEVEL%

REM A function to write to a log file and write to stdout
:tee
SET teeArg=%*
ECHO teeArg = %teeArg%
ECHO %* >> "%log%"
ECHO %*
EXIT /B 0 & REM return code is conventionally used as an error code, could try piping to output file to be used as input to simulate returning a value