import { closestCorners, getFirstCollision, KeyboardCode } from '@dnd-kit/core'

const directions = [KeyboardCode.Down, KeyboardCode.Right, KeyboardCode.Up, KeyboardCode.Left]

/**
 * Sensor personalizado para le manejo
 * del drag and drop a través del teclado.
 */
export const coordinateGetter = (event, { context: { active, droppableRects, droppableContainers, collisionRect } }) => {
  if (directions.includes(event.code)) {
    event.preventDefault()

    const PADDING = 20

    if (!active || !collisionRect) return

    const filteredContainers = []

    droppableContainers.getEnabled().forEach((entry) => {
      if (!entry || entry?.disabled) return

      const rect = droppableRects.get(entry.id)

      if (!rect) {
        return
      }

      switch (event.code) {
        case KeyboardCode.Down:
          if (collisionRect.top < rect.top) {
            filteredContainers.push(entry)
          }
          break
        case KeyboardCode.Up:
          if (collisionRect.top > rect.top + PADDING) {
            filteredContainers.push(entry)
          }
          break
        case KeyboardCode.Left:
          if (collisionRect.left >= rect.left + rect.width) {
            filteredContainers.push(entry)
          }
          break
        case KeyboardCode.Right:
          if (collisionRect.left + collisionRect.width <= rect.left) {
            filteredContainers.push(entry)
          }
          break
      }
    })

    const collisions = closestCorners({
      active,
      collisionRect,
      droppableRects,
      droppableContainers: filteredContainers,
      pointerCoordinates: null
    })

    const closestId = getFirstCollision(collisions, 'id')

    if (closestId != null) {
      const newDroppable = droppableContainers.get(closestId)
      const newNode = newDroppable?.node.current
      const newRect = newDroppable?.rect.current

      if (newNode && newRect) {
        if (newDroppable.data.current?.type === 'container') {
          return {
            x: newRect.left,
            y: newRect.top + PADDING
          }
        }

        return {
          x: newRect.left,
          y: newRect.top
        }
      }
    }
  }

  return undefined
}
