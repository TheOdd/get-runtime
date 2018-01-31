#!/usr/bin/env node

const nrc = require('node-run-cmd')
const fs = require('fs')

const [,, ...args] = process.argv

async function measureTime(timesToRun = 1) {
    if (fs.existsSync(args[0])) {
        let runTimes = []
        for (let i = 0; i < timesToRun; i++) {
            const startTime = Date.now()
            await nrc.run(`node ${args[0]}`)
            const endTime = Date.now()
            runTimes.push(endTime - startTime)
        }
        runTimes.forEach((t, i) => {
            console.log(`Run #${i + 1}: ${t}ms`)
        })
        console.log(`Average run time: ${Math.round(runTimes.reduce((a, b) => a + b) / runTimes.length)}ms`)
    } else {
        console.log('Please input a valid file!')
    }
}

if (args.length !== 1 && args.length !== 2) {
    console.log('Please provide a valid input! (One JS file to run and measure)')
    console.log('Usage:\n\tget-runtime [inputFile] [optional number of times to run]')
    process.exit()
}

if (args.length === 2) {
    const parsedNumberOfTimes = parseInt(args[1])
    if (isNaN(parsedNumberOfTimes)) {
        console.log('Please provide a valid number of times to loop!')
        process.exit()
    }
    measureTime(Math.floor(parsedNumberOfTimes))
} else {
    measureTime()
}