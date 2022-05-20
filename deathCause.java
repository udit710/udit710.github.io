// question for death and causes... QUESTION 2 MILLITARY
// There is nothing wrong with the code...
// The correct option is 4


import java.util.Scanner;

public class deathCause {
    public static void main(String[] args) {
        Scanner battleInfo = new Scanner(System.in);
        
        System.out.println("The total number of causes of deaths so far: ");
        int numCauses = battleInfo.nextInt();
        
        String[][] deathAndCause = new String[numCauses][2];
        System.out.println("Enter the cause and the number of deaths due to it: ");
        for (int i = 0; i < numCauses; ++i) {
            deathAndCause[i][0] = battleInfo.next();
            deathAndCause[i][1] = battleInfo.next();
        }
        
        for(int i = 0; i < numCauses; ++i) {
            for(int j = 0; j < deathAndCause[i][1].length(); ++j) {
                if (!Character.isDigit(deathAndCause[i][1].charAt(j))) {
                    System.out.println("The death count entered for " + deathAndCause[i][0] + " is invalid.");
                }
                else {
                    System.out.println("Number of deaths due to " + deathAndCause[i][0] + ": " + deathAndCause[i][1]);
                }
            }
        }
        
    }
}

/*
  Its time to find the cause of the deaths...

  What will be the number and cause for cause 3, if the input is: 4
                                                                  485 infection 567 bloodloss 395 unknown 194 instant
                                                
  1. 567 bloodloss
  2. The compiler shows an Error
  3. infection
  4. unknown
*/