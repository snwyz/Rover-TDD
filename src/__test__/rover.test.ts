import { Rover } from "../main"

describe('Rover', () => {
  it('should be able to init a new Mars rover', () => {
    const rover = new Rover(0, 0, 'N')
    expect(rover).toBeDefined()
  })
})


describe('Given a move command', () => {
  it.each([
    ['S', '1,0,S'],
    ['W', '0,1,W'],
    ['E', '2,1,E'],
    ['N', '1,2,N'],
  ])('When the rover is facing %s it should in that direction', (direction: string, expectedCoordinates: string) => {
    const rover = new Rover(1, 1, direction)
    rover.processCommand('M')
    expect(rover.getCoordinateAndDirection()).toBe(expectedCoordinates)
  })
})

describe('Given a turn right command', () => {
  it('When the rover is facing North should spin to face East', () => {
    const rover = new Rover(1, 1, 'N')
    rover.processCommand('R')
    expect(rover.getCoordinateAndDirection()).toBe('1,1,E')
  })
})

describe('Given a turn left command', () => {
  it('When the rover is facing North should spin to face East', () => {
    const rover = new Rover(1, 1, 'N')
    rover.processCommand('L')
    expect(rover.getCoordinateAndDirection()).toBe('1,1,W')
  })
})

describe('Given few commands', () => {
  it('Should process each of the command given', () => {
      const marsRover = new Rover(1, 2, 'N');
      marsRover.processCommands('LMLMLMLMM');
      expect(marsRover.getCoordinateAndDirection()).toBe('1,3,N');
  });
  it('Should process each of the command given', () => {
      const marsRover = new Rover(3, 3, 'E');
      marsRover.processCommands('MMRMMRMRRM');
      expect(marsRover.getCoordinateAndDirection()).toBe('5,1,E');
  });
});