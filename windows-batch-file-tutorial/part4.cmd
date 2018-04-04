@ECHO OFF & REM turn off automatic printing to console.
SETLOCAL ENABLEEXTENSIONS & REM SET local scope--don't preserve overwritten global variables--and turn on processor extenions
REM the following are user defined "constants" but are mutable, increment by power of 2 for bitwise or multiple error numbers
SET /A ERROR_HELP_SCREEN=1
SET /A ERROR_FILE_NOT_FOUND=2
SET /A ERROR_FILE_READ_ONLY=4
SET /A ERROR_UNKNOWN=8

REM The three standard files/streams are referenced using 0 [stdin], 1 [stdout], 2 [stderr].
REM The ">" operator redirects stdout or stderr to another file by overwriting it.
DIR > part4-temp.txt & REM The "DIR" command is the same as the dir command in windows cmd.
REM The ">>" operator appends to the file.
DIR >> part4-temp.txt

REM The stderr requires a 2:
DIR SomeFile.txt 2>> part4-error.txt

REM The stdout and stderr streams can be combined:
DIR SomeFile.txt 2>&1
REM This enbables writing stdout and stderr to a single file:
DIR SomeFile.txt > part4-output.txt 2>&1

REM Use the "<" operator for input to a script/command/file/exe:
SORT < SomeFile.txt

REM The pseudofile "NUL" discards output:
PING 127.0.0.1 > NUL & REM this prevents output to command prompt

REM Output can be redirect as input using "|", which is called "piping":
DIR /B | SORT

REM You can quickly create a new text file, say maybe a batch script, from just the command line by redirecting the command prompt’s own stdin, called CON, to a text file. When you are done typing, hit CTRL+Z, which sends the end-of-file (EOF) character.
REM Type the following in cmd: TYPE CON > part4-output2.txt
REM Get contents of it by: TYPE part4-output2.txt