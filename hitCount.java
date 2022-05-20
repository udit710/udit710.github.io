// question about counting how many times hit... QUESTION 4 AIR FORCE
// There is nothing wrong with this code...
// The correct option is 2



import java.util.Scanner;

public class hitCount {
    public static void main(String[] args) {
        
        Scanner hitInfo = new Scanner(System.in);
        
        System.out.println("Enter number of times hits are checked: ");
        int numChecks = hitInfo.nextInt();
        int[] checks = new int[numChecks];
        
        System.out.println("Enter " + numChecks + " values, 1 if hit, and 0 if not: ");
        for (int i = 0; i < numChecks; ++i) {
            checks[i] = hitInfo.nextInt();
        }
        
        int numHits = 0;
        int numMiss = 0;
        for (int i = 0; i < numChecks; ++i) {
            if (checks[i] == 1) {
                numHits += 1;
            }
            else if (checks[i] == 0) {
                numMiss += 1;
            }
            else {
                System.out.println("The input value at check number " + (i + 1) + " is invalid.");
            }
        }
        
        System.out.println("The number of times the fighter jet is hit is: " + numHits);
        System.out.println("The number of times the fighter jet dodged is: " + numMiss);
        
    }
}


/*
  The jets have been assembled, its time to see how good your jets are at dodging...

  How many times has the jet dodged if the input is: 10
                                                     0 1 2 1 0 1 4 0 -1 1

  1. 5
  2. 3
  3. 4
  4. The compiler shows an Error
*/
