import React from 'react'
import Colors from './colors'

const mix = (base, ...extra) => Object.assign({}, base, ...extra)

const styles = {
  page: {
    padding: '50px'
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  demo: {
    width: '100px',
    height: '50px',
    margin: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bullet: {
    width: '8px',
    height: '8px',
    borderRadius: '100%',
    backgroundColor: 'white',
    margin: '4px'
  },
  bulletSmaller: {
    transform: 'scale(0.66)'
  },
  bulletSmallest: {
    transform: 'scale(0.33)'
  }
}

const Bullets = ({ color }) => {
  console.log('color', color)
return (
  <>
    <div style={mix(styles.bullet, { backgroundColor: color }, styles.bulletSmallest)} />
    <div style={mix(styles.bullet, { backgroundColor: color }, styles.bulletSmaller)} />
    <div style={mix(styles.bullet, { backgroundColor: color })} />
    <div style={mix(styles.bullet, { backgroundColor: color }, styles.bulletSmaller)} />
    <div style={mix(styles.bullet, { backgroundColor: color }, styles.bulletSmallest)} />
  </>
)
}


const App = () => {
  return (
    <div style={styles.page}>
      <h1>White dots</h1>
      <div style={styles.container}>
        {
          Colors.map((hexValue) => (
            <div
              style={mix(styles.demo, { backgroundColor: hexValue })}
              key={hexValue}
            >
              <Bullets color='#fff' />
            </div>
          ))
        }
      </div>

      <h1>Black dots</h1>
      <div style={styles.container}>
        {
          Colors.map((hexValue) => (
            <div
              style={mix(styles.demo, { backgroundColor: hexValue })}
              key={hexValue}
            >
              <Bullets color='#000' />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App
