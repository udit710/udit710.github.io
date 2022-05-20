// question about identifying mole... QUESTION 3 MILLITARY
// line 21 must be declared as an int not a String...
// The correct option is 3


import java.util.Scanner;
import java.util.Random;

public class moleIndentification {
    
   public static int soldierAnswer(Random answer) {
        int r = answer.nextInt(10);
        return r;
    }
   
   public static void main(String[] args) {
      Scanner soldierInfo = new Scanner(System.in);
      Random answer = new Random();
      
      System.out.println("Enter the number of soldiers: ");
      String numSoldiers = soldierInfo.nextInt();

        for (int i = 0; i < numSoldiers; i++) {
            int ans = (soldierAnswer(answer));
            System.out.println("Soldier " + (i + 1) + "'s answer is " + ans);
            if (ans > 7) {
                System.out.println("Soldier " + (i + 1) + " is the MOLE...");
                break;
            }
            else {
                continue;
            }
        }
        
      
   }
}

/*
  There is possibility of a mole in the cadet, time to find out...
  
  Which index soldier is a mole if the input is: 5
  And the numbers generater are: 4 5 0 9 7

  1. 4
  2. 3
  3. The compiler shows an Error
  4. 5
*/