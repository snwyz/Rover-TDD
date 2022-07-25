import { Command } from "./command";
import { Rover } from ".";

export class TurnLeft implements Command {
    private marsRover: Rover;

    constructor(marsRover: Rover) {
        this.marsRover = marsRover;
    }

    execute(): void {
        const direction = this.marsRover.getDirection();
        switch (direction) {
            case 'N':
                this.marsRover.setDirection('W');
                break;
            case 'W':
                this.marsRover.setDirection('S');
                break;
            case 'S':
                this.marsRover.setDirection('E');
                break;
            case 'E':
                this.marsRover.setDirection('N');
                break;
            default:
                break;
        }
    }
}