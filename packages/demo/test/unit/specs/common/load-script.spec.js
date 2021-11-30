import loadScript from 'common/js/utils/load-script'

describe('utils/load-script', () => {

  it('load single file', async () => {
    const url = 'https://cdn.bootcdn.net/ajax/libs/vue/3.0.2/vue.global.js'

    const vue = await loadScript(url)
    
    expect(typeof vue === 'object').to.be.true
  })

  it('load multiple files', async () => {
    const urls = [
      'https://cdn.bootcdn.net/ajax/libs/vue/3.0.2/vue.global.js',
      'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js',
    ]

    const results = await loadScript(urls)
    
    expect(typeof results[0] === 'object').to.be.true
    expect(typeof results[1] === 'object').to.be.true
  })

  it('param format error', () => {
    return loadScript(
      { src: 'xxx.js' }
    ).catch(err => {
      expect(err).to.be.equal('js path format error')
    })
  })
})