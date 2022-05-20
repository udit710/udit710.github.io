// question about detecting mine... QUESTION 5 MILLITARY
// line 20 is missing a ( ...
// The correct option is 3


import java.util.Scanner;
import java.lang.Math;

public class mineDetection {
    public static void main(String[] args) {
        Scanner blockInfo = new Scanner(System.in);
        System.out.println("Enter the number of blocks in one line of the square battlefield(should be natural number): ");
        double numBlock = blockInfo.nextInt();
        double areaBattlefield = Math.pow(numBlock, 2);
        
        int blockI;
        int blockJ;
        for (blockI = 0; blockI < numBlock; ++blockI) {
            for (blockJ = 0; blockJ < numBlock; ++blockJ) {
                if ((blockI + 1) + (blockJ + 1)) % 2 == 0) {
                    System.out.println("The block (" + (blockI + 1) + ", " + (blockJ + 1) + ") has a mine under it.");
                }
                else {
                    System.out.println("The block (" + (blockI + 1) + ", " + (blockJ + 1) + ") is safe to step on it.");
                }
            }
        }
        
    }
}

/*
  The mole has been executed, now its time to carefully move in the battlefield without stepping on a mine...

  Which blocks will show to be having a mine under after the code is executed to run, if the input is: 6

  1. (2,5)
  2. (4,5)
  3. The compiler shows an Error
  4. (1,3)
*/
