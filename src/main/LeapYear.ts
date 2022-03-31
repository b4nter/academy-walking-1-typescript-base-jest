export class LeapYear {
    isLeapYear(a: number) {
        if(a % 4 == 0) {
            if(a % 100 == 0){
                if(a % 400 == 0){
                  return true;
                }
                return false;
            }
            return true;
        }        
        return false;
    }
}
