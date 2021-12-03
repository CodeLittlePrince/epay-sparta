module.exports = {
  share: [],

  api: [
    // 主页-hello 用到了运行时控制success和error
    {
      url: '/api/home/hello',
      desc: 'Hello Kitty',
      selections: [
        {
          name: '成功',
          value: `[
            result [@success],
            @good
          ]`
        },
        {
          name: '失败',
          value: `[
            result [@error],
            @bad
          ]`
        }
      ]
    }
  ]
}