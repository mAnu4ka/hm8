let main = document.querySelector('.shuse')
let todo = [
  {
    'buy': 'Buy milk',
    'time': '18:44'
  },
  {
    'buy': 'Buy milk',
    'time': '18:44'
  },
  {
    'buy': 'Buy milk',
    'time': '18:44'
  },
  {
    'buy': 'Buy milk',
    'time': '18:44'
  }

]

const createElement = () => {
  let greed = document.createElement('div')

  greed.classList.add('greed')

  main.append(greed)
  for (const item of todo) {
    let mainbl = document.createElement('div')
    let exit = document.createElement('div')
    let job = document.createElement('p')
    let times = document.createElement('h6')

    job.innerText = item.buy
    times.innerText = item.time
    mainbl.classList.add('main')
    exit.classList.add('exit')

    greed.append(mainbl)
    mainbl.append(exit, job, times)
  }
}
createElement()