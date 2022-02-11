#!/usr/bin/env node
const semver = require('semver')
const minimist = require('minimist')
const requiredVersion = require('../package.json').engines.node
const Service = require('../lib/index')
const { error } = require('../lib/utils')

validateNodeVersion()
start()

function start() {
  const args = getArgsFromCommondLine()
  const mode = args._[0]
  const service = new Service()
  service.start(mode, args)
}

function validateNodeVersion() {
  if (!semver.satisfies(process.version, requiredVersion)) {
    error(
      `You are using Node ${process.version}, but epay-sparta-service ` +
      `requires Node ${requiredVersion}.\nPlease upgrade your Node version.`
    )
    process.exit(1)
  }
}

function getArgsFromCommondLine() {
  const rawArgv = process.argv.slice(2)
  const args = minimist(rawArgv, {
    boolean: [
      'analyze',
      'online',
    ]
  })

  applyProcessEnv(args._.slice(1))
  if (args._[0] === 'lint' && process.env['LINT_STAGED'] === 'ON') {
    applyProcessLintFiles(args._.slice(1))
  }

  return args
}

/**
 * Sometimes user need set process.env to command cli:
 * `npm run prod AMAZING=WOO` and use AMAZING in user's code
 * e.g.
 * if (process.env.AMAZING === 'WOO') {}
 * @param {array} processEnvSegments
 */
function applyProcessEnv(processEnvSegments) {
  processEnvSegments.forEach(segment => {
    if (validateEnvSegmentFormat(segment)) {
      const kv = segment.split('=')
      const key = kv[0]
      const value = kv[1]
      process.env[key] = value
    }
  })
}

function applyProcessLintFiles(processLintFilesSegments) {
  const files = []

  processLintFilesSegments.forEach(segment => {
    if (validateLintFilesSegmentFormat(segment)) {
      files.push(segment)
    }
  })
  
  process.env['lintFiles'] = JSON.stringify(files) // process.env will transform files to string automatically, so we need stringify
}

function validateEnvSegmentFormat(segment) {
  return /.+=.+/.test(segment)
}

function validateLintFilesSegmentFormat(segment) {
  return /\/.+\/.+/.test(segment)
}