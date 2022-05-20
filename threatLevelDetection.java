// question about threat level of the approaching enemy... QUESTION 2 NAVY
// There is nothing wrong with the code...
// The correct option is 4


import java.util.Scanner;

public class threatLevelDetection {
    public static void main(String[] args) {
        Scanner enemyInfo = new Scanner(System.in);
        
        System.out.println("Enter the number of enemy troops approaching(should be less than 100) : ");
        int numEnemyTroops = enemyInfo.nextInt();
        
        int threatMultiplier;
        System.out.println("Its just ships: ");
        boolean justShips = enemyInfo.nextBoolean();
        if (numEnemyTroops < 100) {
            if (justShips != true) {
                System.out.println("Enter the threat level: ");
                threatMultiplier = enemyInfo.nextInt();
                numEnemyTroops = numEnemyTroops * threatMultiplier;
            }
            
            if (numEnemyTroops > 0 && numEnemyTroops < 250) {
                System.out.println("The enemy threat level is Alpha (nothing to be worried about)");
            }
            else if (numEnemyTroops >= 250 && numEnemyTroops < 500) {
                System.out.println("The enemy threat level is Bravo (a little effort is necessary)");
            }
            else if (numEnemyTroops >= 500 && numEnemyTroops < 750) {
                System.out.println("The enemy threat level is Charlie (time to get serious)");
            }
            else if (numEnemyTroops >= 750) {
                System.out.println("The enemy threat level is Delta (pray to god)");
            }
        }
        else {
            System.out.println("The enemy is overpowered...");
        }
        
    }
}

/*
  Its time to understand the threat level of the enemy attack..

  What threat level be if the input is: 88
                                        false
                                        6
  
  1. Alpha
  2. The compiler shows an Error
  3. Delta
  4. Charlie
*/
