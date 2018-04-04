@ECHO OFF & REM turn off automatic printing to console.
SETLOCAL ENABLEEXTENSIONS & REM SET local scope--don't preserve overwritten global variables--and turn on processor extenions
REM the following are user defined "constants" but are mutable, increment by power of 2 for bitwise or multiple error numbers
SET /A ERROR_HELP_SCREEN=1
SET /A ERROR_FILE_NOT_FOUND=2
SET /A ERROR_FILE_READ_ONLY=4
SET /A ERROR_UNKNOWN=8
REM End boiler code

REM Start main program - Log Function

@ECHO OFF
SETLOCAL ENABLEEXTENSIONS

:: script global variables
SET me=%~n0
SET log=%TEMP%\%me%.txt

:: The "main" logic of the script
IF EXIST "%log%" DELETE /Q %log% >NUL

:: do something cool, then log it
CALL :tee "%me%: Hello, world!"

:: force execution to quit at the end of the "main" logic
EXIT /B %ERRORLEVEL%

:: a function to write to a log file and write to stdout
:tee
ECHO %* >> "%log%"
ECHO %*
EXIT /B 0