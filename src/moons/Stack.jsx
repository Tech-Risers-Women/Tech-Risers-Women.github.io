import { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World, Runner } from 'matter-js'

function Stack (props) {
  const scene = useRef()
  const rect = useRef(
    Bodies.rectangle(50, 20, 50, 20, {
        
      mass: 10,
      restitution: 0.9,
      friction: 0.005,
      render: {
        fillStyle: '#0000ff'
      }        
  })

  )
  const engine = useRef(Engine.create({
    gravity: {
      y: 1
    }
  }))

  useEffect(() => {
    const cw = 300;
    const ch = 300;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
      rect

    ])


    Runner.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  })



  return (
    <div
    >
      <div ref={scene} style={{ width: '400px', height: '400px' }} />
    </div>
  )
}

export default Stack