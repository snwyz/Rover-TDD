import { Command } from "./command";
import { Rover } from ".";

export class TurnRight implements Command {
    private marsRover : Rover;

    constructor(marsRover:Rover){
        this.marsRover = marsRover;
    }

    execute(): void {
        const direction = this.marsRover.getDirection();
        switch (direction) {
            case 'N':
                this.marsRover.setDirection('E');
                break;
            case 'W':
                this.marsRover.setDirection('N');
                break;
            case 'S':
                this.marsRover.setDirection('W');
                break;
            case 'E':
                this.marsRover.setDirection('S');
                break;
            default:
                break;
        }
    }
}