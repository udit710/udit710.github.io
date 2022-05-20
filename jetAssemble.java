// question about list of speed of jets... QUESTION 3 AIR FORCE
// There is nothing wrong with the code...
// The correct option is 4



import java.util.Scanner;
import java.util.ArrayList;

public class jetAssemble {
    public static void main(String[] args) {
        Scanner command = new Scanner(System.in);
        ArrayList<Integer> jetSpeed = new ArrayList<Integer>();
        
        System.out.println("Enter number of jets you have: ");
        int numJets = command.nextInt();
        System.out.println("Enter the speed of the jets: ");
        for(int i = 0; i < numJets; ++i) {
            jetSpeed.add(command.nextInt());
        }
        System.out.println("Enter 'a' if you want to continue adding,'c' if you want to check speed of that jet from the list, 'q' if you want to stop: ");
        char order = command.next().charAt(0);
       while (order != 'q') {
           if (order == 'a') {
                System.out.println("Enter the speed of the next Jet: ");
                int newSpeed = command.nextInt();
                jetSpeed.add(newSpeed);
                System.out.println("Enter the next order: ");
                order = command.next().charAt(0);
            }
            if (order == 'c') {
                System.out.println("Enter which jet number speed do you wish to check: ");
                int concernedJet = command.nextInt();
                System.out.println("The speed of the jet is: " + jetSpeed.get(concernedJet + 1));
                System.out.println("Enter the next order: ");
                order = command.next().charAt(0);
            }
            if (order == 'q') {
                break;
            }
       }
        System.out.println("The total number of jets are: " + jetSpeed.size());
    }
}


/*
  The speed conversion has been done , its time to assemble your jets...
  
  What is the speed of the jet with index 2 if the input is: 3
                                                             334 356 395
                                                             a
                                                             386
                                                             c 2
                                                             q
  
  1. The compiler shows an Error
  2. 356
  3. 334
  4. 395
*/
