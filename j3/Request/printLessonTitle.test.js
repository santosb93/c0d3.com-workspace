
jest.mock('request')
const request = require('request')
const lessons = require('./printLessonTitles')

describe('lessons', () => {
  test(`console log should not be called if lessons `, () => {
    request.mockClear()
    lessons.printLessons()
    expect(request.mock.calls.length).toEqual(1)
    const firstCall = request.mock.calls[0]
    expect(firstCall[0]).toEqual('https://c0d3.com/api/lessons')
  })

  test('console.log should be called once if length of lessons array is 1', () => {
    request.mockClear()
    lessons.printLessons()
    console.log = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify([
        {
          title: 'testing'
        }
      ])
    )
    expect(request.mock.calls.length).toEqual(1)
    expect(console.log.mock.calls[0][0]).toEqual('testing')
  })

  test('console.log should return 3 times if lessons array has 3 elements', () => {
    request.mockClear()
    lessons.printLessons()

    console.log = jest.fn()
    request.mock.calls[0][1](
      {},
      {},
      JSON.stringify([
        {
          title: 'Testing1'
        },
        {
          title: 'Testing2'
        },
        {
          title: 'Testing3'
        }
      ])
    )
    expect(console.log.mock.calls.length).toEqual(3)
    expect(console.log.mock.calls[0][0]).toEqual('Testing1')
    expect(console.log.mock.calls[1][0]).toEqual('Testing2')
    expect(console.log.mock.calls[2][0]).toEqual('Testing3')
  })
})