// question about boosting moral of sailors... QUESTION 3 NAVY
// line 24 is having x instead of *
// The correct option is 2


import java.util.Scanner;

public class moralBoost {
    public static void main(String[] args) {
        Scanner moralDetector = new Scanner(System.in);
        
        System.out.println("Enter the number of soldiers: ");
        int numSailors = moralDetector.nextInt();
        
        int[] moralList = new int[numSailors];
        
        System.out.println("Enter the moral of the soldiers: ");
        for (int i = 0; i < numSailors; ++i) {
            moralList[i] = moralDetector.nextInt();
        }
        
        int boostFactor = moralDetector.nextInt();
        for (int i = 0; i < numSailors; ++i) {
            moralList[i] = moralList[i] x boostFactor;
        }
        
        for (int i = 0; i < numSailors; ++i) {
            System.out.println(moralList[i]);
        }
        
    }
}

/*
  Its time to boost the moral of the sailors before attack...

  What will be the output if the the input is: 4
                                               3 6 9 4

  1. 6 12 18 8
  2. The compiler shows an Error
  3. 9 36 81 16
  4. 3 6 9 4
*/
