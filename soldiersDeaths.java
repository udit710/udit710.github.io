// question about number of deaths... QUESTION 1 MILLITARY
// There is nothing wrong with the code...
// The correct option is 1


import java.util.Scanner;

public class soldiersDeaths {
    public static void main(String[] args) {
        Scanner soldierInfo = new Scanner(System.in);
        
        System.out.println("Enter the number of enemy attack waves: ");
        int numWaves = soldierInfo.nextInt();
        
        int[] soldiersPerWave = new int[numWaves];
        System.out.println("Enter the number of soldiers dead per wave: ");
        for (int i = 0; i < numWaves; ++i) {
            soldiersPerWave[i] = soldierInfo.nextInt();
        }
        
        int numDeaths = 0;
        for (int i = 0; i < numWaves; ++i) {
            numDeaths += soldiersPerWave[i];
        }
        
        System.out.println("The total number of dead soldiers: " + numDeaths);
    }
}

/*
  Large number of soldiers have died, time to find out the total by checking death per enemy attack wave...

  What is the number of deaths in the wave with index 3, if the input is: 6
                                                                          2345 4956 4231 5697 4321 4596

  1. 5697
  2. 4231
  3. The compiler shows an Error
  4. 4321
*/