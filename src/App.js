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
    margin: '5px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bullet: {
    width: '6px',
    height: '6px',
    borderRadius: '100%',
    margin: '4px'
  },
  bulletSmaller: {
    transform: 'scale(0.66)'
  },
  bulletSmallest: {
    transform: 'scale(0.33)'
  }
}


const Block = ({ color, name, glowColor }) => {

  const bulletStyles = mix(
    styles.bullet,
    glowColor && { boxShadow: `0 0 3px ${glowColor}` },
    { background: color }
  )

  return (
    <>
      <h1>{name}</h1>
      <div style={styles.container}>
        {
          Colors.map((hexValue) => (
            <div
              style={mix( styles.demo, { backgroundColor: hexValue } )}
              key={hexValue}
              className='block'
            >
              <div style={mix(bulletStyles, styles.bulletSmallest)} />
              <div style={mix(bulletStyles, styles.bulletSmaller)} />
              <div style={mix(bulletStyles)} />
              <div style={mix(bulletStyles, styles.bulletSmaller)} />
              <div style={mix(bulletStyles, styles.bulletSmallest)} />
            </div>
          ))
        }
      </div>
    </>
  )
}

const App = () => {
  return (
    <div style={styles.page}>
      <Block color='#fff' name='White' />
      <Block color='#000' name='Black' />
      <Block color='#777' name='Grey' />

      <Block color='#fff' name='White with #ddd glow' glowColor='#ddd' />
      <Block color='#fff' name='White with #ccc glow' glowColor='#ccc' />
      <Block color='#fff' name='White with #bbb glow' glowColor='#bbb' />
      <Block color='#fff' name='White with #aaa glow' glowColor='#aaa' />
      <Block color='#fff' name='White with #999 glow' glowColor='#999' />
      <Block color='#fff' name='White with #888 glow' glowColor='#888' />
      <Block color='#fff' name='White with #777 glow' glowColor='#777' />
      <Block color='#fff' name='White with #666 glow' glowColor='#666' />

      <Block color='#000' name='Black with #fff glow' glowColor='#fff' />
      <Block color='#000' name='Black with #eee glow' glowColor='#eee' />
      <Block color='#000' name='Black with #ddd glow' glowColor='#ddd' />
      <Block color='#000' name='Black with #ccc glow' glowColor='#ccc' />
      <Block color='#000' name='Black with #bbb glow' glowColor='#bbb' />
      <Block color='#000' name='Black with #aaa glow' glowColor='#aaa' />
      <Block color='#000' name='Black with #999 glow' glowColor='#999' />
      <Block color='#000' name='Black with #888 glow' glowColor='#888' />
      <Block color='#000' name='Black with #777 glow' glowColor='#777' />
      <Block color='#000' name='Black with #666 glow' glowColor='#666' />
    </div>
  )
}

export default App
