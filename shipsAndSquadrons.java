// question about ships and squadrons formed... QUESTION 4 NAVY
// line 32 is having == instead of =
// The correct option is 2


import java.util.Scanner;

public class shipsAndSquadrons {
    public static void main(String[] args) {
        Scanner sailorsInput = new Scanner(System.in);
        
        System.out.println("Enter the number of sailors: ");
        int numSailors = sailorsInput.nextInt();
        int sailorsPerShip = 350;
        System.out.println("Enter the number of ships: ");
        int numShips = sailorsInput.nextInt();
        int shipsPerSquadron = 10;
        int numEmptyShips = 0;
        int numSailorsAtPort = 0;
        
        int numShipsCompletelyFilled = numSailors / sailorsPerShip;
        int numSailorsRemaining = numSailors % sailorsPerShip;
        
        if (numShips > numShipsCompletelyFilled) {
            numEmptyShips = numShips - (numShipsCompletelyFilled + 1);
        }
        else if (numShips < numShipsCompletelyFilled) {
            numShipsCompletelyFilled = numShips;
            numSailorsAtPort = numSailors - (numShips * sailorsPerShip);
        }
        
        int numSquadrons == numShipsCompletelyFilled / shipsPerSquadron;
        int numIndependentShips = numShipsCompletelyFilled % shipsPerSquadron;
        
        System.out.println("Numebr of ships completely filled: " + numShipsCompletelyFilled);
        System.out.println("Number of empty ships: " + numEmptyShips);
        System.out.println("Number of sailors at port: " + numSailorsAtPort);
        System.out.println("Number of squadrons formed: " + numSquadrons);
        System.out.println("Number of ships which are not a part of a squadron: " + numIndependentShips);
        
    }
}

/*
  The moral has been boosted and the sailors are ready for battle, fill up the squadrons now...

  What will be the number of sqaudrons formed if the input is: 35674
                                                               88

  1. 8
  2. The compiler shows an Error
  3. 10
  4. 9
*/

