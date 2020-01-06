import React, { useState } from 'react'
import Colors from './colors'

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
  },
  header: {
    display: 'block',
    position: 'sticky',
    top: 0,
    backgroundColor: '#000',
    padding: '30px',
    color: '#fff',
    fontSize: 14,
    zIndex: 1
  },
  label: {
    paddingRight: 20
  },
  input: {
    display: 'inline-block',
    marginLeft: 10,
    fontSize: 14,
    width: 70
  }
}

const mix = (base, ...extra) => Object.assign({}, base, ...extra)

const Block = ({ dotColor, glowColor, glowBlur, glowSpread }) => {
  const blur = glowBlur && `${glowBlur}px`
  const spread = glowSpread && `${glowSpread}px`

  const bulletStyles = mix(
    styles.bullet,
    glowColor && { boxShadow: `0 0 ${blur} ${spread} ${glowColor}` },
    { background: dotColor }
  )

  return (
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
  )
}

const App = () => {
  const [dotColor, setDotColor] = useState('#000')
  const [glowColor, setGlowColor] = useState('#000')
  const [glowBlur, setGlowBlur] = useState('3')
  const [glowSpread, setGlowSpread] = useState('0')

  const handleDotColorChange = (event) => setDotColor(event.target.value)
  const handleGlowColourChange = (event) => setGlowColor(event.target.value)
  const handleGlowBlurChange = (event) => setGlowBlur(event.target.value)
  const handleGlowSpreadChange = (event) => setGlowSpread(event.target.value)

  return (
    <>
      <header style={styles.header}>
        <label style={styles.label}>
          Dot colour: <input type='text' style={styles.input} value={dotColor} onChange={handleDotColorChange} maxLength={7} />
        </label>
        <label style={styles.label}>
          Glow colour: <input type='text' style={styles.input} value={glowColor} onChange={handleGlowColourChange} maxLength={7} />
        </label>
        <label style={styles.label}>
          Glow blur (px): <input type='text' style={styles.input} value={glowBlur} onChange={handleGlowBlurChange} maxLength={7} />
        </label>
        <label style={styles.label}>
          Glow spread (px): <input type='text' style={styles.input} value={glowSpread} onChange={handleGlowSpreadChange} maxLength={7} />
        </label>
      </header>

      <div style={styles.page}>
        <Block dotColor={dotColor} glowColor={glowColor} glowBlur={glowBlur} glowSpread={glowSpread} />

        {/*
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
        */}
      </div>
    </>
  )
}

export default App
