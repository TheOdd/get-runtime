# get-runtime
----
`get-runtime` is a simple command line tool that measures the runtime of a Node program. It can also optionally get the average runtime from a specified number of runs.

## Usage

    get-runtime [input file] [optional number of times to run (defaults to 1)]

## Examples

    $ get-runtime main.js
      Run #1: 1237ms
      Average run time: 1237ms

 ---
 
    $ get-runtime main.js 4
      Run #1: 1218ms
      Run #2: 1197ms
      Run #3: 1301ms
      Run #4: 1250ms
      Average run time: 1242ms


## Installation

    npm install --global get-runtime

or

    yarn global add get-runtime