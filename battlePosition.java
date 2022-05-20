// question about sorting ships... QUESTION 5 NAVY
// There is nothing wrong with the code...
// The correct option is 3


import java.util.Scanner;

public class battlePosition {
    public static void main(String[] args) {
        Scanner chiefCommand = new Scanner(System.in);
        
        System.out.println("Battle formations possible in the available time:");
        System.out.println("FULL FLEDGED-DEFENCE or FULL FLEDGED-OFFENCE\n");
        System.out.println("Choose a command(case-sensitive):");
        System.out.println("O - The Offence formation");
        System.out.println("D - The defence formation\n");
        char command = chiefCommand.next().charAt(0);
        
        System.out.println("Enter the number of lines: ");
        int numShips = chiefCommand.nextInt();

        System.out.println("Enter the number of ships in each line: ");
        int[] shipsPerLine = new int[numShips];
        for(int i = 0; i < numShips; ++i) {
            shipsPerLine[i] = chiefCommand.nextInt();
        }

        if (command == 'O') {
            int leastShipLineIndex;
            int temp;
            for (int i = 0; i < shipsPerLine.length - 1; ++i) {
                leastShipLineIndex = i;
                for (int j = i + 1; j < shipsPerLine.length; ++j) {
                    if (shipsPerLine[j] < shipsPerLine[leastShipLineIndex]) {
                        leastShipLineIndex = j;
                    }
                }
                temp = shipsPerLine[i];
                shipsPerLine[i] = shipsPerLine[leastShipLineIndex];
                shipsPerLine[leastShipLineIndex] = temp;
            }
            System.out.print("NAVAL BASE --> ");
            for (int i = 0; i < numShips; ++i) {
                System.out.print(shipsPerLine[i] + " ");
            }
            System.out.println("   <=== ENEMY SHIPS ARRVIVNG");
        }
        else if (command == 'D') {
            int mostShipLineIndex;
            int temp;
            for (int i = 0; i < shipsPerLine.length; ++i) {
                mostShipLineIndex = i;
                for (int j = i + 1; j < shipsPerLine.length; ++j) {
                    if (shipsPerLine[j] > shipsPerLine[mostShipLineIndex]) {
                        mostShipLineIndex = j;
                    }
                }
                temp = shipsPerLine[i];
                shipsPerLine[i] = shipsPerLine[mostShipLineIndex];
                shipsPerLine[mostShipLineIndex] = temp;
            }
            System.out.print("NAVAL BASE --> ");
            for (int i = 0; i < numShips; ++i) {
                System.out.print(shipsPerLine[i] + " ");
            }
            System.out.println("   <=== ENEMY SHIPS ARRVIVNG");
        }
        else {
            System.out.println("YOU FAILED - Could not setup a formation before enemy attack.");
        }
        
    }
}

/*
  The squadrons have been formed , time to assemble the ships in a formation...

  What will be the final formation if the input is: O
                                                    5
                                                    4 5 9 2 6

  1. The compiler shows an Error
  2. 3 5 9 2 6 <== ENEMY SHIPS ARRIVING
  3. 2 4 5 6 9 <== ENEMY SHIPS ARRIVING
  4. 9 6 5 4 2 <== ENEMY SHIPS ARRIVING
*/