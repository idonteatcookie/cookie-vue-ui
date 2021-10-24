module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['upd', 'chore', 'docs', 'feat', 'fix', 'test', 'refactor', 'revert', 'style', 'release']
    ]
  }
}
