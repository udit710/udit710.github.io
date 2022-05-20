// question about max/min number of rounds fired... QUESTION 5 AIR FORCE
// There is nothing wrong with the code...
// The correct option is 2



import java.util.Scanner;

public class roundsShot {
    public static void main(String[] args) {
        Scanner roundsInfo = new Scanner(System.in);
        
        System.out.println("Enter the number of jets being considered: ");
        int numJets = roundsInfo.nextInt();
        
        int[] roundsPerJet = new int[numJets];
        System.out.println("Enter the number of rounds fired by each jet per minute: ");
        for (int i = 0; i < numJets; ++i) {
            roundsPerJet[i] = roundsInfo.nextInt();
        }
        
        System.out.println("MENU(Enter the respective keys for the respective information): \n H - Jet that fires maximum rounds per minute. \n L - Jet that fires least rounds per minute. ");
        char command = roundsInfo.next().charAt(0);
        while (true) {
            if (command == 'H' || command == 'h') {
                int maxRounds = 0;
                int jetNumber = 0;
                for (int i = 0; i < numJets; ++i) {
                    if (roundsPerJet[i] > maxRounds) {
                        maxRounds = roundsPerJet[i];
                        jetNumber = i;
                    }
                }
                System.out.println("The jet number " + (jetNumber + 1) + " fires " + maxRounds + " per minutes which is the maximum among all.");
                break;
            }
            else if (command == 'L' || command == 'l') {
                int minRounds = 0;
                int jetNumber = 0;
                for (int i = 0; i < numJets; ++i) {
                    if (roundsPerJet[i] < minRounds) {
                        minRounds = roundsPerJet[i];
                        jetNumber = i;
                    }
                }
                System.out.println("The jet number " + (jetNumber + 1) + " fires " + minRounds + " per minutes which is the minimum among all.");
                break;
            }
            else {
                System.out.println("The give command is invalid , please try again: ");
                command = roundsInfo.next().charAt(0);
            }
        }
    }
}


/*
  The dodge test has been done, now its time to find out your best and and your worst jet...

  How many rounds does the jet with index 4 fire per minute, if the input is: 4
                                                                              223 295 334 333
                                                                              l

  1. 334
  2. The compiler shows an Error
  3. 223
  4. 333
*/
