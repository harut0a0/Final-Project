class Gishatic extends LivingCreature  {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 6;

    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(ch) {
        this.getNewCoordinates();
        return super.chooseCell(ch);
     }
     
    move() {
        if (this.acted == false) {
            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];

                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy--;
                if (this.energy <= 0) {
                    this.die();

                }

            }
            this.acted = true;
        }



    }
    eat() {
        if (this.acted == false) {

            var newCell = random(this.chooseCell(2));
            console.log(newCell)
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x];
                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;
                this.energy++;
                if (this.energy >= 1) {
                    this.mul();
                    this.energy = 6;
                }
                this.acted = true;

            }
            else {
                this.move();
            }
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = new Gishatic(newX, newY, 3)

        }
    }
    die() {
        matrix[this.y][this.x] = 0;
    }

}

