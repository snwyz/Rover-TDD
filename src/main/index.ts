import { Command } from "./command";
import { TurnLeft } from "./turnLeft";
import { TurnRight } from "./turnRight";

export class Rover {
    private x: number;
    private y: number;
    private direction: string;

    constructor(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    getDirection() {
        return this.direction;
    }

    setDirection(direction: string) {
        this.direction = direction;
    }

    moveForward() {
        switch (this.direction) {
            case 'W':
                this.x--;
                break
            case 'E':
                this.x++;
                break
            case 'N':
                this.y++;
                break
            case 'S':
                this.y--;
        }
    }


    processCommands(command: string) {
        if (!command) return null
        command.split('').map(item => this.processCommand(item))
    }

    processCommand(command: string) {
        let move: Command;
        if (command === 'M') {
            this.moveForward();
            return
        } else if (command === 'R') {
            move = new TurnRight(this);
        } else {
            move = new TurnLeft(this);
        }
        move.execute();

    }

    getCoordinateAndDirection(): string {
        return `${this.x},${this.y},${this.direction}`;
    }
}

