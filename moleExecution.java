// question about bringing forth the mole... QUESTION 4 MILLITARY
// line 23 is missing the ;
// The correct option is 1


import java.util.Scanner;

public class moleExecution {
    public static void main(String[] args) {
        Scanner soldierVal = new Scanner(System.in);
        
        System.out.println("Enter the number of soldier checked: ");
        int numSoldier = soldierVal.nextInt();
        
        int[] soldierAns = new int[numSoldier];
        System.out.println("Enter the one-digit value by each soldier: ");
        for (int i = 0; i < numSoldier; ++i) {
            int temp = soldierVal.nextInt();
            if (temp < 7) {
                soldierAns[i] = temp;
            }
            else{
                soldierAns[i] = -1
            }
        
            
        }
        System.out.print("BEFORE... The assembled soliders: The Executioner => ");
        for (int i = 0; i < numSoldier; ++i) {
            System.out.print(soldierAns[i] + " ");
        }
        
        System.out.println("\n" + "Bring forth the mole");
        int tempAns = 0;
        for (int i = 0; i < numSoldier; ++i) {
            if (soldierAns[i] == -1) {
                tempAns = soldierAns[0];
                soldierAns[0] = -1;
                soldierAns[i] = tempAns;
            }
        }
        
        System.out.print("AFTER... The assembled soldiers: The executioner => ");
        for (int i = 0; i < numSoldier; ++i) {
            System.out.print(soldierAns[i] + " ");
        }
    }
}

/*
  The mole has been identified , time to bring him forth and execute him...

  How many poisitions did the mole move by, if the input is: 4
                                                             6 7 8 5

  1. The compiler shows an Error
  2. 1
  3. 2
  4. 3
*/
