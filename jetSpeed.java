// question about enemy jet speed identification... QUESTION 2 AIR FORCE
// line 13 is missing a return statement...
// The correct option is 3



import java.util.Scanner;

public class jetSpeed {
    
    public static double KmToM(double speedInKmph) {
        double speedInMph = speedInKmph * 0.62;
    }
    
    public static void main(String[] args) {
        Scanner enemyJetInfo = new Scanner(System.in);
        System.out.println("Enter speed in Km/Hr: ");
        double speedInKmph = enemyJetInfo.nextDouble();
        double speedInMph = KmToM(speedInKmph);
        
        System.out.println("Speed in Miles/Hr: " + speedInMph);
    }
}



/*
  Its time to check the speed of your jets in your national metric units...
  
  What will be the output if the input is: 1.0
  
  1. 1.0
  2. 0.62
  3. The compiler shows an Error
  4. 62.0
*/