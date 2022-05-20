// question about ranking of sailors... QUESTION 1 NAVY
// line 46 should have a default instead of case...
// The correct option is 2


import java.util.Scanner;

public class rankingOfficers {
    public static void main (String[] args) {
        Scanner sailorInfo = new Scanner(System.in);
        
        System.out.println("Enter the first name of the sailor: ");
        String sailorFirstName = sailorInfo.nextLine();
        sailorFirstName = sailorFirstName.toUpperCase();
        System.out.println("Enter the last name of the sailor: ");
        String sailorLastName = sailorInfo.nextLine();
        sailorLastName = sailorLastName.toUpperCase();
        String sailorFullName = sailorFirstName + " " + sailorLastName;
        System.out.println("\n Sailor's full name: " + sailorFullName);
        
        System.out.println("Enter the rank of the sailor: ");
        String rank = sailorInfo.nextLine();
        
        switch (rank) {
            case "seamen": 
                System.out.println("SMN " + sailorFullName);
                break;
            case "able seamen": 
                System.out.println("AB " + sailorFullName);
                break;
            case "leading seamen": 
                System.out.println("LS " + sailorFullName);
                break;
            case "petty officer": 
                System.out.println("PO " + sailorFullName);
                break;
            case "chief petty officer": 
                System.out.println("CPO " + sailorFullName);
                break;
            case "warrant officer": 
                System.out.println("WO " + sailorFullName);
                break;
            case "warrant officer of the navy": 
                System.out.println("WO-N " + sailorFullName);
                break;
            default: 
                System.out.println("No Such Rank Exists");
                break;
        }
        
    }
}

/*
  Its time to provide the rank to the sailors...

  What will be the output if the input is: john 
                                           tucker
                                           leading seamen

  1. LS John tucker
  2. The compiler shows an Error
  3. LS JOHN TUCKER
  4. Ls JOHN TUCKER
*/
