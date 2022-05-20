// question interprting the signal.... use 'random' function between 0 - 9 and each number has a message... QUESTION 1 AIR FORCE
// line 13 is wrong because it should be .nextInt()
// The correct option is 4


import java.util.Scanner;

public class codeInterpretation {
    public static void main(String[] args) {
        Scanner codeInfo = new Scanner(System.in);
        
        System.out.println("The pilot is sending you a one digit code... What is it: ");
        int code = codeInfo.next();
        
        switch (code) {
            case 0: System.out.println("The enemy is approaching.");
            break;
            case 1: System.out.println("We need back up.");
            break;
            case 2: System.out.println("Mayday Mayday Mayday, jet going down.");
            break;
            case 3: System.out.println("I'm losing altitude.");
            break;
            case 4: System.out.println("Huge wave coming up ahead.");
            break;
            case 5: System.out.println("I see the enemy.");
            break;
            case 6: System.out.println("I've taken a lot of damage.");
            break;
            case 7: System.out.println("Initialising phase 1 of operation.");
            break;
            case 8: System.out.println("We are going to win this General.");
            break;
            case 9: System.out.println("I'm waiting for your orders  .");
            break;
            default: System.out.println("The code being interpreted is wrong...");
            break;
        }
    }
}


 /*
    The war has started, your pilot is sending you a code interpret the signal..
   
    What will be the output if the input is: -1
   
    1. "The enemy is approaching"
    2. "We need back up"
    3. "The code being interpreted is wrong"
    4. The compiler shows an Error
*/
