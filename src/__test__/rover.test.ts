import { Rover } from "../main"

describe('Rover Class', () => {
  it('should rover defined when new class given init a new Mars rover', () => {
    const rover = new Rover(0, 0, 'N')
    expect(rover).toBeDefined()
  })
})

describe('turn left command', () => {
  it('should face East when the rover is facing North given a turn left command', () => {
    const rover = new Rover(1, 1, 'N')
    rover.processCommand('L')
    expect(rover.getCoordinateAndDirection()).toBe('1, 1, W')
  })
})

describe('turn right command', () => {
  it('should face East when the rover is facing North given a right command', () => {
    const rover = new Rover(1, 1, 'N')
    rover.processCommand('R')
    expect(rover.getCoordinateAndDirection()).toBe('1, 1, E')
  })
})

describe('moveForward command', () => {
  it.each([
    ['S', '1, 0, S'],
    ['W', '0, 1, W'],
    ['E', '2, 1, E'],
    ['N', '1, 2, N'],
  ])('should move that direction when the rover is facing %s it given a move forward command ', (direction: string, expectedCoordinates: string) => {
    const rover = new Rover(1, 1, direction)
    rover.processCommand('M')
    expect(rover.getCoordinateAndDirection()).toBe(expectedCoordinates)
  })
})



describe('Given few commands', () => {
  it('should move to the coordinates are (1, 3, N) when the rover get command given LMLMLMLMM command and the init coordinates are (1, 2, N)', () => {
      const marsRover = new Rover(1, 2, 'N');
      marsRover.processCommands('LMLMLMLMM');
      expect(marsRover.getCoordinateAndDirection()).toBe('1,3,N');
  });
  it('should move to the coordinates are (5, 1, E) when the rover get command given MMRMMRMRRM command and the init coordinates are (3, 3, E)', () => {
      const marsRover = new Rover(3, 3, 'E');
      marsRover.processCommands('MMRMMRMRRM');
      expect(marsRover.getCoordinateAndDirection()).toBe('5,1,E');
  });
});
